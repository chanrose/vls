import {
  IonButton,
  IonCol,
  IonDatetime,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useAuth } from "../../auth";
import { firestore } from "../../firebase";
import "../../pages/styles/admin.css";

interface props {
  type?: string;
}

const AdminAddVehSeg: React.FC = () => {
  const match = useRouteMatch<props>();
  const { type } = match.params;
  const { userId } = useAuth();
  const history = useHistory();
  const handleSave = () => {
    firestore.collection("users").doc(userId).collection("entries").add({
      sticker,
      vehicleOwner,
      ownerRole,
      idNo,
      ownerEmail,
      ownerTele,
      drivingExpire,
      vehicleType,
      vehiclePlate,
      province,
      vehicleBrand,
      vehicleModel,
      vehicleColour,
      taxExpire,
      insuranceExpire,
      hasGreenBook,
      greenBookOwner,
      messageRemark,
    });
  };
  const [sticker, setSticker] = useState("");
  const [vehicleOwner, setOwner] = useState("");
  const [ownerRole, setRole] = useState("");
  const [idNo, setIdNo] = useState("");
  const [ownerEmail, setEmail] = useState("");
  const [ownerTele, setTele] = useState("");
  const [drivingExpire, setDrivingExpire] = useState("");
  const [vehicleType, setType] = useState(`${type}`);
  const [vehiclePlate, setPlate] = useState("");
  const [province, setProvince] = useState("");
  const [vehicleBrand, setBrand] = useState("");
  const [vehicleModel, setModel] = useState("");
  const [vehicleColour, setColour] = useState("");
  const [taxExpire, setTax] = useState("");
  const [insuranceExpire, setInsurance] = useState("");
  const [hasGreenBook, setGreenBook] = useState("");
  const [greenBookOwner, setGB] = useState("");
  const [messageRemark, setMessage] = useState("");

  return (
    <IonList>
      <IonItemDivider>
        <IonLabel>Owner Information: </IonLabel>
      </IonItemDivider>
      <br />
      <IonItem>
        <div>
          <IonLabel position="stacked">Sticker No.</IonLabel>
          <IonInput
            type="text"
            value={sticker}
            onIonChange={(e) => setSticker(e.detail.value!)}
            placeholder="MM001"
          />
        </div>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Owner: </IonLabel>
        <IonInput
          type="text"
          value={vehicleOwner}
          onIonChange={(e) => setOwner(e.detail.value!)}
          placeholder="John Beth"
        />
      </IonItem>
      <br />
      <IonItem>
        <IonLabel>Who is the owner?</IonLabel>
        <IonSelect
          value={ownerRole}
          placeholder="Select One"
          onIonChange={(e) => setRole(e.detail.value)}
        >
          <IonSelectOption value="Student">Student</IonSelectOption>
          <IonSelectOption value="Faculty">Faculty</IonSelectOption>
          <IonSelectOption value="AIMS">AIMS</IonSelectOption>
          <IonSelectOption value="Other">Others</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">ID No: </IonLabel>
        <IonInput
          type="text"
          value={idNo}
          onIonChange={(e) => setIdNo(e.detail.value!)}
          placeholder="203000151"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Email: </IonLabel>
        <IonInput
          type="text"
          value={ownerEmail}
          onIonChange={(e) => setEmail(e.detail.value!)}
          placeholder="johnbeth@gmail.com"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Phone: </IonLabel>
        <IonInput
          type="text"
          value={ownerTele}
          onIonChange={(e) => setTele(e.detail.value!)}
          placeholder="0615488942"
        />
      </IonItem>
      <IonItem>
        <IonLabel>Driving License: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          placeholder="Select Date"
          value={drivingExpire}
          onIonChange={(e) => setDrivingExpire(e.detail.value!)}
        />
      </IonItem>
      <IonItem>
        <IonLabel>Vehicle Type</IonLabel>
        <IonSelect
          value={vehicleType}
          placeholder="Select One"
          onIonChange={(e) => setType(e.detail.value)}
        >
          <IonSelectOption value="Motorbike">Motorbike</IonSelectOption>
          <IonSelectOption value="Car">Car</IonSelectOption>
          <IonSelectOption value="Other">Others</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Plate: </IonLabel>
        <IonInput
          type="text"
          value={vehiclePlate}
          onIonChange={(e) => setPlate(e.detail.value!)}
          placeholder="7788"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Province: </IonLabel>
        <IonInput
          type="text"
          value={province}
          onIonChange={(e) => setProvince(e.detail.value!)}
          placeholder="Saraburi"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Brand: </IonLabel>
        <IonInput
          type="text"
          value={vehicleBrand}
          onIonChange={(e) => setBrand(e.detail.value!)}
          placeholder="Honda"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Model: </IonLabel>
        <IonInput
          type="text"
          value={vehicleModel}
          onIonChange={(e) => setModel(e.detail.value!)}
          placeholder="CTX 2020"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Colour: </IonLabel>
        <IonInput
          type="text"
          value={vehicleColour}
          onIonChange={(e) => setColour(e.detail.value!)}
          placeholder="Red"
        />
      </IonItem>

      <IonItem>
        <IonLabel>Tax Expire: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          placeholder="Select Date"
          value={taxExpire}
          onIonChange={(e) => setTax(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Insurance Expire: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          value={insuranceExpire}
          onIonChange={(e) => setInsurance(e.detail.value!)}
          placeholder="Select Date"
        />
      </IonItem>

      <IonItem>
        <IonLabel>Have Green Book</IonLabel>
        <IonSelect
          value={hasGreenBook}
          placeholder="Select One"
          onIonChange={(e) => setGreenBook(e.detail.value)}
        >
          <IonSelectOption value="True">Yes</IonSelectOption>
          <IonSelectOption value="False">No</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Greenbook Owner: </IonLabel>
        <IonInput
          type="text"
          value={greenBookOwner}
          onIonChange={(e) => setGB(e.detail.value!)}
          placeholder="Jason Bethlem"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Remark: </IonLabel>
        <IonTextarea
          rows={3}
          value={messageRemark}
          onIonChange={(e) => setMessage(e.detail.value!)}
          placeholder="Reminder"
        />
      </IonItem>

      <IonRow>
        <IonCol>
          <IonButton
            onClick={() => history.goBack()}
            fill="clear"
            routerLink="/admin/viewlist/"
          >
            Cancel
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            color="primary"
            onClick={handleSave}
            className="floatRight"
            fill="clear"
            routerLink={"/admin/viewlist/"}
          >
            Add
          </IonButton>
        </IonCol>
      </IonRow>
    </IonList>
  );
};

export default AdminAddVehSeg;
