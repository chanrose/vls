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
import "../styles/components.css";
import { auth } from "../../firebase";

const AdminSettingPage: React.FC = () => {
  const [ToggleDark, setToggle] = useState(false);
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    setToggle(true);
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
              <IonRouterLink href="/public/app/faq">
                FAQ and Service Information
              </IonRouterLink>
            </IonItem>
            {/*  <IonItem>
              <IonRouterLink href="/admin/home/">Notification</IonRouterLink>
            </IonItem>
         
          <IonItem>
            <IonRouterLink href="/admin/home/">Language</IonRouterLink>
          </IonItem>
          <IonItem>
            <IonRouterLink href="/admin/home/">
              Application Version
            </IonRouterLink>
          </IonItem> */}
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
                checked={ToggleDark}
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton color="medium" expand="block" onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AdminSettingPage;
