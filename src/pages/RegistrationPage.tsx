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
import "./styles/components.css";
import { useAuth } from "../auth";
import { Redirect } from "react-router";
import { auth, firestore } from "../firebase";

const RegistrationPage: React.FC = () => {
  const [errorName, setErr] = useState({ Err: "" });
  const [email, setEmailString] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [organId, setOrganId] = useState("");
  const [organName, setOrganName] = useState("");
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
  }

  if (loggedIn) {
    firestore
      .collection("users")
      .doc(userId)
      .collection("detail")
      .doc(userId)
      .set({
        email,
        firstName: fname,
        lastName: lname,
        organId: organId,
        admin: true,
        name: organName,
      });
    firestore.collection("public").doc(organId).set({ name: organName });

    return <Redirect to="/admin/" />;
  }
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="IonCardFaq">
          <div className="ion-text-center centerImg">
            <img
              height="80 px"
              src={"/assets/media/fillForm.svg"}
              alt="App logo"
            />
          </div>
          <IonCardHeader>
            <IonCardTitle className="centerText">Registration</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>First name:</IonLabel>
                <IonInput
                  slot="end"
                  value={fname}
                  onIonChange={(e) => setFname(e.detail.value!)}
                  type="text"
                  placeholder="Eva"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Last name:</IonLabel>
                <IonInput
                  slot="end"
                  value={lname}
                  onIonChange={(e) => setLname(e.detail.value!)}
                  type="text"
                  placeholder="Taylor"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Email:</IonLabel>
                <IonInput
                  slot="end"
                  value={email}
                  onIonChange={(e) => setEmailString(e.detail.value!)}
                  type="email"
                  placeholder="example@email.com"
                />
              </IonItem>

              <IonItem>
                <IonLabel>Password:</IonLabel>
                <IonInput
                  slot="end"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  type="password"
                  placeholder="•••••••••••"
                />
              </IonItem>
              <IonItem>
                <IonLabel>Organization ID:</IonLabel>
                <IonInput
                  slot="end"
                  value={organId}
                  onIonChange={(e) => setOrganId(e.detail.value!)}
                  type="text"
                  placeholder="UniqueORGID"
                />
                <br />
              </IonItem>
              <IonItem>
                <IonLabel>Organization Name:</IonLabel>
                <IonInput
                  slot="end"
                  value={organName}
                  onIonChange={(e) => setOrganName(e.detail.value!)}
                  type="text"
                  placeholder="Organization Name"
                />
                <br />
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
              fill="clear"
              routerLink="/gettingstarted2"
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
