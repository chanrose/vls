import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonButton,
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
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import entries from "../data";
import { funnel, funnelOutline } from "ionicons/icons";
import { useAuth } from "../auth";
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";

const AdminViewPage: React.FC = () => {
  const { userId } = useAuth();
  console.log("View Page, logged by: ", userId);
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("entries");
    entriesRef.get().then(({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId]);
  console.log("entry: ", entries);

  const [searchText, setSearchText] = useState("");
  const [btnFilter, setFilter] = useState(false);
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
          <IonFabButton onClick={() => setFilter(true)}>
            <IonIcon icon={funnelOutline} />
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={btnFilter}
          onDidDismiss={() => setFilter(false)}
          buttons={[
            {
              text: "Owner Name",
              handler: () => {
                console.log("Owner Name clicked");
              },
            },
            { text: "Vehicle Name" },
            { text: "Tax Expired" },
          ]}
        />
        <IonList>
          {entries.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}
            >
              {entry.vehicleType} {entry.vehiclePlate}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminViewPage;
