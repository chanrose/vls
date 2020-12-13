import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";
import "./styles/components.css";

const GettingStartedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="ionCardstyle">
              <IonCardHeader>
                <div className="ion-text-center">
                  <img height="100 px" src="/assets/media/voiceControl.svg" />
                </div>
                <IonCardTitle className="centerText">Powering Up</IonCardTitle>
                <IonCardSubtitle className="centerText">
                  Updated on Dec 13
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    Getting started?
                    <br />
                    Slide Next!
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="ionCardstyle">
              <IonCardHeader>
                <div className="ion-text-center">
                  <img
                    height="100 px"
                    src="/assets/media/addPost.svg"
                    alt="adding post"
                  />
                </div>
                <IonCardSubtitle className="centerText">
                  As the administrator
                </IonCardSubtitle>
                <IonCardTitle className="centerText">
                  Post Announcement
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    You can make announcement <br /> with Guest's Post
                    <br />
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        <IonButton
          routerLink="/gettingstarted2"
          className="IonButtonRadius"
          expand="block"
        >
          START
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
