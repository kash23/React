import Skills from "./Skills";
import Projects from "./Projects";
import Bio from "./Bio";
import Contact from "./Contact";
import Menu from "./Menu";

const skills = [
  { name: 'C#', category: 'Backend' },
  { name: 'HTML & CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' },
  { name: 'Javascript', category: 'Frontend' },
  { name: '.NET MVC', category: 'Frontend Framework' },
  { name: 'MySQL - WorkBench', category: 'Database' },
  { name: '.NET Maui', category: 'Cross-platform Framework' },
  { name: 'React', category: 'Frontend' },
  { name: '.NET Entity Framework', category: 'Mapping framework' }
];

function App(){
  return (<>
  <Menu></Menu>
  <div className="container-fluid">
    <div>
      <Contact></Contact>
    </div>
    <div>
      <Bio></Bio>
    </div>
    <div> 
      <Projects></Projects>
    </div>
    <div>
      <Skills items={skills} heading="Skills"/>
    </div>
  </div>
   
  </>)
}

export default App;