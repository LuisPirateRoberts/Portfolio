import { styles } from "../styles";

export default function Hero() {
  return (
    <div className={`${styles.padding} pt-16 sm:pt-20 xs:pt-24`}>
      <p className={`${styles.microText}`}>Hey, I'm</p>
      <h1 className={`${styles.heroHeadText}`}>Luis Pinto</h1>
      <p className={`${styles.heroSubText}`}>Frontend Developer</p>
      <p className={`${styles.heroParagraphText} mt-5 max-w-lg leading-normal`}>
        I can build web applications with great user experience.
      </p>
    </div>
  );
}
