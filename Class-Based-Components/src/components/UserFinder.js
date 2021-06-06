import { Fragment, useState, useEffect, Component } from 'react';
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Valentino Rossi' },
//     { id: 'u2', name: 'Nicky Hayden' },
//     { id: 'u3', name: 'Marco Simoncelli' },
// ];

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor(){
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount(){ //only runs when the component runs for the 1st time
        //Send http request to db...
        this.setState({filteredUsers: this.context.users});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({filteredUsers: this.context.users.filter((user) => 
                user.name.includes(this.state.searchTerm)
                )
            })
        }
    }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value});
    }

    render(){
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' placeholder="Search" onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
          );    
    }
}

// const UserFinder = () => {

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//             <input type='search' onChange={searchChangeHandler} />
//         </div>
//         <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;