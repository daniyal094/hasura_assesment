import { Box, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SelectOptionsWithCheck = (props) => {
  const [select, setSelct] = useState("");
  return (
    <Box
      bg="#fff"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 10px"}
      w="90%"
      m={"auto"}
      p={4}
      px={"10px"}
      color="black"
      borderLeft={"3px solid #6B4BEA"}
    >
      <Stack>
        <Flex alignItems={"center"}>
          <Text fontSize="sm" fontWeight={"400"}>
            {props.title}
          </Text>
          <Spacer />
          <HStack spacing="20px">
            {props.items?.map((i) => (
              <Flex
                p={"10px"}
                align={"center"}
                cursor="pointer"
                key={i.id}
                onClick={() => setSelct(i.id)}
              >
                {i.id === select ? (
                  <Text
                    color={"white"}
                    fontSize="sm"
                    fontWeight={"500"}
                    bg="#6B4BEA"
                    py={"2"}
                    px="2"
                    borderRadius={"100"}
                  ></Text>
                ) : (
                  <Text
                    color={"black"}
                    fontSize="sm"
                    fontWeight={"500"}
                    border={"1px solid #fff"}
                    opacity={".7"}
                    py={"2"}
                    px="2"
                    borderRadius={"100"}
                  ></Text>
                )}
                <Text color={"black"} fontSize="sm" fontWeight={"500"} ml={2}>
                  {i.title}
                </Text>
              </Flex>
            ))}
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SelectOptionsWithCheck;
