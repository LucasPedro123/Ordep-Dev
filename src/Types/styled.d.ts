import 'styled-components';
import { ITheme } from '../Interfaces/interface.web';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}