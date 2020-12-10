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
  IonToast,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useAuth } from "../auth";
import { Redirect } from "react-router";
import { auth } from "../firebase";

const LoginPage: React.FC = () => {
  const [email, setEmailString] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const { loggedIn } = useAuth();

  const [errorName, setError] = useState({ errorCode: "" });
  const [showToast, setShowToast] = useState(false);
  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setStatus({ loading: false, error: true });
      setError({ errorCode: `${error.message}` });
      setShowToast(true);
    }
  };
  if (loggedIn) {
    console.log(loggedIn);
    return <Redirect to="/admin/home" />;
  }

  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <img
              className="imageSize"
              src={"/assets/icon/app2Logo.png"}
              alt="App logo"
            />
            <IonCardTitle className="centerText">Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput
                  value={email}
                  onIonChange={(event) => setEmailString(event.detail.value!)}
                  type="text"
                  placeholder="Username"
                />
              </IonItem>
              <IonItem>
                <IonInput
                  value={password}
                  onIonChange={(event) => setPassword("" + event.detail.value)}
                  type="password"
                  placeholder="Password"
                />
              </IonItem>
            </IonList>
            {/* <IonText color="danger" className="">{errorName.errorCode}</IonText>
             */}
            <br />

            <IonButton
              onClick={handleLogin}
              className="IonButtonRadius"
              expand="block"
            >
              Sign in
            </IonButton>
            <IonButton
              routerLink="/gettingstarted2"
              color="secondary"
              className="IonButtonRadius"
              expand="block"
            >
              Previous
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={errorName.errorCode}
          duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
