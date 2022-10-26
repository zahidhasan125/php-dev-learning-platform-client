import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route/Route';

function App() {
  return (
    <div className="bg-slate-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
