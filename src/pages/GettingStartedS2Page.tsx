import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonPage,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useAuth } from "../auth";
import firebase from "firebase";
import { auth, firestore } from "../firebase";
import { Redirect } from "react-router";

const GettingStartedS2Page: React.FC = () => {
  const [name, setName] = useState("");
  const [organization, setOrg] = useState("");

  const { loggedIn } = useAuth();
  const { userId } = useAuth();

  const handleLogin = async () => {
    const credential = await auth.signInAnonymously().catch((error) => {});
    console.log("Credential: ", credential);
  };

  if (loggedIn) {
    console.log("Signed in ehrn loggedIn:", userId);
    firestore.collection("guest").doc(userId).set({
      name,
      organization,
      isAdmin: false,
    });
    return <Redirect to="/guest/home" />;
  }
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <IonImg
              className="imageSize"
              src={
                "https://raw.githubusercontent.com/chanrose/vls/main/public/assets/icon/app2Logo.png"
              }
            />

            <IonCardTitle className="centerText">
              Enter your Information
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  type="text"
                  placeholder="Enter your name"
                />
              </IonItem>
              <IonItem>
                <IonInput
                  value={organization}
                  onIonChange={(e) => setOrg(e.detail.value!)}
                  type="text"
                  placeholder="Select your organization"
                />
              </IonItem>
            </IonList>

            <br />
            <IonButton
              onClick={handleLogin}
              className="IonButtonRadius"
              expand="block"
            >
              Enter as Guest
            </IonButton>
            <IonButton
              color="secondary"
              className="IonButtonRadius"
              expand="block"
            >
              Login as Admin
            </IonButton>
            <IonButton routerLink="/register" fill="clear" expand="block">
              Sign up for organization?
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedS2Page;
