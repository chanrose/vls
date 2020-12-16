import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRouterLink,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { Plugins } from "@capacitor/core";
import FaqPage from "../FaqPage";
import CreditsPage from "../CreditsPage";

const GuestSettingPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { Storage } = Plugins;
  const logout = async () => {
    await Storage.clear();
  };

  const [showCreditModal, setCreditModal] = useState(false);
  const turnOffCredit = () => {
    setCreditModal(false);
  };

  const [showFaqModal, setFaqModal] = useState(false);
  const turnOffFaq = () => {
    setFaqModal(false);
  };

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    /*     setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.toggle("light");
    } */
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
          <div className="ion-text-center centerImg">
            <img
              height="150 px"
              src={"/assets/media/preference.svg"}
              alt="Login Logo"
            />
          </div>
          <IonList>
            <IonItem>
              <IonText color="primary" onClick={() => setFaqModal(true)}>
                FAQ and Service Information
              </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" onClick={() => setCreditModal(true)}>
                Changelog
              </IonText>
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
          routerLink="/gettingstarted"
        >
          RESET
        </IonButton>

        <IonModal
          isOpen={showFaqModal}
          onDidDismiss={() => setFaqModal(false)!}
        >
          <FaqPage turnOffModal={turnOffFaq} />
        </IonModal>

        <IonModal
          isOpen={showCreditModal}
          onDidDismiss={() => setCreditModal(false)!}
        >
          <CreditsPage turnOffModal={turnOffCredit} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default GuestSettingPage;
