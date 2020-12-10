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
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center"> Settings</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <IonList>
            <IonItem>
              <IonRouterLink href="/public/app/faq">
                FAQ and Service Information
              </IonRouterLink>
            </IonItem>

            <IonItem>
              <IonRouterLink href="/admin/detail/">
                Account Management
              </IonRouterLink>
            </IonItem>
            <IonItem>
              <IonRouterLink href="/public/app/credits">Credits</IonRouterLink>
            </IonItem>
            <IonItem>
              <IonLabel> Switch Theme</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
            </IonItem>
          </IonList>
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
