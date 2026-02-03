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
            <p>
              I am a blockchain-focused developer with a strong foundation in
              Ethereum smart contract development and modern Web3 application
              architecture. My primary expertise lies in building, testing, and
              integrating smart contracts using industry-standard tools and
              workflows.
            </p>

            <p>
              I work extensively with Solidity, and I am comfortable developing
              and testing contracts using both Foundry and Hardhat. I have
              hands-on experience writing unit tests and fuzz tests with Forge,
              and I follow security-first development practices, including
              proper input validation, access control patterns, and common
              vulnerability prevention.
            </p>

            <p>
              On the frontend side, I build Web3-enabled user interfaces using
              React, integrating smart contracts with libraries such as
              ethers.js, wagmi, and viem.
            </p>

            <p>
              I have also built full-stack decentralized applications by
              combining Web3 with the MongoDB, NodeJs, Express.js, React.js
              (MERN), using blockchain libraries on the backend where required.
              While my focus is Web3, I am comfortable working across the stack
              to deliver complete, functional products.
            </p>
          </p>

          <p className="about-mid-text">
            I am actively deepening my knowledge in zero-knowledge proof
            systems, rollup infrastructure, and smart contract security, and I
            am seeking opportunities where I can contribute to production-grade
            blockchain systems while continuing to grow as an engineer.
          </p>

          {/* <div className="skills">
            <p className="skill1">
              HTML & Tailwind
            </p>

            <p className="skill2">
              JavaScript & React JS
            </p>

            <p className="skill3">
              Node JS & Mongo DB & Express JS
            </p>

            <p className="skill4">
              Solidity & Foundry & Hardhat & Ethers JS
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
