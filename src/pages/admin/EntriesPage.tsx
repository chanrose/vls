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
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { useHistory, useRouteMatch } from "react-router";
import { useAuth } from "../../auth";
import { Entry, toEntry } from "../../model";
import { firestore } from "../../firebase";

interface RouterParams {
  id: string;
}

const formatDate = (inputDate: string) => {
  if (inputDate === "") return "Not Filled";
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

  const entryRef = firestore
    .collection("users")
    .doc(userId)
    .collection("entries")
    .doc(id);

  useEffect(() => {
    entryRef.get().then((doc) => {
      setEntry(toEntry(doc));
    });
  }, [userId]);

  const handleDelete = () => {
    entryRef.delete();
    history.goBack();
  };

  /* Updating Existing entry*/
  const handleUpdate = async () => {
    if (sticker !== undefined) await entryRef.update({ sticker });
    if (vehicleOwner !== undefined) await entryRef.update({ vehicleOwner });
    if (ownerRole !== undefined) await entryRef.update({ ownerRole });
    if (idNo !== undefined) await entryRef.update({ idNo });
    if (ownerEmail !== undefined) await entryRef.update({ ownerEmail });
    if (ownerTele !== undefined) await entryRef.update({ ownerTele });
    if (drivingExpire !== undefined) await entryRef.update({ drivingExpire });
    if (vehicleType !== undefined) await entryRef.update({ vehicleType });
    if (vehiclePlate !== undefined) await entryRef.update({ vehiclePlate });
    if (province !== undefined) await entryRef.update({ province });
    if (vehicleBrand !== undefined) await entryRef.update({ vehicleBrand });
    if (vehicleModel !== undefined) await entryRef.update({ vehicleModel });
    if (vehicleColour !== undefined) await entryRef.update({ vehicleColour });
    if (taxExpire !== undefined) await entryRef.update({ taxExpire });
    if (insuranceExpire !== undefined)
      await entryRef.update({ insuranceExpire });
    if (hasGreenBook !== undefined) await entryRef.update({ hasGreenBook });
    if (greenBookOwner !== undefined) await entryRef.update({ greenBookOwner });
    if (messageRemark !== undefined) await entryRef.update({ messageRemark });
    history.goBack();
  };
  const [sticker, setSticker] = useState(entry?.sticker);
  const [vehicleOwner, setOwner] = useState(entry?.vehicleOwner);
  const [ownerRole, setRole] = useState(entry?.ownerRole);
  const [idNo, setIdNo] = useState(entry?.idNo);
  const [ownerEmail, setEmail] = useState(entry?.ownerEmail);
  const [ownerTele, setTele] = useState(entry?.ownerTele);
  const [drivingExpire, setDrivingExpire] = useState(entry?.drivingExpire);
  const [vehicleType, setType] = useState(entry?.vehicleType);
  const [vehiclePlate, setPlate] = useState(entry?.vehiclePlate);
  const [province, setProvince] = useState(entry?.province);
  const [vehicleBrand, setBrand] = useState(entry?.vehicleBrand);
  const [vehicleModel, setModel] = useState(entry?.vehicleModel);
  const [vehicleColour, setColour] = useState(entry?.vehicleColour);
  const [taxExpire, setTax] = useState(entry?.taxExpire);
  const [insuranceExpire, setInsurance] = useState(entry?.insuranceExpire);
  const [hasGreenBook, setGreenBook] = useState(entry?.hasGreenBook);
  const [greenBookOwner, setGB] = useState(entry?.greenBookOwner);
  const [messageRemark, setMessage] = useState(entry?.messageRemark);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <div className="ion-text-center">
              {entry?.vehicleBrand} {entry?.vehicleModel}
            </div>
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
                value={sticker}
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
