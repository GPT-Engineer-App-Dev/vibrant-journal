import { Container, Text, VStack, Heading, Box, Image, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
];

const Index = () => {
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal blog where I share my thoughts, experiences, and stories. 
          Feel free to explore and connect with me through my posts.
        </Text>
        <Link as={RouterLink} to="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <Link as={RouterLink} to={`/delete-post/${post.id}`} color="red.500" fontSize="lg">
              <Button colorScheme="red" mt={4}>Delete Post</Button>
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;