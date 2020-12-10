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
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/components.css";
import { useHistory } from "react-router";

const FaqPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center">FAQ</div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/react.svg" height="100 px" />
                </div>
                <IonCardSubtitle className="centerText">
                  Developed with
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Ionic React</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">Swipe More</div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/openSource.svg" height="100 px" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  Source Code?
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Open Source</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    gh repo clone chanrose/vls
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        <IonButton fill="clear" expand="full" onClick={history.goBack}>
          GO BACk
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FaqPage;
