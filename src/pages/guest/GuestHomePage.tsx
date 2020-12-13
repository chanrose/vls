import React, { useContext, useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { UserContext } from "../../auth";
import { PostEntry, toEntry } from "../../model";

const GuestHomePage: React.FC = () => {
  const { name, organization } = useContext(UserContext);

  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [showNoData, setShow] = useState(false);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Home</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center">
          <img src="assets/icon/app2Logo.png" height="200 px" />
          <br />
          <br />
          <br />
          Hello {name} Your organization: {organization} might have posted
          something, would you like to check that page?
        </div>
        <div className="ion-text-end">
          {" "}
          <IonButton routerLink="/guest/viewPosts/" fill="clear">
            View List
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
