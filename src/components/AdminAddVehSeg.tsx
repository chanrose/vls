import {
  IonButton,
  IonCol,
  IonDatetime,
  IonInput,
  IonItem,
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
    });
    history.goBack();
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

  return (
    <IonList>
      <IonItem>
        <IonInput
          type="text"
          value={stickerId}
          onIonChange={(e) => setSticker(e.detail.value!)}
          placeholder="Sticker No. "
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={vehicleOwner}
          onIonChange={(e) => setOwner(e.detail.value!)}
          placeholder="Vehicle Owner"
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={vehiclePlate}
          onIonChange={(e) => setPlate(e.detail.value!)}
          placeholder="Vehicle Plate"
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={province}
          onIonChange={(e) => setProvince(e.detail.value!)}
          placeholder="Province"
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={vehicleBrand}
          onIonChange={(e) => setBrand(e.detail.value!)}
          placeholder="Brand"
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={vehicleModel}
          onIonChange={(e) => setModel(e.detail.value!)}
          placeholder="Model"
        />
      </IonItem>

      <IonItem>
        <IonInput
          type="text"
          value={vehicleColour}
          onIonChange={(e) => setColour(e.detail.value!)}
          placeholder="Colour"
        />
      </IonItem>

      <IonItem>
        <IonDatetime max="2030-12-20"
          value={taxExpire}
          onIonChange={(e) => setTax(e.detail.value!)}
          placeholder="Tax Expired"
        />
      </IonItem>

      <IonItem>
        <IonDatetime max="2030-12-20"
          value={insuranceExpire}
          onIonChange={(e) => setInsurance(e.detail.value!)}
          placeholder="Insurance Expired"
        />
      </IonItem>

      <IonItem>
      <IonLabel>Have Green Book</IonLabel>
      <IonSelect value={hasGreenBook} placeholder="Select One" onIonChange={e => setGreenBook(e.detail.value)}>
        <IonSelectOption value="true">Yes</IonSelectOption>
        <IonSelectOption value="false">No</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
    <IonInput
      type="text"
      value={greenBookOwner}
      onIonChange={(e) => setGB(e.detail.value!)}
      placeholder="Greenbook owner"
    />
  </IonItem>
  

      <IonItem>
        <IonInput
          type="text"
          value={ownerEmail}
          onIonChange={(e) => setEmail(e.detail.value!)}
          placeholder="Email"
        />
      </IonItem>
      <IonItem>
        <IonInput
          type="text"
          value={ownerTele}
          onIonChange={(e) => setTele(e.detail.value!)}
          placeholder="Telephone"
        />
      </IonItem>

      <IonItem>
      <IonLabel>Who is the owner?</IonLabel>
      <IonSelect value={ownerRole} placeholder="Select One" onIonChange={e => setRole(e.detail.value)}>
        <IonSelectOption value="student">Student</IonSelectOption>
        <IonSelectOption value="faculty">Faculty</IonSelectOption>
        <IonSelectOption value="other">Others</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
    <IonLabel>Vehicle Type</IonLabel>
    <IonSelect value={vehicleType} placeholder="Select One" onIonChange={e => setType(e.detail.value)}>
      <IonSelectOption value="Motorbike">Motorbike</IonSelectOption>
      <IonSelectOption value="Car">Car</IonSelectOption>
      <IonSelectOption value="Other">Others</IonSelectOption>
    </IonSelect>
  </IonItem>

      <IonItem>
        <IonTextarea
          value={messageRemark}
          onIonChange={(e) => setMessage(e.detail.value!)}
          placeholder="Remark"
        />
      </IonItem>
      <IonRow>
        <IonCol>
          <IonButton fill="clear">Cancel</IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            onClick={handleSave}
            className="floatRight"
            routerLink="/admin/viewlist/"
            fill="clear"
          >
            Add
          </IonButton>
        </IonCol>
      </IonRow>
    </IonList>
  );
};

export default AdminAddVehSeg;
