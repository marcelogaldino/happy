import React from 'react';

interface TitleProps {
  text: String
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
      <Title text="Hello Marcelo 1"/>
      <Title text="Hello Marcelo 2"/>
      <Title text="Hello Marcelo 3"/>
      <Title text="Hello Marcelo 4"/>
    </div>
  );
}

export default App;
