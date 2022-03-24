// import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="rooms/new" element={<NewRoom />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
