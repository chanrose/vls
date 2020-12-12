import { Camera, CameraResultType, CameraSource } from "@capacitor/core";
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
  IonLabel,
  IonModal,
  IonProgressBar,
  IonTextarea,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useAuth, UserContext } from "../../auth";
import { firestore, storage } from "../../firebase";
import { PostEntry, toEntry } from "../../model";
import RequestCard from "../RequestCard";

async function savePicture(blobUrl: any, userId: any) {
  const pictureRef = storage.ref(`/users/${userId}/pictures/${Date.now()}`);
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const snapshot = await pictureRef.put(blob);
  const url = await snapshot.ref.getDownloadURL();
  return url;
}

const AdminGuestSeg: React.FC = () => {
  const { userId } = useAuth();
  const { organization } = useContext(UserContext);
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setModal] = useState(false);
  const [showNoData, setShow] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("/assets/media/photo.svg");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [date, setSelectedDate] = useState<string>(`${new Date()}`);
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const postEntriesRef = firestore
    .collection("public")
    .doc(organization)
    .collection("posts");

  useEffect(() => {
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toEntry))
    );
  }, [organization]);

  useEffect(() => {
    setLoading(true);
    return postEntriesRef.onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [organization]);

  useEffect(
    () => () => {
      if (pictureUrl.startsWith("blob:")) {
        URL.revokeObjectURL(pictureUrl);
      }
    },
    [pictureUrl]
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files!.length > 0) {
      const file = event.target.files!.item(0);
      const pictureUrl = URL.createObjectURL(file);
      console.log("file:", pictureUrl);
      setPictureUrl(pictureUrl);
    }
  };

  const handlePictureClick = async () => {
    if (isPlatform("capacitor")) {
      try {
        const photo = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          width: 600,
        });
        setPictureUrl(photo.webPath!);
      } catch (error) {
        console.log("Camera error:", error);
      }
    } else {
      fileInputRef.current!.click();
    }
  };

  const handleAdd = async () => {
    setLoading(true);
    const entryData = {
      subtitle,
      title,
      content,
      date,
      pictureUrl,
    };
    if (!pictureUrl.startsWith("/assets")) {
      entryData.pictureUrl = await savePicture(pictureUrl, userId);
    }
    /*  postEntriesRef.add({
      subtitle,
      title,
      content,
      date,
      pictureUrl
    }); */

    const entryRef = await postEntriesRef.add(entryData);
    setModal(false);
    setLoading(false);
  };
  return (
    <div>
      {isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}

      {showNoData && (
        <div className="ion-text-center centerImg">
          <img src="/assets/media/noData.svg" height="200 px" />
          <p>You haven't added any posts yet</p>
        </div>
      )}
      <IonButton expand="block" onClick={() => setModal(true)}>
        Add New Post
      </IonButton>
      {postList.map((entry) => (
        <RequestCard
          key={entry.id}
          title={entry.title}
          subtitle={entry.subtitle}
          picture={entry.pictureUrl}
          content={entry.content}
          isAdmin={true}
          pId={entry.id}
          collection={"posts"}
        />
      ))}

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
                rows={4}
                onIonChange={(e) => setContent(e.detail.value!)}
                placeholder="Fill the content"
              />
              <br />
              <IonLabel>Take or Upload Picture</IonLabel> <br />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                hidden
              />
              <img
                src={pictureUrl}
                alt="placeholder"
                height="100 px"
                onClick={handlePictureClick}
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
