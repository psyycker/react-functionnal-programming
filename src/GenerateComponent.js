import React from 'react';

/**
 *
 * @param View is the view part of the component. It shouldn't contain any logic. Just rendering treatment
 * @param functions is an object containing all the functions inside the controller
 * @returns {function(*): React.ReactElement} Functional component which returns the View with functions and props injected
 */
export default function generateComponent(View, functions) {
  return function (props) {
    return <View {...functions} {...props}/>
  }
}
