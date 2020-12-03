import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import { firestore } from "../../firebase";
import { useAuth } from "../../auth";
import { guestProfile, PostEntry, toGuestProfile } from "../../model";
import GuestAnnouncementList from "./GuestAnnouncementList";

interface props {
  organId: string;
}
const GuestHomePage: React.FC<props> = ({ organId }) => {
  const { userId } = useAuth();

  const [guestInfo, setGuest] = useState<guestProfile>();

  const userProfile = firestore.collection("guest").doc(userId);

  useEffect(() => {
    userProfile.get().then((entry) => setGuest(toGuestProfile(entry)));
  }, [userProfile]);

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
            <IonSegmentButton value="info">
              <IonLabel>Cost</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        Hello there: Mr. {guestInfo?.name} :
        <GuestAnnouncementList organID={`${organId}`} />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
