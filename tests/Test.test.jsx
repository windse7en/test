import React from 'react';
import initStoryshots from 'storyshots';
import Test from '../src/Test';

const defaultVariety = <Test />;
const primaryVariety = <Test name="primary" variant="terra-Test--primary" />;

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

it('should render a primary component', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-Test--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Test terra-Test--default');
});

it('should have the class terra-Test--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Test terra-Test--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Test--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Test--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Test--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Test--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
