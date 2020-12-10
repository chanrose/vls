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
      <IonItem>
        <IonLabel>Sticker No.</IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            value={sticker}
            onIonChange={(e) => setSticker(e.detail.value!)}
          />{" "}
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Owner: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            slot="end"
            type="text"
            value={vehicleOwner}
            onIonChange={(e) => setOwner(e.detail.value!)}
          />
        </div>
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
        <div className="ion-text-end">
          <IonInput
            type="text"
            slot="end"
            value={idNo}
            onIonChange={(e) => setIdNo(e.detail.value!)}
          />{" "}
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Email: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            slot="end"
            value={ownerEmail}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </div>
      </IonItem>
      <IonItem>
        <IonLabel>Phone: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            slot="end"
            value={ownerTele}
            onIonChange={(e) => setTele(e.detail.value!)}
          />
        </div>
      </IonItem>
      <IonItem>
        <IonLabel>Driving License: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          placeholder="Select Date"
          slot="end"
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
        <div className="ion-text-end">
          <IonInput
            type="text"
            slot="end"
            value={vehiclePlate}
            onIonChange={(e) => setPlate(e.detail.value!)}
          />{" "}
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Province: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            value={province}
            slot="end"
            onIonChange={(e) => setProvince(e.detail.value!)}
          />{" "}
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Brand: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            value={vehicleBrand}
            slot="end"
            onIonChange={(e) => setBrand(e.detail.value!)}
          />
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Model: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            value={vehicleModel}
            slot="end"
            onIonChange={(e) => setModel(e.detail.value!)}
          />
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Colour: </IonLabel>
        <div className="ion-text-end">
          <IonInput
            type="text"
            slot="end"
            value={vehicleColour}
            onIonChange={(e) => setColour(e.detail.value!)}
          />
        </div>
      </IonItem>

      <IonItem>
        <IonLabel>Tax Expire: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          placeholder="Select Date"
          slot="end"
          value={taxExpire}
          onIonChange={(e) => setTax(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel>Insurance Expire: </IonLabel>
        <IonDatetime
          max="2030-12-20"
          slot="end"
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
          <IonSelectOption value="True">Yes</IonSelectOption>
          <IonSelectOption value="False">No</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Greenbook Owner: </IonLabel>
        <IonInput
          type="text"
          slot="end"
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
