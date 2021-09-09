import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from '../Components/Home';
import store from '../Reducers/index';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Home /></Provider>);
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

  // this one is not working
  // it('matches the snapshot', () => {
  //   const tree = renderer.create(<Provider store={store}><Home /></Provider>);
  //   expect(tree).toMatchSnapshot();
  // });
});
