import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import React, { useState } from "react";
import { useAuth } from "../auth";
import "../pages/styles/admin.css";

interface props {
  title: string;
  subtitle: string;
  content: string;
  isAdmin?: boolean;
}
const AnnouncementCard: React.FC<props> = ({
  title,
  subtitle,
  content,
  isAdmin,
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonText>{subtitle}</IonText>
        </IonCardSubtitle>
        <IonCardTitle>
          <IonText>{title}</IonText>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>{content}</IonText>
        <br />
      </IonCardContent>
      {isAdmin && (
        <IonRow>
          <IonCol>
            <IonButton fill="clear">Edit</IonButton>
          </IonCol>
          <IonCol>
            <div className="ion-text-end">
              <IonButton fill="clear">
                <IonIcon color="danger" icon={trash} />
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
      )}
    </IonCard>
  );
};

export default AnnouncementCard;
