import React, { Component } from 'react';
import Feedback from './Feedback/Feedback'

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Feedback />
        </div>
      </>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
