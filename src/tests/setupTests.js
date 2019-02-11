// used to configure enviroment we are in.
// Enzyme requires this to run

/* eslint-disable*/
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

require('dotenv').config({ path: '.env.test' })

Enzyme.configure({
  adapter: new Adapter()
});