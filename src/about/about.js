import React from 'react';
import './about.css'
import { Container, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Logo from '../static/logo.png'
import { AppBar, Toolbar } from "@mui/material";


let about = () => {

    return (
        <Container className={'container'} maxWidth={false} disableGutters>
            <AppBar className={'appbar'} title={'Hello'}/>
            <Grid className={'name'}>
                <Box
                    component="img"
                    sx={{
                        height: 150,
                        width: 500,
                        maxHeight: { xs: 150, md: 150 },
                        maxWidth: { xs: 400, md: 500 },
                    }}
                    alt="Maciej Wrzeszcz"
                    src={Logo}
                />
            </Grid>
        </Container>
    )
}

export { about }

/*

 */