import React, { useContext } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./styles/components.css";
import { useHistory } from "react-router";
import { ThemeContext } from "../auth";

const FaqPage: React.FC = () => {
  const history = useHistory();
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center">FAQ</div>{" "}
            {/* <IonToggle name="darkMode" onIonChange={toggleDarkModeHandler} /> */}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br /> <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/faq.svg" />
                </div>{" "}
                <br />
                <IonCardSubtitle className="centerText">
                  Information
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Learn More</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                    Swipe Left or Swipe Right
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/personalData.svg" height="50 px" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  What about
                </IonCardSubtitle>
                <IonCardTitle className="centerText">
                  Privacy Policy
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                    VLS does not make use of any collected data
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br />
              <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/contactUs.svg" height="100 px" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  Contact Us
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Email</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    bdchanbroset@gmail.com <br /> andreas.christian.m@gmail.com
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/react.svg" height="100 px" />
                </div>
                <IonCardSubtitle className="centerText">
                  Developed with
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Ionic React</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    <a href="https://ionicframework.com/docs">
                      Ionic Framework
                    </a>
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img src="/assets/media/openSource.svg" height="100 px" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  Source Code?
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Open Source</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    Get started with <br /> gh repo clone chanrose/vls
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        <IonButton fill="clear" expand="full" onClick={history.goBack}>
          GO BACK
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FaqPage;
