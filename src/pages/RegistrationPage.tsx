import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useAuth } from "../auth";
import { Redirect } from "react-router";
import { auth, firestore } from "../firebase";

const RegistrationPage: React.FC = () => {
  const [errorName, setErr] = useState({ Err: "" });
  const [email, setEmailString] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const { loggedIn } = useAuth();
  const { userId } = useAuth();
  const [signup, setSignup] = useState(false);
  const handleRegister = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("credential", credential);
      setSignup(true);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log("error: ", error);
      setErr({ Err: `${error.message}` });
    }
  };

  if (signup) {
    console.log(userId);
    firestore.collection("accounts").doc(userId).collection("detail").add({
      email: email,
      password: password,
    });
  }

  /*   if (loggedIn) {
    return <Redirect to="/admin/home/" />;
  } */
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <br />
          <br />
          <br />
          <IonCardHeader>
            <IonCardTitle className="centerText">Registration</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput type="text" placeholder="Name:" />
              </IonItem>
              <IonItem>
                <IonInput
                  value={email}
                  onIonChange={(e) => setEmailString(e.detail.value!)}
                  type="email"
                  placeholder="Email:"
                />
              </IonItem>
              <IonItem>
                <IonInput type="text" placeholder="Username:" />
              </IonItem>
              <IonItem>
                <IonInput
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  type="password"
                  placeholder="Password:"
                />
              </IonItem>
              <IonItem>
                <IonInput type="text" placeholder="Create Organization ID" />
              </IonItem>
            </IonList>

            <br />
            <IonButton
              onClick={handleRegister}
              className="IonButtonRadius"
              expand="block"
            >
              SIGN UP
            </IonButton>
            <IonButton
              color="secondary"
              className="IonButtonRadius"
              expand="block"
            >
              Go Back
            </IonButton>

            <IonText color="danger">
              <div className="ion-text-center">{errorName.Err}</div>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;
