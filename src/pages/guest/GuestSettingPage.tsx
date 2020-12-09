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
import { Storage } from "@capacitor/core";

const GuestSettingPage: React.FC = () => {
  const logout = async () => {
    await Storage.clear();
  };
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
              <IonRouterLink href="/guest/home/">
                FAQ and Service Information
              </IonRouterLink>
            </IonItem>
            <IonItem>
              <IonRouterLink href="/guest/home/">Notification</IonRouterLink>
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
        <IonButton color="medium" expand="block" onClick={logout}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GuestSettingPage;
