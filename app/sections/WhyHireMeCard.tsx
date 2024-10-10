"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

const WhyHireMeCard = () => {
  //const [dark, setdark] = useState(false);

  const dark = false;

  return (
    <Card
      className={`backdrop-blur-lg 
          min-h-96 p-6 mt-10 flex items-start
          dark:bg-slate-700 dark:text-white dark:shadow-white bg-white text-gray-800 shadow-lg rounded-xl border shadow-black `}
    >
      <CardHeader>
        <h1 className={`text-3xl font-bold mb-4 text-blue-500 dark:text-white`}>
          Why Hire Me?
        </h1>
      </CardHeader>
      <Divider className={`bg-blue-500 h-1 w-full rounded-2xl`} />
      <CardBody>
        <p className="mb-6">
          &ensp;When you hire me, you&apos;re not just bringing a highly skilled
          professional on board—you&rsquo;re investing in a versatile powerhouse
          who will drive exceptional results across multiple facets of your
          business. With a track record of transforming challenges into
          opportunities, I offer a unique blend of technical expertise,
          strategic insight, and unstoppable dedication.
        </p>
        <p className="mb-6">
          &ensp;I bring over 50 certifications across software development,
          cloud computing, cybersecurity, digital marketing, and
          entrepreneurship, which means I&apos;m prepared to solve problems from
          every angle and at every scale. My technical toolkit includes an array
          of programming languages and frameworks—like NextJS, Node, Python,
          TypeScript, and C++ and I have hands-on experience with
          industry-leading technologies such as AWS, Prisma, and GraphQL.
        </p>
        <p className="mb-6">
          &ensp;I don&rsquo;t just focus on delivering results; I focus on
          driving game-changing growth. With me, you&apos;re not only gaining a
          software engineer, but also an entrepreneur, investor, and project
          leader who understands how to harness technology for scalable success.
        </p>
        <p className="mb-6">
          &ensp;What truly sets me apart is my athletic discipline and
          relentless drive for excellence. I approach every project with the
          same intensity I bring to my athletic endeavors always striving for
          the next level and pushing the boundaries of what&rsquo;s possible.
          I&rsquo;m committed to continuous growth, learning, and a level of
          focus that turns vision into reality.
        </p>
        <h3
          className={`text-2xl font-semibold mb-4 dark:text-blue-300 text-blue-500`}
        >
          By hiring me, you&rsquo;ll get a professional who is:
        </h3>
        <ul className="list-none space-y-4 text-lg leading-relaxed">
          <li className="flex items-start">
            <span
              className={`mr-3 font-bold ${dark ? "text-blue-300" : "text-blue-500"}`}
            >
              Multidisciplinary:
            </span>
            <span>
              Capable of handling a wide range of responsibilities across
              software engineering, business development, and operational
              management.
            </span>
          </li>
          <li className="flex items-start">
            <span
              className={`mr-3 font-bold ${dark ? "text-blue-300" : "text-blue-500"}`}
            >
              Strategic:
            </span>
            <span>
              Skilled at analyzing and optimizing processes to enhance
              efficiency, reduce costs, and increase profitability.
            </span>
          </li>
          <li className="flex items-start">
            <span
              className={`mr-3 font-bold ${dark ? "text-blue-300" : "text-blue-500"}`}
            >
              Dedicated:
            </span>
            <span>
              Driven by a passion for continuous improvement and always aiming
              to exceed expectations.
            </span>
          </li>
        </ul>
        <p className="mt-6">
          Let&rsquo;s make your goals my mission. Together, we&rsquo;ll elevate
          your projects to new heights, leverage cutting-edge technology, and
          achieve unparalleled growth. Your success is my priority, and
          I&rsquo;m ready to bring everything I&rsquo;ve got to make it happen.
        </p>
      </CardBody>
      <Divider
        className={`${dark ? "bg-white" : "bg-blue-500"} h-1 w-full rounded-2xl`}
      />
    </Card>
  );
};

export default WhyHireMeCard;
