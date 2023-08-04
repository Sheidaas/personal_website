import React from 'react';
import {  } from 'react-responsive'
import './about.css'
import { Container, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Logo_v from '../static/sm_loga_v.svg'
import SmLogo from '../static/sm_logo.png'
import { AppBar, Toolbar } from "@mui/material";






let About = () => {


    return (
        <Container className={'container'} maxWidth={false} disableGutters>
            <Grid className={'name'}>
                <a href={'https://www.instagram.com/maciej_wrzeszcz/'}>
                    <Box
                        component={'img'}
                        sx={{
                            height: 100,
                            width: 250,
                            maxHeight: { xs: 40, md: 100},
                            maxWidth: { xs: 125, md: 250},
                        }}
                        alt="Maciej Wrzeszcz"
                        src={Logo_v}
                    />

                </a>
            </Grid>

        </Container>
    )
}

export { About }

/*

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

 */