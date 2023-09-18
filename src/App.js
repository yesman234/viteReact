import './App.css';


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (

      <div className='card'>
       <Avatar />
      <div className="data">
        <Intro />
        {/*skill component for each web dev skill that you have customized w/ props */}
        <SkillList />
      </div>
      </div>

  );
}

function Avatar(){
  return(
    <img className="avatar" src="assets\dexter.png" alt="this is profile pic" title="Profile Picture"  style={{width:"30rem",height:"30rem"}}/>
  )
}

function Intro(){
  return(
    <div>
      <h2>Marcellus Devon Jones</h2>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
  )
}

function SkillList(){
  return(
    <div className='skill-List'>
      {skills.map((el)=>(
        <Skill skill={el.skill} color={el.color} level={el.level} key={el.skill}/>
      ))}
    </div>
  )
}

function Skill({skill, color, level}){
  return(
    <div className="skill" style={{backgroundColor: color}}>
    <span>{skill}</span>
    <span>{level ==='beginner' && "😵‍💫"}
    {level ==='intermediate' && "💩"}
    {level ==='advanced' && "👻"}</span>
    </div>
  )

}


export default App;
