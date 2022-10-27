import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route/Route';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-300 to-emerald-300 dark:bg-gradient-to-tl dark:from-gray-700 dark:via-gray-900 dark:to-black lg:pt-2">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
