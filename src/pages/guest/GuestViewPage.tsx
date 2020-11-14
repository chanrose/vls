import React, { useState } from "react";
import {
  IonActionSheet,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from "@ionic/react";
import entries from "../../data";
import { add, bicycle, car, easel, funnel, funnelOutline, ticket } from "ionicons/icons";

const GuestViewPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [btnFilter, setFilter] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow className="ion-align-items-start">
              <IonCol>
                {" "}
                <IonSegment
                  onIonChange={(e) =>
                    console.log("Segment selected", e.detail.value)
                  }
                >
                  <IonSegmentButton value="home">
                    <IonLabel>Vehicle</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="guest">
                    <IonLabel>Ticket</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
              <IonCol>
              <div className="ion-text-right">
                  {/* <IonText onClick={() => setFilter(true)}><IonIcon icon={funnelOutline} /></IonText> */}
                <IonButton fill="clear" onClick={() => setFilter(true)}>
                  <IonIcon icon={funnelOutline} />
                </IonButton> 
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonActionSheet
          isOpen={btnFilter}
          onDidDismiss={() => setFilter(false)}
          buttons={[
            {
              text: "Owner Name",
              handler: () => {
                console.log("Owner Name clicked");
              },
            },
            { text: "Vehicle Name" },
            { text: "Tax Expired" },
          ]}
        />
        <IonList>
          {entries.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/admin/viewlist/entries/${entry.id}`}
            >
              {entry.brand + " " + entry.model} {entry.currentOwner}
            </IonItem>
          ))}
        </IonList>
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={bicycle} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={car} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={ticket} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={easel} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default GuestViewPage;
