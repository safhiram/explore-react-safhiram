import { Typography, Stack, Grid, Box, Button, Paper } from '@mui/material';
import React from 'react';

// React router dom library
import { useNavigate } from 'react-router-dom';
import MainAppBar from '../../component/MainAppBar';
import RunButton from '../../component/RunButton';

const OnBoardingSlideShow = () => {
    const navigate = useNavigate()
    return (
        <Stack 
          sx={{
            height: '100vh',
            justifyContent: 'space-between',
            backgroundColor: 'black'
        }}
        >
            <MainAppBar />
            <Box m="80px 0px 24px 0px">
                <img
                  src="/assets/images/gambar.svg"
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'}} 
                  width="90%"
                />
            </Box>
            <Grid alignItems="center" container direction="column">
                <Grid item>
                    <Paper elevation={3} sx={{ borderRadius: '64px', backgroundColor:'#2F3C50', margin:'0px 40px'}} >
                        <Grid alignItems="center" container direction="column" p="32px 32px" spacing={1} sx={{color: 'white'}} >
                            <Grid item>
                                <Typography variant='h4'>Run</Typography>
                            </Grid>
                            <Grid item textAlign="center">
                                <Typography variant='mt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Typography>
                            </Grid>
                            <Grid item>
                                <RunButton link="/login" title="Next" />
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
            <Box textAlign="center" sx={{marginBottom: '18px'}}>
                <Typography sx={{color: 'white'}}variant="caption">Already have an account? Sign In</Typography>
            </Box>
        </Stack>
    )
}

export default OnBoardingSlideShow;