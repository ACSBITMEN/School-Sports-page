import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Subscriptions from './components/Subscriptions';
import Shopping from './components/Shopping';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
}
