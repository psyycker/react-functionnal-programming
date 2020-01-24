import GenerateComponent from 'react-functional-programming';
import View from './View';
import {calculateNewValue} from './Controller';

export default GenerateComponent(View, {calculateNewValue})
