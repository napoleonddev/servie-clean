import { Box, Button, Flex, Image, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";

const Hero = ({onGetStarted}) => {
  return (
    <Flex
      pl={{ base: "0", md: "60px" }}
      bgColor={"#98b2781A !important"}
      justify={"space-around"}
      pos={{ base: "initial", md: "relative" }}
      direction={{ base: "column", md: "row" }}
    >
      <VStack
        align={{ base: "center", md: "start" }}
        gap="20px"
        justify={"center"}
      >
        <Box>
          <Image src="/pattren.png" w="20px" mb="-7px" ml="-6px" />
          <Text
            p={"8px 12px"}
            bgColor={"#98b278"}
            color="#fff"
            borderRadius={"25px"}
            fontWeight={400}
          >
            Professional Cleaning Service Company
          </Text>
        </Box>
        <Text
          display={{ base: "none", md: "block" }}
          color="#000"
          fontSize={"55px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontWeight={500}
          lineHeight={"70px"}
        >
          Your Trusted Cleaning <br /> Service Provider
        </Text>
        <Text
          display={{ base: "block", md: "none" }}
          color="#000"
          fontSize={"41px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontWeight={500}
          lineHeight={"55px"}
          textAlign={"center"}
        >
          Your Trusted <br /> Cleaning Service <br /> Provider
        </Text>
        <Text
          display={{ base: "none", md: "block" }}
          color="#7B7B7B"
          fontSize={"18px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontWeight={400}
        >
          We redefine the standards of cleanliness with an unwavering <br /> commitment
          to excellence, environmental responsibility, and <br /> ethical practices.
        </Text>
        <Text
          display={{ base: "block", md: "none" }}
          color="#7B7B7B"
          fontSize={"18px"}
          fontWeight={400}
          px='30px'
          textAlign={'center'}
        >
          We redefine the standards of cleanliness with an unwavering
          commitment to excellence, environmental responsibility, and
          ethical practices.
        </Text>
        <Flex gap="12px">
          <Button
            className="green"
            borderRadius={"24px"}
            p="20px 12px"
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={400}
            onClick={onGetStarted}
          >
            Let's Get Started
          </Button>
          <ChakraLink href="/service">
            <Button
              className="green"
              border={"1px solid #000000CC"}
              borderRadius={"24px"}
              p="20px 12px"
              bgColor={"transparent"}
              color={"#000000CC"}
              fontSize={"16px"}
              fontWeight={400}
            >
              Explore Service
            </Button>
          </ChakraLink>
        </Flex>
        <Image
          display={{ base: "none", md: "block" }}
          src="/vbg.png"
          pos={"absolute"}
          bottom={"0"}
          left={"0"}
        />
      </VStack>
      <Box
        display={{ base: "none", md: "block" }}
        pos="absolute"
        top={400}
        right={580}
      >
        <Image src="cbg.png" w="100px" />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        pos="absolute"
        top={30}
        right={50}
      >
        <Image src="vbg3.png" w="100px" />
      </Box>
      <Box>
        <VStack
          bgColor={"#fff"}
          borderRadius={"16px"}
          display={{ base: "none", md: "block" }}
          p="26px 8px 8px 8px"
          w="200px"
          pos="absolute"
          top={420}
          right={350}
          zIndex={99}
        >
          <Image src="/vbg2.png" w="40px" mt="-40px" />
          <Text textAlign={"center"} fontWeight={400} fontSize={"14px"}>
            Best cleaning service for your business and house
          </Text>
        </VStack>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        maxH={"100vh"}
        maxW="100%"
        flexShrink={0}
        ml="-160px"
        zIndex={45}
      >
        <Image
          src="/smiling_girl.png"
          alt="right_hero_img"
          h="600px"
          maxW={"auto"}
          objectFit={"contain"}
        />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        maxH={"100vh"}
        maxW="100%"
        flexShrink={0}
        ml={{ base: "0", lg: ' "-160px' }}
        zIndex={45}
        justifyContent={"center"}
      >
        <Image
          src="/smiling_girl.png"
          alt="right_hero_img"
          h={{ base: "300px", md: "600px" }}
          maxW={"auto"}
          objectFit={"contain"}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
