import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Heading, useToast, useColorModeValue } from "@chakra-ui/react";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Here you would typically send a request to the server to delete the post
    console.log("Deleting Post:", id);

    toast({
      title: "Post Deleted",
      description: `Post with ID ${id} has been deleted.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Navigate back to home page after deletion
    navigate("/");
  }, [id, navigate, toast]);

  return (
    <Container
      centerContent
      maxW="container.md"
      py={8}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
    >
      <Heading as="h1" size="xl">Deleting Post...</Heading>
    </Container>
  );
};

export default DeletePost;