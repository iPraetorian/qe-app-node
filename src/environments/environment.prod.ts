import '../polyfills';
import { DefaultEnvironment } from './environment.dev';

export const ProductionEnvironment = Object.extend(DefaultEnvironment, {
  stage: 'prod',
});
