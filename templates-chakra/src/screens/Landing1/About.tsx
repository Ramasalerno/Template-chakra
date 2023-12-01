import React from "react";
import Hero3 from "../../components/Hero/Hero3";
import Features2 from "../../components/Features/Features2";
import { Center, Heading } from "@chakra-ui/layout";

const About = () => {
  return (
    <div>
      <Hero3 />
      <br />
      <Center>
        <Heading>About section</Heading>
      </Center>
      <Features2 />
    </div>
  );
};

export default About;
