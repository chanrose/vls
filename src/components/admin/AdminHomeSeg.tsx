import {
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import "../../pages/styles/admin.css";

const AdminHomeSeg: React.FC = () => {
  return (
    <div>
      <div>
        <IonImg className="imageSize" src="/assets/icon/app2Logo.png" />
        <br />
      </div>
      <div>
        <IonList>
          <IonItem>
            <IonLabel>Amount of </IonLabel>
            <IonText>Number: </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>registered bike</IonLabel>
            <IonText>XXX</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>unregistered bike</IonLabel>
            <IonText>XXX</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>registered car</IonLabel>
            <IonText>XXX</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>unregistered car</IonLabel>
            <IonText>XXX</IonText>
          </IonItem>
        </IonList>
      </div>
    </div>
  );
};

export default AdminHomeSeg;
