import { IonHeader, IonTitle } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const AnnouncementCard: React.FC<ContainerProps> = ({ name }) => {
  return (
      
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default AnnouncementCard;
