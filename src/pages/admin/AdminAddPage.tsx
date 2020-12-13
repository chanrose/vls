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

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Add Vehicle</div>
          </IonTitle>
        
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {selectedVehicle && <AdminAddVehSeg />}
      </IonContent>
    </IonPage>
  );
};

export default AdminAddPage;
