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
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./styles/GettingStartedPage.css";

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <img
              className="imageSize"
              src="https://raw.githubusercontent.com/chanrose/vls/v1.0/src/pages/media/vlsIcon.png"
            />
            <IonCardTitle className="centerText">Getting started</IonCardTitle>
            <IonCardSubtitle className="centerText">
              Choose language
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow className="centerText">
                <IonCol>
                  <img src="https://cdn4.iconfinder.com/data/icons/europe-country-flags/105/UNITED_KINGDOM-512.png" />
                  <br />
                  <IonLabel>Thai</IonLabel>
                </IonCol>
                <IonCol>
                  <div className="grayStraightLine" />
                </IonCol>
                <IonCol>
                  <img src="https://cdn4.iconfinder.com/data/icons/europe-country-flags/105/UNITED_KINGDOM-512.png" />
                  <br />
                  <IonLabel>English</IonLabel>
                </IonCol>
              </IonRow>
              
            </IonGrid>
            <br />
            <IonButton className="IonButtonRadius" expand="block">NEXT</IonButton>
          </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
