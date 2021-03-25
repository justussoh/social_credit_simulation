import { Grid } from "@material-ui/core";

import "./SurveillanceWall.css";

import shibuya from "./shibuya.mp4";
import toast from "./toast.mp4";
import sg from "./sg.mp4";
import car from "./car.mp4";
import zoom from "./zoom.mp4";
import lol from "./lol.mp4";
import sb from "./sb.mp4";
import street from "./street.mp4";
import street2 from "./street2.mp4";

export const Wall = () => {
  return (
    <header className={`App-header filter `}>
      <div className="screen-on">
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={zoom} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={street2} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={sg} type="video/mp4" />
              </video>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={toast} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={shibuya} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={lol} type="video/mp4" />
              </video>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={sb} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={street} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={4}>
              <video className="videoTag" autoPlay loop muted>
                <source src={car} type="video/mp4" />
              </video>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};
