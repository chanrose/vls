import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
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
          <IonCardHeader>
            <IonCardTitle>
              <IonLabel>Modifying Sticker No. 1</IonLabel>{" "}
            </IonCardTitle>
          </IonCardHeader>

          <IonList>
            <IonItemDivider>
              <IonLabel>Owner Information: </IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonText>Sticker No. {entry?.sticker}</IonText>
            </IonItem>

            <IonItem>
              <IonLabel>Owner: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehicleOwner} />
            </IonItem>
            <IonItem>
              <IonLabel>Who is the owner?</IonLabel>
              <IonSelect placeholder={entry?.ownerRole}>
                <IonSelectOption value="Student">Student</IonSelectOption>
                <IonSelectOption value="Faculty">Faculty</IonSelectOption>
                <IonSelectOption value="AIMS">AIMS</IonSelectOption>
                <IonSelectOption value="Other">Others</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>ID No: </IonLabel>
              <IonInput type="text" placeholder={entry?.idNo} />
            </IonItem>
            <IonItem>
              <IonLabel>Email: </IonLabel>
              <IonInput type="text" placeholder={entry?.ownerEmail} />
            </IonItem>
            <IonItem>
              <IonLabel>Telephone: </IonLabel>
              <IonInput type="text" placeholder={entry?.ownerTele} />
            </IonItem>
            <IonItem>
              <IonLabel>Driving License: </IonLabel>
              <IonDatetime placeholder={formatDate(entry?.drivingExpire!)} />
            </IonItem>
            <IonItemDivider>
              <IonLabel>Vehicle Information:</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Vehicle type: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehicleType} />
            </IonItem>
            <IonItem>
              <IonLabel>Plate: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehiclePlate} />
            </IonItem>

            <IonItem>
              <IonLabel>Province: </IonLabel>
              <IonInput type="text" placeholder={entry?.province} />
            </IonItem>

            <IonItem>
              <IonLabel>Brand: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehicleBrand} />
            </IonItem>

            <IonItem>
              <IonLabel>Model: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehicleModel} />
            </IonItem>

            <IonItem>
              <IonLabel>Colour: </IonLabel>
              <IonInput type="text" placeholder={entry?.vehicleColour} />
            </IonItem>

            <IonItem>
              <IonLabel>Tax Expire: </IonLabel>
              <IonDatetime placeholder={formatDate(entry?.taxExpire!)} />
            </IonItem>

            <IonItem>
              <IonLabel>Insurance Expire: </IonLabel>
              <IonDatetime placeholder={formatDate(entry?.insuranceExpire!)} />
            </IonItem>

            <IonItem>
              <IonLabel>Has greenbook? </IonLabel>
              <IonInput type="text" placeholder={entry?.hasGreenBook} />
            </IonItem>
            <IonItem>
              <IonLabel>Greenbook Name: </IonLabel>
              <IonInput type="text" placeholder={entry?.greenBookOwner} />
            </IonItem>

            <IonItem>
              <IonLabel>Remark: </IonLabel>
              <IonTextarea placeholder={entry?.messageRemark} />
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
                <IonButton color="primary" className="floatRight">
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
