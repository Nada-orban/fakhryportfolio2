import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: '#ffa000',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {

        borderColor: 'white',
        borderWidth: 2,

    },
    '& input:valid:focus + fieldset': {
        borderColor: 'red',
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});

function Contact() {
    const [state, handleSubmit] = useForm("mjvdegqz");
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="contact" py="50px" className={styles.contactBox}>
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold", my: 4 }}>Contact Me</Typography>
                <Box display="flex" justifyContent="center" justifyItems="center">
                    <Typography variant='h5' >Email:</Typography>
                    <Link href=""  >
                        <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}>nadasamir9334@gmail.com</Typography>
                    </Link>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Typography variant='h5' >Phone:</Typography>
                    <Link href=""  >
                        <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}>456-789-5678</Typography>
                    </Link>
                </Box>
                <Typography variant='h6'>...or use the following form</Typography>
                <form onSubmit={handleSubmit}  >
                    <Grid container spacing={4} sx={{ my: 4 }}>
                        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                            <ValidationTextField
                                label="Name"
                                required
                                id="validation-outlined-input"
                                variant="outlined"
                            // id="name"
                            // name='name'
                            // label="Name"
                            // color="secondary"
                            // focused
                            // InputLabelProps={{ style: { fontSize: 23, marginTop: -15, marginLeft: -10 } }}


                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email"

                                color="secondary"
                                focused



                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />







                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                            <TextField
                                id="message"
                                name="message"
                                label="Message"
                                color="secondary"
                                multiline
                                rows={4}
                                focused



                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                        </Grid>

                    </Grid>
                    <button className={styles.normalButton} type="submit" >Send </button>
                </form>

            </Container>

        </Box >
    )
}

export default Contact