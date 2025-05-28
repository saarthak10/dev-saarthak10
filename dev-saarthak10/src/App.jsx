import { ToastContainer } from 'react-toastify'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={2000}
                closeOnClick
                theme={localStorage.getItem('theme') || 'light'}
                draggable={false}
                pauseOnHover
                newestOnTop
                progressClassName="toastProgress"
                limit={1}
            />
    <AppRouter/>
    
    </>
  )
}

export default App
