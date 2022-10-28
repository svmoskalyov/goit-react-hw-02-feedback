import React, { Component } from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import FeedbackOptions from '../components/FeedbackOptions';
import Statistics from '../components/Statistics';
// import Feedback from './Feedback/Feedback'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Section>
          <FeedbackOptions />
        </Section>

        <Section>
          <Statistics />
        </Section>
      </Container>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <Feedback />
//         </div>
//       </>
//     );
//   }
// }

// export default App;

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
