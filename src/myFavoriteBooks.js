import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {


  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated)

    
      return(
        <>
        
          

            <Jumbotron>
              <h1>My Favorite Books</h1>
              <p>
                This is a collection of my favorite books
              </p>
            </Jumbotron>
            
          
        
        </>
      )
    
  }
}

export default withAuth0(MyFavoriteBooks);
