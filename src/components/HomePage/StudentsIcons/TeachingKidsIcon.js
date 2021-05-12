import React from "react";

const TeachingKidsIcon = (props) => {
	return (
		<div
			className="TeachingKidsIconContainer"
			style={{
				backgroundImage: `url(${props.background})`,
				backgroundSize: "Cover",
			}}
		>
			{props.icon}
			{props.text}
		</div>
	);
};

export default TeachingKidsIcon;
