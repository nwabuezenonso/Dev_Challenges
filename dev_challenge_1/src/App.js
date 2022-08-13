import React from 'react';
import  img from './assets/404_image.gif'

function App() {
  return (
    <div className="page404">
      <header className="header">
        <p>404 Not Found</p>
      </header>
      <div className='content'>
        <img src={img} alt='404'/>
        <div className='message'>
          <h1>ERROR MESSAGE</h1>
          {/* Pelumi contribution Here */}
        </div>
      </div>
      <footer>
        <p>Created by Techies Fusion - Tech Newbies </p>
      </footer>
    </div>
  );
}

export default App;
