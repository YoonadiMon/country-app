function CountryCard(props) {
  const data = props.countryData;
  const population = data.population.toLocaleString();
  const countryName = data.name;
  const input = props.searchInput;
  const l = input.length;

  const lightStyle1 = {
    backgroundColor: "hsl(0, 0%, 100%)",
  }
  const darkStyle1 = {
    backgroundColor: "hsl(209, 23%, 22%)",
  }
  

  
  const render = 
  input === "" ?
    <div className="cards" style={props.dark ? darkStyle1 : lightStyle1}>
      <img className="flagsImg" src={data.flags.png} alt={data.name} />
      <div className="country-info">
        <div className="country-name">{countryName}</div>
        <div>
          <b>Population: </b>{population}
        </div>
        <div>
          <b>Region: </b>{data.region}
        </div>
        <div>
          <b>Capital: </b>{data.capital}
        </div>
      </div>

    </div>
  :
    countryName.substr(0,l).toUpperCase() === input.toUpperCase() ? 
    <div className="cards" style={props.dark ? darkStyle1 : lightStyle1}>
      <img className="flagsImg" src={data.flags.png} alt={data.name} />
      <div className="country-info">
        <div className="country-name">{data.name}</div>
        <div>
          <b>Population: </b>{population}
        </div>
        <div>
          <b>Region: </b>{data.region}
        </div>
        <div>
          <b>Capital: </b>{data.capital}
        </div>
      </div>

    </div>
    : 
      <></>
  return(
    render
  );
}

export default CountryCard