import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Startup_Monochromatic from "../../Images/Startup_Monochromatic.svg";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box px={10} py={20}>
            <Typography variant="h2" style={{fontWeight:"400", color:" #000d1a"}} >
              {count ? (
                <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
                  <span>
                    Creating Tommorow's World
                  </span>
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
          <Box pl={10} py={10} height={"100%"} width={"100%"} maxWidth={600}>
            <img
              src={Startup_Monochromatic}
              width="400px"
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
