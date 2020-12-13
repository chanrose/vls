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
  IonProgressBar,
  IonToast,
} from "@ionic/react";
import "./styles/components.css";
import { useAuth } from "../auth";
import { Redirect } from "react-router";
import { auth } from "../firebase";

const LoginPage: React.FC = () => {
  const [email, setEmailString] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const { loggedIn } = useAuth();

  const [isLoading, setLoading] = useState(false);
  const [errorName, setError] = useState({ errorCode: "" });
  const [showToast, setShowToast] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(email, password);
      turnOffLoading();
    } catch (error) {
      setStatus({ loading: false, error: true });
      setError({ errorCode: `${error.message}` });
      setShowToast(true);
      setLoading(false);
    }
  };

  const turnOffLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  if (loggedIn) {
    console.log(loggedIn);
    return <Redirect to="/admin/home" />;
  }

  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        {isLoading && (
          <IonProgressBar color="primary" type="indeterminate"></IonProgressBar>
        )}
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img
                height="150 px"
                src={"/assets/media/authentication.svg"}
                alt="Login Logo"
              />
            </div>
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
              LOGIN AS ADMIN
            </IonButton>
            <IonButton
              routerLink="/gettingstarted2"
              color="secondary"
              className="IonButtonRadius"
              expand="block"
            >
              PREVIOUS
            </IonButton>
            <IonButton routerLink="/register" fill="clear" expand="block">
              Sign up for organization?
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
