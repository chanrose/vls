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
import { useHistory } from "react-router";
import "./styles/components.css";

const PageNotFound: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        {/*      <div className="ion-text-center centerImg">
          <img src="/assets/media/pageNotFound.svg" height="300 px" />
        </div>
        <IonButton fill="clear" expand="full" onClick={history.goBack}>
          You're not supposed to be here, go back!
        </IonButton> */}

        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img src="/assets/media/pageNotFound.svg" height="300 px" />
            </div>
            <IonCardTitle className="centerText">Page Not Found!</IonCardTitle>
            <IonCardSubtitle className="centerText">404 Errors</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            {/*  <br />
            <IonText>
              <div className="ion-text-center">
                {" "}
                Welcome to VLS's App, you will be ask to sign in as guest or as
                administrators. Please proceed.
              </div>
            </IonText>
            <br /> */}
            <IonButton fill="clear" expand="full" onClick={history.goBack}>
              Go Back
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PageNotFound;
