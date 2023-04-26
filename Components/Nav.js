import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Fade, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import CloseIcon from '@mui/icons-material/Close';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ColorModeContext } from '../public/theme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { LogoDev, Style } from '@mui/icons-material';
import Image from 'next/image';
import Styles from '../src/styles/Nav.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NodeNextRequest } from 'next/dist/server/base-http/node';


const drawerWidth = 240;



//hide navbar
// function HideOnScroll(props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         target: window ? window() : undefined,
//     });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }
// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     window: PropTypes.func,
// };
const useStyles = makeStyles((theme) => ({
    appBarTransparent: {
        backgroundColor: 'transparent',

    },
    appBarSolid: {
        backgroundColor: '#212529',

    }
}));


function Nav() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    // Transparent to Solid Header on Scroll
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])





    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>

                <ListItem key="hjj" disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="hjj" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>);





    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                {/* <HideOnScroll {...props}> */}
                <AppBar variant="permanent" position="fixed" sx={{
                    background: 'transparent', color: "text:primary", borderStyle: "none", height: "60px"
                }} className={classes[navRef.current]} >
                    <Container>
                        <Toolbar>
                            <Box display='flex' flexGrow={1}>
                                <Typography
                                    variant="h4"
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", }}
                                >
                                    Ahmed Fakhry
                                </Typography>
                                <Box sx={{ display: { xs: "none", sm: 'none', md: 'block', } }}>
                                    <List sx={{ display: "flex" }}>
                                        <ListItem>
                                            <a href="#about">
                                                <ListItemText primary="ABOUT" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#skills">
                                                <ListItemText primary="SKILLS" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#projects">
                                                <ListItemText primary="PROJECTS" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#papers">
                                                <ListItemText primary="PAPERS" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#projects">
                                                <ListItemText primary="TIMELINE" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#contact">
                                                <ListItemText primary="Contact" />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#contact">
                                                <ListItemText primary="RESUME" />
                                            </a>
                                        </ListItem>

                                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                                        </IconButton>
                                    </List>
                                </Box>

                            </Box>


                        </Toolbar>
                    </Container>

                </AppBar>
                {/* mobile view */}

                <AppBar variant="permanent" position="fixed" sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "#212529" }}>
                    <Container>
                        <Toolbar >
                            <Box display='flex' flexGrow={1} >
                                <Typography
                                    variant="h4"
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 1 }}
                                >
                                    Ahmed Fakhry
                                </Typography>
                                <IconButton
                                    variant="contained"
                                    onClick={() => setOpen(!open)}
                                    sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "secondary.main", borderRadius: "10px", mt: 1, display: "flex" }}
                                    className={Styles.menuButton}
                                >
                                    {/* <Typography variant='h6' sx={{ color: "black" }}>MENU</Typography> */}

                                    <MenuIcon sx={{ color: "black" }} />
                                </IconButton>
                            </Box>
                        </Toolbar>
                        <Box className={Styles.menuBox}>
                            {open && (
                                <List >
                                    <ListItem>
                                        <a href="#about">
                                            <ListItemText primary="ABOUT" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#skills">
                                            <ListItemText primary="SKILLS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#projects">
                                            <ListItemText primary="PROJECTS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#papers">
                                            <ListItemText primary="PAPERS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#projects">
                                            <ListItemText primary="TIMELINE" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#contact">
                                            <ListItemText primary="Contact" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#contact">
                                            <ListItemText primary="RESUME" />
                                        </a>
                                    </ListItem>


                                </List>

                            )}

                        </Box>
                    </Container>
                </AppBar>

                {/* </HideOnScroll> */}


            </Box >
            {/* <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>

            </ScrollTop> */}

        </>
    )
}



export default Nav// <Box onClick={handleDrawerToggle} sx={{
    //     textAlign: 'center', backgroundColor: "background.main",
    //     color: "text.primary", height: "100vh", pt: 3, borderTopRightRadius: "20px", borderBottomRightRadius: "20px",
    // }}>

    //     <IconButton >
    //         <CloseIcon sx={{ color: "secondary.main", position: "absolute", left: "90px" }} />
    //     </IconButton>
    //     {/*
    //     <Typography variant="h6" sx={{ my: 2 }}>
    //         nada
    //     </Typography> */}


    //     <List sx={{ display: "grid", direction: "column", justifyContent: "center", my: 3 }} data-aos="fade-right" data-aos-once="false" >
    //         <ListItem>
    //             <a href="#home">
    //                 <ListItemButton className={Styles.drawer_icon}>
    //                     <HomeIcon sx={{ color: "secondary.main", width: "50px" }} />
    //                     <ListItemText primary="Home" />
    //                 </ListItemButton>
    //             </a>
    //         </ListItem>
    //         <ListItem>
    //             <a href="#about">
    //                 <ListItemButton className={Styles.drawer_icon}>
    //                     <Person2Icon sx={{ mx: 2 }} />
    //                     <ListItemText primary="About" />
    //                 </ListItemButton>
    //             </a>
    //         </ListItem>
    //         <ListItem>
    //             <a href="#skills">
    //                 <ListItemButton className={Styles.drawer_icon}>
    //                     < SensorOccupiedIcon sx={{ mx: 2 }} />
    //                     <ListItemText primary="Skills" />
    //                 </ListItemButton>
    //             </a>
    //         </ListItem>
    //         <ListItem>
    //             <a href="#projects">
    //                 <ListItemButton className={Styles.drawer_icon}>
    //                     <WorkIcon sx={{ mx: 2 }} />
    //                     <ListItemText primary="Projects" />
    //                 </ListItemButton>
    //             </a>
    //         </ListItem>
    //         <ListItem>
    //             <a href="#contact">
    //                 <ListItemButton className={Styles.drawer_icon}>
    //                     <ConnectWithoutContactIcon sx={{ mx: 2 }} />
    //                     <ListItemText primary="Contact" />
    //                 </ListItemButton>
    //             </a>
    //         </ListItem>
    //     </List>
    // </Box>


