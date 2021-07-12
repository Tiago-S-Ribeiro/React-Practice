import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import Async from './Async'

describe('Async component', () => {
    test('renders post if request suceeds', async () => {
        render(<Async/>);

        //https://www.w3.org/TR/html-aria/#docconformance
        //'find' em vez de 'get', porque o find dá return duma promise. ou seja, 
        //ele espera x tempo a ver se consegue dar render ao que é suposto. o default é dar timeout se num segundo
        //nao encontrar, mas eu especifiquei 2 segundos a titulo de exemplo.
        const listItemElems = await screen.findAllByRole('listitem', {}, {timeout: 2000}); 
        expect(listItemElems).not.toHaveLength(0);
    });
});