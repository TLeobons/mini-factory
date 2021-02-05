import React from "react";
import { Typography, Button, Box, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
const useStyles = makeStyles((theme) => ({
  textAlignRight: {
    textAlign: "right",
  },
  pledgeDescription: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  backers: {
    marginTop: "5px",
    marginLeft: "2px",
  },
}));

function Pledge(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{ padding: 10 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <img src={props.data.image} style={{ width: "100%" }} alt=''/>
        </Grid>
        <Grid item container xs={12} justify="space-between">
          <Typography variant="h5" gutterBottom>
            {props.data.name}
          </Typography>

          <Button variant="contained" color="primary">
            Pledge
          </Button>
        </Grid>
        <Grid item xs={12} container justify="space-between">
          <Box display="flex" alignItems="center">
            <PersonIcon />
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.backers}
            >
              {props.data.numberOfBackers}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            className={classes.textAlignRight}
          >
            <Box fontWeight="fontWeightBold" m={1}>
              {props.data.price}
            </Box>
          </Typography>
        </Grid>
        {props.data.includesText && (
          <Grid item xs={12}>
            <Typography className={classes.textAlignRight}>
              <a target="_blank" rel="noopener noreferrer" href={props.data.link}>{props.data.includesText}</a>
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography className={classes.pledgeDescription}>
            {props.data.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Pledge;
