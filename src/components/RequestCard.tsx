import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonIcon,
  IonInput,
  IonRow,
  IonText,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { UserContext } from "../auth";
import { firestore } from "../firebase";
import "../pages/styles/admin.css";

interface props {
  title: string;
  subtitle: string;
  content: string;
  isAdmin?: boolean;
  pId?: string;
  collection?: string;
}
const RequestCard: React.FC<props> = ({
  title,
  subtitle,
  content,
  isAdmin,
  pId,
  collection,
}) => {
  const [eTitle, setTitle] = useState(title);
  const [eSubtitle, setSubtitle] = useState(subtitle);
  const [eContent, setContent] = useState(content);
  const { organization } = useContext(UserContext);
  const [isUpdating, setUpdate] = useState(false);
  const [editReq, setEdit] = useState(false);

  const handleEdit = () => {
    setUpdate(!isUpdating);
    if (collection === "requests") {
      setEdit(editReq);
    }
  };

  const handleUpdate = async () => {
    const announcementRef = firestore
      .collection("public")
      .doc(organization)
      .collection(collection!)
      .doc(pId);
    if (eTitle !== title) await announcementRef.update({ title: eTitle });
    if (eSubtitle !== subtitle)
      await announcementRef.update({ subtitle: eSubtitle });
    if (eContent !== content)
      await announcementRef.update({ content: eContent });
    if (collection === "requests") {
      if (eContent !== content)
        await announcementRef.update({ messageRemark: eContent });

      if (eTitle !== title)
        await announcementRef.update({ requestType: eTitle });
    }

    handleEdit();
  };

  const handleDelete = () => {
    firestore
      .collection("public")
      .doc(organization)
      .collection(collection!)
      .doc(pId)
      .delete();
  };
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          {!isUpdating && <IonText>{subtitle}</IonText>}
          {isUpdating && (
            <IonInput
              placeholder={eSubtitle}
              value={eSubtitle}
              type="text"
              onIonChange={(e) => setSubtitle(e.detail.value!)}
            />
          )}
        </IonCardSubtitle>
        <IonCardTitle>
          {!isUpdating && <IonText>{title}</IonText>}
          {isUpdating && (
            <IonInput
              placeholder={eTitle}
              value={eTitle}
              type="text"
              onIonChange={(e) => setTitle(e.detail.value!)}
            />
          )}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {!isUpdating && <IonText>{content}</IonText>}
        {isUpdating && (
          <IonInput
            placeholder={eContent}
            value={eContent}
            type="text"
            onIonChange={(e) => setContent(e.detail.value!)}
          />
        )}
        <br />
      </IonCardContent>
      {isAdmin && (
        <IonRow>
          <IonCol>
            <IonButton fill="clear" onClick={handleEdit}>
              {!isUpdating && "Edit"} {isUpdating && "Cancel"}
            </IonButton>
          </IonCol>
          <IonCol>
            {!isUpdating && (
              <div className="ion-text-end">
                <IonButton fill="clear" onClick={handleDelete}>
                  <IonIcon color="danger" icon={trash} />
                </IonButton>
              </div>
            )}
            {isUpdating && (
              <div className="ion-text-end">
                <IonButton fill="clear" onClick={handleUpdate}>
                  Update
                </IonButton>
              </div>
            )}
          </IonCol>
        </IonRow>
      )}
    </IonCard>
  );
};

export default RequestCard;
