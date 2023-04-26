import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id='projects' py="50px" my="50px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Personal Projects</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>Here you can see some of the projects I've done on my own time.</Typography>

                <Grid container sx={{ my: "50px" }}>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.projectBox}>
                            <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
                            <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.projectBox}>
                            <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
                            <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.projectBox}>
                            <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
                            <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent="center" flexDirection="column" textAlign="center" marginTop="10px">
                    <Typography variant='h4'>To see more of my projects...</Typography>
                    <button className={styles.normalButton}><a href=''>Visit My GitHub<GitHubIcon /></a></button>
                </Box>
            </Container>


        </Box>
    )
}

export default Projects