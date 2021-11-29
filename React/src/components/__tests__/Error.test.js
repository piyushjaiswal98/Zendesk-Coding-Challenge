import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Error from '../Error';

afterEach(()=> {
    cleanup();
})

test('Should render Error Component', () => {
    render(<Error error={"Couldn't Authenticate you"}/>);
    const errorElement = screen.getByTestId('Error-1');
    expect(errorElement).toBeInTheDocument();
})

test('Matches Snapshot', () => {
    const tree = renderer.create(<Error error={"Couldn't Authenticate you"}/>).toJSON();
    expect(tree).toMatchSnapshot();
})