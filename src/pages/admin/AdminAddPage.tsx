import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "../styles/components.css";
import "../styles/admin.css";
import AdminAddVehSeg from "../../components/admin/AdminAddVehSeg";

const AdminAddPage: React.FC = () => {
  const [selectedVehicle, setVehicle] = useState(true);
  /*   const [selectedTicket, setTicket] = useState(false); */

  /*   const returnSeg = (selectedSeg: string) => {
    if (selectedSeg == "ticket") {
      setTicket(true);
      setVehicle(false);
    } else if (selectedSeg == "vehicle") {
      setTicket(false);
      setVehicle(true);
    }
  }; */

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Add Vehicle</div>
          </IonTitle>
          {/* <IonSegment onIonChange={(e) => returnSeg(e.detail.value!)}>
            <IonSegmentButton value="vehicle">
              <IonLabel>Vehicle</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ticket">
              <IonLabel>Ticket</IonLabel>
            </IonSegmentButton>
          </IonSegment> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {selectedVehicle && <AdminAddVehSeg />}
        {/* 
        {selectedTicket && <AdminAddTicSeg />} */}
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
