import React from 'react';

// PropTypes library
import PropTypes from 'prop-types';

// React router dom library
import { useNavigate } from 'react-router-dom';

// MUI material
import { Button } from '@mui/material';

// Return RunButton
const RunButton = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <Button 
      fullWidth 
      onClick={()=> (navigate({link}))} 
      sx={{textTransform: 'none', backgroundColor: '#7B61FF'}}
      variant="contained"
    >
        {title}
    </Button>
   
  );
};

RunButton.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
};

RunButton.defaultProps = {
  link: '/',
  title: ''
};

export default RunButton;
