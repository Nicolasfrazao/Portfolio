import {
  AboutMe,
  WhyHireMe,
  Courses,
  Skills,
  Contact,
  Projects,
  Interests
} from "./sections";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center grid-flow-col gap-36 py-8 md:py-10">
      <div>
        <AboutMe />
      </div>
      {/*<div>
        <MyHistory />
      </div>*/}
      <div>
        <WhyHireMe />
      </div>
      {/*<div>
        <Education />
      </div>*/}
      <div className="h-full grid md:grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 justify-between">
        <Courses />
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Interests />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
}
