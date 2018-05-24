import './helper.polyfills';
import { DefaultEnvironment, IEnvironment } from '../environments/environment.dev';
import { TestEnvironment } from '../environments/environment.test';
import { ProductionEnvironment } from '../environments/environment.prod';

export const EnvironmentHelper = {
  GetCurrentEnvironment: () => {
    switch (process.env.stage) {
      case 'prod':
        return ProductionEnvironment;
      case 'test':
        return TestEnvironment;
      case 'dev':
      default:
        return DefaultEnvironment;
    }
  },
};
