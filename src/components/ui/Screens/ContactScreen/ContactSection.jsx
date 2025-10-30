
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <Flex justify={"center"} align={"center"} px="60px" py='30px'>
      <Box>
        <Box>
          <Text
            fontWeight={600}
            fontSize={{ base: "25px", md: "45px" }}
            textAlign={{ base: "center", md: "left" }}
            color="#04090D"
          >
            Have Questions?
          </Text>
          <Text
            fontWeight={600}
            fontSize={{ base: "25px", md: "45px" }}
            textAlign={{ base: "center", md: "left" }}
            color="#04090D"
          >
            Get in touch!
          </Text>
        </Box>
        <Box mt="30px">
          {[
            {
              icon: "/location.png",
              text: "Location",
              description: "2464 Royal Ln. Mesa, New Jersey 45463",
              social: [],
            },
            {
              icon: "/phone.png",
              text: "Phone Number",
              description: "",
              social: [],
            },
            {
              icon: "/share.png",
              text: "Follow Us",
              description: "",
              social: [
                { name: "facebook", icon: <FaFacebook /> },
                { name: "instagram", icon: <FaInstagram /> },
                { name: "twitter", icon: <FaXTwitter /> },
              ],
            },
          ].map((item) => (
            <HStack key={item.text} spacing="12px" align={"start"}>
              <Box
                bg="#000"
                borderRadius="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt="4px"
                w="50px"
                h="50px"
              >
                <Image w="20px" src={item.icon} alt={item.text} />
              </Box>
              <VStack align="start">
                <Box mt="12px">
                  <Text fontWeight={400} fontSize={"16px"}>
                    {item.text}
                  </Text>
                  <Text fontWeight={600} fontSize={"14px"} color="#7B7B7B">
                    {item.description}
                  </Text>
                  {item.social.length > 0 && (
                    <HStack>
                      {item.social.map((el) => (
                        <Box key={el.name}>{el.icon}</Box>
                      ))}
                    </HStack>
                  )}
                </Box>
              </VStack>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box flex={1}>
        <VStack gap={'20px'}>
          <Box>
            <Text>Name</Text>
            <Input placeholder="Enter your name" pl='10px' w={'300px'} />
          </Box>

          <Box>
            <Text>Email Address</Text>
            <Input type="email" placeholder="Enter your email" pl='10px' w={'300px'} />
          </Box>

          <Box>
            <Text>Mobile Number</Text>
            <Input type="tel" placeholder="Enter your mobile number" pl='10px' w={'300px'} />
          </Box>

          <Box>
            <Text>Message</Text>
            <Textarea placeholder="Message" pl='10px' w={'300px'} />
          </Box>

          <Button w={'300px'}>Send your message</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ContactSection;
