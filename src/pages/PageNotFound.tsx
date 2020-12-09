import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import "./styles/components.css";

const PageNotFound: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center centerImg">
          <img src="/assets/media/pageNotFound.svg" height="300 px" />
        </div>
        <IonButton fill="clear" expand="full" onClick={history.goBack}>
          You're not supposed to be here, go back!
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PageNotFound;
