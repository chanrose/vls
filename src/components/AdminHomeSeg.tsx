import { IonImg } from "@ionic/react";
import React, { useState } from "react";
import "../pages/styles/admin.css";

const AdminHomeSeg: React.FC = () => {
  return (
    <div>
      <IonImg
        className="imageSize"
        src="https://raw.githubusercontent.com/chanrose/vls/main/public/assets/icon/app2Logo.png"
      />
    </div>
  );
};

export default AdminHomeSeg;
