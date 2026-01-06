import "./Mywork.css";
import Projects from "./Projects";

export default function Mywork() {
  return (
    <div className="work" id="work">
      <div className="mywork-heading">
        <h1>My latest work</h1>
      </div>
      {/* <div className="mywork-projects">
        {Projects.map((prev, index) => {
          return (
            <div key={index} className="my-projects">
              <img src={prev.link} className="proj-img" />
            </div>
          );
        })}
      </div> */}


<div className="mywork-projects">
  {Projects.map((prev) => {
    return (
      <div key={prev.id} className="my-projects">
        {prev.id === 2 ? (
          <a
            href="https://web3-ethgpt.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={prev.link} className="proj-img" alt={prev.title} />
          </a>
        ) : (
          <img src={prev.link} className="proj-img" alt={prev.title} />
        )}
      </div>
    );
  })}
</div>



      <div></div>
    </div>
  );
}
