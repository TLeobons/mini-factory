import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import leftImage from "../images/left.jpg";
import creatorAvatar from "../images/creatorAvatar.jpg";
import Pledge from "./Pledge";
import { useRef } from "react";
import item from "../images/item.jpg";

const useStyles = makeStyles((theme) => ({
  upperPart: {
    textAlign: "left",
    paddingTop: "20px",
    // backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  leftImg: {
    width: "100%",
  },
  paper: {
    // marginRight: "20px",
    background: `rgba(0,0,0,0.7)`,
  },
  creatorAvatar: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  creatorAvatarRibbon: {
    width: "20px",
    height: "20px",
    borderRadius: "50px",
    marginRight: "5px",
    marginLeft: "5px",
  },
  bottomPaper: {
    margin: "20px",
    padding: "20px",
    background: `rgba(0,0,0,0.7)`,
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  marginHundred: {
    marginLeft: 100,
    marginRight: 100,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  ribbon: {
    background: "#F1F1F1",
    height: "50px",
    paddingLeft: theme.spacing(4),
    paddingTop: 2,
    paddingBottom: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
      justifyContent: "center",
    },
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  innerRibbon: {
    minWidth: "250px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ribbonItem: {
    padding: theme.spacing(2),
    borderRight: `1px solid grey`,
    cursor: "pointer",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  let pledgeRef = useRef();
  let addOnRef = useRef();
  const [visible, setVisible] = useState(false);

  let pledge = [
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      includesText: "Includes 5 products",
      link: 'https://www.google.com/',
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      includesText: "Includes 5 products",
      link: 'https://www.google.com/',
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    }
  ];

  let addOns = [
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore illum eum debitis repellat tempore inventore aspernatur, consectetur sapiente quisquam repudiandae culpa natus numquam, vitae magni ea non mollitia maxime? Impedit libero cum eligendi perferendis eos suscipit voluptates magnam accusamus harum reprehenderit, quos iure cupiditate. Officiis obcaecati vitae doloremque! Similique necessitatibus quis exercitationem doloremque consequatur a sapiente impedit eos nemo? Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    },
    {
      name: "Series 2 Sets",
      image: item,
      numberOfBackers: "216 backers",
      price: "USD 15.00",
      description: "Includes five sets: Faithful of the Luminous Goddess, Dreth of the Bloodlands, War Tribes of the Central Expanse, Benighted Kingdom of the Hissthk, and Dust Sea Marauders"
    }
  ];

  let appDetails = {
    title: "Pocket-Tactics Series 2: Coils of Chaos",
    creatorName: "IllGottenGames",
    creatorAvatar: creatorAvatar,
    description: "LOREM ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ex explicabo. Delectus quibusdam cumque, dicta earum, vero sit iste tempore consequatur mollitia libero minus distinctio praesentium illo eum ad temporibus excepturi laborum dignissimos beatae quae repudiandae. Saepe, amet consectetur? Tempore amet libero dolor culpa asperiores consequatur sequi id rem dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ex explicabo. Delectus quibusdam cumque, dicta earum, vero sit iste tempore consequatur mollitia libero minus distinctio praesentium illo eum ad temporibus excepturi laborum dignissimos beatae quae repudiandae. Saepe, amet consectetur? Tempore amet libero dolor culpa asperiores consequatur sequi id rem dignissimos." + 
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ex explicabo. Delectus quibusdam cumque, dicta earum, vero sit iste tempore consequatur mollitia libero minus distinctio praesentium illo eum ad temporibus excepturi laborum dignissimos beatae quae repudiandae. Saepe, amet consectetur? Tempore amet libero dolor culpa asperiores consequatur sequi id rem dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ex explicabo. Delectus quibusdam cumque, dicta earum, vero sit iste tempore consequatur mollitia libero minus distinctio praesentium illo eum ad temporibus excepturi laborum dignissimos beatae quae repudiandae. Saepe, amet consectetur? Tempore amet libero dolor culpa asperiores consequatur sequi id rem dignissimos."
  }

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 550) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  }, []);

  return (
    <Box>
      <Box className={classes.marginHundred}>
        <Grid container spacing={3} className={classes.upperPart}>
          <Grid item xs={12} sm={6}>
            <img src={leftImage} className={classes.leftImg} alt=''/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div style={{ padding: 20 }}>
                <Typography variant="h3" gutterBottom color={"textSecondary"}>
                  {appDetails.title}
                </Typography>
                <Typography variant="h4" gutterBottom color={"textSecondary"}>
                  Created by
                  <img src={appDetails.creatorAvatar} className={classes.creatorAvatar} alt=''/>
                  {appDetails.creatorName}
                </Typography>

                <Typography
                  variant="body2"
                  gutterBottom
                  color={"textSecondary"}
                >
                  {appDetails.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.ribbon}>
        <div className={classes.innerRibbon}>
          {visible && (
            <>
              <strong>Pocket-Tactics Series 2: Coils of Chaos</strong>
              <Typography variant="body1" gutterBottom>
                Created by
                <img
                  src={creatorAvatar}
                  className={classes.creatorAvatarRibbon}
                  alt=''
                />
                IllGottenGames
              </Typography>
            </>
          )}
        </div>
        <Box
          className={classes.ribbonItem}
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top: pledgeRef.current.offsetTop,
            })
          }
        >
          Pledges (2)
        </Box>
        <Box
          className={classes.ribbonItem}
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top: addOnRef.current.offsetTop,
            })
          }
        >
          Add-On (6)
        </Box>
        <Box className={classes.ribbonItem}>Read more</Box>
      </Box>
      <Box className={classes.marginHundred}>
        <Paper className={classes.bottomPaper}>
          <Typography
            variant="h4"
            gutterBottom
            color={"textSecondary"}
            ref={pledgeRef}
          >
            Pledges
          </Typography>
          <br />
          <Grid container spacing={3}>
            {pledge.map(
              (item) =>
                item &&
                 (
                  <Grid item sm={4} xs={12} spacing={1}>
                    <Pledge  data={item}/>
                  </Grid>
                )
            )}
          </Grid>
          <br />
          <br />
          <Typography
            variant="h4"
            gutterBottom
            color={"textSecondary"}
            ref={addOnRef}
          >
            Add-ons
          </Typography>
          <br />
          <div height='40rem'>
          <Grid container height="40rem" spacing={3}>
            {addOns.map(
              (item) =>
                item &&
                 (
                  <Grid item sm={4} xs={12} spacing={1}>
                    <Pledge  data={item}/>
                  </Grid>
                )
            )}
          </Grid>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
export default HomePage