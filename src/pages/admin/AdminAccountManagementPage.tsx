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
import "../styles/components.css";
import { turnOffModal } from "../../model";

const AdminAccountManagementPage: React.FC<turnOffModal> = ({
  turnOffModal,
}) => {
  return (
    <>
      <IonContent color="light" fullscreen>
        <IonCard className="ionCardstyle">
          <IonCardHeader>
            <div className="ion-text-center centerImg">
              <img
                alt="personal information picture"
                src="/assets/media/personalInfo.svg"
                height="50 px"
              />
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
                Feature is coming soon!
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
