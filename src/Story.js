// Story Component 
import React from 'react';

function StoryDisplay({ story, onRestart }) {
    return (
      <div>
        <p> { story } </p>
        <button onClick = { onRestart }> Restart </button>
      </div>
    );
};

export default StoryDisplay;