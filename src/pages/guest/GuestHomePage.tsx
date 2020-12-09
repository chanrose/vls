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
import { GuestContext, OrgContext, useAuth } from "../../auth";
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
  const { organization } = useContext(GuestContext);
  const { name } = useContext(GuestContext);

  const [postList, setPostList] = useState<PostEntry[]>([]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organization]);
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
        Hello {name}
        <GuestAnnouncementList organId={`${organization}`} />
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
