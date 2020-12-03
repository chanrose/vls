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
  IonLabel,
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
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [organId, setOrganId] = useState("");
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
    firestore.collection("users").doc(userId).collection("detail").add({
      email: email,
      password: password,
      firstName: fname,
      lastName: lname,
      organId: organId,
      admin: true,
    });
  }

  if (loggedIn) {
    return <Redirect to="/admin/home/" />;
  }
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
                <IonLabel>First name:</IonLabel>
                <IonInput
                  value={fname}
                  onIonChange={(e) => setFname(e.detail.value!)}
                  type="text"
                  placeholder="Eva"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Last name:</IonLabel>
                <IonInput
                  value={lname}
                  onIonChange={(e) => setLname(e.detail.value!)}
                  type="text"
                  placeholder="Taylor"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Email:</IonLabel>
                <IonInput
                  value={email}
                  onIonChange={(e) => setEmailString(e.detail.value!)}
                  type="email"
                  placeholder="example@email.com"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Password:</IonLabel>
                <IonInput
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  type="password"
                  placeholder="•••••••••••"
                />
              </IonItem>
              <IonItem>
                <IonLabel>Organization ID:</IonLabel>
                <IonInput
                  value={organId}
                  onIonChange={(e) => setOrganId(e.detail.value!)}
                  type="text"
                  placeholder="11232020"
                />
                <br />
              </IonItem>
              <IonItem>
                <IonText>
                  <p>
                    Other users will use Organ ID to identify your organization.
                  </p>
                </IonText>
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
              routerLink="/gettingstarted2"
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
