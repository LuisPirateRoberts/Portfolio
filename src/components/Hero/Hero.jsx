import React from "react";
import { styles } from "../../styles";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-left items-center">
      <div className={`${styles.padding}`}>
        <p className={styles.microText}>Hey, I'm</p>
        <h1 className={styles.heroHeadText}>Luis Pinto</h1>
        <p className={styles.heroSubText}>Frontend Developer</p>
        <p
          className={`${styles.heroParagraphText} mt-5 max-w-lg leading-normal`}
        >
          I can build web applications with great user experience.
        </p>
      </div>
    </div>
  );
};

export default Hero;
