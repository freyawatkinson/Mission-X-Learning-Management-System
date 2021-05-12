import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProgressTracker from "./components/ProgressTracker";
import ProjectSubmissions from "./components/ProjectSubmissions";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/ProgressTracker" component={ProgressTracker} />
			<Route exact path="/ProjectSubmissions" component={ProjectSubmissions} />
		</Switch>
	);
};

export default Router;
