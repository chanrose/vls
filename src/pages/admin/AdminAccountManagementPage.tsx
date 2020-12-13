import React, { useContext } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import "../styles/components.css";
import { turnOffModal } from "../../model";
import { UserContext } from "../../auth";

const AdminAccountManagementPage: React.FC<turnOffModal> = ({
  turnOffModal,
}) => {
  const { name, organization, email, organId, fName, lName } = useContext(
    UserContext
  );

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
          </IonCardHeader>

          <IonCardContent>
            <br />
            <IonText>
              <div className="ion-text-center">
                Hello {fName} {lName}, <br /> here is your account information:
                <IonList>
                  <IonItem>
                    <IonLabel>Organization Name: </IonLabel>
                    <IonInput type="text" value={name} disabled></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Organization ID: </IonLabel>
                    <IonInput type="text" value={organId} disabled></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Email: </IonLabel>
                    <IonInput type="text" value={email} disabled></IonInput>
                  </IonItem>
                </IonList>
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
