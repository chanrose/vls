import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { firestore } from "../../firebase";
import { OrgContext, useAuth, UserContext } from "../../auth";
import { PostEntry, toEntry } from "../../model";
import GuestAnnouncementList from "./GuestAnnouncementList";
interface props {
  organId1: string;
}

const GuestHomePage: React.FC = () => {
  const { name } = useContext(UserContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e: { detail: { value: any } }) =>
              console.log(e.detail.value!)
            }
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            {/*     <IonSegmentButton value="info">
              <IonLabel>Cost</IonLabel>
            </IonSegmentButton> */}
          </IonSegment>
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
