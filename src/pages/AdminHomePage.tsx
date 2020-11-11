import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { add, bicycle, car, easel, logoFacebook, ticket } from "ionicons/icons";
import AnnouncementCard from "../components/AnnouncementCard";
import AdminGuestSeg from "../components/AdminGuestSeg";


const AdminHomePage: React.FC = () => {

  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(false);
  const [selectedTools, setTools] = useState(false);
  const [segmentSelection, setSegment] = useState("home");

  const returnSegment = (selectedSegment : string) => {
    if (selectedSegment == "guest") {
      setGuest(true);
      setHome(false);
      setTools(false);
    } else if (selectedSegment == "tools") {
      setGuest(false);
      setHome(false);
      setTools(true);
    } else if (selectedSegment == "home") {
      setGuest(false);
      setHome(true);
      setTools(false);
    }

  }
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment onIonChange={(e) => returnSegment(e.detail.value!)}>
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Guest's Post</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="tools">
              <IonLabel>Admin tools</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonText>{segmentSelection}</IonText>
        {selectedGuest &&
          <AdminGuestSeg />
        }
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={bicycle} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={car} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={ticket} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={easel} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default AdminHomePage;
