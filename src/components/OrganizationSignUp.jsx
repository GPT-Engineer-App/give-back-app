import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const OrganizationSignUp = () => {
  const { org } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you for signing up to volunteer with ${org}!`);
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Sign Up to Volunteer with {org}
        </Heading>
        <Text fontSize="xl">Thank you for your interest in volunteering with {org}. Please fill out the form below to get started.</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default OrganizationSignUp;
