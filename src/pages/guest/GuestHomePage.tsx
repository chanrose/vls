import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
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
import GuestAnnouncementList from "./GuestAnnouncementList";
import AnnouncementCard from "../../components/AnnouncementCard";
import { useRouteMatch } from "react-router";

interface props {
  organId1: string;
}
const GuestHomePage: React.FC = () => {
  const { userId } = useAuth();
  /*   const match = useRouteMatch<props>();
  const { organId1 } = match.params; */
  const [guestInfo, setGuest] = useState<guestProfile>();

  const userProfile = firestore.collection("guest").doc(userId);

  useEffect(() => {
    userProfile.get().then((entry) => setGuest(toGuestProfile(entry)));
  }, [userProfile]);

  const [postList, setPostList] = useState<PostEntry[]>([]);

  /*   useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organId1)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organId1]); */

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
        <div className="ion-text-center">
          {" "}
          <IonText>
            Hello there: Mr. {guestInfo?.name}
            <br /> here are some posts by your administrator123:
          </IonText>
        </div>
        {/*        <div>
          {postList.map((entry) => (
            <AnnouncementCard
              key={entry.id}
              title={entry.title}
              subtitle={entry.subtitle}
              content={entry.content}
            />
          ))}
        </div> */}
        <GuestAnnouncementList organId={`${guestInfo?.organization}`} />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
