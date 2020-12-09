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
import { OrgContext, useAuth } from "../../auth";
import {
  guestDetail,
  guestProfile,
  PostEntry,
  toGuestProfile,
  toPostEntry,
} from "../../model";
import GuestAnnouncementList from "./GuestAnnouncementList";
import AnnouncementCard from "../../components/AnnouncementCard";
import { useRouteMatch } from "react-router";
import { Storage } from "@capacitor/core";

interface props {
  organId1: string;
}

const GuestHomePage: React.FC = () => {
  const orgId = useContext(OrgContext);

  /*   const userProfile = firestore.collection("guest").doc(userId);

  useEffect(() => {
    userProfile.get().then((entry) => setGuest(toGuestProfile(entry)));
  }, [userProfile]); */

  const [postList, setPostList] = useState<PostEntry[]>([]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(orgId)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [orgId]);
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
          <div>
            <IonImg className="imageSize" src="/assets/icon/app2Logo.png" />
            <br />
          </div>
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
        <GuestAnnouncementList organId={`${orgId}`} />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
