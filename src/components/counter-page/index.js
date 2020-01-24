import GenerateComponent from '../../GenerateComponent';
import View from './View';
import { calculateNewValue } from './Controller';

export default GenerateComponent(View, {calculateNewValue})
