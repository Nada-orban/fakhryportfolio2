import React from 'react'
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
import { LogoDev } from '@mui/icons-material';
import Image from 'next/image';
import Styles from '../src/styles/Nav.module.css'



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


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


function Nav() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center', backgroundColor: "background.main",
            color: "text.primary", height: "100vh", pt: 3, borderTopRightRadius: "20px", borderBottomRightRadius: "20px",
        }}>

            <IconButton >
                <CloseIcon sx={{ color: "secondary.main", position: "absolute", left: "90px" }} />

            </IconButton>
            {/* 
            <Typography variant="h6" sx={{ my: 2 }}>
                nada
            </Typography> */}


            <List sx={{ display: "grid", direction: "column", justifyContent: "center", my: 3 }} data-aos="fade-right" data-aos-once="false" >
                <ListItem>
                    <a href="#home">
                        <ListItemButton className={Styles.drawer_icon}>
                            <HomeIcon sx={{ color: "secondary.main", width: "50px" }} />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#about">
                        <ListItemButton className={Styles.drawer_icon}>
                            <Person2Icon sx={{ mx: 2 }} />
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#skills">
                        <ListItemButton className={Styles.drawer_icon}>
                            < SensorOccupiedIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Skills" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#projects">
                        <ListItemButton className={Styles.drawer_icon}>
                            <WorkIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#contact">
                        <ListItemButton className={Styles.drawer_icon}>
                            <ConnectWithoutContactIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                {/* <HideOnScroll {...props}> */}
                <AppBar variant="permanent" sx={{
                    backgroundColor: 'background.main', color: "text:primary", borderStyle: "none"
                }} className="animate__animated animate__fadeInDown">
                    <Container>
                        <Toolbar>
                            <Box display='flex' flexGrow={1}>
                                {/* <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 3 }}
                                    >
                                        NADA
                                    </Typography> */}
                                <Box sx={{ flexGrow: 1, display: "block", color: "secondary.main", mt: 2, borderRadius: "50%" }}>
                                    <Image
                                        src=''
                                        alt="Picture of the logo"
                                        width={50}
                                        height={50}


                                    />
                                </Box>


                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <List sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                        <ListItem>
                                            <a href="#home">
                                                <ListItemButton >
                                                    <HomeIcon sx={{ color: "secondary.main", width: "30px", height: "30px" }} />
                                                </ListItemButton>
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#about">
                                                <ListItemButton sx={{ textAlign: 'center' }}>
                                                    <ListItemText primary="About" sx={{ color: "text.primary" }} />
                                                </ListItemButton>
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#skills">
                                                <ListItemButton sx={{ textAlign: 'center' }}>
                                                    <ListItemText primary="Skills" sx={{ color: "text.primary" }} />
                                                </ListItemButton>
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#projects">
                                                <ListItemButton sx={{ textAlign: 'center' }}>
                                                    <ListItemText primary="Projects" sx={{ color: "text.primary" }} />
                                                </ListItemButton>
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#contact">
                                                <ListItemButton sx={{ textAlign: 'center' }}>
                                                    <ListItemText primary="Contact" sx={{ color: "text.primary" }} />
                                                </ListItemButton>
                                            </a>
                                        </ListItem>
                                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <NightlightRoundIcon />}
                                        </IconButton>
                                    </List>



                                </Box>

                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Toolbar>
                    </Container>

                </AppBar>

                {/* </HideOnScroll> */}
                <Box component="nav">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box', width: drawerWidth,
                                borderTopRightRadius: "20px", borderBottomRightRadius: "20px", boxShadow: "none"
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box >
            {/* <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>

            </ScrollTop> */}

        </>
    )
}



export default Nav

