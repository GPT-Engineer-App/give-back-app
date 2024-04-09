import React, { useState } from "react";
import { Box, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const OrganizationPackages = () => {
  const [packages, setPackages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPackage = {
      id: packages.length + 1,
      name: formData.get("name"),
      description: formData.get("description"),
      amount: formData.get("amount"),
    };
    setPackages([...packages, newPackage]);
    e.target.reset();
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Manage Donation Packages
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Package Name</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl id="description" isRequired mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" />
          </FormControl>
          <FormControl id="amount" isRequired mt={4}>
            <FormLabel>Amount</FormLabel>
            <Input type="number" name="amount" />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={8}>
            Create Package
          </Button>
        </form>
        <VStack spacing={4} align="stretch">
          {packages.map((pkg) => (
            <Box key={pkg.id} p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="lg">
                {pkg.name}
              </Heading>
              <Text mt={2}>{pkg.description}</Text>
              <Text mt={2} fontWeight="bold">
                Amount: ${pkg.amount}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default OrganizationPackages;
