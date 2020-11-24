import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useHistory, useRouteMatch } from "react-router";
import { useAuth } from "../auth";
import { Entry, toEntry } from "../model";
import { firestore } from "../firebase";

interface RouterParams {
  id: string;
}

const formatDate = (inputDate: string) => {
  if (inputDate === "") return "Nan";
  const dayjs = require("dayjs");
  const date = dayjs(inputDate);
  date.toISOString();
  return date.format("MMM DD, YYYY");
};

const EntriesPage: React.FC = () => {
  const { userId } = useAuth();
  const match = useRouteMatch<RouterParams>();
  const { id } = match.params;
  const [entry, setEntry] = useState<Entry>();
  const history = useHistory();

  useEffect(() => {
    const entryRef = firestore
      .collection("users")
      .doc(userId)
      .collection("entries")
      .doc(id);
    entryRef.get().then((doc) => {
      setEntry(toEntry(doc));
      if (entry) {
        updateData();
      }
    });
    console.log("EntryRef: ", entryRef);
  }, [userId]);

  console.log("Entry.id:", entry?.id);
  console.log(entry);

  const handleDelete = () => {
    const entryRef = firestore
      .collection("users")
      .doc(userId)
      .collection("entries")
      .doc(id);
    entryRef.delete();
    history.goBack();
  };

  /* Updating Existing entry*/
  const handleUpdate = () => {
    firestore
      .collection("users")
      .doc(userId)
      .collection("entries")
      .doc(id)
      .set({
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
  const [idNo, setIdNo] = useState("");
  const [drivingExpire, setDrivingExpire] = useState("");
  const updateData = () => {
    setSticker(entry?.sticker ?? "Not Filled");
    setOwner(entry?.vehicleOwner ?? "Not Filled");
    setRole(entry?.ownerRole ?? "Not Filled");
    setIdNo(entry?.idNo ?? "Not Filled");
    setEmail(entry?.ownerEmail ?? "Not Filled");
    setTele(entry?.ownerTele ?? "Not Filled");
    setDrivingExpire(entry?.drivingExpire ?? "Not Filled");
    setType(entry?.vehicleType ?? "Not Filled");
    setPlate(entry?.vehiclePlate ?? "Not Filled");
    setProvince(entry?.province ?? "Not Filled");
    setBrand(entry?.vehicleBrand ?? "Not Filled");
    setModel(entry?.vehicleModel ?? "Not Filled");
    setColour(entry?.vehicleColour ?? "Not Filled");
    setTax(entry?.taxExpire ?? "Not Filled");
    setInsurance(entry?.insuranceExpire ?? "Not Filled");
    setGreenBook(entry?.hasGreenBook ?? "Not Filled");
    setGB(entry?.greenBookOwner ?? "Not Filled");
    setMessage(entry?.messageRemark ?? "Not Filled");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            {entry?.vehicleBrand} {entry?.vehicleModel}{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonList>
            <IonItem>
              <IonLabel>Sticker No. </IonLabel>
              <IonInput
                placeholder={entry?.sticker}
                type="text"
                value={stickerId}
                onIonChange={(e) => setSticker(e.detail.value!)}
              />
            </IonItem>
            <IonItemDivider>
              <IonLabel>Owner Information: </IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>Owner: </IonLabel>
              <IonInput
                type="text"
                value={vehicleOwner}
                onIonChange={(e) => setOwner(e.detail.value!)}
                placeholder={entry?.vehicleOwner}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Who is the owner?</IonLabel>
              <IonSelect
                value={ownerRole}
                onIonChange={(e) => setRole(e.detail.value)}
                placeholder={entry?.ownerRole}
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
                value={idNo}
                onIonChange={(e) => setIdNo(e.detail.value!)}
                type="text"
                placeholder={entry?.idNo}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Email: </IonLabel>
              <IonInput
                value={ownerEmail}
                onIonChange={(e) => setEmail(e.detail.value!)}
                type="text"
                placeholder={entry?.ownerEmail}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Telephone: </IonLabel>
              <IonInput
                type="text"
                value={ownerTele}
                onIonChange={(e) => setTele(e.detail.value!)}
                placeholder={entry?.ownerTele}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Driving License: </IonLabel>
              <IonDatetime
                max="2040-12-20"
                value={drivingExpire}
                onIonChange={(e) => setDrivingExpire(e.detail.value!)}
                placeholder={formatDate(entry?.drivingExpire!)}
              />
            </IonItem>
            <IonItemDivider>
              <IonLabel>Vehicle Information:</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Vehicle type: </IonLabel>
              <IonSelect
                placeholder={entry?.vehicleType}
                value={vehicleType}
                onIonChange={(e) => setType(e.detail.value)}
              >
                {" "}
                <IonSelectOption value="Motorbike">Motorbike</IonSelectOption>
                <IonSelectOption value="Car">Car</IonSelectOption>
                <IonSelectOption value="Other">Others</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Plate: </IonLabel>
              <IonInput
                value={vehiclePlate}
                onIonChange={(e) => setPlate(e.detail.value!)}
                type="text"
                placeholder={entry?.vehiclePlate}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Province: </IonLabel>
              <IonInput
                value={province}
                onIonChange={(e) => setProvince(e.detail.value!)}
                type="text"
                placeholder={entry?.province}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Brand: </IonLabel>
              <IonInput
                value={vehicleBrand}
                onIonChange={(e) => setBrand(e.detail.value!)}
                type="text"
                placeholder={entry?.vehicleBrand}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Model: </IonLabel>
              <IonInput
                value={vehicleModel}
                onIonChange={(e) => setModel(e.detail.value!)}
                type="text"
                placeholder={entry?.vehicleModel}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Colour: </IonLabel>
              <IonInput
                value={vehicleColour}
                onIonChange={(e) => setColour(e.detail.value!)}
                type="text"
                placeholder={entry?.vehicleColour}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Tax Expire: </IonLabel>
              <IonDatetime
                max="2040-12-20"
                value={taxExpire}
                onIonChange={(e) => setTax(e.detail.value!)}
                placeholder={formatDate(entry?.taxExpire!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Insurance Expire: </IonLabel>
              <IonDatetime
                max="2040-12-20"
                value={insuranceExpire}
                onIonChange={(e) => setInsurance(e.detail.value!)}
                placeholder={formatDate(entry?.insuranceExpire!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Has greenbook? </IonLabel>
              <IonSelect
                value={hasGreenBook}
                placeholder={entry?.hasGreenBook}
                onIonChange={(e) => setGreenBook(e.detail.value)}
              >
                <IonSelectOption value="true">Yes</IonSelectOption>
                <IonSelectOption value="false">No</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Greenbook Name: </IonLabel>
              <IonInput
                value={greenBookOwner}
                onIonChange={(e) => setGB(e.detail.value!)}
                type="text"
                placeholder={entry?.greenBookOwner}
              />
            </IonItem>

            <IonItem>
              <IonLabel>Remark: </IonLabel>
              <IonTextarea
                value={messageRemark}
                onIonChange={(e) => setMessage(e.detail.value!)}
                placeholder={entry?.messageRemark}
              />
            </IonItem>

            {/*   This is for Issue a ticket 
            <IonItem>
              <IonText>Ticket Issue No.1</IonText>
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Vehicle License Plate" />
            </IonItem>
 */}
            <IonRow>
              <IonCol>
                <IonButton onClick={handleDelete} color="danger">
                  Delete
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  onClick={handleUpdate}
                  color="primary"
                  className="floatRight"
                >
                  Update
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
