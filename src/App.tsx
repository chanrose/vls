import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import GettingStartedPage from './pages/GettingStartedPage';
import GettingStartedS2Page from './pages/GettingStartedS2Page';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminAppTabs from './AdminAppTabs';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs> */}
       
          <Route path="/gettingstarted" component={GettingStartedPage} />
          <Route path="/gettingstarted/s2" component={GettingStartedS2Page} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin">
              <AdminAppTabs />
          </Route>
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          
          <Route path="/" render={() => <Redirect to="/gettingstarted/s2" />} exact={true} />
       
       {/*  <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar> */}
      {/* </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
