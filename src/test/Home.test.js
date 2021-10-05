import {render , screen , cleanup} from '@testing-library/react';
import Home from '../Customer/Home';

test('Should render Home component',()=>{
    // expect(true).toBe(true);
    render(<Home/>)
    const HomeElement =  screen.getByTestId('homeTest-1');

    //tests
    expect(HomeElement).toBeInTheDocument();
    // expect(HomeElement).toHaveTextContent("home")



})