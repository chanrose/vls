import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import entries from "../data";

const AdminViewPage: React.FC = () => {
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
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList>
          {entries.map((entry) =>
            <IonItem button key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}>{entry.brand + ' ' + entry.model} {entry.currentOwner} 
              </IonItem>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminViewPage;
