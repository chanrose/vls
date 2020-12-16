import { IonButton, IonImg } from "@ionic/react";
import React, { useContext } from "react";
import "../../pages/styles/admin.css";

interface props {
  name: string;
}
const AdminHomeSeg: React.FC<props> = ({ name }) => {
  return (
    <div>
      <div>
        <IonImg
          className="imageSize centerScreen"
          src="/assets/icon/app2Logo.png"
        />
        <br />
        <br />
      </div>
      <div className="ion-text-start">
        Welcome {name}, you can proceed to post with Guest's Post or add vehicle
        simply through the View Page{" "}
      </div>
      <div className="ion-text-end">
        <IonButton routerLink="/admin/viewlist/" fill="clear">
          View List
        </IonButton>
      </div>
    </div>
  );
};

export default AdminHomeSeg;
