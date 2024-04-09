import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import OrganizationList from "./components/OrganizationList.jsx";

function App() {
  return (
    <Router>
      <Box p={4}>
        <HStack as="nav" spacing={4}>
          <Link to="/">Donate</Link>
          <Link to="/organizations">Organizations</Link>
        </HStack>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/organizations" element={<OrganizationList />} />
      </Routes>
    </Router>
  );
}

export default App;
