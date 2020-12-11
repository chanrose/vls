import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonText,
} from "@ionic/react";
import "./styles/components.css";
import { useHistory } from "react-router";
import { turnOffModal } from "../model";

const CreditsPage: React.FC<turnOffModal> = ({ turnOffModal }) => {
  const history = useHistory();

  return (
    <>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center">
              <img height="150 px" src="/assets/media/faq.svg" />
            </div>
            <IonCardSubtitle className="centerText">VLS v1.00</IonCardSubtitle>
            <IonCardTitle className="centerText">Changelog</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="ion-text-center">Added Feature List:</div>

            <IonText>
              <div className="ion-text-start">
                <li> Posting announcement at Guest's Post</li>
                <li> Receives message from guest</li>
                <li> Add vehicle entries </li>
                <li> Switch vehicle's view </li>
                <li> Search for vehicle</li>
                <li> Switch theme mode </li>
              </div>
            </IonText>
          </IonCardContent>
          <IonButton fill="clear" expand="full" onClick={turnOffModal}>
            CLOSE
          </IonButton>
        </IonCard>
      </IonContent>
    </>
  );
};

export default CreditsPage;
