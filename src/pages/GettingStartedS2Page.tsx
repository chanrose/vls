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
import "./styles/components.css";
import { firestore } from "../firebase";
import { Redirect, useHistory } from "react-router";
import { orgList, toEntry } from "../model";
import { Plugins } from "@capacitor/core";

const GettingStartedS2Page: React.FC = () => {
  const { Storage } = Plugins;
  const history = useHistory();
  const [name, setName] = useState("");
  const [organization, setOrg] = useState("");
  const [logIn, setLog] = useState(false);
  const [orgEntries, setOrgEntries] = useState<orgList[]>([]);

  const getUserDetail = async () => {
    try {
      const ret = await Storage.get({ key: "userDetail" });
      const getObj = JSON.parse(ret.value!);

      if (getObj) {
        setLog(true);
      }
    } catch (error) {}
  };
  getUserDetail();

  const entriesPub = firestore.collection("public");
  const publicOrg = async () => {
    await entriesPub.get().then(({ docs }) => setOrgEntries(docs.map(toEntry)));
  };

  useEffect(() => {
    publicOrg();
  }, [orgEntries]);

  const handleLogin = async () => {
    await Storage.set({
      key: "userDetail",
      value: JSON.stringify({
        name,
        organization,
      }),
    });
    history.go(0);

    /* const credential = await auth.signInAnonymously().catch((error) => {}); */
  };

  if (logIn) {
    return <Redirect to={`/guest/home/`} />;
  }
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            {/*  <IonImg className="imageSize" src={"/assets/icon/app2Logo.png"} /> */}
            <div className="ion-text-center centerImg">
              <img src="/assets/media/login.svg" height="200 px" />
            </div>

            <IonCardTitle className="centerText">Enter as Guest</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Name</IonLabel>
                <IonInput
                  slot="end"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  type="text"
                  placeholder="Full Name"
                  required={true}
                />
              </IonItem>

              <IonItem>
                <IonLabel>Organization</IonLabel>
                <IonSelect
                  value={organization}
                  placeholder="Select One"
                  onIonChange={(e) => setOrg(e.detail.value)}
                >
                  {" "}
                  {orgEntries.map((entry) => (
                    <IonSelectOption key={entry.id} value={entry.id}>
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
              type="submit"
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
