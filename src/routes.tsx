import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Loading from './screen/loading';
import App from './App';

const Home = lazy(() => import('./screen/home'));
const Quiz = lazy(() => import('./screen/quiz'));
const Result = lazy(() => import('./screen/result'));
const NotFound = lazy(() => import('./screen/notFound'));

export default function MainRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index path='' element={<Home />} />

          <Route path='quiz' element={<Quiz />} />
          
          <Route path='result/:hitsQuestion/:allQuestion' element={<Result />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}