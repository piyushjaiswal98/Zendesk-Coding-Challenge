import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

global.config = {
    uri: process.env.REACT_APP_API_HOST || 'http://localhost:2000/'
  }

afterEach(()=> {
    cleanup();
})

test('Should render App Component', () => {
    render(<App/>);
    const AppElement = screen.getByTestId('App-1');
    expect(AppElement).toBeInTheDocument();
})

test('Matches Snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
})