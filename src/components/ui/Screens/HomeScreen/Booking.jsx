import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Booking = () => {
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
        bgColor={"#0000800D"}
      >
        <Box flex={1}>
          <Box>
            <Text
              fontWeight={700}
              fontSize={{ base: "25px", md: "45px" }}
              textAlign={{ base: "center", md: "left" }}
              color="#04090D"
            >
              Step By Step Guide To Book Your Service
            </Text>
            <Text fontWeight={400} fontSize={"18px"} color="#7B7B7B">
              Booking our service is quick and hassle-free—simply choose your
              preferred time and service type. Our team will handle the rest,
              ensuring a smooth and professional experience from start to
              finish.
            </Text>
          </Box>
          <Box mt="30px">
            {[
              {
                icon: "/sign-up.png",
                text: "Sign Up",
                description:
                  "Sign up today to enjoy easy access to our trusted and professional services.",
              },
              {
                icon: "/user-circle.png",
                text: "Create Profile",
                description:
                  "Create your profile to personalize your experience.",
              },
              {
                icon: "/nearby-service.png",
                text: "Browse Nearby Service",
                description:
                  "Find reliable services conveniently located near you for quick and easy access.",
              },
              {
                icon: "/book.png",
                text: "Book Service",
                description: "Booking our service is quick and hassle-free.",
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
                  <Box mt="12px">
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
        <Box flex={{ base: 0, md: 1 }} ml="30px">
          <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            top={150}
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
            src="/woman-cleaning.png"
            borderRadius={"40px"}
            objectFit={"cover"}
          />
          <HStack
            bgColor={"#fff"}
            p="8px"
            borderRadius="16px"
            gap="10px"
            pos={"absolute"}
            bottom={120}
            right={100}
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
              <Image src="/award.png" />
            </Box>
            <Text>Award Winning</Text>
          </HStack>
          <HStack
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
              <Image src="/award.png" />
            </Box>
            <Text>Award Winning</Text>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default Booking;
