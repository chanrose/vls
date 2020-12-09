import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  chatbox,
  home as homeIcon,
  listOutline,
  settings as settingsIcon,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminAddPage from "./pages/admin/AdminAddPage";
import AdminViewPage from "./pages/admin/AdminViewPage";
import EntriesPage from "./pages/admin/EntriesPage";
import { useAuth, UserContext } from "./auth";
import AdminSettingPage from "./pages/admin/AdminSettingPage";
import AdminNotificationPage from "./pages/admin/AdminNotificationPage";
import { auth, firestore } from "./firebase";
import { toEntry, userProfile } from "./model";

const AdminAppTabs: React.FC = () => {
  const { loggedIn } = useAuth();
  const { userId } = useAuth();
  const [userDetail, setDetail] = useState<userProfile>();
  console.log("Auth", auth);

  useEffect(() => {
    try {
      firestore
        .collection("users")
        .doc(userId)
        .collection("detail")
        .doc(userId)
        .get()
        .then((doc) => {
          setDetail(toEntry(doc));
        });
    } catch (error) {}
  }, [userId]);
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <UserContext.Provider
      value={{
        organization: `${userDetail?.organId}`,
        name: `${userDetail?.name}`,
      }}
    >
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/admin/home/" component={AdminHomePage} />
            <Route exact path="/admin/addnew/" component={AdminAddPage} />
            <Route exact path="/admin/viewlist/" component={AdminViewPage} />
            <Route exact path="/admin/settings/" component={AdminSettingPage} />
            <Route exact path="/admin/addnew/:type">
              <AdminAddPage />
            </Route>
            <Route
              exact
              path="/admin/notification/"
              component={AdminNotificationPage}
            />
            <Route exact path="/admin/viewlist/entries/:id">
              <EntriesPage />
            </Route>
            <Route>
              <AdminHomePage />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/admin/home/">
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addnew" href="/admin/notification/">
            <IonIcon icon={chatbox} />
            <IonLabel>Notification</IonLabel>
          </IonTabButton>
          <IonTabButton tab="listItem" href="/admin/viewlist/">
            <IonIcon icon={listOutline} />
            <IonLabel>View List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/admin/settings/">
            <IonIcon icon={settingsIcon} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </UserContext.Provider>
  );
};

export default AdminAppTabs;
