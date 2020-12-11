import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonText,
} from "@ionic/react";
import "./styles/components.css";

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img src="/assets/icon/app2Logo.png" height="200 px" />
            </div>
            <IonCardTitle className="centerText">Getting started</IonCardTitle>
            <IonCardSubtitle className="centerText">
              Updated on Dec 11
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            {/* <IonGrid>
              <IonRow className="centerText">
                <IonCol>
                  <IonImg
                    className="flagIcon"
                    src="/assets/media/englishLogo.png"
                  />
                  <br />
                  <IonLabel>English</IonLabel>
                </IonCol>

                <div className="grayStraightLine" />

                <IonCol>
                  <IonImg
                    className="flagIcon"
                    src="/assets/media/thaiLogo.png"
                  />
                  <br />
                  <IonLabel>Thai</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid> */}
            <br />
            <IonText>
              <div className="ion-text-center">
                Welcome to VLS's App, you will be ask to sign in as guest or as
                administrators. Please proceed.
              </div>
            </IonText>
            <br />
            <IonButton
              routerLink="/gettingstarted2"
              className="IonButtonRadius"
              expand="block"
            >
              START
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
