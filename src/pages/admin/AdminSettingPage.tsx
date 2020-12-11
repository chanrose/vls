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
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "../styles/components.css";
import { auth } from "../../firebase";
import AdminAccountManagementPage from "./AdminAccountManagementPage";
import FaqPage from "../FaqPage";
import CreditsPage from "../CreditsPage";

const AdminSettingPage: React.FC = () => {
  const [showAccModal, setAccModal] = useState(false);
  const turnOffAcc = () => {
    setAccModal(false);
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
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center">Settings</div>{" "}
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
          <br />
          <IonList>
            <IonItem>
              <IonText color="primary" onClick={() => setFaqModal(true)}>
                FAQ and Service Information
              </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" onClick={() => setAccModal(true)}>
                Account Management
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
        <IonButton color="medium" expand="block" onClick={() => auth.signOut()}>
          LOGOUT
        </IonButton>
        <IonModal
          isOpen={showAccModal}
          onDidDismiss={() => setAccModal(false)!}
        >
          <AdminAccountManagementPage turnOffModal={turnOffAcc} />
        </IonModal>
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

export default AdminSettingPage;
