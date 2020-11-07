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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./styles/GettingStartedPage.css";

const AdminAddPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
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
          <IonGrid>
            <IonRow>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
