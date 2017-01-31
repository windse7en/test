/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import Test from '../src/Test';

addDecorator(checkA11y);

storiesOf('Test ', module)
  .add('Without props', () => (
    <Test />
  ));
