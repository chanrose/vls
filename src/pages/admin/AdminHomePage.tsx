import React, { useContext, useEffect, useState } from "react";
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
import "../styles/components.css";
import AdminGuestSeg from "../../components/admin/AdminGuestSeg";
import AdminHomeSeg from "../../components/admin/AdminHomeSeg";
import { UserContext } from "../../auth";

const AdminHomePage: React.FC = () => {
  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(false);
  const { organization, name } = useContext(UserContext);
  /* 
  const [orgDetail, setOrg] = useState<orgList>(); */
  const [selectedSeg, setSeg] = useState("home");

  const returnSegment = (selectedSegment: string) => {
    if (selectedSegment === "guest") {
      setGuest(true);
      setHome(false);
      setSeg("guest");
    } else if (selectedSegment === "home") {
      setGuest(false);
      setHome(true);
      setSeg("home");
    }
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonSegment
            value={selectedSeg}
            onIonChange={(e) => returnSegment(e.detail.value!)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Guest's Post</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        {selectedGuest && <AdminGuestSeg />}
        {selectedHome && <AdminHomeSeg name={`${name}`} />}
      </IonContent>
    </IonPage>
  );
};

export default AdminHomePage;
