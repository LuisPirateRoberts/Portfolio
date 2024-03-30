import { styles } from "../../styles";

const About = () => {
  return (
    <div id="about" className={`${styles.padding}`}>
      <h1 className={styles.microText}>About me</h1>
      <div
        className={`${styles.heroParagraphText} mt-5 max-w-2xl leading-normal`}
      >
        <p className="mb-3">
          Hello! My name is Luis and I've always been connected to the Internet,
          so I have a great{" "}
          <span className="font-semibold text-gray-300">notion of design</span>.
          And I'm constantly seeking to push my creativity by applying technical
          skills to build solutions.
        </p>
        <p className="mb-3">
          I'm passionate about{" "}
          <span className="font-semibold text-gray-300">clean design</span>, and
          strive to develop intuitive and attractive interfaces.
        </p>
        <p className="mb-3">
          With some experience in UX/UI design and frontend development, I'm
          ready to{" "}
          <span className="font-semibold text-gray-300">create projects</span>{" "}
          and contribute to the creation of memorable digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
