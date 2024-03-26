import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import MadlibsForm from './Form';
import StoryDisplay from './Story';
import './App.css';


const App = () => {
  const [story, setStory] = useState('');
  const [showStory, setShowStory] = useState(false);

  const handleFormSubmit = inputs => {
    const { noun, nounTwo, adjective, color } = inputs;
    const newStory = `Once upon a time, there was a ${ noun } ${ nounTwo } who loved to ${ adjective } ${ color }.`;
    setStory(newStory);
    setShowStory(true);
  };

  const handleRestart = () => {
    setShowStory(false);
    setStory('');
  };

  return (
    <Container textAlign = "center">
      <Header as="h1"> React Madlibs </Header>
      {!showStory ? (
        <MadlibsForm onSubmit = {handleFormSubmit} />
      ) : (
        <div>
          <StoryDisplay story = { story } onRestart = { handleRestart } />
        </div>
      )}
    </Container>
  );
};

export default App;
