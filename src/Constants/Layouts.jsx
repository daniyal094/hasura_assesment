import React, { useState } from 'react'
import { Box, Grid, GridItem, } from '@chakra-ui/react'

import Nav from './Nav'
import StepsForm from '../Page/Editors'
import Home from '../Page/Home'

const Layouts = () => {
    const [route, setRoute] = useState(false)
    const [active, setActive] = useState(1)
    const navItem = [
        {
            id: 1,
            title: '1.General Feedback'
        },
        {
            id: 2,
            title: '2.specific Feedback'

        },
        {
            id: 3,
            title: '3.further details'

        },
    ]
    return (
        <>
            {
                !route
                    ?
                    <Home setRoute={setRoute} />
                    :
                    <Grid
                        style={{ background: '#ddd' }}
                        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                        gridTemplateRows={'50px 1fr 30px'}
                        gridTemplateColumns={'250px 1fr'}
                        minH='100vh'
                        gap='1'
                        color='blackAlpha.700'
                        fontWeight='bold'
                    >
                        <GridItem pl='2' borderBottom={'2px solid #ddd'} bg='#fff' area={'header'}>
                            <Nav setRoute={setRoute}/>
                        </GridItem>
                        <GridItem bg='#fff' area={'nav'}>
                            <Box h={300} flexDirection='column' display={'flex'} alignItems='center' justifyContent={'center'}>
                                {
                                    navItem.map((i) => (
                                        <Box cursor={'pointer'} bg={i.id === active ? 'purple.100' : ''} mt={2} textTransform={'uppercase'} fontWeight='500' fontSize={14} borderLeft={'2px solid #6B4BEA'} textAlign={'start'} py={5} px={'20px'} w={'100%'}>
                                            {i.title}
                                        </Box>
                                    ))
                                }
                            </Box>
                        </GridItem>
                        <GridItem pl='2' area={'main'}>
                            <StepsForm setActive={setActive} />
                        </GridItem>
                    </Grid>
            }

        </>
    )
}

export default Layouts