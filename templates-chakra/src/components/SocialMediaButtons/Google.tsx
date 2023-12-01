"use client";

import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";

const Google = () => {
  return (
    <Center p={8}>
      <Button
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
};
export default Google;
