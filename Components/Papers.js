import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profile from '../public/assets/sigma male.jpeg'

function Papers() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="papers">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>SKILLS</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>Below are some of my skills, and I'm always looking to learn more.</Typography>
            </Container>

        </Box>
    )
}

export default Papers