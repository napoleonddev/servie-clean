"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link as ChakraLink,
  IconButton,
  Image,
  Text,
  Drawer,
  DrawerBody,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
// import DarkModeToggle from "./DarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { Portal } from "@chakra-ui/react";
import { WiTime9 } from "react-icons/wi";
import { GoMail } from "react-icons/go";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Box bg="#fff" px={{ base: 4, md: "60px" }} py={{ base: 4, md: "15px" }}>
      <Box display={{ base: "none", md: "block" }}>
        <Flex justify={"space-between"} align={"center"} gap="20px">
          {" "}
          <Box maxW={"70px"}>
            {" "}
            <Image src="/logo.png" alt="Servie Clean Logo" />{" "}
          </Box>{" "}
          <Flex gap="10px">
            <Flex gap="10px">
              <WiTime9 color="#36B864" size="25px" />
              <Box>
                <Text fontSize={"12px"}>Working Hours</Text>
                <Text fontSize={"12px"} fontWeight={600}>
                  Mon - Sat: 08.00am - 06.00pm
                </Text>
              </Box>{" "}
            </Flex>
            <HStack>
              <IconButton className="green" color="#fff" p="10px">
                {" "}
                <LuPhone /> <Text ml="5px">08 6383 8002</Text>{" "}
              </IconButton>{" "}
            </HStack>
          </Flex>
          <Flex gap="20px" align="center" justify="center">
            {navLinks.map((link) => (
              <ChakraLink
                as={NextLink}
                key={link.href}
                href={link.href}
                color={pathname === link.href ? "black" : "gray.500"}
                fontSize={'16px'}
                fontWeight={pathname === link.href ? "bold" : "normal"}
                _hover={{ color: "black" }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Flex>
          <HStack>
            {" "}
            <IconButton className="green" color="#fff" p="10px">
              {" "}
              <FaBell /> <Text ml="5px">BOOK NOW</Text>{" "}
            </IconButton>{" "}
          </HStack>{" "}
          {/* <DarkModeToggle />{" "} */}
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Box
        bg="#fff"
        display={{ base: "block", md: "none" }}
        px={{ base: 4, md: 16 }}
        py={{ base: 4, md: 4 }}
      >
        {/* Mobile Drawer */}
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Flex justify="space-between" align="center">
            {/* Logo */}
            <Box maxW="70px">
              <Image src="/logo.png" alt="Servie Clean Logo" />
            </Box>

            {/* Desktop Nav */}
            <HStack
              spacing={8}
              display={{ base: "none", md: "flex" }}
              align="center"
            >
              <ChakraLink href="/">Home</ChakraLink>
              <ChakraLink href="/about">About us</ChakraLink>
              <ChakraLink href="/service">Service</ChakraLink>
              <ChakraLink href="/testimonials">Testimonials</ChakraLink>
              <ChakraLink href="/blog">Blog</ChakraLink>
              <ChakraLink href="/contact">Contact</ChakraLink>
            </HStack>

            {/* Right Buttons / Dark Mode (Desktop) */}
            <HStack display={{ base: "none", md: "flex" }} spacing={4}>
              <IconButton className="green" color="#fff" p="10px">
                <LuPhone />
                <Text ml="5px">08 6383 8002</Text>
              </IconButton>

              <IconButton className="green" color="#fff" p="10px">
                <FaBell />
                <Text ml="5px">BOOK NOW</Text>
              </IconButton>

              {/* <DarkModeToggle /> */}
            </HStack>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                <GiHamburgerMenu />
              </Button>
            </Drawer.Trigger>
          </Flex>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <DrawerBody bgColor={"#fff"} p={6}>
                  <VStack spacing={6} align="start" mt={10}>
                    {/* Nav Links */}
                    <ChakraLink
                      href="/"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Home
                    </ChakraLink>
                    <ChakraLink
                      href="/about"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      About us
                    </ChakraLink>
                    <ChakraLink
                      href="/service"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Service
                    </ChakraLink>
                    <ChakraLink
                      href="/testimonials"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Testimonials
                    </ChakraLink>
                    <ChakraLink
                      href="/blog"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Blog
                    </ChakraLink>
                    <ChakraLink
                      href="/contact"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Contact
                    </ChakraLink>

                    {/* Buttons */}
                    <IconButton className="green" color="#fff" p="10px">
                      <LuPhone />
                      <Text ml="5px">08 6383 8002</Text>
                    </IconButton>

                    <IconButton className="green" color="#fff" p="10px">
                      <FaBell />
                      <Text ml="5px">BOOK NOW</Text>
                    </IconButton>

                    {/* Dark Mode Toggle */}
                    {/* <DarkModeToggle /> */}
                  </VStack>
                </DrawerBody>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Box>
    </Box>
  );
};

export default Header;
