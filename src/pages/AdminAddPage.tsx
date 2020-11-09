import React from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import "./styles/admin.css";

const AdminAddPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="Vehicle">
              <IonLabel>Vehicle</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="User">
              <IonLabel>User</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Ticket">
              <IonLabel>Ticket</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
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
            <IonTextarea placeholder="Remark" />
          </IonItem>

          {/* This is for Issue a ticket */}
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
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
