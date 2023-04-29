import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import Link from 'next/link'

function Footer() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="footer">
            <Container>
                <Grid container spacing={4} sx={{ my: "20px", }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ mt: 2, textAlign: "center" }}>Copyright © Nada Orban 2023</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
                            <Link href="" ><Avatar sx={{ width: "60px", height: "60px", backgroundColor: "background.secondary", }}><FiFacebook /></Avatar></Link>
                            <Link href="" ><Avatar sx={{ width: "60px", height: "60px", backgroundColor: "background.secondary", }}><FiLinkedin /></Avatar></Link>
                            <Link href="" ><Avatar sx={{ width: "60px", height: "60px", backgroundColor: "background.secondary", }}><FiGithub /></Avatar></Link>
                        </Box>



                    </Grid>
                    <Grid item xs={12} md={4}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer