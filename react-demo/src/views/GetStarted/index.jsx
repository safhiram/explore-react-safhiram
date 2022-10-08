import { Typography, Stack, Grid, Button } from '@mui/material';
import React from 'react';

// React router dom library
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate()
    return (
        <Stack 
          sx={{
            height: '100vh',
            justifyContent: 'space-between',
            backgroundColor: 'black'
        }}
        >
            <img src='assets/images/onBoarding.svg' width="100%"/>
            <Grid alignContent="center" container direction="column" spacing={5} sx={{position: 'absolute', bottom: '80px'}}>
                <Grid item>
                    <Grid 
                      alignItems="center"
                      container 
                      direction="column"
                      sx = {{ width: '247px'}}
                    >
                        <Grid item>
                            <Typography 
                              sx={{color: 'white'}} 
                              variant='title'
                            >
                                Running App
                            </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                            <Typography 
                              sx={{color: 'white'}}
                              variant='caption'
                            >
                                Run and earn with our app. Some text Example will be her
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button 
                      fullWidth 
                      onClick={()=> (navigate('/onboarding'))} 
                      sx={{textTransform: 'none', backgroundColor: '#7B61FF'}}
                      variant="contained"
                    >
                        Get Started
                    </Button>
                </Grid>
            </Grid>

        </Stack>
    )
}

export default GetStarted;