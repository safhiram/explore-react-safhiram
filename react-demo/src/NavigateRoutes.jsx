import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './views/GetStarted';
import OnBoardingSlideShow from './views/OnBoardingSlideShow';

const NavigateRoutes = () => (
    <BrowserRouter>
        <Routes>
          <Route element={<GetStarted />} path='/' />
          <Route element={<OnBoardingSlideShow />} path='/onboarding' />
        </Routes>
    </BrowserRouter>
)

export default NavigateRoutes;