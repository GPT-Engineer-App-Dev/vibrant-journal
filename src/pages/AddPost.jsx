import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, Image, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Here you would typically send the data to a server
    console.log("New Post:", { title, content, image });

    // Navigate back to home page after submission
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="lg"
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          size="lg"
          resize="vertical"
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && <Image src={image} alt="Selected Image" boxSize="sm" />}
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;