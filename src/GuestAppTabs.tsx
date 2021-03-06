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
  listCircle,
  settings as settingsIcon,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { GuestContext, UserContext } from "./auth";
import GuestHomePage from "./pages/guest/GuestHomePage";
import GuestRequestPage from "./pages/guest/GuestRequestPage";
import GuestSettingPage from "./pages/guest/GuestSettingPage";
import { Plugins } from "@capacitor/core";
import GuestViewPage from "./pages/guest/GuestViewPage";

const GuestAppTabs: React.FC = () => {
  const { Storage } = Plugins;
  const [orgId, setOrg] = useState("Default");
  const [guestName, setName] = useState("Default");
  const [loggedOut, setLog] = useState(false);

  useEffect(() => {
    getUserDetail();

    if (orgId === "Default") {
      setLog(true);
    }
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
    <GuestContext.Provider
      value={{ organization: `${orgId}`, name: `${guestName}` }}
    >
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            {/* <Route exact path="/guest/viewPosts/" component={GuestViewPage} /> */}
            <Route exact path="/guest/viewPosts/">
              <GuestViewPage organization={orgId} />
            </Route>

            <Route exact path="/guest/request/" component={GuestRequestPage}>
              <GuestRequestPage organization={orgId} />
            </Route>

            {/* <Route exact path="/guest/request/" component={GuestRequestPage} /> */}
            <Route exact path="/guest/settings/" component={GuestSettingPage} />
            <Route exact path="/guest/home/">
              <GuestHomePage />
            </Route>
            {/*  <Route exact path="/guest/viewPosts/">
              <GuestViewPage organization={orgId} />
            </Route> */}
            <Route>
              <GuestHomePage />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href={`/guest/home/`}>
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="viewPosts" href={`/guest/viewPosts/`}>
            <IonIcon icon={listCircle} />
            <IonLabel>View Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addnew" href="/guest/request/">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Request</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/guest/settings">
            <IonIcon icon={settingsIcon} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </GuestContext.Provider>
  );
};

export default GuestAppTabs;
