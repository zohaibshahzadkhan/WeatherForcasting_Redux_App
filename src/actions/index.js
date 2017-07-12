import axios from 'axios';

const API_KEY='7d0029ca31b1cb6fee28e929bc109b70';
const Root_Url=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export default function fetchWeather(city){
    const url=`${Root_Url}&q=${city},Pakistan`;
    const request=axios.get(url);

    console.log('Request from axios',request);
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}