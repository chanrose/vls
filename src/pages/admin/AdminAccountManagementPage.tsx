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
  IonText,
} from "@ionic/react";
import "../styles/components.css";
import { useHistory } from "react-router";
import { turnOffModal } from "../../model";

const AdminAccountManagementPage: React.FC<turnOffModal> = ({ turnOffModal }) => {
 
  return (
    <>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img src="/assets/media/personalInfo.svg" height="50 px" />
            </div>
            <IonCardTitle className="centerText">Account Detail</IonCardTitle>
            <IonCardSubtitle className="centerText">
              Updated on Dec 03
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <br />
            <IonText>
              <div className="ion-text-center">
                - Undraw.co for the amazing illustration
                <br />
                - Asia-pacific International University
                <br />
              </div>
            </IonText>
            <br />

            <IonButton fill="clear" expand="full" onClick={turnOffModal}>
              CLOSE
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default AdminAccountManagementPage;
