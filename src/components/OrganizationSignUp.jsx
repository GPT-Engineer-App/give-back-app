import React from "react";
import { Box, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const OrganizationSignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Organization registered successfully!");
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Register Your Nonprofit Organization
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Organization Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="description" isRequired mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={8}>
            Register
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default OrganizationSignUp;
