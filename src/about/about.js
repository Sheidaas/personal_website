import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Grid, Box } from '@mui/material'
import { Instagram, GitHub, Facebook, LinkedIn } from '@mui/icons-material';
import Logo_v from '../static/sm_loga_v.svg'
import Avatar_logo from '../static/avatar.png'
import AVATAR_RIGHT from '../static/zc.png'
import Circle from '../static/circle.png'
import Arrow from '../static/arrow.png'
import './about.css'


let ICON_STYLE = {
    fontSize: 50,
    margin: '10px'
}

let About = () => {

    return (
        <Grid container className={'container'} >

            <Grid className={'first-page-container'} container spacing={1} justifyContent={'center'} alignItems="center">

                <Grid container className={'left-content'} order={{xs: 2, md: 1}} md={6} sm={12}>
                    <Grid xs={12}>
                        <div className={'header-name'}>
                            MACIEJ WRZESZCZ
                        </div>
                        <div className={'header-job'}>
                            BUSINESS PROCESS MANAGEMENT DEVELOPER
                        </div>

                    </Grid>
                    <Grid xs={12} className={'icons'}>
                        <a href={'https://www.instagram.com/maciej_wrzeszcz/'}>
                            <Instagram sx={ICON_STYLE}/>
                        </a>
                        <a href={'https://www.facebook.com/profile.php?id=100078881607221'}>
                            <Facebook sx={ICON_STYLE}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/maciej-wrzeszcz-51397a18a'}>
                            <LinkedIn sx={ICON_STYLE}/>
                        </a>
                        <a href={'#'}>
                            <GitHub sx={ICON_STYLE}/>
                        </a>
                    </Grid>
                </Grid>
                <Grid className={'right-content'} order={{xs: 1, md: 2}} md={6} sm={12} alignItems="center">
                    { window.innerWidth < 900 &&
                        <Box
                            component={'img'}
                            sx={{
                            height: '770px',
                            width: '800px',
                            maxHeight: { xs: '308px', sm: '492px', md: '423px',lg: '577px', xl: '721px'},
                            maxWidth: { xs: '375px', sm: '600px', md: '440px', lg: '600px', xl: '750px'},
                        }}
                            alt="Maciej Wrzeszcz"
                            src={AVATAR_RIGHT}
                            />
                    }
                    { window.innerWidth > 900 &&
                    <Box
                        component={'img'}
                        sx={{
                            height: '770px',
                            width: '800px',
                            maxHeight: { xs: '346px', sm: '568px', md: '423px',lg: '577px', xl: '721px'},
                            maxWidth: { xs: '360px', sm: '590px', md: '440px', lg: '600px', xl: '750px'},
                        }}
                        alt="Maciej Wrzeszcz"
                        src={Avatar_logo}
                    />
                    }
                </Grid>
            </Grid>
            <Grid className={'second-page-container'} container xs={12}
                  justifyContent={'center'}>
                <Grid xs={12} className={'second-page-header'}>
                    <div className={'second-page-'}>
                        TECHNICZNA ANALIZA TWOJEGO BIZNESU
                    </div>

                </Grid>
                <Grid xs={12} className={'second-page-content'}>
                    <div className={'second-page-content-header'}>
                        DZIĘKI MOJEJ ANALIZIE DOWIESZ SIĘ:
                    </div>

                    <Grid xs={12}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <Box
                                        component={'img'}
                                        sx={{
                                            height: '30%',
                                            width: '30%',
                                            maxHeight: { xs: '20%', lg: '40%'},
                                            maxWidth: { xs: '20%', lg: '40%'},
                                        }}
                                        alt="circle"
                                        src={Circle}
                                    />
                                </ListItemIcon>
                                <div className={'list-description'}>
                                    JAK TWOJA FIRMA RADZI SOBIE W INTERNECIE?
                                </div>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <Box
                                        component={'img'}
                                        sx={{
                                            height: '30%',
                                            width: '30%',
                                            maxHeight: { xs: '20%', lg: '40%'},
                                            maxWidth: { xs: '20%', lg: '40%'},
                                        }}
                                        alt="circle"
                                        src={Circle}
                                    />
                                </ListItemIcon>
                                <div className={'list-description'}>
                                    JAK UŁATWIĆ KLIENTOM INTERAKCJIE Z TYM, CO FIRMA OFERUJE?
                                </div>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <Box
                                        component={'img'}
                                        sx={{
                                            height: '30%',
                                            width: '30%',
                                            maxHeight: { xs: '20%', lg: '40%'},
                                            maxWidth: { xs: '20%', lg: '40%'},
                                        }}
                                        alt="circle"
                                        src={Circle}
                                    />
                                </ListItemIcon>
                                <div className={'list-description'}>
                                    JAK ZOPTYMALIZOWAC POSIADANY JUŻ SOFWARE DO POTRZEB TWOJEJ FIRMY?
                                </div>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} className={'arrow'}>
                <Box
                    component={'img'}
                    sx={{
                        height: "332px",
                        width: "1041px",
                        maxHeight: { xs: "100px", md: "220px"},
                        maxWidth: { xs: "314px", md: "690px"},
                    }}
                    alt="Maciej Wrzeszcz"
                    src={Arrow}
                />
            </Grid>
            <Grid container spacing={12} justifyContent={'center'}>
                <Grid item xs={12} lg={4} xl={3}>
                    <Grid className={'item-header'}>
                        SOFTWARE
                    </Grid>
                    <Grid className={'item-text'}>
                        Dopasowane serwisy WWW czy niewykrywalne web-scrawlery to tylko część oprogramowania, które
                        może zostać dopasowane do potrzeb biznesowych Twojej firmy.
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} xl={3}>
                    <Grid className={'item-header'}>
                        INTEGRACJE
                    </Grid>
                    <Grid className={'item-text'}>
                        Połącz się ze światem, czyli zintegruj się z innymi systemami, takimi jak bramki płatnicze
                        czy [cos jeszcze]. W dobie powszechnego internetu możliwość komunikacji ze wszystkim i
                        wszystkimi daje nieograniczone możliwości.
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} xl={3}>
                    <Grid className={'item-header'}>
                        PRZEPŁYWY CI/CD
                    </Grid>
                    <Grid className={'item-text'}>
                        Żaden biznes nie może pozwolić sobie na przestój, dlatego inteligentne przepływy
                        Continuous Integration/Continuous Delivery pozwolą w łatwy sposób na zarządzanie oprogramowaniem.
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default About

/*
    Rozbudowane serwisy WWW


 */

/*
            <Grid xs={12} className={'name'}>
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
            .name{
    margin-left: 20px;
    .second-page-item{
    padding-left: 60px;
    padding-right: 40px;
    text-align: left;
    vertical-align: center;
    .list-itemx{
    font-weight: 900;
}
}
}
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

 */