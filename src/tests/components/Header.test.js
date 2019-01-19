import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
})


// Old Code not using Enzyme


// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import React from 'react';
// // Enzyme implementation
// import {shallow} from 'enzyme';

// import Header from '../../components/Header';

// // Shallow - does not render child components
// // Full Dom - renders all children components


// test('should render header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);

//   expect(renderer.getRenderOutput()).toMatchSnapshot();

//   // yarn test, will print this for us.
//   // console.log(renderer.getRenderOutput());

//   // console.log src/tests/components/Header.test.js:16
//   //   { '$$typeof': Symbol(react.element),
//   //     type: 'header',
//   //     key: null,
//   //     ref: null,
//   //     props: { children: [ [Object], [Object], [Object], [Object] ] },
//   //     _owner: null,
//   //     _store: {} }

// })
