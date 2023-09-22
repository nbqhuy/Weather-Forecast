import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardTomorrow from './components/CardTomorrow'
import CardDaily from './components/CardDaily'
import { CardDailyContainerStyle, CardTomorrowContainerStyle } from './components/CardContainer.style'
function App() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')
  const [city,setCity] = useState('')

  function checkData(rawData) {
    setCity(rawData.city?.name)
    const now = new Date();
    const newData = rawData.list.filter(obj => {
      const date = new Date(obj.dt_txt)
      if(date.getDate()>now.getDate()) {
        return obj
      }
    })
    console.log(newData.length)
    setData(newData)
  }
  const handleClick = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c&lang=vi`
    axios.get(url).then((response) => {
      checkData(response.data)
    })
    .catch(error => console.log('Error', error));
    setLocation('')
  };
  function convertDateFormat(dateString) {
    const newDateFormat = "DD/MM/YYYY HH:mm";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const newDateString = newDateFormat
      .replace(/YYYY/g, year)
      .replace(/MM/g, month.toString().padStart(2, '0'))
      .replace(/DD/g, day.toString().padStart(2, '0'))
      .replace(/HH/g, hours.toString().padStart(2, '0'))
      .replace(/mm/g, minutes.toString().padStart(2, '0'));

    return newDateString;
  };
  function getTime(dateString) {
    const date = new Date(dateString)
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  }
  function getDate(dateString) {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth()).padStart(2, '0');
    const formattedDate = `${day}/${month}`;
    return formattedDate;
  }
  const cardsTomorrow = data.slice(3,8).map((item) => (
    <CardTomorrow
      key={item.dt_txt}
      time={getTime(item.dt_txt)}
      icon={`../icon/${item.weather[0].icon}.png`}
      temp={Number.parseInt(item.main.temp) + "°C"}
      humidity={item.main.humidity + "%"}
    />
  ));
  const cardsDaily = data.slice(3).map((item, index) => {
    if (index % 7 === 0) {
      return (
        <CardDaily
          key={index}
          date={getDate(item.dt_txt)}
          humidity={item.main.humidity + "%"}
          wind={item.wind.speed.toFixed(2) + "km/h"}
          temp={Number.parseInt(item.main.temp) + "°C"}
        />
      );
    }
  });
  return (
    <>
      <div className="container">
        <br/>
        <div className='input-container'>
          <input type='text' placeholder='Location' id='location-input'
            value={location}
            onChange={event => setLocation(event.target.value)}
          ></input>
          <button onClick={handleClick}>GO</button>
        </div>
        
        <div className='weather-body'>
          <div className='weather-overview'>
            <div className='overview-info'>
              <div className='location'>{city}</div>  
              <div className='temp-overview'>{data[2]?data[2].main.temp + "°C":""}</div>
              <div className='feel-overview'>{data[2]?.weather[0].description}</div>
              <div className='date-overview'>{data[2]?convertDateFormat(data[2]?.dt_txt):""}</div>
            </div>
            <img src={`../icon/${data[2]?.weather[0].icon}.png`} alt='' className='overview-img'></img>
          </div>

          {data.length!==0&&<CardTomorrowContainerStyle className='weather-tomorrow'>
            {cardsTomorrow}
          </CardTomorrowContainerStyle>}

          {data.length!==0&&<CardDailyContainerStyle className='weather-daily'>
            {cardsDaily}
          </CardDailyContainerStyle>}

        </div>
        <br/>
      </div>
    </>
  )
}

export default App
