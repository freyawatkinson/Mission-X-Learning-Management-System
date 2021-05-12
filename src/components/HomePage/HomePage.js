import React from "react";
import TopNavBar from "./TopNavBar.js";
import "./HomePageStyle.css";
// import SignUp Modal
import studentProject from "./Images/ContainerTwoProject.png";
import StudentCreateIcon from "./StudentsIcons/StudentCreateIcon.js";
import animationIcon from "./StudentsIcons/animation.png";
import controller from "./StudentsIcons/games.png";
import chatbot from "./StudentsIcons/chatbots.png";
import AugmentedRealityIcon from "./StudentsIcons/augmentedReality.png";
import TeachingKidsIcon from "./StudentsIcons/TeachingKidsIcon.js";
import idea from "./StudentsIcons/creativityIcon.png";
import toddlercutting from "./Images/ContainerThreeImageOne.jpg";
import crticalThinking from "./StudentsIcons/criticalThinking.png";
import puzzle from "./Images/ContainerThreeImageTwo.jpg";
import girlshandgames from "./Images/ContainerThreeImageThree.jpg";
import teamhands from "./StudentsIcons/communicationIcon.png";
import Atom from "./StudentsIcons/technologyIcon.png";
import girlonlaptop from "./Images/ContainerThreeImageFour.jpg";
import studentslistening from "./Images/ContainerFiveImage.jpg";
// import FormModal
import Footer from "./AppFooter.js";
import HomePageIcons from "./StudentsIcons/StudentCreateIcon.js";

const future = () => {
	<h1 className="future">future</h1>;
};

const HomePage = () => {
	return (
		<div>
			<TopNavBar />
			<div className="ContainerOne">
				<div className="TopSection">
					<h1>
						Prepare young minds for a better{" "}
						<span style={{ color: "#42C0F6" }}>future</span>
					</h1>
					<p>
						Let us help you advance students in Digital Technologies and other
						learning areas with our project-based learning programme.
					</p>

					<div className="LearnMoreContainer">
						<button>Learn More</button>
						<div id="SignUp">
							<button>SIGNUP</button>{" "}
							{/* <FormModal signupButton="SIGN UP" /> */}
							<p>
								*Basic subscription includes the first 15 project free of
								charge.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="ContainerTwo">
				<div className="ColumnOneContent">
					<h1>What we offer</h1>
					The Creative Problem Solving programme is series of digital creation
					projects aimed to encourage self-motivation and student agency,
					designed by New Zealand’s leading IT industry experts and schools.
					<h1>What will students create?</h1>
					<div className="ColumnOneIcons">
						<HomePageIcons
							text="Animation"
							image={<img src={animationIcon} alt="Animation Icon"></img>}
						/>
						<HomePageIcons
							text="Games"
							image={<img src={controller} alt="Games Icon"></img>}
						/>
						<HomePageIcons
							text="Chatbots"
							image={<img src={chatbot} alt="chatbot Icon"></img>}
						/>
						<HomePageIcons
							text="Augmented Reality"
							image={
								<img
									src={AugmentedRealityIcon}
									alt="Augmented Reality Icon"
								></img>
							}
						/>
					</div>
				</div>

				<div className="ColumnTwoContent">
					<img src={studentProject} alt="Lion"></img>
				</div>
			</div>

			<div className="Section3">
				<h3>
					Teaching kids programming and digital skills is MORE than just writing
					code.
				</h3>
				<div className="Section3Icons">
					<TeachingKidsIcon
						background={toddlercutting}
						text="Creativity & Individuality"
						icon={<img src={idea} alt="Idea"></img>}
					/>
					<TeachingKidsIcon
						background={puzzle}
						text="Critical Thinking & Problem Solving"
						icon={<img src={crticalThinking} alt="Critical Thinking"></img>}
					/>
					<TeachingKidsIcon
						background={girlshandgames}
						text="Communication & Collaboration"
						icon={<img src={teamhands} alt="Team"></img>}
					/>
					<TeachingKidsIcon
						background={girlonlaptop}
						text="Technology & Future Focus"
						icon={<img src={Atom} alt="Atom"></img>}
					/>
				</div>
				<h3>How our programme helps teachers and schools</h3>
				<div className="Section3Buttons">
					<button>Learning Pathways</button>
					<button>Digital Technologies</button>
					<button>Key Competencies</button>
					<button>IR4.0</button>
				</div>
			</div>

			<div className="ContainerFour">
				<ul>
					<li>
						<h2>Enhance key competencies</h2>
						<p>
							The programe enhances capabilities of students in the 5 Key
							Competencies identified in the New Zealand Curriculum:
						</p>
					</li>

					<li>
						<h3>Thinking</h3>
						<p>
							In particular the programme focused on problem solving, design
							thinking and computational thinking
						</p>
					</li>

					<li>
						<h3>Self-Management</h3>
						<p>
							Projects and challenges are designed to motivate students to
							explore and experiment with self-motivation"
						</p>
					</li>

					<li>
						<h3>Participation and Collaboration</h3>
						<p>
							The programme encourages students to be involved in communities,
							such as family, whānau, school, and contribute and make
							connections with other people
						</p>
					</li>
				</ul>
			</div>

			<div className="Section5">
				<img src={studentslistening} alt="students"></img>
				<div className="Section5content">
					<h3>What are you waiting for?</h3>
					<h5>Start teaching Digital Technologies today.</h5>
					If you need more infomration, we are happy to answer any questions you
					may have.
					<div className="EnquireNow">
						<button>ENQUIRE NOW</button>
						<button
							style={{
								backgroundColor: "#f91c85",
								color: "white",
								borderColor: "#f91c85",
							}}
						>
							SIGN UP
						</button>{" "}
						{/*Modal for signing Up here*/}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
