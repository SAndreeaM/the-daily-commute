import './App.css'
import Menu from './Menu.tsx'

function Section1() {

    return (
      <div id='section1' className='section flexbox'>
        <div id='home-content' className='flexbox'>
          <h1>The Daily Commute</h1>
          <Menu />
          <p>This is a funny haha quip.</p>
        </div>
      </div>
    )
  }
  
  export default Section1