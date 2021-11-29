import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TicketList from '../TicketList';
import '../../config'

afterEach(()=> {
    cleanup();
})

const data = [{ 
    "ticket": { 
        "url": "https://zccstudents3001.zendesk.com/api/v2/tickets/4.json", 
        "id": 4, 
        "created_at": "2021-11-24T21:20:18Z", 
        "updated_at": "2021-11-24T21:20:18Z", 
        "subject": "ad sunt qui aute ullamco", 
        "raw_subject": "ad sunt qui aute ullamco", 
        "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.", 
        "status": "open", 
    } 
}];

test('Should render TicketList Component', () => {
    render(<TicketList ticketList={data}/>);
    const TicketListElement = screen.getByTestId('TicketList-1');
    expect(TicketListElement).toBeInTheDocument();
    expect(TicketListElement).toHaveClass("ticketList");
})

test('Matches Snapshot', () => {
    const tree = renderer.create(<TicketList ticketList={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
})