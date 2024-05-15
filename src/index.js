import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "intermediate",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "beginner",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "beginner",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "intermediate",
		color: "#60DAFB",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img
			className="avatar"
			src="developer.png"
			alt="zahra sharifi"
		/>
	);
}
function Intro() {
	return (
		<div>
			<h1>Zahra Sharifi</h1>
			<p>Junior front-end web developer.</p>
		</div>
	);
}
function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill
					skill={skill.skill}
					color={skill.color}
					level={skill.level}
				/>
			))}
		</div>
	);
}
function Skill({ skill, color, level }) {
	return (
		<div
			className="skill"
			style={{ background: color }}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "🤏"}
				{level === "intermediate" && "👍"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
