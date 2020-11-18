import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import "./styles/admin.css";
import AdminAddVehSeg from "../components/AdminAddVehSeg";
import AdminAddTicSeg from "../components/AdminAddTicSeg";

const AdminAddPage: React.FC = () => {
  const [selectedVehicle, setVehicle] = useState(true);
  const [selectedTicket, setTicket] = useState(false);

  const returnSeg = (selectedSeg: string) => {
    if (selectedSeg == "ticket") {
      setTicket(true);
      setVehicle(false);
    } else if (selectedSeg == "vehicle") {
      setTicket(false);
      setVehicle(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment onIonChange={(e) => returnSeg(e.detail.value!)}>
            <IonSegmentButton value="vehicle">
              <IonLabel>Vehicle</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ticket">
              <IonLabel>Ticket</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {selectedVehicle && <AdminAddVehSeg />}
        {selectedTicket && <AdminAddTicSeg />}
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
