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
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center">
                  <img height="100 px" src="/assets/media/voiceControl.svg" />
                </div>
                <IonCardTitle className="centerText">Powering Up</IonCardTitle>
                <IonCardSubtitle className="centerText">
                  Updated on Dec 16
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    New to VLS?
                    <br />
                    Slide For Tutorial
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
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
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center">
                  <img
                    height="100 px"
                    src="/assets/media/taskList.svg"
                    alt="Managing vehicle Information"
                  />
                </div>
                <IonCardSubtitle className="centerText">
                  Manage Vehicle Information
                </IonCardSubtitle>
                <IonCardTitle className="centerText">
                  CRUD Functionality
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    You can keep track <br /> of members' vehicle
                    <br />
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        <div className="ion-text-center">
          <IonButton routerLink="/gettingstarted2" fill="clear">
            START
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GettingStartedPage;
