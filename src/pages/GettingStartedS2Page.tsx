import React, { useEffect, useState } from "react";
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
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useAuth } from "../auth";
import { auth, firestore } from "../firebase";
import { Redirect } from "react-router";
import { orgList, toOrgList } from "../model";
import { Plugins } from "@capacitor/core";

const GettingStartedS2Page: React.FC = () => {
  const { Storage } = Plugins;

  const [name, setName] = useState("");
  const [organization, setOrg] = useState("");

  const { loggedIn } = useAuth();
  const { userId } = useAuth();
  const [orgEntries, setOrgEntries] = useState<orgList[]>([]);

  const entriesPub = firestore.collection("public");
  const publicOrg = async () => {
    await entriesPub
      .get()
      .then(({ docs }) => setOrgEntries(docs.map(toOrgList)));
  };

  useEffect(() => {
    publicOrg();
  }, [userId]);

  const handleLogin = async () => {
    await Storage.set({
      key: "userDetail",
      value: JSON.stringify({
        name,
        organization,
      }),
    });

    /* const credential = await auth.signInAnonymously().catch((error) => {}); */
  };
  /* 
  if (loggedIn && organization != "") {
    firestore.collection("guest").doc(userId).set({
      name,
      organization,
      isAdmin: false,
    });
    return <Redirect to={`/guest/home/`} />;
  } */
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <IonImg className="imageSize" src={"/assets/icon/app2Logo.png"} />

            <IonCardTitle className="centerText">
              Enter your Information
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Set your name</IonLabel>
                <IonInput
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  type="text"
                  placeholder="Lastname firstname"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Select Your Organization</IonLabel>
                <IonSelect
                  value={organization}
                  placeholder="Select One"
                  onIonChange={(e) => setOrg(e.detail.value)}
                >
                  {" "}
                  {orgEntries.map((entry) => (
                    <IonSelectOption value={entry.id}>
                      {entry.name}
                    </IonSelectOption>
                  ))}
                  {/* <IonSelectOption value="aiu18180">AIU</IonSelectOption>
                  <IonSelectOption value="hope18180">HC</IonSelectOption> */}
                </IonSelect>
              </IonItem>
            </IonList>

            <br />
            <IonButton
              color="primary"
              onClick={handleLogin}
              className="IonButtonRadius"
              expand="block"
            >
              Enter as Guest
            </IonButton>
            <IonButton
              fill="clear"
              routerLink="/login"
              className="IonButtonRadius"
              expand="block"
            >
              Login as Admin
            </IonButton>
            {/*     <IonButton routerLink="/register" fill="clear" expand="block">
              Sign up for organization?
            </IonButton> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedS2Page;
