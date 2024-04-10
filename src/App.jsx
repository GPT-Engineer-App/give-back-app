import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import OrganizationList from "./components/OrganizationList.jsx";
import OrganizationSignUp from "./components/OrganizationSignUp.jsx";
import OrganizationPackages from "./components/OrganizationPackages.jsx";
import OrganizationAdmin from "./components/OrganizationAdmin.jsx";

import OrganizationSearch from "./components/OrganizationSearch.jsx";

function App() {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (params) => {
    setSearchParams(params);
  };
  return (
    <Router>
      <Box p={4}>
        <HStack as="nav" spacing={4}>
          <Link to="/">Donate</Link>
          <Link to="/organizations">Organizations</Link>
          <Link to="/organizations/signup">Register Organization</Link>
          <Link to="/organizations/packages">Manage Packages</Link>
          <Link to="/organizations/admin">Admin</Link>
        </HStack>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route
          path="/organizations"
          element={
            <>
              <OrganizationSearch onSearch={handleSearch} />
              <OrganizationList searchParams={searchParams} />
            </>
          }
        />
        <Route path="/organizations/signup" element={<OrganizationSignUp />} />
        <Route path="/organizations/packages" element={<OrganizationPackages />} />
        <Route path="/organizations/admin" element={<OrganizationAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
