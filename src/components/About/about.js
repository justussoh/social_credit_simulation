import { Button, Grid, Container } from "@material-ui/core";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";

import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import TimerRoundedIcon from "@material-ui/icons/TimerRounded";
import FlareRoundedIcon from "@material-ui/icons/FlareRounded";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

import { useStickyState } from "../../common/hooks/useStickyState";

import dangan from "./dangan.png";
import morals from "./morals.png";
import disparity from "./disparity.png";
import navigation from "./navigation.png";
import wealth from "./wealth.png";

import "./about.css";

export const About = () => {
  // Control Hint
  const [hintEnabled, setHintEnabled] = useStickyState(false, "hintEnabled");
  const onToggleHint = () => {
    setHintEnabled(!hintEnabled);
  };
  return (
    <header className="About-header">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontSize: "32px" }}>
              ABOUT THE MECHANICS
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={dangan} alt="dangan" className="about-img" />
          </Grid>

          <Grid item xs={6} className="align-start">
            <div className="about-title">About</div>
            <div className="about-text">
              Created by: <br />
              Soh Zhi Heng Justus <br />
              for Tembusu College <br />
              UTC2113 Gaming Life Seminar <br />
              <br />
              Credits: <br />
              BGM - Tracker by Christoffer Moe Ditlevsen
            </div>
          </Grid>

          <Grid item xs={6} className="align-start">
            <div className="about-title">Wealth and Social Credit</div>
            <div className="about-text">
              While Social Credit Score itself is enough to gauge a person's
              trust worthiness, a second factor like wealth and time is added to
              simulate real life situations. Wealth has been selected as a
              'limiting' resource that needs to be taken into account as credit
              score can often be 'bought'. Once wealth is depleted, their
              options will be greatly limited.
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={wealth} alt="wealth" className="about-img" />
          </Grid>

          <Grid item xs={6}>
            <img src={navigation} alt="navigation" className="about-img" />
          </Grid>
          <Grid item xs={6} className="align-start">
            <div className="about-title">Simulation Navigation Map</div>
            <div className="about-text" style={{ marginBottom: "8px" }}>
              The simulation initially throws broad questions that eventually
              dive deeper into the morality of what is perceived as good and bad
              in the eyes of the lawmaker as forms of control and discipline.
              The more upright the individual seem, the greater scrutiny they
              would be put under. There are X main broad categories and a total
              of XX questions which are mapped below. Bad decisions are usually
              made in split second and have consequences, hence to illustrate
              that point,the option picked is final for thar round. Players can
              then replay the game with different parameters explained below for
              a different perspective (the benefits of a virtual game). <br />
              <br />A full mapping of the question can be found{" "}
              <a href="/images/questions.pdf">here</a>!
            </div>
            <Button
              variant="contained"
              startIcon={
                hintEnabled ? <HelpRoundedIcon /> : <HelpOutlineRoundedIcon />
              }
              onClick={onToggleHint}
            >
              {`${hintEnabled ? "Disable" : "Enable"} hint`}
            </Button>
          </Grid>

          <Grid item xs={6} className="align-start ">
            <div className="about-title">Disparity and Unfairness</div>
            <div className="about-text">
              Depending on choices, wealth and credit score, players would be
              able to dive deeper into each moral category. Choosing the right
              options will lead to greater scrutiny but also more opportunity to
              earn or lose credit score. <br />
              <br />
              However, with lesser wealth and credit score, choices will be
              limited leading to a downward spiral which is meant to display how
              unfair the social credit system is for the lesser privileged.
              Though there will be chances to earn wealth through 'bad' means.
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={disparity} alt="disparity" className="about-img" />
          </Grid>

          <Grid item xs={6}>
            <img src={morals} alt="morals" className="about-img" />
          </Grid>
          <Grid item xs={6} className="align-start">
            <div>
              <div className="about-title">Terms and Morals</div>
              <div className="about-text">
                The morals of the question are arbitrary and it is up to the
                player to decide what is right and wrong. However, in the gaze
                of the lawmaker, there is only one type if ideal citizen.
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="about-title">Elements</div>
            <div className="about-text">
              Visuals <br />
              Suppose to add pressure to player and control the decisions they
              make. <br />
              The blinking red light - Gives players the feeling that their
              every action is being recorded and put towards the final score.{" "}
              <br />
              Background of surveillance - Conveys to players that their every
              action is watched. <br />
              Sirens - The idea of the red and blue lights mimic law enforcement
              enforcing the rules of society. <br />
              <br />
              Audio <br />
              Background music - The theme is suspense and sneaking. This gives
              players pressure as players are unsure if they made the right
              choices. They also need to be stealthy when choosing the options
              to try to avoid surveillance being unsure of what is being
              tracked. <br />
              Beeping - constantly reminding players that they have a time limit
            </div>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <div className="about-title">Adjusting the Rules</div>
            </Grid>
            <Grid item xs={12}>
              <div className="center-container">
                <VolumeUpRoundedIcon />
                <div className="about-text change-rules-explain-text">
                  Mute - In the case where you are playing the game and want to
                  turn off the music
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="center-container">
                <TimerRoundedIcon />
                <div className="about-text change-rules-explain-text">
                  Timer - If there was less time pressure, would you still made
                  mistakes?
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="center-container">
                <StarRoundedIcon />
                <div className="about-text change-rules-explain-text">
                  Wealth Score - If one started with different amount of
                  resources, would climbing the credit ladder be easier?
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="center-container">
                <InsertChartRoundedIcon />
                <div className="about-text change-rules-explain-text">
                  Disparity - If everyone had equal opportunity would the
                  outcome be different?
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="center-container">
                <FlareRoundedIcon />
                <div className="about-text change-rules-explain-text">
                  Siren - If the flashing causes any discomfort, turn this off.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
