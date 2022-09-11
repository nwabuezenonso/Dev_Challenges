import React from 'react';
import  img from './assets/404_image.gif';

function App() {
  return (
    <div className="page404">
      <header className="header">
        <p>404 Not Found</p>
      </header>
      <div className='content'>
        <img src={img} alt='404'/>
        <div className='message'>
          <h1>Oops! we couldn't find the page.</h1>
          <p>The page you are looking for might be removed or its temporarily unavailable.</p>
            <button className='btn'>
              Back to home
            </button>
        </div>
      </div>
      <footer>
        <p>Created by Techies Fusion - Tech Newbies </p>
      </footer>
    </div>
  );
}

export default App;
