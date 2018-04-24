import {
    CALCULATE_DOGS
  } from '../constants/action-types';
  
  export const calculateDogsRequest = input => {
    return {
      type: CALCULATE_DOGS,
      input
    };
  };  