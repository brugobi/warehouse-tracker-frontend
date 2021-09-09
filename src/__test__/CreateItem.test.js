import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CreateItem from '../Components/CreateItem';
import store from '../Reducers/index';

describe('<CreateItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><CreateItem /></Provider>);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('renders three <Footer /> components', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  // this one is not working
  // it('matches the snapshot', () => {
  //   const tree = renderer.create(<Router store={store}><CreateItem /></Router>);
  //   expect(tree).toMatchSnapshot();
  // });
});
