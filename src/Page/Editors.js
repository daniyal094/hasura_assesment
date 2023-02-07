import { Box, Button, Center, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import {  service, step1, step2, step3 } from "../utils"
import SelectOptions from "../Components/SelectOptions"
import SelectOptionsWithCheck from "../Components/SelectOptionsWithCheck"
import { useState } from "react"
import SelectOptionsWithCheckVerticle from "../Components/SelectOptionsWithCheckVerticle"

const steps = [{ label: "Step 1", description: "General Feedback" }, { label: "Step 2", description: "Specific Feedback" }, { label: "Step 3", description: "Further Details" }]

export const StepsForm = (props) => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })

    const [data, setData] = useState([])
    console.log('data', data)

    return (
        <Flex flexDir="column" width="100%" margin={'auto'}>
            <Box>
                <Steps activeStep={activeStep} bg='#fff' padding={'3'} px={'160px'}>
                    {steps.map(({ label, description }, index) => (
                        <Step label={label} description={description} key={label} >
                            <Center bg='transparent' h='150px' color='black'>
                                <Stack w={'50%'} textAlign={'center'}>
                                    <Heading opacity={'.9'} as={'h5'} size='md' fontWeight={500} noOfLines={1}>Describe your Trip</Heading>
                                    <Text opacity={'.8'} fontSize='md' fontWeight={400}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or</Text>
                                </Stack>
                            </Center>
                            {
                                index === 0
                                    ?
                                    <>
                                        {
                                            step1.map((i, index) => (
                                                <Stack mb={'10px'}>
                                                    <SelectOptions index={index} data={data} setData={setData} title={i.title} items={service} />
                                                </Stack>
                                            ))
                                        }
                                    </>
                                    :
                                    index === 1
                                        ?
                                        <>
                                            {
                                                step2.map((i, index) => (
                                                    <Stack mb={'10px'}>
                                                        <SelectOptionsWithCheck title={i.title} items={service} />
                                                    </Stack>
                                                ))
                                            }
                                        </>
                                        :
                                        <>
                                            {
                                                step3.map((i, index) => (
                                                    <Stack mb={'10px'}>
                                                        <SelectOptionsWithCheckVerticle title={i.title} items={i.items} />
                                                    </Stack>
                                                ))
                                            }
                                        </>

                            }
                        </Step>
                    ))}
                </Steps>
                {activeStep === steps.length ? (
                    <Flex px={4} py={4} width="100%" flexDirection="column">
                        <Heading fontSize="xl" textAlign="center">
                            Woohoo! All steps completed!
                        </Heading>
                        <Button mx="auto" mt={6} size="sm" onClick={reset}>
                            Reset
                        </Button>
                    </Flex>
                ) : (
                    <Flex width="90%" margin={'auto'} mt={"50px"} justify="flex-end">
                        <Button
                            isDisabled={activeStep === 0}
                            mr={4}
                            w={100}
                            onClick={prevStep}
                            size="sm"
                            variant="ghost"
                            bg={'#ddd'}
                        >
                            Prev
                        </Button>
                        <Spacer />
                        <Button w={100} size="sm" onClick={nextStep}>
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </Flex>
                )}
            </Box>
        </Flex>
    )
}

export default StepsForm