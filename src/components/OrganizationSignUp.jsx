import React from "react";
import { Box, VStack, Heading, FormControl, FormLabel, Input, Textarea, Select, Button } from "@chakra-ui/react";

const OrganizationSignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orgData = {
      name: formData.get("name"),
      description: formData.get("description"),
      type: formData.get("type"),
      location: formData.get("location"),
    };
    console.log(orgData);
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
            <Input type="text" name="name" />
          </FormControl>
          <FormControl id="description" isRequired mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" />
          </FormControl>
          <FormControl id="type" isRequired mt={4}>
            <FormLabel>Organization Type</FormLabel>
            <Select name="type">
              <option value="">Select Type</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="environment">Environment</option>
              <option value="social">Social Services</option>
            </Select>
          </FormControl>
          <FormControl id="location" isRequired mt={4}>
            <FormLabel>Location</FormLabel>
            <Input type="text" name="location" />
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
