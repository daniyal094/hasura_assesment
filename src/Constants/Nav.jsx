import { Box, Button, Flex, HStack, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = (props) => {
  const [isLargerThan991] = useMediaQuery("(min-width: 991px)");
  const [active, setActive] = useState(1);
  const { logout, isAuthenticated } = useAuth0();
  const navLinks = [
    {
      id: 1,
      title: "EDITOR",
    },
    {
      id: 2,
      title: "SETTINGS",
    },
    {
      id: 3,
      title: "THEMES",
    },
    {
      id: 4,
      title: "INTEGRATION",
    },
    {
      id: 5,
      title: "LAUNCH",
    },
  ];
  return (
    <Flex alignItems={"center"} justifyContent="center" h={"100%"} px={"15px"}>
      <Box>Logo</Box>
      <Spacer />
      <Box>
        <HStack spacing={!isLargerThan991 ? "20px" : "40px"}>
          {navLinks.map((i) => (
            <Box
              cursor={"pointer"}
              borderBottom={active === i.id && "3px solid #000"}
              py={"10px"}
              onClick={() => setActive(i.id)}
            >
              {i.title}
            </Box>
          ))}
          {isAuthenticated && (
            <Button
              onClick={() => {
                logout();
                props.setRoute(false);
              }}
              py={5}
              px={10}
              fontWeight="bold"
              textTransform={"uppercase"}
              textColor="white"
              bg={"orange.400"}
              m={"15px 0"}
              _hover={"none"}
              _focus={"none"}
            >
              Logout
            </Button>
          )}
        </HStack>
      </Box>
      {isLargerThan991 ? (
        <>
          <Spacer />
          <Box></Box>
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Nav;
