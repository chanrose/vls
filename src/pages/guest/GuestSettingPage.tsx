import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { auth } from "../../firebase";
import { Storage } from "@capacitor/core";
import { Redirect } from "react-router";

const GuestSettingPage: React.FC = () => {
  const logout = async () => {
    await Storage.clear();
  };

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
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
          <IonItem>
            <IonLabel>Night Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonCard>
        <IonButton
          color="medium"
          expand="block"
          onClick={logout}
          routerLink="/gettingstarted2"
        >
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GuestSettingPage;
