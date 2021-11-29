import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Landing from '../Landing';

global.config = {
    uri: process.env.REACT_APP_API_HOST || 'http://localhost:2000/'
  }

afterEach(()=> {
    cleanup();
})

test('Should render Landing View', () => {
    render(<Landing/>);
    const LandingElement1 = screen.getByTestId('Landing-1');
    expect(LandingElement1).toBeInTheDocument();
    const LandingElement2 = screen.getByTestId('Landing-2');
    expect(LandingElement2).toBeInTheDocument();
    const LandingElement3 = screen.getByTestId('Landing-3');
    expect(LandingElement3).toBeInTheDocument();
})

test('Matches Snapshot', () => {
    const tree = renderer.create(<Landing/>).toJSON();
    expect(tree).toMatchSnapshot();
})