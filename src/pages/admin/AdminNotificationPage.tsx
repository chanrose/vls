import React, { useContext, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import "../styles/admin.css";
import { UserContext } from "../../auth";
import { firestore } from "../../firebase";
import { reqList, toEntry } from "../../model";
import RequestCard from "../../components/RequestCard";

const AdminNotificationPage: React.FC = () => {
  const { organization } = useContext(UserContext);
  const [reqList, setReqList] = useState<reqList[]>([]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("requests");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setReqList(docs.map(toEntry))
    );
  }, [organization]);

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
