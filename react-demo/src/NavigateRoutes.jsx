import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnBoardingSlideShow from './views/OnBoardingSlideShow';

const NavigateRoutes = () => {
    <BrowserRouter>
        <Routes>
          <Route path='/home' component={OnBoardingSlideShow} />
        </Routes>
    </BrowserRouter>
}

export default NavigateRoutes;