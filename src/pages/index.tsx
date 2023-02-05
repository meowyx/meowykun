import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Heading>meow</Heading>
      </Flex>
    </>
  );
}
