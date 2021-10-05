import {render , screen , cleanup} from '@testing-library/react';
import Home from '../Customer/Home';
import ReportedCustomer from '../Customer/ReportedCustomer';
import ViewLocalPassangers from '../Customer/ViewLocalPassangers';

test('Should render Home component',()=>{
    // expect(true).toBe(true);
    render(<Home/>)
    const HomeElement =  screen.getByTestId('homeTest-1');
    //tests
    expect(HomeElement).toBeInTheDocument();

    // faild test case
    // expect(HomeElement).toHaveTextContent("home")
})

test('Should render ReportedCustomer component',()=>{
    // expect(true).toBe(true);
    render(<ReportedCustomer/>)
    const HomeElement =  screen.getByTestId('ReportedCustomerTest-1');
    //tests
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent("Status")
})

test('Should render ViewLocalPassangers component',()=>{
    // expect(true).toBe(true);
    render(<ViewLocalPassangers/>)
    const HomeElement =  screen.getByTestId('ViewLocalPassangersTest-1');
    //tests
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent(" Fortune Inn & Suites")
})




