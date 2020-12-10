import React, { useMemo, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonProgressBar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import GettingStartedPage from "./pages/GettingStartedPage";
import GettingStartedS2Page from "./pages/GettingStartedS2Page";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminAppTabs from "./AdminAppTabs";
import { AuthContext, ThemeContext, useAuthInit } from "./auth";
import GuestAppTabs from "./GuestAppTabs";
import PageNotFound from "./pages/PageNotFound";
import CreditsPage from "./pages/CreditsPage";
import FaqPage from "./pages/FaqPage";
import SettingPage from "./pages/SettingPage";

const App: React.FC = () => {
  const {
    loading,
    auth,
  } = useAuthInit(); /* 
  const setThemeMode = (darkMode: boolean) => {
    if (darkMode === true) {
      document.body.classList.toggle("dark");
    }
  };
  const [themeMode, setTheme] = useState("Test");
  const [darkMode, setMode] = useState(true);
 */
  /*   if (loading) {
    return <IonLoading isOpen />;
  } */ /* const providerTheme = useMemo(() => ({ themeMode, setThemeMode }), [
    themeMode,
    setThemeMode,
  ]); */
  if (loading) {
    return <IonProgressBar type="indeterminate"></IonProgressBar>;
  }
  return (
    <IonApp>
      {/*   <ThemeContext.Provider value={{ mode: darkMode, setMode: setMode }}> */}
      <AuthContext.Provider value={auth!}>
        <IonReactRouter>
          {/* <IonTabs> */}
          <Switch>
            <Route path="/gettingstarted" component={GettingStartedPage} />
            <Route path="/gettingstarted2" component={GettingStartedS2Page} />
            <Route path="/register" component={RegistrationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/guest" component={GuestAppTabs} />
            <Route path="/public/app/credits" component={CreditsPage} />
            <Route path="/public/app/faq" component={FaqPage} />

            <Route path="/public/app/settings" component={SettingPage} />
            <Route path="/admin/">
              <AdminAppTabs />
            </Route>
            <Route path="/s2" component={GettingStartedS2Page} />

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
      {/*  </ThemeContext.Provider> */}
    </IonApp>
  );
};

export default App;
