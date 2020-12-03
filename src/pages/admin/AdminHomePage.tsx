import React, { useState } from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { add, bicycle, car, easel, ticket } from "ionicons/icons";
import AdminGuestSeg from "../../components/admin/AdminGuestSeg";
import AdminHomeSeg from "../../components/admin/AdminHomeSeg";
import { useAuth } from "../../auth";

const AdminHomePage: React.FC = () => {
  const { userId } = useAuth();
  console.log("User logged: ", userId);
  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(false);
  const [selectedTools, setTools] = useState(false);

  const returnSegment = (selectedSegment: string) => {
    if (selectedSegment === "guest") {
      setGuest(true);
      setHome(false);
      setTools(false);
    } else if (selectedSegment === "tools") {
      setGuest(false);
      setHome(false);
      setTools(true);
    } else if (selectedSegment === "home") {
      setGuest(false);
      setHome(true);
      setTools(false);
    }
  };

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
        {selectedGuest && <AdminGuestSeg />}
        {selectedHome && <AdminHomeSeg />}
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
