import React from 'react';

// PropTypes library
import PropTypes from 'prop-types';

// React router dom library
import { useNavigate } from 'react-router-dom';

// MUI icons material
import { ArrowBack } from '@mui/icons-material';

// MUI material
import { AppBar, IconButton, styled, Toolbar, Typography } from '@mui/material';

// Styling component
const IconBackButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1)
}));

const Title = styled(Typography)({
  flexGrow: 1
});

// Return MainAppBar
const MainAppBar = ({ title, elevation }) => {
  const navigate = useNavigate();
  return (
    <AppBar component="nav" elevation={elevation} sx={{backgroundColor: 'black'}}>
      <Toolbar>
        <IconBackButton
          aria-label="menu"
          color="inherit"
          edge="start"
          onClick={() => navigate(-1)}
          size="large"
        >
          <ArrowBack />
        </IconBackButton>
        <Title component="div" variant="body1">
          {title}
        </Title>
      </Toolbar>
    </AppBar>
  );
};

MainAppBar.propTypes = {
  elevation: PropTypes.number,
  title: PropTypes.string
};

MainAppBar.defaultProps = {
  elevation: 0,
  title: ''
};

export default MainAppBar;
