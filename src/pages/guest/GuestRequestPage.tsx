import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const GuestRequestPage: React.FC = () => {
   
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         <IonTitle>Make new request!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        
        <IonList>
          <IonRadioGroup onIonChange={e => console.log(e.detail.value)}>
            <IonListHeader>
              <IonLabel>What request do you have?</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Make driver license</IonLabel>
              <IonRadio slot="start" value="biff" />
            </IonItem>

            <IonItem>
              <IonLabel>Renew driver license</IonLabel>
              <IonRadio slot="start" value="griff" />
            </IonItem>

            <IonItem>
              <IonLabel>Renew tax and insurance</IonLabel>
              <IonRadio slot="start" value="buford" />
            </IonItem>
            <IonItem>
              <IonLabel>Others</IonLabel>
              <IonRadio slot="start" value="buford" />
            </IonItem>

          </IonRadioGroup>
          <IonItemDivider>Others</IonItemDivider>
          <IonItem></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GuestRequestPage;
