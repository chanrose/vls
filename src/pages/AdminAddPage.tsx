import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
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
      <IonContent fullscreen>
        <IonList>
          <IonItem>
          <IonText>Sticker No. 1</IonText>
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Vehicle Model" />
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Tax status" />
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Has greenbook?" />
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Tax expired" />
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Greenbook owner" />
          </IonItem>
          <IonItem>
           <IonInput type="text" placeholder="Current Owner" />
          </IonItem>
          <IonItem>
            <IonTextarea placeholder="Remark" />
          </IonItem>
          <IonRow>
            <IonCol><IonButton fill="clear">Cancel</IonButton></IonCol>
            <IonCol><IonButton className="floatRight" fill="clear">Add</IonButton></IonCol>
          </IonRow>
        </IonList>
          
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
