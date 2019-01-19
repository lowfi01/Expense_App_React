// used to configure enviroment we are in.
// Enzyme requires this to run

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
});