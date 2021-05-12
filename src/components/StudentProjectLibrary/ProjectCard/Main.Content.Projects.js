import react from "react";
/* import "./Main.ContentSP.css";


function StudentActivities(props) {
  <div className="sActivity">
    <img className="activityImage" src={props.imgsrc} />
    <h3 className="activityTitle"> {props.aTitle} </h3>
    <p className="activityDescription"> {props.descrip}</p>
    <p className="level">{props.level}</p>
  </div>;
}

export default StudentActivities;*/

//Material UI import Card https://material-ui.com/components/cards/
//Material UI on Grids https://material-ui.com/components/grid/
//Material UI on styles https://material-ui.com/styles/basics/ and https://material-ui.com/styles/advanced/
//https://blog.devgenius.io/material-ui-paper-and-card-8868edee7b3a
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  CardSize: {
    height: 300,
    width: 340,
    border: "none",
    boxShadow: "none",
  },

  //Style for text for Difficulty Level
  textAlign: {
    textAlign: "center",
    fontFamily: "Nunito",
    color: "#707070",
    fontSize: 20,
  },

  //Style for Title
  textTitle: {
    textAlign: "center",
    fontFamily: "Nunito",
    fontStyle: "Bold",
    color: "#707070",
    fontWeight: "900",
    fontSize: 30,
  },
});

//Function to call props from Difficulty Level StudentProjectAPI.js and Create Card to be called to Main
const StudentProjectCard = ({ Image, Title, Level }, link) => {
  const projectcard = useStyles();
  return (
    <Card className={projectcard.CardSize}>
      <CardContent>
        <CardMedia>
          {/* Calls Image Media*/}
          <img src={Image} alt={Title} />
        </CardMedia>
        <Typography className={projectcard.textTitle}>{Title}</Typography>
        <Typography className={projectcard.textAlign}>{Level}</Typography>
      </CardContent>
    </Card>
  );
};

export default StudentProjectCard;
