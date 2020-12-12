import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { PostEntry, toEntry } from "../../model";
import { firestore } from "../../firebase";
import RequestCard from "../../components/RequestCard";
import { Storage } from "@capacitor/core";
import { useAuth, useAuthInit, UserContext } from "../../auth";

const GuestViewPage: React.FC = ({}) => {
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [showNoData, setShow] = useState(false);
  const [{ organization }, setID] = useState(useContext(UserContext));
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("posts");

    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toEntry))
    );
  }, [organization]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("posts");
    return postEntriesRef.onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [organization]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">View Posts</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}
      <IonContent className="ion-padding" fullscreen>
        {/*        <div className="ion-text-center">
          <img src="/assets/media/building.svg" height="150 px" />
          <br />
          <br />
        </div> */}
        <div>
          {showNoData && (
            <div className="ion-text-center centerImg">
              <img src="/assets/media/specialThanks.svg" height="150 px" />
              <br />
              <br />
              <p>You have caught up all the posts already!</p>
            </div>
          )}
          {!showNoData && (
            <div className="ion-text-center">
              Here are some of the posts from your organization:
            </div>
          )}
          {postList.map((entry) => (
            <RequestCard
              key={entry.id}
              title={entry.title}
              subtitle={entry.subtitle}
              content={entry.content}
              picture={entry.pictureUrl}
              collection={"posts"}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GuestViewPage;
