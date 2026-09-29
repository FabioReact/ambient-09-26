import { Route, Routes } from 'react-router';
import Exercice from './exercices/Exercice';
import Home from './pages/Home';
import { Heroes } from './pages/Heroes';
import MainLayout from './layouts/MainLayout';
import LearningState from './learning/LearningState';
import { Search } from './pages/Search';
import { LearningEffect } from './learning/LearningEffect';
import Counter from './exercices/Counter';

const AppRoutes = () => {
return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exercices" element={<Exercice />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/effect" element={<LearningEffect />} />
        <Route path="/state" element={<LearningState />} />
        <Route path="/counter" element={<Counter />} />
      </Route>
      {/* /heroes -> lien absolu */}
      {/* heroes -> lien relatif (il prend le chemin actuel auquel il concatene heroes) */}
    </Routes>
  );
};

export default AppRoutes;
