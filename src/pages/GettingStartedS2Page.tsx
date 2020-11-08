import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./styles/GettingStartedPage.css";

const GettingStartedS2Page: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <img
              className="imageSize"
              src="https://raw.githubusercontent.com/chanrose/vls/v1.0/src/pages/media/vlsIcon.png"
            />
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
            <IonButton className="IonButtonRadius" expand="block">ENTER</IonButton>
            <IonButton color="secondary" className="IonButtonRadius" expand="block">Login as Admin</IonButton>
            <IonButton fill="clear" expand="block">Sign up for organization?</IonButton>
          </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedS2Page;
