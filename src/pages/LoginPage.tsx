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
import { auth } from "../firebase";

const LoginPage: React.FC = () => {
  const [email, setEmailString] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({loading: false, error: false})
  const {loggedIn} = useAuth();
  const [errorName, setError] = useState({errorCode: ''});
  const handleLogin = async () => {
    try {
      setStatus({loading: true, error: false});
      const credential = await auth.signInWithEmailAndPassword(email, password);
      console.log('credential: ', credential);
    
    
      
    } catch(error) {
        setStatus({loading: false, error: true});
        setError({errorCode: `${error.message}`});
    
    }
  }
  console.log(loggedIn);
  if (loggedIn) {
    console.log(loggedIn);
    return <Redirect to="/admin/home" />
  }

  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <img
              className="imageSize"
              src="https://raw.githubusercontent.com/chanrose/vls/v1.0/src/pages/media/vlsIcon.png"
            />
            <IonCardTitle className="centerText">Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput value={email} onIonChange={(event) => setEmailString(''+event.detail.value)} type="text" placeholder="Username" />
              </IonItem>
              <IonItem>
                <IonInput  value={password} onIonChange={(event) => setPassword(''+event.detail.value)}  type="password" placeholder="Password" />
              </IonItem>

            </IonList>
            <IonText color="danger" className="">{errorName.errorCode}</IonText>
            
            <br />
            
            <IonButton onClick={handleLogin} className="IonButtonRadius" expand="block">Sign in</IonButton>
            <IonButton routerLink="/gettingstarted/s2" color="secondary" className="IonButtonRadius" expand="block">Previous</IonButton>
             </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
