import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
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
import AdminHomeSeg from "../components/AdminHomeSeg";
import { useAuth } from "../auth";
import { auth } from "../firebase";

const AdminSettingPage: React.FC = () => {
  const { userId } = useAuth();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <IonList>
            <IonItem>
              <IonRouterLink href="/admin/home/">
                FAQ and Service Information
              </IonRouterLink>
            </IonItem>
            <IonItem>
              <IonRouterLink href="/admin/home/">Notification</IonRouterLink>
            </IonItem>
          </IonList>
          <IonItem>
            <IonRouterLink href="/admin/home/">Language</IonRouterLink>
          </IonItem>
          <IonItem>
            <IonRouterLink href="/admin/home/">
              Application Version
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonRouterLink href="/admin/home/">
              Account Management
            </IonRouterLink>
          </IonItem>
        </IonCard>
        <IonButton color="medium" expand="block" onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AdminSettingPage;
