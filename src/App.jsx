import { useState } from 'react'
import brightness from './assets/brightness.png'
import './App.css'
import CountryArea from './CountryArea';

function App() {
  const [dark, setDark] = useState(false);
  const darkIcon = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%203%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M20%2C17c-.269.011-5.253.131-8-4A9.173%2C9.173%2C0%2C0%2C1%2C12%2C3a9.283%2C9.283%2C0%2C0%2C0-8%2C9%2C9.165%2C9.165%2C0%2C0%2C0%2C9%2C9C17.109%2C20.908%2C19.661%2C17.47%2C20%2C17Z%22%2F%3E%3C%2Fsvg%3E";

  const lightStyle1 = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
  }
  const darkStyle1 = {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
  }
  

  const handleImgClick = () => {
    setDark(!dark);
  }
  return (
    <>
      <header style={dark ? darkStyle1 : lightStyle1}>
        <h1>Where in the world?</h1>
        <div id="toggleArea">
          <img id="darkModeToggle" src={dark ? brightness : darkIcon}alt="dark-mode-toggle" onClick={handleImgClick}/> 
          <span>Dark Mode</span>
        </div>
        
      </header>
      <CountryArea display={dark}/>
    </>
  )
}

export default App
