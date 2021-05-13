import React from "react";

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
