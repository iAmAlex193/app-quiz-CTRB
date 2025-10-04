import { Outlet } from 'react-router';
import QuizProvider from './context/quizContext';
import ListScoreProvider from './context/scoreContext';
import CTRBLogo from './assets/imgs/logo.png';

export default function App() {
  return (
    <QuizProvider>
      <ListScoreProvider>
        <div className='flex flex-col h-screen'>
          <header className='flex gap-4 p-3 sm:p-5'>
            <img 
              src={CTRBLogo} 
              alt='CTRB Logo' 
              height={78} 
              width={67} 
            />

            <div>
              <h2 className='text-xl font-semibold sm:text-[22px]'> Feira de Ciência 2025 </h2>

              <h3 className='text-[13px] font-normal sm:text-sm'> Colégio Tenente Rêgo Barros </h3>
            </div>
          </header>    

          <section 
            className='self-center flex flex-1 flex-col w-full max-w-[640px]'>
            <Outlet />
          </section>
        </div>
      </ListScoreProvider>
    </QuizProvider>
  );
}