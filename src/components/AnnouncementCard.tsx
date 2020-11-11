import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonHeader, IonImg, IonInput, IonRow, IonTextarea, IonTitle } from '@ionic/react';
import React from 'react';
import '../pages/styles/admin.css';

interface ContainerProps {
  name: string;
}

const AnnouncementCard: React.FC<ContainerProps> = ({ name }) => {
  return (
      
    
      <IonCard className="announcementCard">
      <IonCardHeader>
        <IonImg src="https://picsum.photos/seed/picsum/536/354" />
            <IonCardSubtitle><IonInput type="text" placeholder="Card Subtitle" /></IonCardSubtitle>
            <IonCardTitle><IonInput type="text" placeholder="Card Title" /></IonCardTitle>
          </IonCardHeader>
          <IonCardContent><IonTextarea placeholder="Fill the content" />
            </IonCardContent>
            <IonRow>
              <IonCol><IonButton> Cancel </IonButton></IonCol>
              <IonCol><IonButton type="submit"> Post </IonButton></IonCol>
            </IonRow>
      </IonCard>
  
  );
};

export default AnnouncementCard;
