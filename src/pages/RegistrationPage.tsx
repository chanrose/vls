import React from "react";
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
} from "@ionic/react";
import "./styles/GettingStartedPage.css";

const RegistrationPage: React.FC = () => {
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
                <IonInput type="email" placeholder="Email:" />
              </IonItem>
              <IonItem>
                <IonInput type="text" placeholder="Username:" />
              </IonItem>
              <IonItem>
                <IonInput type="password" placeholder="Password:" />
              </IonItem>
              <IonItem>
                <IonInput type="text" placeholder="Create Organization ID" />
              </IonItem>

            </IonList>
            
            
            <br />
            <IonButton className="IonButtonRadius" expand="block">SIGN UP</IonButton>
            <IonButton color="secondary" className="IonButtonRadius" expand="block">Go Back</IonButton>
            <IonButton fill="clear" expand="block">Sign up for organization?</IonButton>
          </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;
