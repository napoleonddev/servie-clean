import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
  return (
    <>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        gap={"15px"}
        px="60px"
        pos={"relative"}
      >
        <Box flex={{ base: 0, md: 1 }} ml="30px">
          <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            top={20}
            left={30}
            display={{ base: 'none', md: 'flex' }}
          >
            <Box
              w="40px"
              h="40px"
              className="green"
              borderRadius="16px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            >
              <Image src="/coin-dollar.png" />
            </Box>
            <Text>Affordable Price </Text>
          </HStack>
          {/* <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            bottom={60}
            left={30}
            display={{ base: 'flex', md: 'none' }}
          >
            <Box
              w="40px"
              h="40px"
              className="green"
              borderRadius="16px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            >
              <Image src="/coin-dollar.png" />
            </Box>
            <Text>Affordable Price </Text>
          </HStack> */}
          <Image
            src="/cleaning-man.png"
            borderRadius={"40px"}
            objectFit={"cover"}
            zIndex={60}
          />
          <VStack
            bgColor={"#fff"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            p="15px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            left={300}
            bottom={-10}
            display={{ base: 'none', md: 'flex' }}
          >
            {[
              {
                icon: "/location",
                text1: "Explore Nearby Services",
                text2: "It is a long established fact that a reader.",
              },
              {
                icon: "/favorite",
                text1: "View Favourite Services",
                text2: "It is a long established fact that a reader.",
              },
              {
                icon: "/call",
                text1: "Live Chat and Call",
                text2: "It is a long established fact that a reader.",
              },
            ].map((item) => (
              <VStack key={item.icon} align={"start"}>
                <Box
                  w="40px"
                  h="40px"
                  className="green"
                  borderRadius="16px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image src={`${item.icon}.png`} />
                </Box>
                <Text fontWeight={700} fontSize={{ base: "10px", md: "16px" }}>
                  {item.text1}
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={{ base: "9px", md: "14px" }}
                  textAlign={"center"}
                >
                  {item.text2}
                </Text>
              </VStack>
            ))}
          </VStack>
          <VStack
            bgColor={"#fff"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            p="15px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            right={5}
            bottom={-20}
            display={{ base: 'flex', md: 'none' }}
          >
            {[
              {
                icon: "/location",
                text1: "Explore Nearby Services",
                text2: "It is a long established fact that a reader.",
              },
              {
                icon: "/favorite",
                text1: "View Favourite Services",
                text2: "It is a long established fact that a reader.",
              },
              {
                icon: "/call",
                text1: "Live Chat and Call",
                text2: "It is a long established fact that a reader.",
              },
            ].map((item) => (
              <VStack key={item.icon} align={"start"}>
                <Box
                  w="40px"
                  h="40px"
                  className="green"
                  borderRadius="16px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image src={`${item.icon}.png`} />
                </Box>
                <Text fontWeight={700} fontSize={{ base: "10px", md: "16px" }}>
                  {item.text1}
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={{ base: "9px", md: "14px" }}
                  textAlign={"center"}
                >
                  {item.text2}
                </Text>
              </VStack>
            ))}
          </VStack>
          <Image
            src="/dot.png"
            w="100px"
            mt={{ base: "-55px", md: "-60px" }}
            ml={{ base: "-40px", md: "-40px" }}
            pos={"absolute"}
          />
        </Box>
        <Box flex={1}>
          <Box>
            <Text fontWeight={700} fontSize={{ base: "25px", md: "45px" }} textAlign={{ base: 'center', md: 'left' }} color="#04090D">
              We Are Very Experienced In Cleaning Service
            </Text>
            <Text fontWeight={400} fontSize={"18px"} color="#7B7B7B">
              Experienced in providing thorough cleaning services for residential and commercial spaces, including dusting, vacuuming, sanitizing, and waste removal. Skilled in maintaining cleanliness, hygiene, and organization to ensure a safe and welcoming environment.
            </Text>
          </Box>
          <Box mt="30px">
            {[
              {
                icon: "/check.png",
                text: "We Are Committed",
                description:
                  "We are committed to delivering reliable, high-quality cleaning services that exceed expectations.",
              },
              {
                icon: "/check.png",
                text: "Trusted Professionals",
                description:
                  "Our team consists of trusted professionals dedicated to maintaining clean and healthy spaces.",
              },
              {
                icon: "/check.png",
                text: "Highly Rated Cleaning",
                description:
                  "We provide highly rated cleaning services recognized for excellence and customer satisfaction.",
              },
            ].map((item) => (
              <HStack key={item.text} spacing="12px" align={"start"}>
                <Box
                  p="8px"
                  className="green"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="4px"
                >
                  <Image src={item.icon} alt={item.text} />
                </Box>
                <VStack align="start">
                  <Text fontWeight={600} fontSize={"16px"}>
                    {item.text}
                  </Text>
                  <Text fontWeight={400} fontSize={"14px"} color="#7B7B7B">
                    {item.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Experience;
