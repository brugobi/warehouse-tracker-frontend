import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Signup from '../Components/Signup';
import store from '../Reducers/index';

describe('<Signup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Router><Provider store={store}><Signup /></Provider></Router>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Router><Provider store={store}><Signup /></Provider></Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
