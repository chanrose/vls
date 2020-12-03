import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { auth } from "../../firebase";

const AdminSettingPage: React.FC = () => {
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
