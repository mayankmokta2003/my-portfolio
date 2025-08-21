import "./Mywork.css";
import Projects from "./Projects";

export default function Mywork() {
  return (
    <div className="work" id="work">
      <div className="mywork-heading">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-projects">
        {Projects.map((prev, index) => {
          return (
            <div key={index} className="my-projects">
              <img src={prev.link} className="proj-img" />
            </div>
          );
        })}
      </div>

      <div></div>
    </div>
  );
}
