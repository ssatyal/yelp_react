import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'
import styles from './styles.module.css'

describe('<App />', () => {
  //define tests here:
  let wrapper; // "dom" node wrapper element
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('has a Routher component', () => {
    expect(wrapper.find('Router'))
      .to.have.length(1);
  });
});


// describe('<App />', function(){
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<App />)
//   })
//
//   it('has a single wrapper element', () => {
//     expect(wrapper.find(`.${styles.wrapper}`))
//     .to.have.length(1);
//   });
// });
