import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';

function Projects() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id='projects' py="50px" my="50px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Personal Projects</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>Here you can see some of the projects I've done on my own time.</Typography>

                <Grid container sx={{ my: "30px" }}>
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
            </Container>


        </Box>
    )
}

export default Projects