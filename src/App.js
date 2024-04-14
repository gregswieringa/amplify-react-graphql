import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://3.92.223.134/')
      .then(response => response.text())
      .then(data => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? <p>{data}</p> : 'Loading...'}
      </header>
    </div>
  );
}

export default App;
