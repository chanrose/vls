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
  settings as settingsIcon,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./auth";
import GuestHomePage from "./pages/guest/GuestHomePage";
import GuestRequestPage from "./pages/guest/GuestRequestPage";
import GuestSettingPage from "./pages/guest/GuestSettingPage";
import { Plugins } from "@capacitor/core";
import PageNotFound from "./pages/PageNotFound";

const GuestAppTabs: React.FC = () => {
  const { Storage } = Plugins;

  const [orgId, setOrg] = useState("Default");
  const [guestName, setName] = useState("Default");

  const getUserDetail = async () => {
    const keys = await Storage.keys();
    const ret = await Storage.get({ key: "userDetail" });
    const getObj = JSON.parse(ret.value!);
    if (ret == null) {
    } else {
      setOrg(getObj.organization);
      setName(getObj.name);
    }
  };
  getUserDetail();
  return (
    <IonTabs>
      <IonRouterOutlet>
        <UserContext.Provider
          value={{ organization: `${orgId}`, name: `${guestName}` }}
        >
          <Switch>
            <Route exact path="/guest/request/" component={GuestRequestPage} />
            <Route exact path="/guest/settings/" component={GuestSettingPage} />
            <Route exact path="/guest/home/">
              <GuestHomePage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </UserContext.Provider>
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
