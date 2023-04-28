import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';

function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="contact" color="white" py="50px" className={styles.contactBox}>
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Contact Me</Typography>
            </Container>
        </Box>
    )
}

export default Contact