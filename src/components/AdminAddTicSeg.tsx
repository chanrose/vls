import {
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import "../pages/styles/admin.css";

const AdminAddTicSeg: React.FC = () => {
  return (
    <IonList>
      <IonItem>
        <IonText>Ticket Issue No.1</IonText>
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Vehicle License Plate" />
      </IonItem>

      <IonRow>
        <IonCol>
          <IonButton fill="clear">Cancel</IonButton>
        </IonCol>
        <IonCol>
          <IonButton className="floatRight" fill="clear">
            Add
          </IonButton>
        </IonCol>
      </IonRow>
    </IonList>
  );
};

export default AdminAddTicSeg;
