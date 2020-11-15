import React from "react";
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
  IonList,
  IonPage,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";

const GettingStartedS2Page: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
          <IonImg className="imageSize" src={"https://raw.githubusercontent.com/chanrose/vls/main/public/assets/icon/app2Logo.png"} />
     
            <IonCardTitle className="centerText">Enter your Information</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput type="text" placeholder="Enter your name" />
              </IonItem>
              <IonItem>
                <IonInput type="text" placeholder="Enter your organization's id" />
              </IonItem>

            </IonList>
            
            
            <br />
            <IonButton routerLink="/guest" className="IonButtonRadius" expand="block">Enter as Guest</IonButton>
            <IonButton routerLink="/login" color="secondary" className="IonButtonRadius" expand="block">Login as Admin</IonButton>
            <IonButton routerLink="/register" fill="clear" expand="block">Sign up for organization?</IonButton>
          </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedS2Page;
