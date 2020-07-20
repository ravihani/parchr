import React from "react";

const FirebaseContext = React.createContext();

export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      //console.log("HOC: ", firebase)
      return <Component {...props} firebase={firebase} />;
    }}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
