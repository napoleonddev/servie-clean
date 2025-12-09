"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  Tag,
  Input,
  Image,
  Textarea,
  Button,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { FaCalendar, FaClock, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import blogData from "@/components/data/blogdata";

// Blog data with detailed content

const relatedPostsData = [
  {
    author: "Cameron Williamson",
    title: "The Ultimate Guide To Furniture Cleaning",
    excerpt:
      "Master the art of furniture cleaning with our comprehensive guide covering all materials and techniques.",
    category: "Furniture Cleaning",
  },
  {
    author: "Theresa Webb",
    title: "Do's and Don'ts of Cleaning Hardwood Floors",
    excerpt:
      "Avoid common mistakes that damage wood floors while learning professional maintenance techniques.",
    category: "Wooden Floors",
  },
  {
    author: "Ralph Edwards",
    title: "Cleaning And Maintenance Tips for Every Surface",
    excerpt:
      "Universal cleaning principles that work across different surfaces and materials in your home.",
    category: "Types of Cleaning",
  },
];

const categories = [
  "Deep Cleaning",
  "Types of Cleaning",
  "Wooden Floors",
  "Kitchen Cleaning",
  "Furniture Cleaning",
];

// Blog Listing Page Component
const BlogPage = () => {
  const router = useRouter();

  const onPostClick = (post) => {
    router.push(`/blog/${post.id}`);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="20px"
      py={8}
      p={{ base: "0 20px 0 20px", md: "0 0 0 60px" }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={"20px"}>
        {blogData.map((post) => (
          <VStack key={post.id} align="stretch" spacing={4} maxW={"700px"}>
            <Image
              borderRadius={"16px"}
              objectFit={"contain"}
              src={post.image}
            />

            <Heading
              size="lg"
              color="#000080"
              cursor="pointer"
              onClick={() => onPostClick(post)}
              _hover={{ color: "#677c4a" }}
            >
              {post.title}
            </Heading>

            <HStack spacing={4} flexWrap="wrap">
              <HStack>
                <Avatar.Root size="sm">
                  <Avatar.Fallback name={post.author} />
                </Avatar.Root>
                {/* <Text fontWeight="medium">{post.author}</Text> */}
              </HStack>
              <HStack>
                <Text color="gray.500">⏱️ {post.readTime}</Text>
              </HStack>
            </HStack>

            <Text color="gray.600" lineHeight="tall">
              {post.excerpt}
            </Text>

            <Flex justify="center" align={"center"}>
              <Button
                w="100%"
                className="green"
                size="sm"
                borderRadius={"20px"}
                onClick={() => onPostClick(post)}
              >
                Read More
              </Button>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>

      {/* Sidebar */}

      <VStack spacing={8} align="stretch">
        {/* Categories */}
        <Box
          bg="white"
          boxShadow="sm"
          border="1px"
          borderColor="gray.200"
          p={6}
        >
          <Heading size="md" mb={4}>
            Categories
          </Heading>
          <VStack align="stretch" spacing={3}>
            {categories.map((category, index) => (
              <Box
                key={index}
                p={2}
                borderRadius="md"
                _hover={{
                  bg: "blue.50",
                  cursor: "pointer",
                  color: "blue.600",
                }}
                transition="all 0.2s"
              >
                <Text fontWeight="medium">{category}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Latest Posts */}
        <Box
          bg="white"
          boxShadow="sm"
          border="1px"
          borderColor="gray.200"
          p={6}
        >
          <Heading size="md" mb={4}>
            Latest Posts
          </Heading>
          <VStack align="stretch" spacing={4}>
            {blogData.slice(0, 3).map((post, index) => (
              <Box
                key={index}
                p={3}
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                cursor="pointer"
                onClick={() => onPostClick(post)}
                _hover={{ bg: "gray.50" }}
              >
                <Text fontWeight="medium" mb={2}>
                  {post.title}
                </Text>
                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    📅 {post.date}
                  </Text>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default BlogPage;
