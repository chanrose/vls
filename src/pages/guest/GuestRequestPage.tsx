import React, { useContext, useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { OrgContext, UserContext } from "../../auth";
import { firestore } from "../../firebase";
import { reqList, toEntry } from "../../model";
import RequestCard from "../../components/RequestCard";
interface props {
  organization: string;
}
const GuestRequestPage: React.FC<props> = ({ organization }) => {
  const [reqList, setReqList] = useState<reqList[]>([]);
  const [showNoData, setShow] = useState(true);
  const [idNo, setIdNo] = useState("");

  const [guestEmail, setEmail] = useState("");
  const [guestTele, setTele] = useState("");
  const [requestType, setRequest] = useState("");
  const [messageRemark, setMessage] = useState("");
  const { name } = useContext(UserContext);

  const [showModal, setModal] = useState(false);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("requests")
      .where("name", "==", name);
    return postEntriesRef.onSnapshot(({ docs }) =>
      setReqList(docs.map(toEntry))
    );
  }, [organization, name]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("requests");
    return postEntriesRef.where("name", "==", name).onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [organization]);

  const handleRequest = () => {
    firestore
      .collection("public")
      .doc(organization)
      .collection("requests")
      .add({
        name,
        idNo,
        guestEmail,
        guestTele,
        requestType,
        messageRemark,
      });
    setModal(false);
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Request</div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        {showNoData && (
          <div className="ion-text-center centerImg">
            <img src="/assets/media/noData.svg" height="200 px" />
            <p>You haven't make any request yet!</p>
          </div>
        )}
        <div>
          {" "}
          <OrgContext.Provider value={{ organization: `${organization}` }}>
            {reqList.map((entry) => (
              <RequestCard
                key={entry.id}
                title={entry.requestType}
                subtitle={entry.name}
                content={entry.messageRemark}
                isAdmin={true}
                pId={entry.id}
                collection={"requests"}
              />
            ))}
          </OrgContext.Provider>
        </div>
        <IonButton expand="block" onClick={() => setModal(true)}>
          Create a new Request
        </IonButton>
        <IonModal isOpen={showModal} onDidDismiss={() => setModal(false)!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Create new request</IonTitle>

              <IonButton
                slot="end"
                fill="clear"
                onClick={() => setModal(false)}
              >
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel>ID No: </IonLabel>
              <IonInput
                value={idNo}
                onIonChange={(e) => setIdNo(e.detail.value!)}
                type="text"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Email: </IonLabel>
              <IonInput
                value={guestEmail}
                onIonChange={(e) => setEmail(e.detail.value!)}
                type="text"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Telephone: </IonLabel>
              <IonInput
                type="text"
                value={guestTele}
                onIonChange={(e) => setTele(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Request: </IonLabel>
              <IonSelect
                placeholder="Select One"
                value={requestType}
                onIonChange={(e) => setRequest(e.detail.value)}
              >
                <IonSelectOption value="Make driver license">
                  Make driver license
                </IonSelectOption>
                <IonSelectOption value="Renew driver license">
                  Renew driver license
                </IonSelectOption>
                <IonSelectOption value="Renew Tax and Insurance">
                  Renew tax and insurance
                </IonSelectOption>
                <IonSelectOption value="Others">Others</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Remark: </IonLabel>
              <IonTextarea
                rows={3}
                value={messageRemark}
                onIonChange={(e) => setMessage(e.detail.value!)}
              />
            </IonItem>
            <div className="ion-text-end">
              <IonButton onClick={handleRequest} color="primary">
                Request
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default GuestRequestPage;
