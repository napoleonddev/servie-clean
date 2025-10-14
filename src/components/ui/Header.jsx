"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { Portal } from "@chakra-ui/react";
import { WiTime9 } from "react-icons/wi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

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
            <HStack>
              <WiTime9 color="#36B864" size="25px" />
              <Box>
                <Text fontSize={"12px"}>Working Hours</Text>
                <Text fontSize={"12px"} fontWeight={600}>
                  Mon - Sat: 08.00am - 06.00pm
                </Text>
              </Box>
            </HStack>{" "}
            <HStack>
              {" "}
              <IconButton className="green" color="#fff" p="10px">
                {" "}
                <LuPhone /> <Text ml="5px">08 6383 8002</Text>{" "}
              </IconButton>{" "}
            </HStack>{" "}
          </Flex>
          <Flex gap="30px" align={"center"}>
            {" "}
            <Link href={"/"}>Home</Link> <Link href={"/"}>About us</Link>{" "}
            <Link href={"/"}>Service</Link> <Link href={"/"}>Blog</Link>{" "}
            <Link href={"/"}>Contact</Link>{" "}
          </Flex>{" "}
          <Flex>
            {" "}
            <HStack>
              {" "}
              <IconButton className="green" color="#fff" p="10px">
                {" "}
                <FaBell /> <Text ml="5px">BOOK NOW</Text>{" "}
              </IconButton>{" "}
            </HStack>{" "}
            {/* <DarkModeToggle />{" "} */}
          </Flex>{" "}
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
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/service">Service</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
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
                    <Link
                      href="/"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      About us
                    </Link>
                    <Link
                      href="/service"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Service
                    </Link>
                    <Link
                      href="/blog"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      close={close}
                      onClick={(e) => setClose(e.close)}
                    >
                      Contact
                    </Link>

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
