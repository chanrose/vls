import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { UserContext } from "../../auth";
import GuestAnnouncementList from "./GuestAnnouncementList";

const GuestHomePage: React.FC = () => {
  const { name } = useContext(UserContext);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Home</div>
          </IonTitle>
        
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center">
          {" "}
          <div>
            <IonImg className="imageSize" src="/assets/icon/app2Logo.png" />
            <br />
          </div>
        </div>
       
        <GuestAnnouncementList />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
