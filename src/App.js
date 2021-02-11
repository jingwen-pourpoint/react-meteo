import React, {Fragment, useState} from 'react'
import {Recherche} from "./composant/Recherche";
import {Detail} from "./composant/Detail";

export default function App() {

    const [meteoInfo, setMeteoInfo] = useState();

    const setMeteo = (meteo) => {
        setMeteoInfo(meteo);
    }

    return (
        <Fragment>
            <Recherche setMeteo={setMeteo}/>
            <Detail info={meteoInfo}/>
        </Fragment>
    )
}
