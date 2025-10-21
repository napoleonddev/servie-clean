import { Box, HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Guide = () => {
  return (
    <>
      <Flex
        align={"center"}
        direction={{ base: "column", md: "row" }}
        gap={"15px"}
        justify={"center"}
        px="60px"
        py="80px"
        pos={"relative"}
        mb="60px"
      >
        <Box flex={1}>
          <Box>
            <Text
              fontWeight={600}
              fontSize={{ base: "25px", md: "45px" }}
              textAlign={{ base: "center", md: "left" }}
              color="#04090D"
            >
              The Ultimate Guide To Deep Cleaning Services
            </Text>
            <Text fontWeight={400} fontSize={"18px"} color="#7B7B7B">
              Our team will handle the rest, ensuring a smooth and professional
              experience from start to finish.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mt="30px">
            {[
              "Quick Response",
              "Professional Cleaning Team",
              "Competitive Pricing",
              "Easily Booking",
              "Best Service",
            ].map((item) => (
              <HStack key={item} spacing="12px" align={"start"}>
                <Box
                  className="green"
                  p="8px"
                  borderRadius="50%"
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <IoCheckmark color="#fff" />
                </Box>
                <Text fontWeight={500} fontSize={"16px"} color="#04090D">
                  {item}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
        <Box flex={{ base: 0, md: 1 }} ml="40px">
          <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            top={300}
            right={470}
            display={{ base: "none", md: "flex" }}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
          >
            <Box
              w="40px"
              h="40px"
              className="green"
              borderRadius="16px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src="/briefcase.png" />
            </Box>
            <Text>15+ Years Experience</Text>
          </HStack>
          <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            bottom={300}
            left={10}
            display={{ base: "flex", md: "none" }}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
          >
            <Box
              w="40px"
              h="40px"
              className="green"
              borderRadius="16px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src="/briefcase.png" />
            </Box>
            <Text>15+ Years Experience </Text>
          </HStack>
          <Image
            src="/people-cleaning.png"
            borderRadius={"40px"}
            objectFit={"cover"}
          />
          <Box>
            <VStack
              bgColor={"#fff"}
              borderRadius={"16px"}
              display={{ base: "none", md: "block" }}
              p="26px 8px 8px 8px"
              w="200px"
              pos="absolute"
              bottom={50}
              right={100}
              zIndex={99}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            >
              <Box className="green" w="40px" h="40px" borderRadius="50%" display={'flex'} alignItems={"center"} justifyContent={"center"} mt="-40px" mx='auto'>
                <Image src="/quote.png" w="20px" />
              </Box>
              <Text textAlign={"center"} fontWeight={400} fontSize={"14px"}>
                Bringing order and freshness to your home or office. 
              </Text>
            </VStack>
            <VStack
              bgColor={"#fff"}
              borderRadius={"16px"}
              display={{ base: "block", md: "none" }}
              p="26px 8px 8px 8px"
              w="200px"
              pos="absolute"
              bottom={50}
              left={180}
              zIndex={99}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            >
              <Box className="green" w="40px" h="40px" borderRadius="50%" display={'flex'} alignItems={"center"} justifyContent={"center"} mt="-40px" mx='auto'>
                <Image src="/quote.png" w="20px" />
              </Box>
              <Text textAlign={"center"} fontWeight={400} fontSize={"14px"}>
                Bringing order and freshness to your home or office.
              </Text>
            </VStack>
            {/* <HStack
              bgColor={"#fff"}
              p="8px"
              borderRadius="16px"
              gap="10px"
              pos={"absolute"}
              bottom={110}
              right={5}
              display={{ base: "flex", md: "none" }}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
            >
              <Box
                w="40px"
                h="40px"
                className="green"
                borderRadius="16px"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src="/quote.png" />
              </Box>
              <Text>Award Winning</Text>
            </HStack> */}
          </Box>
        </Box>
      </Flex>
      <Flex
        align={'center'}
        direction={{ base: "column", md: "row" }}
        gap={"15px"}
        justify={'center'}
        px="60px"
        py='80px'
        pos={"relative"}
        mb='60px'
      >
        <Box flex={{ base: 0, md: 1 }} ml="30px" pos={'relative'}>
          <Image
            src="/people-cleaning-office.png"
            borderRadius={"40px"}
            objectFit={"cover"}
          />
          <Image
            src="/housewife-cleansing.png"
            borderRadius={"40px"}
            objectFit={"cover"}
            pos={'absolute'}
            right={0}
            bottom={0}
            w='250px'
          />
        </Box>
        <Box flex={1}>
          <Box>
            <Text fontWeight={700} fontSize={{ base: "25px", md: "45px" }} textAlign={{ base: 'center', md: 'left' }}  color="#04090D">
              Fast, Friendly And Satisfaction Guarantee
            </Text>
            <Text fontWeight={400} fontSize={"18px"} color="#7B7B7B">
              Our team will handle the rest, ensuring a smooth and professional experience from start to finish.
            </Text>
          </Box>
          <Box mt="30px">
            {[
              {
                icon: "/satisfaction.png",
                text: "Satisfaction Guarantee",
                description:
                  "Sign up today to enjoy easy access to our trusted and professional services.",
              },
              {
                icon: "/appointment.png",
                text: "Flexible Appointment",
                description:
                  "Create your profile to personalize your experience.",
              },
              {
                icon: "/quotation.png",
                text: "Quick Service",
                description:
                  "Find reliable services conveniently located near you for quick and easy access.",
              },
              {
                icon: "/service.png",
                text: "Book Service",
                description:
                  "Booking our service is quick and hassle-free.",
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
                  <Box mt='12px'>
                    <Text fontWeight={600} fontSize={"16px"}>
                      {item.text}
                    </Text>
                    <Text fontWeight={400} fontSize={"14px"} color="#7B7B7B">
                      {item.description}
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Guide;
