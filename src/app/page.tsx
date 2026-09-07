import Hero from "./components/Hero";
import ShootingStars from "./components/ShootingStars";
import skyStyles from "./components/ShootingStars.module.css";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
{
  /*import Newsletter from "./components/Newsletter";*/
}

export default function Home() {
  return (
    <div className={skyStyles.home}>
      <ShootingStars />
      <Hero />
      <Projects />
      <Blogs />
      {/*<Newsletter />*/}
    </div>
  );
}
