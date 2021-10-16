// import React from 'react';
// import ReservationsList from "../components/ReservationsList"
// import ReservationShow from "../components/ReservationShow"
// import {
//     BrowserRouter as Router,
//     Route
//   } from 'react-router-dom';

// const ReservationPage = ({ match, reservations }) => (
    
//     <Router>

//         <div>
//             <Route
//                 exact
//                 path={`${match.url}/:reservationId`}
//                 render={(routerProps) => <ReservationShow {...routerProps}
//                 reservations={reservations} />}
//                 />
//             <Route path={`${match.url}/:movieId`} render={routerProps => <ReservationShow {...routerProps} reservations={reservations} /> }/>
//             <ReservationsList reservations={reservations} />
//         </div>

//     </Router>
// )

// export default ReservationPage