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
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../auth";
import { firestore } from "../../firebase";
import { PostEntry, toEntry } from "../../model";
import RequestCard from "../RequestCard";



const AdminGuestSeg: React.FC = () => {
  const { organization } = useContext(UserContext);
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setModal] = useState(false);
  const [showNoData, setShow] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("/assets/placeholder.png");
  const fileInputRef = useRef<HTMLInputElement>();
  const [date, setSelectedDate] = useState<string>(`${new Date()}`);

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
    if (event.target.files.length > 0) {
      const file = event.target.files.item(0);
      const pictureUrl1 = URL.createObjectURL(file);
      console.log("Created URL:", pictureUrl1);
      setPictureUrl(pictureUrl1);
    }
  };

  const handlePictureClick = async () => {
    // fileInputRef.current.click();
    if (isPlatform("capacitor")) {
      try {
        const photo = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt,
          width: 600,
        });
        setPictureUrl(photo.webPath);
      } catch (error) {
        console.log("Camera error:", error);
      }
    } else {
      fileInputRef.current.click();
    }
  };

  const handleAdd = () => {
    const entryData = {
      subtitle,
      title,
      content,
      date,
      pictureUrl
    }
/*     postEntriesRef.add({
      subtitle,
      title,
      content,
      date,
      pictureUrl
    }); */
    if (!pictureUrl.startsWith("/assets")) {
      entryData.pictureUrl = await savePicture(pictureUrl, userId);
    }
    const entryRef = await postEntriesRef.add(entryData);
    setModal(false);
  };
  return (
    <div>
      {showNoData && (
        <div className="ion-text-center centerImg">
          <img src="/assets/media/noData.svg" height="200 px" />
          <p>You haven't added any posts yet</p>
        </div>
      )}

      {postList.map((entry) => (
        <RequestCard
          key={entry.id}
          title={entry.title}
          subtitle={entry.subtitle}
          content={entry.content}
          isAdmin={true}
          pId={entry.id}
          collection={"posts"}
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
          <IonLabel position="stacked">Picture</IonLabel> <br />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              hidden
            />
            <img
              onClick={handlePictureClick}
              src={pictureUrl}
              alt="placeholder"
              style={{ cursor: "pointer" }}
            />
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
