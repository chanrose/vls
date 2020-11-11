import { IonButton, IonCol, IonHeader, IonModal, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import "./ExploreContainer.css";

const AdminGuestSeg: React.FC = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div>
      <IonButton expand="block" onClick={() => setModal(true)}>
        Add New Post
      </IonButton>
      <IonModal isOpen={showModal}>
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <IonCol>
               
                  <IonTitle>Create a new post</IonTitle>
                
              </IonCol>
              <IonCol>
                <div className="ion-text-right">
                  <IonButton fill="clear" onClick={() => setModal(false)}>
                    Close{" "}
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
          <AnnouncementCard name={"hi"} />
       
      </IonModal>
    </div>
  );
};

export default AdminGuestSeg;
