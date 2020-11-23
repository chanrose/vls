import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { useAuth } from "../auth";
import "../pages/styles/admin.css";

interface props {
  title: string;
  subtitle: string;
  content: string;
}
const AnnouncementCard: React.FC<props> = ({ title, subtitle, content }) => {
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
      </IonCardContent>
    </IonCard>
  );
};

export default AnnouncementCard;
