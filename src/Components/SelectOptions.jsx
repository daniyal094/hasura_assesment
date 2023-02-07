import { Box, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SelectOptions = (props) => {
  const [select, setSelct] = useState("");

  const handleSelectOption = (i) => {
    setSelct(i.id);
    let temp = { ...i, question: props.title };
    props.setData((prev) => [...prev, temp]);
  };
  return (
    <Box
      bg="#fff"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 10px"}
      w="90%"
      m={"auto"}
      p={1}
      px={"10px"}
      color="black"
      borderLeft={"3px solid blue"}
    >
      <Stack>
        <Flex alignItems={"center"}>
          <Text fontSize="md" fontWeight={"400"}>
            {props.title}
          </Text>
          <Spacer />
          <HStack spacing="60px">
            {props.items?.map((i) => (
              <Stack
                align={"center"}
                cursor="pointer"
                key={i.id}
                onClick={() => {
                  handleSelectOption(i);
                }}
              >
                <Text color={"black"} fontSize="sm" fontWeight={"500"}>
                  {i.title}
                </Text>
                {i.id === select ? (
                  <Text
                    color={"white"}
                    fontSize="sm"
                    fontWeight={"500"}
                    bg="#6B4BEA"
                    py={"1"}
                    px="3"
                    borderRadius={"100"}
                  >
                    {i.id}
                  </Text>
                ) : (
                  <Text
                    color={"black"}
                    fontSize="sm"
                    fontWeight={"500"}
                    border={"1px solid #ddd"}
                    opacity={".7"}
                    py={"1"}
                    px="3"
                    borderRadius={"100"}
                  >
                    {i.id}
                  </Text>
                )}
              </Stack>
            ))}
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SelectOptions;
