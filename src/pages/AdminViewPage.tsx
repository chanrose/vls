 import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonAvatar,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import {
  add,
  caretUpCircle,
  chevronDown,
  filter,
  search,
} from "ionicons/icons";
import { useAuth } from "../auth";
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import EntriesPage from "./EntriesPage";

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

const SORT_OPTIONS = {
  TAX_ASC: { column: "taxExpire", direction: "asc" },
  TAX_DESC: { column: "taxExpire", direction: "desc" },
};
const vehicleDiff = (inputData: string) => {
  const bikePic = "/assets/media/bikeLogo.png";
  const carPic = "/assets/media/carLogo.png";
  if (inputData === "Car") return carPic;
  if (inputData === "Motorbike") return bikePic;
};

function useEntry(sortBy = "TAX_ASC") {
  const asc = SORT_OPTIONS["TAX_ASC"].direction;
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const entriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("entries")
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
  }, [sortBy]);

  return entries;
}

const AdminViewPage: React.FC = () => {
  const { userId } = useAuth();
  const entriesRef = firestore
    .collection("users")
    .doc(userId)
    .collection("entries");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [queryName, setQuery] = useState("Car");
  const [searchText, setSearch] = useState("");
  const [filterSearch, setFSearch] = useState<Entry[]>([]);
  console.log("Search Text:", searchText);
  const viewEntry = async () => {
    await entriesRef

      /*  .orderBy(`${orderBy}`, "asc") */
      /* .where("vehicleType", "==", queryName) */
      /*       .orderBy(
        SORT_OPTIONS["TAX_ASC"].column,
        SORT_OPTIONS["TAX_ASC"].direction
      ) */
      .get()
      .then(({ docs }) => setEntries(docs.map(toEntry)));
  };
  useEffect(() => {
    viewEntry();
  }, [userId]);

  useEffect(() => {
    setFSearch(
      entries.filter((entry) => {
        return (
          entry.vehicleBrand.toLowerCase().includes(searchText.toLowerCase()) ||
          entry.vehicleModel.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
    console.log("Filter: ", filterSearch);
  }, [searchText, entries]);

  /*   const filterBrand = entries.filter((entry) => {
    return entry.vehicleBrand.toLowerCase().includes(searchText.toLowerCase());
  }); */
  console.log("Filter: ", filterSearch);
  console.log("entry: ", entries);
  const [btnFilter, setFilter] = useState(false);
  const [filterName, setListFilter] = useState("Tax Expire");
  const [vehicleType, setVFilter] = useState(false);
  const [typeName, setVType] = useState("Motorbike");
  const [selectedTax, setTax] = useState(true);
  const [selectedOwn, setOwn] = useState(false);
  const [selectedInsure, setInsure] = useState(false);
  const [showAddModal, setAddModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Vehicle</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Ticket</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            onIonChange={(e) => setSearch(e.detail.value!)}
          ></IonSearchbar>
          <IonButton slot="end">
            <IonIcon icon={filter} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            routerLink={"/admin/addnew/"}
            onClick={() => setAddModal(true)}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={vehicleType}
          onDidDismiss={() => setVFilter(false)}
          buttons={[
            {
              text: "Motorbike",
              handler: () => {
                setVType("Motorbike");
              },
            },
            {
              text: "Car",
              handler: () => {
                setVType("Car");
              },
            },
            {
              text: "Others",
              handler: () => {
                setVType("other");
              },
            },
          ]}
        />

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
          <IonListHeader>
            <IonLabel>
              <IonButton onClick={() => setVFilter(true)}>
                <IonText>{typeName} </IonText>
              </IonButton>
            </IonLabel>
            <IonButton onClick={() => setFilter(true)}>
              <IonText>{filterName} </IonText>
            </IonButton>
          </IonListHeader>
          {filterSearch.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}
            >
              <IonAvatar>
                <IonImg src={vehicleDiff(entry.vehicleType)} />
              </IonAvatar>
              <IonText>
                {entry.vehicleBrand} {entry.vehicleModel}
              </IonText>
              <IonText slot="end">
                {selectedTax && formatDate(entry.taxExpire, "format")}
                {selectedOwn && entry.vehicleOwner}
                {selectedInsure && formatDate(entry.insuranceExpire, "format")}
              </IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminViewPage;
