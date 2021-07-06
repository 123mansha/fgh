import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import StartupTwoColor from "../../Images/Startup _Two Color.svg";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  //  root: {
  //    flexGrow: 1,
  //  },
  root: {
    height:"100%",
    backgroundPosition:"center",
    // backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflowY:"hidden",
    position:"relative",
    backgroundImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3Csvg xmlns:xlink='http://www.w3.org/1999/xlink' id='wave' style='transform:rotate(180deg); transition: 0.3s' viewBox='0 0 1440 360' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop stop-color='rgba(243, 106, 62, 1)' offset='0%25'/%3E%3Cstop stop-color='rgba(255, 179, 11, 1)' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath style='transform:translate(0, 0px); opacity:1' fill='url(%23sw-gradient-0)' d='M0,216L48,228C96,240,192,264,288,282C384,300,480,312,576,264C672,216,768,108,864,72C960,36,1056,72,1152,120C1248,168,1344,228,1440,264C1536,300,1632,312,1728,312C1824,312,1920,300,2016,300C2112,300,2208,312,2304,294C2400,276,2496,228,2592,222C2688,216,2784,252,2880,252C2976,252,3072,216,3168,192C3264,168,3360,156,3456,144C3552,132,3648,120,3744,144C3840,168,3936,228,4032,246C4128,264,4224,240,4320,216C4416,192,4512,168,4608,138C4704,108,4800,72,4896,66C4992,60,5088,84,5184,84C5280,84,5376,60,5472,90C5568,120,5664,204,5760,234C5856,264,5952,240,6048,210C6144,180,6240,144,6336,150C6432,156,6528,204,6624,240C6720,276,6816,300,6864,312L6912,324L6912,360L6864,360C6816,360,6720,360,6624,360C6528,360,6432,360,6336,360C6240,360,6144,360,6048,360C5952,360,5856,360,5760,360C5664,360,5568,360,5472,360C5376,360,5280,360,5184,360C5088,360,4992,360,4896,360C4800,360,4704,360,4608,360C4512,360,4416,360,4320,360C4224,360,4128,360,4032,360C3936,360,3840,360,3744,360C3648,360,3552,360,3456,360C3360,360,3264,360,3168,360C3072,360,2976,360,2880,360C2784,360,2688,360,2592,360C2496,360,2400,360,2304,360C2208,360,2112,360,2016,360C1920,360,1824,360,1728,360C1632,360,1536,360,1440,360C1344,360,1248,360,1152,360C1056,360,960,360,864,360C768,360,672,360,576,360C480,360,384,360,288,360C192,360,96,360,48,360L0,360Z'/%3E%3C/svg%3E")`,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box px={10} py={20}>
            <Typography
              variant="h2"
              style={{ fontWeight: "400", color: " #000d1a" }}
            >
              {count ? (
                <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
                  <span>Creating Tommorow's World</span>
                  <Typist.Backspace count={40} delay={1000} />
                  <span> Designing The Future Together</span>
                </Typist>
              ) : (
                ""
              )}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box px={10} py={20} height={"100%"} width={"100%"} maxWidth={600}>
            <img
              src={StartupTwoColor}
              width="600px"
              height="400px"
              viewBox="-200 -100 3000 400"
              alt="home"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
