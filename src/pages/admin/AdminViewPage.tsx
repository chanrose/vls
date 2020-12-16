import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonAvatar,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonProgressBar,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/components.css";
import { add, bicycle, car, image } from "ionicons/icons";
import { useAuth } from "../../auth";
import { firestore } from "../../firebase";
import { Entry, toEntry } from "../../model";

const formatDate = (inputDate: string, type: string) => {
  if (inputDate === "") return "Nan";
  else {
    const dayjs = require("dayjs");
    const date = dayjs(inputDate);
    const now = dayjs();
    date.toISOString();

    if (type === "format") {
      return (
        date.format("MMM DD, YYYY") + " | " + date.diff(now, "days") + " left"
      );
    }
  }
};

const vehicleDiff = (inputData: string) => {
  const bikePic = "/assets/media/bikeLogo.png";
  const carPic = "/assets/media/carLogo.png";
  if (inputData === "Car") return carPic;
  if (inputData === "Motorbike") return bikePic;
  if (inputData === "") return image;
};

const AdminViewPage: React.FC = () => {
  const { userId } = useAuth();
  const entriesRef = firestore
    .collection("users")
    .doc(userId)
    .collection("entries");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [searchText, setSearch] = useState("");
  const [filterSearch, setFSearch] = useState<Entry[]>([]);
  const [showNoData, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  const viewEntry = () => {
    entriesRef.onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
    entriesRef.onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  };

  const [btnFilter, setFilter] = useState(false);
  const [filterName, setListFilter] = useState("Tax Expire");
  const [selectedTax, setTax] = useState(true);
  const [selectedOwn, setOwn] = useState(false);
  const [selectedInsure, setInsure] = useState(false);
  const [showAddModal, setAddModal] = useState(false);

  useEffect(() => {
    viewEntry();
  }, []);

  useEffect(() => {
    setFSearch(
      entries.filter((entry) => {
        return (
          entry.vehicleBrand.toLowerCase().includes(searchText.toLowerCase()) ||
          entry.vehicleModel.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }, [searchText, entries]);
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center"> Vehicle's List</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonSearchbar
          className={"searchBarCustom"}
          cancelButtonIcon="true"
          autocomplete="on"
          value={searchText}
          onIonChange={(e) => setSearch(e.detail.value!)}
        ></IonSearchbar>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton
              routerLink={"/admin/addnew/Car"}
              onClick={() => setAddModal(true)}
            >
              <IonIcon icon={car} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton
              routerLink={"/admin/addnew/Motorbike"}
              onClick={() => setAddModal(true)}
            >
              <IonIcon icon={bicycle} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonActionSheet
          isOpen={btnFilter}
          onDidDismiss={() => setFilter(false)}
          buttons={[
            {
              text: "Owner Name",
              handler: () => {
                setListFilter("Owner Name");
                setTax(false);
                setInsure(false);
                setOwn(true);
              },
            },
            {
              text: "Insurance Expire",
              handler: () => {
                setListFilter("Insurance Expire");
                setTax(false);
                setInsure(true);
                setOwn(false);
              },
            },
            {
              text: "Tax Expire",
              handler: () => {
                setListFilter("Tax Expire");
                setTax(true);
                setInsure(false);
                setOwn(false);
              },
            },
          ]}
        />

        <IonList>
          <IonItem>
            <IonButton fill="clear">
              <IonText>Vehicle </IonText>
            </IonButton>

            <IonButton fill="clear" slot="end" onClick={() => setFilter(true)}>
              <IonText>{filterName} </IonText>
            </IonButton>
          </IonItem>
          {isLoading && (
            <IonProgressBar
              color="primary"
              type="indeterminate"
            ></IonProgressBar>
          )}
          {showNoData && (
            <div className="ion-text-center centerImg">
              <img src="/assets/media/noData.svg" height="200 px" />
              <p>You have not added any vehicle yet</p>
            </div>
          )}
          {filterSearch.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}
            >
              <IonAvatar>
                <IonImg src={vehicleDiff(entry.vehicleType)} />
              </IonAvatar>
              <div>
                <div>
                  <IonText>
                    {entry.vehicleBrand} {entry.vehicleModel}
                  </IonText>
                </div>
                <div>
                  <IonText slot="end">
                    {selectedTax && formatDate(entry.taxExpire, "format")}
                    {selectedOwn && entry.vehicleOwner}
                    {selectedInsure &&
                      formatDate(entry.insuranceExpire, "format")}
                  </IonText>
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminViewPage;
