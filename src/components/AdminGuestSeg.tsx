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
import { useAuth } from "../auth";
import { firestore } from "../firebase";
import { PostEntry, toPostEntry } from "../model";
import AnnouncementCard from "./AnnouncementCard";
import "./ExploreContainer.css";

const AdminGuestSeg: React.FC = () => {
  const { userId } = useAuth();
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleAdd = () => {
    firestore.collection("users").doc(userId).collection("posts").add({
      subtitle: subtitle,
      title: title,
      content: content,
    });
    setModal(false);
  };
  const [showModal, setModal] = useState(false);

  const [postEntries, setPostEntries] = useState<PostEntry[]>([]);
  useEffect(() => {
    const postEntriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostEntries(docs.map(toPostEntry))
    );
    /*     postEntriesRef
      .get()
      .then(({ docs }) => setPostEntries(docs.map(toPostEntry))); */
  }, [userId]);

  return (
    <div>
      {postEntries.map((entry) => (
        <AnnouncementCard
          key={entry.id}
          title={entry.title}
          subtitle={entry.subtitle}
          content={entry.content}
        />
      ))}
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
