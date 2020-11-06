import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './styles/GettingStartedPage.css';

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <img src="../media/vlsIcon.png" />
          <IonCard>
            <IonAvatar><img src="../media/vlsIcon.png" /></IonAvatar>
            <IonCardHeader>
             <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
             </IonCardHeader>
            
           
              <IonCardContent>
                
              </IonCardContent>

          </IonCard>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
