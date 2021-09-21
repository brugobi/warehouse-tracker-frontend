import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CreateItem from '../Components/CreateItem';
import store from '../Reducers/index';

describe('<CreateItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Router><Provider store={store}><CreateItem /></Provider></Router>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('renders three <Footer /> components', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Router><Provider store={store}><CreateItem /></Provider></Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
