import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
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
  const [errorName, setErr] = useState({ Err: "", error: false });
  const { Storage } = Plugins;
  const history = useHistory();
  const [name, setName] = useState("");
  const [organization, setOrg] = useState("");
  const [logIn, setLog] = useState(false);
  const [orgEntries, setOrgEntries] = useState<orgList[]>([]);
  const [userDetail, setUserDetail] = useState({ name: "", organization: "" });
  const getUserDetail = async () => {
    try {
      const ret = await Storage.get({ key: "userDetail" });
      const getObj = JSON.parse(ret.value!);
      if (getObj.organization === "" || getObj.name === "") {
        setLog(false);
      } else {
        setLog(true);
        setUserDetail({ name: getObj.name, organization: getObj.organization });
      }
    } catch (error) {}
  };

  const entriesPub = firestore.collection("public");
  const publicOrg = async () => {
    await entriesPub.get().then(({ docs }) => setOrgEntries(docs.map(toEntry)));
  };

  useEffect(() => {
    getUserDetail();
    publicOrg();
  }, [orgEntries]);

  if (logIn) {
    return <Redirect to={`/guest`} />;
  }

  const handleLogin = async () => {
    if (organization === "") {
      setErr({ error: true, Err: "Please fill in the information correctly!" });
      return null;
    }
    await Storage.set({
      key: "userDetail",
      value: JSON.stringify({
        name,
        organization,
      }),
    });
    history.go(0);
  };

  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img
                alt="Login illustrator"
                src="/assets/media/login.svg"
                height="200 px"
              />
            </div>

            <IonCardTitle className="centerText">Enter as Guest</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  type="text"
                  placeholder="Full Name"
                  required={true}
                />
              </IonItem>

              <IonItem>
                <IonLabel hidden> Your Organization</IonLabel>
                <br />
                <IonSelect
                  slot="start"
                  value={organization}
                  placeholder="Select One"
                  onIonChange={(e) => setOrg(e.detail.value!)}
                >
                  {" "}
                  {orgEntries.map((entry) => (
                    <IonSelectOption key={entry.id} value={entry.id}>
                      {entry.name}
                    </IonSelectOption>
                  ))}
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
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedS2Page;
