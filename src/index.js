import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return <img className="avatar" src="developer.png" alt="zahra sharifi" />
}
function Intro() {
 return <div>
  <h1>Zahra Sharifi</h1>
  <p>
   Junior front-end web developer.
  </p>
 </div>
}
function SkillList() {
 return(
  <div className="skill-list">
    <Skill skill="React" emoji="👶" color="gray"/>
    <Skill skill="JavaScript" emoji="👍" color="#da9d19"/>
    <Skill skill="HTML" emoji="💪" color="#173081"/>
    <Skill skill="CSS" emoji="💪" color="#cf5c0e"/>
    <Skill skill="Tailwind" emoji="👶" color="#dd884e"/>
  </div>
 )
}
function Skill(props) {
 return <div className="skill" style={{background: props.color}}>
  <span>{props.skill}</span>
  <span>{props.emoji}</span>
 </div>
}



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

