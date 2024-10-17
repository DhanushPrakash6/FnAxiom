import Nav from './components/nav'
import './register.css';
function App() {

  return (
    <>
      <Nav/>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className='flex flex-col gap-10'>
          <a href = "/register" className="w-[100px] h-[50px] bg-black flex items-center justify-center border border-white">Sign Up →</a>
          <a href = "/login" className="w-[100px] h-[50px] bg-black flex items-center justify-center  border border-white">Login →</a>
        </div>
      </div>
    </>
  )
}

export default App
