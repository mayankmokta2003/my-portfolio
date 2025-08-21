import "./About.css";

export default function About() {
  return (
    <div className="aboutme" id="about">
      <div className="top">
        <h1 className="top-text">ABOUT ME</h1>
      </div>

      <div className="mid">
        <div>
          <img src="./images/luffy.png" className="mid-pic" />
        </div>

        <div>
          <p className="about-mid-text">
            I am an experienced Frontend Developer with over a year of
            professional expertise in the field.Throughout my career, I have had
            the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <p className="about-mid-text">
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          <div className="skills">
            <p className="skill1">
              HTML & CSS 
              {/* <hr className="line1" /> */}
            </p>

            <p className="skill2">
              React JS
              {/* <hr className="line2" /> */}
            </p>

            <p className="skill3">
              JavaScript
              {/* <hr className="line3" /> */}
            </p>

            <p className="skill4">
              Node JS
              {/* <hr className="line4" /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
