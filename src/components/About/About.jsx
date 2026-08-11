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
              Hi, I'm Mayank Mokta, an AI Engineer passionate about building
              intelligent AI systems using Large Language Models (LLMs),
              Generative AI, Retrieval-Augmented Generation (RAG), and Agentic
              AI. I recently graduated with a Bachelor's degree in Computer
              Science Engineering and have been focused on developing AI
              applications.
            </p>

            <p>
              Over the past year, I have built multiple end-to-end AI projects
              involving LangGraph, LangChain, AI agents, tool calling, memory
              systems, vector databases, embeddings, and FastAPI. Alongside AI development, I
              continuously strengthen my foundations in Data Structures &
              Algorithms, Python, Object-Oriented Programming, REST APIs, Git,
              and system design fundamentals, believing that strong engineering
              skills are just as important as understanding AI models.
            </p>

            <p>
              I love exploring how modern AI systems work behind the scenes—from
              transformer architectures and embeddings to retrieval pipelines,
              multi-agent orchestration and deployments. I'm
              always learning new technologies, improving my projects, and
              staying updated with the rapidly evolving AI ecosystem.
            </p>

            <p></p>
          </p>

          <p className="about-mid-text">
            Currently, I'm looking for opportunities as an AI Engineer,
            Generative AI Engineer, LLM Engineer, or Agentic AI Engineer, where
            I can collaborate with talented teams, contribute to impactful
            products, and continue growing as an engineer while building AI
            solutions that create real value.
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
