import {render , screen , cleanup} from '@testing-library/react';
import Home from '../Customer/Home';
import VisualFeedback from "../Reports/VisualFeedback";
import AddBusRoute from "../Bus/AddBusRoute";
import ViewPayment from "../Payment/ViewPayment";

test('Should render Home component',()=>{
    // expect(true).toBe(true);
    render(<Home/>)
    const HomeElement =  screen.getByTestId('homeTest-1');

    //tests
    expect(HomeElement).toBeInTheDocument();
    // expect(HomeElement).toHaveTextContent("home")


})
test('Render VisualFeedback Component',()=>{
    // expect(true).toBe(true);
    render(<VisualFeedback/>)
    const HomeElement =  screen.getByTestId('StartJourney-1');

    //tests
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent("Start Journey")
})
test('Render AddBusRoute Component',()=>{
    // expect(true).toBe(true);
    render(<AddBusRoute/>)
    const HomeElement =  screen.getByTestId('AddBusRoute-1');

    //tests
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent("Add Bus")
})
test('Render ViewPayment Component',()=>{
    // expect(true).toBe(true);
    render(<ViewPayment/>)
    const HomeElement =  screen.getByTestId('ViewPayment-1');

    //tests
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent("CVV")
})


