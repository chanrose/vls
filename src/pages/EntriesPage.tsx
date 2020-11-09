import React from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useParams } from "react-router";
import entries from "../data";

interface RouterParams {
  id: string;
}

const EntriesPage: React.FC = () => {
  const {id} = useParams<RouterParams>();
  const entry = entries.find((entry) => entry.id === id);
  if (!entry) {
    throw new Error(`No such ID ${id}`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Vehicle</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Ticket</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader><IonCardTitle>Modifying Sticker No. 1 </IonCardTitle></IonCardHeader>
          <IonList>
            <IonItem>
              <IonText>Sticker No. 1</IonText>
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry.vehicleOwner} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry.vehiclePlate} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry.province} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry.brand} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Model" />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Colour" />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Tax Expired" />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Insurance Expired" />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Current Owner" />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Green Book" />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder="Email" />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder="Telephone" />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder="Role" />
            </IonItem>
            <IonItem>
              <IonTextarea placeholder="Remark" />
            </IonItem>

            {/* This is for Issue a ticket */}
            <IonItem>
              <IonText>Ticket Issue No.1</IonText>
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Vehicle License Plate" />
            </IonItem>

            <IonRow>
              <IonCol>
                <IonButton fill="clear">Cancel</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="floatRight" fill="clear">
                  Add
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EntriesPage;
