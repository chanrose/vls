import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  addCircleOutline,
  home as homeIcon,
  listOutline,
  settings as settingsIcon,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { OrgContext, useAuth } from "./auth";
import GuestHomePage from "./pages/guest/GuestHomePage";
import GuestViewPage from "./pages/guest/GuestViewPage";
import GuestRequestPage from "./pages/guest/GuestRequestPage";
import GuestSettingPage from "./pages/guest/GuestSettingPage";
import { guestDetail } from "./model";
import { Storage } from "@capacitor/core";

const GuestAppTabs: React.FC = () => {
  const { userId } = useAuth();
  const [orgId, setOrg] = useState("Default");
  const getUserDetail = async () => {
    const ret = await Storage.get({ key: "userDetail" });
    const getObj = JSON.parse(ret.value);
    setOrg(getObj.organization);
  };
  getUserDetail();
  return (
    <IonTabs>
      <IonRouterOutlet>
        <OrgContext.Provider value={`${orgId}`}>
          <Switch>
            <Route exact path="/guest/request/" component={GuestRequestPage} />
            <Route exact path="/guest/viewlist/" component={GuestViewPage} />
            <Route exact path="/guest/settings/" component={GuestSettingPage} />
            <Route exact path="/guest/home/">
              <GuestHomePage />
            </Route>
            <Route>
              <GuestHomePage />
            </Route>
          </Switch>
        </OrgContext.Provider>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href={`/guest/home/`}>
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="addnew" href="/guest/request/">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Request</IonLabel>
        </IonTabButton>
        {/*         <IonTabButton tab="listItem" href="/guest/viewlist/">
          <IonIcon icon={listOutline} />
          <IonLabel>View List</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="settings" href="/guest/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default GuestAppTabs;
