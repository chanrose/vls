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
import {
  guestProfile,
  PostEntry,
  toGuestProfile,
  toPostEntry,
} from "../../model";
import AnnouncementCard from "../../components/AnnouncementCard";
import GuestAnnouncementList from "./GuestAnnouncementList";

const GuestHomePage: React.FC = () => {
  const [guestInfo, setGuest] = useState<guestProfile>();
  const { userId } = useAuth();
  const [organizationId, setOrgan] = useState("");
  const [postList, setPostList] = useState<PostEntry[]>([]);

  const userProfile = firestore.collection("guest").doc(userId);

  useEffect(() => {
    userProfile.get().then((entry) => setGuest(toGuestProfile(entry)));
    setOrgan(guestInfo?.organization!);
  }, [userProfile]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc("EfEqwXqtyzMFvDfzuRDGZdkSYaK2")
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organizationId]);
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
        {organizationId && <GuestAnnouncementList organID={organizationId} />}
        {/* 
        {postList.map((entry) => (
          <AnnouncementCard
            key={entry.id}
            title={entry.title}
            subtitle={entry.title}
            content={entry.title}
          />
        ))} */}
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
