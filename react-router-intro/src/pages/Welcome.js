import { Route } from 'react-router-dom';

const Welcome = () => {
    return (
        <section>
            <h1>welcome page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome, Captain Jack Sparrow!</p>
            </Route>
        </section>
    );
}
export default Welcome;