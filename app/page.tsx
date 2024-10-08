import { AboutMe, MyHistory, WhyHireMe, Education, Courses, Skills, Contact, Projects } from "./sections";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-36 py-8 md:py-10">
      <div>
        <AboutMe />
      </div>
      <div>
        <MyHistory />
      </div>
      <div>
        <WhyHireMe />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
}
