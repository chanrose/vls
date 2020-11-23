import React from "react";
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const GuestRequestPage: React.FC = () => {
  const checkboxList = [
    { val: "Make driver license", isChecked: true },
    { val: "Renew driver license", isChecked: false },
    { val: "Renew tax and insurance", isChecked: false },
    { val: "Others", isChecked: false },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Make new request!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList>
          <IonRadioGroup onIonChange={(e) => console.log(e.detail.value)}>
            <IonListHeader>
              <IonLabel>What request do you have?</IonLabel>
            </IonListHeader>
            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox slot="end" value={val} checked={isChecked} />
              </IonItem>
            ))}
          </IonRadioGroup>
          <IonItemDivider>Others</IonItemDivider>
          <IonItem></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GuestRequestPage;
