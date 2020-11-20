import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import entries from "../data";
import { add, funnel, funnelOutline } from "ionicons/icons";
import { useAuth } from "../auth";
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import dayjs from "dayjs";
import AdminAddVehSeg from "../components/AdminAddVehSeg";

const formatDate = (inputDate: string, type: string) => {
  if (inputDate == "") return "Nan";
  else {
    const dayjs = require("dayjs");
    const date = dayjs(inputDate);
    const now = dayjs();
    date.toISOString();
    if (type == "format") {
      return (
        date.format("MMM DD, YYYY") + " | " + date.diff(now, "days") + " left"
      );
    }
  }
};

const AdminViewPage: React.FC = () => {
  const { userId } = useAuth();
  console.log("View Page, logged by: ", userId);
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("entries");
    entriesRef
      .orderBy("taxExpire", "asc")
      .get()
      .then(({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId]);
  console.log("entry: ", entries);
  const [searchText, setSearchText] = useState("");
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
            onIonChange={(e) => setSearchText(e.detail.value!)}
          />
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
          {entries.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}
            >
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
