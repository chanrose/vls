import React, { useContext, useEffect, useState } from "react";
import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { UserContext } from "../../auth";
import { PostEntry, toEntry } from "../../model";
import { Plugins } from "@capacitor/core";

const GuestHomePage: React.FC = () => {
  const { Storage } = Plugins;
  const { name, organization } = useContext(UserContext);
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const [showNoData, setShow] = useState(false);

  const [orgId, setOrg] = useState("Default");
  const [guestName, setName] = useState("Default");
  useEffect(() => {
    getUserDetail();
  }, [orgId]);

  const getUserDetail = async () => {
    const keys = await Storage.keys();
    const ret = await Storage.get({ key: "userDetail" });
    const getObj = JSON.parse(ret.value!);
    if (getObj === null) {
      return null;
    } else {
      setOrg(getObj.organization);
      setName(getObj.name);
    }
  };

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
          Hello {guestName} Your organization: {orgId} might have posted
          something, would you like to check that page?
        </div>
        <div className="ion-text-end">
          {" "}
          <IonButton routerLink="/guest/viewPosts/" fill="clear">
            View List
          </IonButton>
        </div>
        <div className="ion-text-center">
          <IonText>Advices: </IonText>
        </div>
        <br />
        <IonChip>
          <IonText color="primary">เดินทางปลอดภัยนะ</IonText>
        </IonChip>
        <IonChip>
          <IonText color="primary">Have a safe journey</IonText>
        </IonChip>
        <IonChip>
          <IonText color="secondary">อย่าประมาท</IonText>
        </IonChip>
        <IonChip>
          <IonText color="secondary">Don’t be careless</IonText>
        </IonChip>
        <IonChip>
          <IonText color="danger">ขับรถดีๆ</IonText>
        </IonChip>
        <IonChip>
          <IonText color="danger">Drive carefully</IonText>
        </IonChip>
      </IonContent>
    </IonPage>
  );
};

export default GuestHomePage;
