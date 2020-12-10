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
import { PostEntry, toEntry } from "../../model";
import { firestore } from "../../firebase";
import RequestCard from "../../components/RequestCard";

const GuestHomePage: React.FC = () => {
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const { organization } = useContext(UserContext);
  const [showNoData, setShow] = useState(false);

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

        <div>
          {showNoData && (
            <div className="ion-text-center centerImg">
              <p>Your organization doesn't send any post yet!</p>
            </div>
          )}

          {postList.map((entry) => (
            <RequestCard
              key={entry.id}
              title={entry.title}
              subtitle={entry.subtitle}
              content={entry.content}
              collection={"posts"}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
