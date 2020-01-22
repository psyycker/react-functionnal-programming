/**
 * View is the view part of the component. It shouldn't contain any logic. Just rendering treatment
 * functions is an object containing all the functions inside the controller
 */
import React from 'react';

export default function generateComponent(View, functions) {
  return <View {...functions}/>
}
