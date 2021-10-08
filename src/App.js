import React from 'react'
import { Box, Heading } from "rebass"

function App(props) {
    return (
        <Box
        sx={{
            background: 'black',
            textAlign: 'center'
        }}
        p={5}
        >
            <Heading
                fontSize={[5, 6, 7]}
                color='white'>
                Wellcome to EV|VE preset! 
            </Heading>
        </Box>
    )
}

export default App;