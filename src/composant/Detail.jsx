import React, {Fragment} from 'react'
import "../App.css";

export const Detail = (props) => {

    if (props.info === undefined) {
        return (<div className="textInfo">Veuillez entrer une ville</div>);
    } else {
        console.log(props.info);
    }

    return (
        <Fragment>
            <div className="info">
                <p style={{"fontSize":"large"}}>{props.info.name}</p>

                <div className="infoGeneral">
                    <div className="icone">
                        <p>{props.info.weather[0].description}</p>
                        <img src={`http://openweathermap.org/img/w/${props.info.weather[0].icon}.png`}/>
                    </div>
                    <p>Température : {props.info.main.temp}°C </p>
                </div>

                <div className="infoDetail">
                    <p>Ressenti : {props.info.main.feels_like}°C </p>
                    <p>Min : {props.info.main.temp_min}°C </p>
                    <p>Max : {props.info.main.temp_max}°C </p>
                    <p>Humidité : {props.info.main.humidity}%</p>
                    <p>Pression : {props.info.main.pressure}hPa</p>
                </div>
            </div>
        </Fragment>
    )
}
