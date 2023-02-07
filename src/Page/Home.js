import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../Constants/Nav";
import { useMediaQuery } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = (props) => {
  const [isLargerThan991] = useMediaQuery("(min-width: 991px)");
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <>
      <Box position={"relative"}>
        <Heading zIndex={9999} position="absolute" m={10}>
          Logo
        </Heading>
        <Img
          width={!isLargerThan991 ? 200 : 250}
          height={250}
          objectFit={"contain"}
          position={"fixed"}
          top={-10}
          src="/images/Vector1.png"
        />
        <Img
          width={"100%"}
          left={-10}
          height={250}
          objectFit={"cover"}
          position={"fixed"}
          bottom={-100}
          src="/images/Vector2.png"
        />
      </Box>
      <Nav />
      <Flex
        alignItems={"flex-start"}
        justifyContent="center"
        flexDirection="column"
        w={"80%"}
        m={"auto"}
        h={!isLargerThan991 ? "100vh" : "91vh"}
      >
        <Heading
          as={"h1"}
          fontSize={!isLargerThan991 ? 30 : "4vw"}
          margin={"10px 0"}
          textTransform={"uppercase"}
        >
          Survey Website
        </Heading>
        <Text w={!isLargerThan991 ? "100%" : "80%"} opacity={0.8}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available In publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available
        </Text>
        {/* onClick={() => loginWithRedirect()} */}
        <Button
          onClick={() => {
            if (!isAuthenticated) {
              loginWithRedirect();
            } else {
              props.setRoute(true);
            }
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
          start Survey
        </Button>
      </Flex>
    </>
  );
};

export default Home;
