import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonModal,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { OrgContext, useAuth } from "../../auth";
import { firestore } from "../../firebase";
import { orgList, PostEntry, toOrgList, toPostEntry } from "../../model";
import AnnouncementCard from "../AnnouncementCard";

interface props {
  organId: string;
}

const AdminGuestSeg: React.FC<props> = ({ organId }) => {
  const { userId } = useAuth();
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [orgDetail, setOrg] = useState<orgList>();
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organId)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organId]);

  const handleAdd = () => {
    firestore.collection("public").doc(organId).collection("posts").add({
      subtitle,
      title,
      content,
    });
    setModal(false);
  };
  return (
    <div>
      <OrgContext.Provider value={`${organId}`}>
        {postList.map((entry) => (
          <AnnouncementCard
            key={entry.id}
            title={entry.title}
            subtitle={entry.subtitle}
            content={entry.content}
            isAdmin={true}
            pId={entry.id}
          />
        ))}
      </OrgContext.Provider>
      <IonButton expand="block" onClick={() => setModal(true)}>
        Add New Post
      </IonButton>
      <IonModal isOpen={showModal} onDidDismiss={() => setModal(false)!}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Create a new post</IonTitle>

            <IonButton slot="end" fill="clear" onClick={() => setModal(false)}>
              Close
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>
                <IonInput
                  value={subtitle}
                  onIonChange={(e) => setSubtitle(e.detail.value!)}
                  type="text"
                  placeholder="Card Subtitle"
                />
              </IonCardSubtitle>
              <IonCardTitle>
                <IonInput
                  value={title}
                  onIonChange={(e) => setTitle(e.detail.value!)}
                  type="text"
                  placeholder="Card Title"
                />
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonTextarea
                value={content}
                onIonChange={(e) => setContent(e.detail.value!)}
                placeholder="Fill the content"
              />

              <div className="ion-text-end">
                <IonButton onClick={handleAdd} type="submit">
                  Post
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default AdminGuestSeg;
