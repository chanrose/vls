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
import "../styles/GettingStartedPage.css";
import { add, bicycle, car, easel, ticket } from "ionicons/icons";
import AdminGuestSeg from "../../components/admin/AdminGuestSeg";
import AdminHomeSeg from "../../components/admin/AdminHomeSeg";
import { useAuth } from "../../auth";
import { firestore } from "../../firebase";
import { orgList, toOrgList } from "../../model";

const AdminHomePage: React.FC = () => {
  const { userId } = useAuth();
  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(false);
  const [selectedTools, setTools] = useState(false);
  const [orgDetail, setOrg] = useState<orgList>();

  useEffect(() => {
    firestore
      .collection("users")
      .doc(userId)
      .collection("detail")
      .doc(userId)
      .get()
      .then((doc) => {
        setOrg(toOrgList(doc));
        console.log(doc);
      });
  }, [userId]);

  const [organID, setOrgan] = useState(orgDetail?.orgID);

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
  console.log("organ ID", organID);
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
        Hello {orgDetail?.name}
        {selectedGuest && <AdminGuestSeg ID={`${organID}`} />}
        {selectedHome && <AdminHomeSeg />}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton routerLink={"/admin/addnew/Motorbike"}>
              <IonIcon icon={bicycle} />
            </IonFabButton>
            <IonFabButton routerLink={"/admin/addnew/Car"}>
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
