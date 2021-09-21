import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Statistics from '../Components/Statistics';
import store from '../Reducers/index';

describe('<Statistics />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Router><Provider store={store}><Statistics /></Provider></Router>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('renders three <Footer /> components', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Router><Provider store={store}><Statistics /></Provider></Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
