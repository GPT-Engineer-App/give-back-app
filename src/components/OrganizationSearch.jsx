import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, VStack, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const OrganizationSearch = ({ onSearch }) => {
  const [searchOptions, setSearchOptions] = useState([
    { id: 1, name: "geography", value: "" },
    { id: 2, name: "type", value: "" },
  ]);
  const [newOption, setNewOption] = useState({ name: "", value: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = searchOptions.reduce((acc, option) => {
      acc[option.name] = option.value;
      return acc;
    }, {});
    onSearch(searchParams);
  };

  const handleAddOption = () => {
    setSearchOptions([...searchOptions, { ...newOption, id: Date.now() }]);
    setNewOption({ name: "", value: "" });
  };

  const handleDeleteOption = (id) => {
    setSearchOptions(searchOptions.filter((option) => option.id !== id));
  };

  const handleEditOption = (id, updatedOption) => {
    setSearchOptions(searchOptions.map((option) => (option.id === id ? { ...option, ...updatedOption } : option)));
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          {searchOptions.map((option) => (
            <HStack key={option.id} spacing={2}>
              <FormControl id={`${option.name}-name`}>
                <FormLabel>Option Name</FormLabel>
                <Input type="text" value={option.name} onChange={(e) => handleEditOption(option.id, { name: e.target.value })} />
              </FormControl>
              <FormControl id={`${option.name}-value`}>
                <FormLabel>Option Value</FormLabel>
                <Input type="text" value={option.value} onChange={(e) => handleEditOption(option.id, { value: e.target.value })} />
              </FormControl>
              <IconButton aria-label="Edit Option" icon={<FaEdit />} onClick={() => handleEditOption(option.id, { editing: true })} />
              <IconButton aria-label="Delete Option" icon={<FaTrash />} onClick={() => handleDeleteOption(option.id)} />
            </HStack>
          ))}
          <HStack spacing={2}>
            <FormControl id="new-option-name">
              <FormLabel>New Option Name</FormLabel>
              <Input type="text" value={newOption.name} onChange={(e) => setNewOption({ ...newOption, name: e.target.value })} />
            </FormControl>
            <FormControl id="new-option-value">
              <FormLabel>New Option Value</FormLabel>
              <Input type="text" value={newOption.value} onChange={(e) => setNewOption({ ...newOption, value: e.target.value })} />
            </FormControl>
            <Button colorScheme="green" onClick={handleAddOption}>
              Add Option
            </Button>
          </HStack>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default OrganizationSearch;
