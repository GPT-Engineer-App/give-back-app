import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function OrganizationAdmin() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Updated organization:", { name, description, location });
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={8}>
        Organization Admin
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="location" mb={4}>
          <FormLabel>Location</FormLabel>
          <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Update
        </Button>
      </form>
    </Box>
  );
}

export default OrganizationAdmin;