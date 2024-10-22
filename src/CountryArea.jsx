import CountryCard from './CountryCard'
import data from './data.json'
import darkSearchIcon from './assets/darkSearchIcon.png'
import LightArrow from './assets/LightArrow.png'
import DarkArrow from './assets/DarkArrow.png'
import { useState } from 'react'

function CountryArea(props) {
  const [toggel,setToggel] = useState(false);
  const handleOnclick = () => {
    setToggel(!toggel);
    console.log(toggel);
  }

  const [countrySearch, setCountrySearch] = useState("");
  const handleOnchange = (event) => {
    setCountrySearch(event.target.value);
  }

  const searchIcon = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20101%22%3E%3Cpath%20d%3D%22M63.3%2059.9c3.8-4.6%206.2-10.5%206.2-17%200-14.6-11.9-26.5-26.5-26.5S16.5%2028.3%2016.5%2042.9%2028.4%2069.4%2043%2069.4c6.4%200%2012.4-2.3%2017-6.2l20.6%2020.6c.5.5%201.1.7%201.7.7.6%200%201.2-.2%201.7-.7.9-.9.9-2.5%200-3.4L63.3%2059.9zm-20.4%204.7c-12%200-21.7-9.7-21.7-21.7s9.7-21.7%2021.7-21.7%2021.7%209.7%2021.7%2021.7-9.7%2021.7-21.7%2021.7z%22%2F%3E%3C%2Fsvg%3E";

  const lightStyle1 = {
    backgroundColor: "hsl(0, 0%, 100%)",
  }
  const darkStyle1 = {
    backgroundColor: "hsl(209, 23%, 22%)",
  }
  const lightStyle2 = {
    backgroundColor: "hsl(0, 0%, 98%)",
    color: "hsl(200, 15%, 8%)",
  }
  const darkStyle2 = {
    backgroundColor: "hsl(207, 26%, 17%)",
    color: "hsl(0, 0%, 100%)",
  }

  return(
    <div id="mainArea" style={props.display ? darkStyle2 : lightStyle2}>
      <nav>
        <div id="inputArea" style={props.display ? darkStyle1 : lightStyle1}>
          <img src={props.display ?darkSearchIcon : searchIcon} alt="searchIcon" />
          <input type="text" placeholder='Search for a country...' style={props.display ? darkStyle2 : lightStyle2} onChange={handleOnchange}/>
        </div>
        <div id="filterArea" style={props.display ? darkStyle1 : lightStyle1}>
          <span>Filter by Region</span>
          <img src={props.display ? LightArrow : DarkArrow} alt="toggle-arrow" onClick={handleOnclick}/>
        </div>
        
      </nav>
      <div id="dropDown" className={toggel ? "" : "hide"} style={props.display ? darkStyle1 : lightStyle1
      }>
          <div>Africa</div>
          <div>America</div>
          <div>Asia</div>
          <div>Europe</div>
          <div>Oceania</div>
      </div>
      <div id="countryArea" >
      {data.map(item=>{
        return <CountryCard key={item.name} countryData={item} dark={props.display} searchInput={countrySearch}/>
      })}
      </div>
    </div>
    
  )
}

export default CountryArea