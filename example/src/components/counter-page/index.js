import GenerateComponent from 'rfp';
import View from './View';
import {calculateNewValue} from './Controller';

export default GenerateComponent(View, {calculateNewValue})
