import '../polyfills';
import { DefaultEnvironment } from './environment.dev';

export const TestEnvironment = Object.extend(DefaultEnvironment, {
  stage: 'test',
});
