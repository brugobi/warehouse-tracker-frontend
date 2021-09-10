import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Login from '../Components/Login';
import store from '../Reducers/index';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Router><Provider store={store}><Login /></Provider></Router>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Router><Provider store={store}><Login /></Provider></Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
