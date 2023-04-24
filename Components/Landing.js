import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import Image from 'next/image'
import profile from '../public/assets/sigma male.jpeg'
import background from '../public/assets/background.jpg'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Nav from './Nav'

function Landing() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box className={styles.Landing} >
            <Box className={styles.overlay}>
                <Nav />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", pt: "30vh" }}>
                    <Box border="1px solid white" borderRadius="50%" width="200px" height="200px" overflow="hidden" margin="auto" >
                        <Image
                            src={profile}
                            alt="Picture of the author"
                            width={200}
                            height={400}

                        />
                    </Box>
                    <Typography variant='h2'>FAKHRY</Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default Landing