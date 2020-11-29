import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <IonImg className="imageSize" src={"/assets/icon/app2Logo.png"} />
            {/*      <img
              className="imageSize"
              src="{./media/v}"
            /> */}
            <IonCardTitle className="centerText">Getting started</IonCardTitle>
            <IonCardSubtitle className="centerText">
              Choose language
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
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
            </IonGrid>
            <br />
            <IonButton
              routerLink="/gettingstarted2"
              className="IonButtonRadius"
              expand="block"
            >
              NEXT
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
