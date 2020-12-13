import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonProgressBar,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/components.css";
import "../styles/admin.css";
import { UserContext } from "../../auth";
import { firestore } from "../../firebase";
import { reqList, toEntry } from "../../model";
import RequestCard from "../../components/RequestCard";

const AdminNotificationPage: React.FC = () => {
  const { organization } = useContext(UserContext);
  const [reqList, setReqList] = useState<reqList[]>([]);
  const [showNoData, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("requests");
    return postEntriesRef.onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [organization]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("requests");

    return postEntriesRef.onSnapshot(({ docs }) =>
      setReqList(docs.map(toEntry))
    );
  }, [organization]);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Notification</div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {isLoading && (
          <IonProgressBar color="primary" type="indeterminate"></IonProgressBar>
        )}
        {showNoData && (
          <div className="ion-text-center centerImg">
            <img src="/assets/media/noData.svg" height="200 px" />
            <p>You have no notification at a moment</p>
          </div>
        )}

        <div>
          {reqList.map((entry) => (
            <RequestCard
              key={entry.id}
              title={entry.requestType}
              subtitle={`${entry.name}, ${entry.guestEmail}, ${entry.guestTele}`}
              content={entry.messageRemark}
              isAdmin={true}
              pId={entry.id}
              collection={"requests"}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminNotificationPage;
