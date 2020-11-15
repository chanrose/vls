import React from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import AnnouncementCard from "../../components/AnnouncementCard";

const GuestHomePage: React.FC = () => {
   
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonSegment onIonChange={(e: { detail: { value: any; }; }) => console.log(e.detail.value!)}>
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="info">
              <IonLabel>Cost</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <AnnouncementCard name={"Hi"}/>
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
