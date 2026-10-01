import { Route, Routes } from 'react-router';
import Exercice from './exercices/Exercice';
import Home from './pages/Home';
import { Heroes } from './pages/Heroes';
import MainLayout from './layouts/MainLayout';
import { Search } from './pages/Search';
import { Register } from './pages/Register/Register';
import { Profile } from './pages/Profile/Profile';
import { AddHero } from './pages/AddHero/AddHero';
import Battle from './pages/Battle/Battle';
import { PrivateRoute } from './hoc/PrivateRoute';
import { Login } from './pages/Login/Login';
import { lazy, Suspense } from 'react';
import { Spinner } from './components/Spinner';
import Optimisations from './learning/Optimisations';

const LearningEffect = lazy(() => import('./learning/LearningEffect').then((module) => ({ default: module.LearningEffect })));
const LearningState = lazy(() => import('./learning/LearningState'));
const LearningRef = lazy(() => import('./learning/LearningRef').then((module) => ({ default: module.LearningRef })));
const Counter = lazy(() => import('./exercices/Counter'))


const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-hero" element={<AddHero />} />
          <Route path="/battle" element={<Battle />} />
          <Route element={<PrivateRoute />}>
            <Route path="/exercices" element={<Exercice />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/optimisations" element={<Optimisations />} />
          <Route path="*" element={<p>Page not found</p>} />
          <Route path="/learning">
            <Route path="effect" element={<LearningEffect />} />
            <Route path="state" element={<LearningState />} />
            <Route path="ref" element={<LearningRef />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Route>
        {/* /heroes -> lien absolu */}
        {/* heroes -> lien relatif (il prend le chemin actuel auquel il concatene heroes) */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
