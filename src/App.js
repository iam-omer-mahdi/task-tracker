import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import './css/App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      name: 'play code',
      time: 'today',
    },
    {
      name: 'read books',
      time: 'tomorrow',
    },
    {
      name: 'play tennis',
      time: 'on sunday',
    }
  ]);

  return (
    <>
      <Header />
      <main className="container py-4">
        <Home tasks={tasks} />
      </main>
    </>
  );
}

export default App;
