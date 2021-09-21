import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from '../Components/Home';
import store from '../Reducers/index';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Router><Provider store={store}><Home /></Provider></Router>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('renders three <Itens /> components', () => {
    expect(wrapper.find('Itens')).toBeTruthy();
  });

  it('renders three <Footer /> components', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Router><Provider store={store}><Home /></Provider></Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
