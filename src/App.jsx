import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Tasks from './components/pages/Tasks';
import Pendentes from './components/pages/Pendentes';

function App() {
  return (
    <Router>
      <Container customClass="main">
        <NavBar />

        <Routes>
          <Route path="/all" element={<Tasks />} />

          <Route path="/pendentes" element={<Pendentes />} />

          {/* { <Routes path="/concluidas" element={<Concluidas />} />} */}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
