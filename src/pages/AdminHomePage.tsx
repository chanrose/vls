import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { add, bicycle, car, easel, logoFacebook, ticket } from "ionicons/icons";
import AnnouncementCard from "../components/AnnouncementCard";

const AdminHomePage: React.FC = () => {
const [showModal, setModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Guest's Post</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="tools">
              <IonLabel>Admin tools</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        
        <IonButton expand="block" onClick={() => setModal(true)}>Add New Post</IonButton>
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonRow>
                
                <IonCol> 
                  <div><IonTitle>Create a new post</IonTitle></div> 
                  </IonCol>
                <IonCol>
                  <div className="ion-text-right">
                    <IonButton fill="clear" onClick={() => setModal(false)}>Close </IonButton>
                  </div>
                  </IonCol>
                 
              
              </IonRow>
         
          
          </IonToolbar>
          </IonHeader>
        
        <div><AnnouncementCard name={"hi"}/></div>
        
        </IonModal>


        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton><IonIcon icon={bicycle} /></IonFabButton>
            <IonFabButton><IonIcon icon={car} /></IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={ticket} /></IonFabButton>
            <IonFabButton><IonIcon icon={easel} /></IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default AdminHomePage;
