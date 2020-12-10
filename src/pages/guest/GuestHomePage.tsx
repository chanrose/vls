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
          {/*           <IonSegment
            onIonChange={(e: { detail: { value: any } }) =>
              console.log(e.detail.value!)
            }
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
              <IonSegmentButton value="info">
              <IonLabel>Cost</IonLabel>
            </IonSegmentButton> 
          </IonSegment> */}
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
        Hello {name}
        <GuestAnnouncementList />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
