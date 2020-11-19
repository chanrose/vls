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
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles/GettingStartedPage.css";
import { useParams, useRouteMatch } from "react-router";
import entries from "../data";
import { useAuth } from "../auth";
import { Entry, toEntry } from "../model";
import { firestore } from "../firebase";
import dayjs from "dayjs";

interface RouterParams {
  id: string;
}

const formatDate = (inputDate:string) => {
  const dayjs = require('dayjs');
  const date = dayjs(inputDate);
  date.toISOString();
  return (
    date.format('MMM DD, YYYY')
  );
}

const EntriesPage: React.FC = () => {
  const { userId } = useAuth();
  const match = useRouteMatch<RouterParams>();
  const { id } = match.params;
  const [entry, setEntry] = useState<Entry>();

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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton />
          </IonButtons>
          <IonTitle>{entry?.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Modifying Sticker No. 1 </IonCardTitle>
          </IonCardHeader>
          <IonList>
            <IonItem>
              <IonText>
                Sticker No. {entry?.sticker}
              </IonText>
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleOwner} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.vehiclePlate} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.province} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleBrand} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleModel} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleColour} />
            </IonItem>

            <IonItem>
              <IonDatetime placeholder={formatDate(entry?.taxExpire!)} />
            </IonItem>

            <IonItem>
            <IonDatetime placeholder={formatDate(entry?.insuranceExpire!)} />
          </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.greenBookOwner} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.hasGreenBook} />
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder={entry?.ownerEmail} />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder={entry?.ownerTele} />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder={entry?.ownerRole} />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleType} />
            </IonItem>
            <IonItem>
              <IonInput type="text" placeholder={entry?.vehicleBrand} />
            </IonItem>
            <IonItem>
              <IonTextarea placeholder={entry?.messageRemark} />
            </IonItem>

            {/* This is for Issue a ticket */}
            <IonItem>
              <IonText>Ticket Issue No.1</IonText>
            </IonItem>

            <IonItem>
              <IonInput type="text" placeholder="Vehicle License Plate" />
            </IonItem>

            <IonRow>
              <IonCol>
                <IonButton fill="clear">Cancel</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="floatRight" fill="clear">
                  Add
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
