"use client";

import React from "react";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
  VStack,
  Input,
  Textarea,
  Avatar,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";

const BlogDetailsPage = ({ post }) => {
  const comments = [
    {
      name: "Annette Black",
      date: "April 2024",
      comment:
        "It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Akiza PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Marvin McKinney",
      date: "April 05-2024",
      comment:
        "It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Akiza PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <>
      <Box bgColor={"#98b2781A"} px="60px" py="40px">
        <Text fontWeight={600} fontSize={{ base: "20px", md: "40px" }}>
          {post.title}
        </Text>
        <HStack mt={{ base: "14px", md: "0" }}>
          <ChakraLink href="/" color="#000" fontSize={{ base: "14px", md: "16px" }} fontWeight={500}>
            Home
          </ChakraLink>
          <FaChevronRight />
          <ChakraLink href="/blog" color="#000" fontWeight={500}>
            Blog
          </ChakraLink>
          <FaChevronRight />
          <Text fontWeight={400} color="#000" display={{ base: "none", md: "block" }}>
            {post.title}
          </Text>
        </HStack>
        <Text display={{ base: "block", md: "none" }}>{post.title}</Text>
      </Box>
      <Box mx="auto" py={10} px={"60px"}>
        <Image
          w={"100%"}
          h={"400px"}
          src={post.image}
          borderRadius="16px"
          mb={6}
        />
        <Heading size="xl" mb={4} color="#98b278">
          {post.title}
        </Heading>
        <Text color="gray.600" mb={4}>
          By {post.author} • {post.readTime}
        </Text>
        <VStack spacing={6} align="stretch">
          <Text lineHeight="tall" fontSize="lg" color="gray.700">
            {post.content.introduction}
          </Text>

          {post.content.sections.map((section, index) => (
            <Box key={index}>
              <Heading size="lg" mb={3}>
                {section.title}
              </Heading>
              <Text lineHeight="tall" fontSize="lg" color="gray.700">
                {section.content}
              </Text>
            </Box>
          ))}

          {/* Tips Section */}
          <Box
            p={6}
            bg="#def3c5"
            borderRadius="lg"
            borderLeft="4px"
            borderColor="#98b278"
          >
            <Heading size="md" mb={4}>
              Pro Tips
            </Heading>
            <VStack align="stretch" spacing={2}>
              {post.content.tips.map((tip, index) => (
                <HStack key={index} align="flex-start">
                  <Text color="#98b278" fontWeight="bold" mt={1}>
                    •
                  </Text>
                  <Text color="gray.700">{tip}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </VStack>

        {/* <Divider my={8} /> */}

        {/* Comments Section */}
        <Box>
          <Heading size="lg" mb={6}>
            {comments.length} Comments
          </Heading>

          <VStack spacing={6} align="stretch">
            {comments.map((comment, index) => (
              <Box
                key={index}
              >
                <HStack spacing={4} align="start">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name={comment.name} />
                  </Avatar.Root>
                  <Box flex={1}>
                      <Text fontWeight="bold" fontSize="lg">
                        {comment.name}
                      </Text>
                      <Text color="gray.500" fontSize="sm">
                        {comment.date}
                      </Text>
                    <Text color="gray.600" lineHeight="tall">
                      {comment.comment}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ))}
          </VStack>

          {/* Comment Form */}
          {/* <Box
            mt={8}
            variant="outline"
            boxShadow="sm"
            border="1px"
            borderColor="gray.200"
          >
            <Heading size="md" mb={6}>
              Leave a Reply
            </Heading>

            <VStack spacing={4} align="stretch">
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Box>
                  <Text mb={2} fontWeight="medium">
                    Name
                  </Text>
                  <Input placeholder="Your name" size="lg" />
                </Box>
                <Box>
                  <Text mb={2} fontWeight="medium">
                    Email Address
                  </Text>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    size="lg"
                  />
                </Box>
              </SimpleGrid>

              <Box>
                <Text mb={2} fontWeight="medium">
                  Enter Your Message
                </Text>
                <Textarea
                  placeholder="Share your thoughts..."
                  rows={6}
                  size="lg"
                />
              </Box>

              <Button size="lg" alignSelf="flex-start" px={8}>
                Submit Comment
              </Button>
            </VStack>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default BlogDetailsPage;
