import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonProgressBar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import GettingStartedPage from "./pages/GettingStartedPage";
import GettingStartedS2Page from "./pages/GettingStartedS2Page";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminAppTabs from "./AdminAppTabs";
import { AuthContext, useAuthInit } from "./auth";
import GuestAppTabs from "./GuestAppTabs";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonProgressBar type="indeterminate"></IonProgressBar>;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={auth!}>
        <IonReactRouter>
          <Switch>
            <Route path="/gettingstarted" component={GettingStartedPage} />
            <Route path="/gettingstarted2" component={GettingStartedS2Page} />
            <Route path="/register" component={RegistrationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/guest" component={GuestAppTabs} />
            <Route path="/admin/">
              <AdminAppTabs />
            </Route>
            <Route
              path="/"
              render={() => <Redirect to="/gettingstarted" />}
              exact={true}
            />
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
