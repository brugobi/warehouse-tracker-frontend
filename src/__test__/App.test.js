import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders three <Login /> components', () => {
    expect(wrapper.find('Login')).toBeTruthy();
  });

  it('renders three <Signup /> components', () => {
    expect(wrapper.find('Signup')).toBeTruthy();
  });

  it('renders three <Home /> components', () => {
    expect(wrapper.find('Home')).toBeTruthy();
  });

  it('renders three <CreateItem /> components', () => {
    expect(wrapper.find('CreateItem')).toBeTruthy();
  });

  it('renders three <Items /> components', () => {
    expect(wrapper.find('Items')).toBeTruthy();
  });

  it('renders three <Statistics /> components', () => {
    expect(wrapper.find('Statistics')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
