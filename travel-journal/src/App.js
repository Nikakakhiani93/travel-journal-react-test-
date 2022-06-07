import React from 'react';
import './App.scss';

import Header from '../src/components/Header';
import Card from '../src/components/Card';
import { places } from '../src/data';

function App() {
  const cards = places.map((place) => {
    return <Card key={place.id} {...place} />;
  });
  return (
    <div className="App">
      <Header />
      <section className="card-section">{cards}</section>
    </div>
  );
}

export default App;
