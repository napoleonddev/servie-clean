import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Link as ChakraLink,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      align={"center"}
      px="60px"
      py="30px"
    >
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
              description: "149a Canning Hwy, South Perth, WA, 6151",
              social: [],
            },
            {
              icon: "/phone.png",
              text: "Phone Number",
              description: "+61468454380",
              social: [],
            },
            {
              icon: "/share.png",
              text: "Follow Us",
              description: "",
              social: [
                {
                  name: "facebook",
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/share/17MJ7XWHRv/?mibextid=wwXIfr",
                },
                {
                  name: "instagram",
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/servieclean/?utm_source=ig_web_button_share_sheet",
                },
                {
                  name: "linkedin",
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/company/servieclean",
                },
                {
                  name: "email",
                  icon: <IoMdMail />,
                  link: "mailto:info@cleaniecare.com.au",
                },
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
                        <Box key={el.name}>
                          <ChakraLink href={el.link} target="_blank">
                            {el.icon}
                          </ChakraLink>
                        </Box>
                      ))}
                    </HStack>
                  )}
                </Box>
              </VStack>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box flex={1} mt={{ base: "20px", md: 0 }}>
        <form action="https://formspree.io/f/manrdkkp" method="POST">
          <VStack gap={"20px"}>
            <Box>
              <Text>Name</Text>
              <Input
                placeholder="Enter your name"
                pl="10px"
                w={{ base: "300px", md: "500px" }}
                name="name"
              />
            </Box>

            <Box>
              <Text>Email Address</Text>
              <Input
                type="email"
                placeholder="Enter your email"
                pl="10px"
                w={{ base: "300px", md: "500px" }}
                name="email"
              />
            </Box>

            <Box>
              <Text>Mobile Number</Text>
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                pl="10px"
                w={{ base: "300px", md: "500px" }}
                name="mobile"
              />
            </Box>

            <Box>
              <Text>Message</Text>
              <Textarea
                placeholder="Message"
                pl="10px"
                w={{ base: "300px", md: "500px" }}
                name="message"
              />
            </Box>

            <Button
              bg={"#000"}
              color={"#fff"}
              w={{ base: "300px", md: "500px" }}
              type="submit"
            >
              Send your message
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactSection;
