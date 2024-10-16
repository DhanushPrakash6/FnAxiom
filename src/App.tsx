import Nav from './components/nav'
import bg from '../src/images/bg.png'
function App() {

  return (
    <>
      <Nav/>
      <div className='w-full h-full'>
        <img src={bg} alt="" />
      </div>
    </>
  )
}

export default App
