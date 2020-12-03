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
import React from "react";
import EntriesPage from "./pages/admin/EntriesPage";
import { useAuth } from "./auth";
import GuestHomePage from "./pages/guest/GuestHomePage";
import GuestViewPage from "./pages/guest/GuestViewPage";
import GuestRequestPage from "./pages/guest/GuestRequestPage";
import GuestSettingPage from "./pages/guest/GuestSettingPage";

const GuestAppTabs: React.FC = () => {
  const organID = "aiu18180";
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/gettingstarted2" />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/guest/home/">
            <GuestHomePage organId={`${organID}`} />
          </Route>
          <Route exact path="/guest/request/" component={GuestRequestPage} />
          <Route exact path="/guest/viewlist/" component={GuestViewPage} />
          <Route exact path="/guest/settings/" component={GuestSettingPage} />
          <Route exact path="/admin/viewlist/entries/:id">
            <EntriesPage />
          </Route>
          <Route>
            <GuestHomePage organId={`${organID}`} />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/guest/home/">
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
