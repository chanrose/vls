import {
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonText,
  IonTextarea,
} from "@ionic/react";
import React from "react";
import "../pages/styles/admin.css";

const AdminAddVehSeg: React.FC = () => {
  return (
    <IonList>
      <IonItem>
        <IonText>Sticker No. 1</IonText>
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Vehicle Owner" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Vehicle Plate" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Province" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Brand" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Model" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Colour" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Tax Expired" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Insurance Expired" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Current Owner" />
      </IonItem>

      <IonItem>
        <IonInput type="text" placeholder="Green Book" />
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder="Email" />
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder="Telephone" />
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder="Role" />
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder="Vehicle Type" />
      </IonItem>
      <IonItem>
        <IonTextarea placeholder="Remark" />
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

export default AdminAddVehSeg;
