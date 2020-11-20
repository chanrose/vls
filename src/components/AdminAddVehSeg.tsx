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
  IonText,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../auth";
import { firestore } from "../firebase";
import { Entry } from "../model";
import "../pages/styles/admin.css";

const AdminAddVehSeg: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const handleSave = () => {
    firestore.collection("users").doc(userId).collection("entries").add({
      sticker: stickerId,
      vehicleOwner: vehicleOwner,
      vehicleType: vehicleType,
      vehiclePlate: vehiclePlate,
      vehicleBrand: vehicleBrand,
      vehicleModel: vehicleModel,
      vehicleColour: vehicleColour,
      taxExpire: taxExpire,
      insuranceExpire: insuranceExpire,
      hasGreenBook: hasGreenBook,
      ownerEmail: ownerEmail,
      ownerTele: ownerTele,
      ownerRole: ownerRole,
      messageRemark: messageRemark,
      province: province,
      greenBookOwner: greenBookOwner,
      drivingExpire: drivingExpire,
    });
  };
  const [stickerId, setSticker] = useState("");
  const [vehicleOwner, setOwner] = useState("");
  const [vehicleType, setType] = useState("");
  const [vehiclePlate, setPlate] = useState("");
  const [vehicleBrand, setBrand] = useState("");
  const [vehicleModel, setModel] = useState("");
  const [vehicleColour, setColour] = useState("");
  const [taxExpire, setTax] = useState("");
  const [insuranceExpire, setInsurance] = useState("");
  const [hasGreenBook, setGreenBook] = useState("");
  const [ownerEmail, setEmail] = useState("");
  const [ownerTele, setTele] = useState("");
  const [ownerRole, setRole] = useState("");
  const [messageRemark, setMessage] = useState("");
  const [greenBookOwner, setGB] = useState("");
  const [province, setProvince] = useState("");
  const [idNo, setIdNo] = useState("");
  const [drivingExpire, setDrivingExpire] = useState("");

  return (
    <IonList>
      <IonItemDivider>
        <IonLabel>Owner Information: </IonLabel>
      </IonItemDivider>
      <IonItem>
        <IonLabel>Sticker No.</IonLabel>
        <IonInput
          type="text"
          value={stickerId}
          onIonChange={(e) => setSticker(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Owner: </IonLabel>
        <IonInput
          type="text"
          value={vehicleOwner}
          onIonChange={(e) => setOwner(e.detail.value!)}
        />
      </IonItem>
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
        <IonLabel>ID No: </IonLabel>
        <IonInput
          type="text"
          value={idNo}
          onIonChange={(e) => setIdNo(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Email: </IonLabel>
        <IonInput
          type="text"
          value={ownerEmail}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
      </IonItem>
      <IonItem>
        <IonLabel>Phone: </IonLabel>
        <IonInput
          type="text"
          value={ownerTele}
          onIonChange={(e) => setTele(e.detail.value!)}
        />
      </IonItem>
      <IonItem>
        <IonLabel>Driving License: </IonLabel>
        <IonDatetime
          max="2030-12-20"
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
        <IonLabel>Plate: </IonLabel>
        <IonInput
          type="text"
          value={vehiclePlate}
          onIonChange={(e) => setPlate(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Province: </IonLabel>
        <IonInput
          type="text"
          value={province}
          onIonChange={(e) => setProvince(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Brand: </IonLabel>
        <IonInput
          type="text"
          value={vehicleBrand}
          onIonChange={(e) => setBrand(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Model: </IonLabel>
        <IonInput
          type="text"
          value={vehicleModel}
          onIonChange={(e) => setModel(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Colour: </IonLabel>
        <IonInput
          type="text"
          value={vehicleColour}
          onIonChange={(e) => setColour(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Tax Expire: </IonLabel>
        <IonDatetime
          max="2030-12-20"
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
        />
      </IonItem>

      <IonItem>
        <IonLabel>Have Green Book</IonLabel>
        <IonSelect
          value={hasGreenBook}
          placeholder="Select One"
          onIonChange={(e) => setGreenBook(e.detail.value)}
        >
          <IonSelectOption value="true">Yes</IonSelectOption>
          <IonSelectOption value="false">No</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Greenbook Owner: </IonLabel>
        <IonInput
          type="text"
          value={greenBookOwner}
          onIonChange={(e) => setGB(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Remark: </IonLabel>
        <IonTextarea
          value={messageRemark}
          onIonChange={(e) => setMessage(e.detail.value!)}
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
