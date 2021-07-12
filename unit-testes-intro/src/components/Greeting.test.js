import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('checks if \'Hello!\' is rendered as text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        //... nothing
    
        //Assert
        const helloElement = screen.getByText('Hello!', {exact:true});
        expect(helloElement).toBeInTheDocument();
    });

    test('renders \'good to lay eyes on you\' if button was NOT clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //... nothing

        //Assert
        const outputElement = screen.getByText('nice to lay eyes on you', { exact:false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders \'Changed!\' if button WAS clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed!', {exact: true});
        expect(outputElement).toBeInTheDocument();
    });

    test('checks if the \'nice to lay eyes on you\' text is gone after clicking the button', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        //even tho I want this NOT to be on the screen, using 'getByText' would throw an error because it 
        //won't find that text even tho that's what I want to make sure. So 'queryByText' is used in these
        //cases, and it returns 'null' if it doesn't find anything
        const outputElement = screen.queryByText('nice to lay eyes on you', {exact: false});
        expect(outputElement).toBeNull();
    });
});