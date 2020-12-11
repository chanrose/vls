import React, { useEffect, useState } from "react";
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
import { add, bicycle, car, easel, ticket } from "ionicons/icons";
import AdminGuestSeg from "../../components/admin/AdminGuestSeg";
import AdminHomeSeg from "../../components/admin/AdminHomeSeg";
import { useAuth } from "../../auth";
import { firestore } from "../../firebase";
import { orgList, toEntry } from "../../model";

const AdminHomePage: React.FC = () => {
  const { userId } = useAuth();
  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(false);
  const [orgDetail, setOrg] = useState<orgList>();
  const [selectedSeg, setSeg] = useState("home");

  useEffect(() => {
    firestore
      .collection("users")
      .doc(userId)
      .collection("detail")
      .doc(userId)
      .get()
      .then((doc) => {
        setOrg(toEntry(doc));
      });
  }, [userId]);

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
        {selectedHome && <AdminHomeSeg />}
      </IonContent>
    </IonPage>
  );
};

export default AdminHomePage;
