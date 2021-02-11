import React, {Fragment, useState} from 'react'
import {Recherche} from "./composant/Recherche";
import {Detail} from "./composant/Detail";

export default function App() {

    const [info, setInfo] = useState();

    const getMeteo = (modelMeteo) => {
        setInfo(modelMeteo);
    }

    return (
        <Fragment>
            <Recherche getMeteo={getMeteo}/>
            <Detail info={info}/>
        </Fragment>
    )
}
