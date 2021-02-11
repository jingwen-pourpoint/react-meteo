import React, {Fragment, useState} from 'react'
import {Bouton} from "../commons/Bouton";
import {meteoService} from "../service/MeteoService";


export const Recherche = (props) => {
    const [ville, setVille] = useState("");

    const onClick = () => {
        meteoService.getMeteoByVille(ville)
            .then(meteoInfo => props.setMeteo(meteoInfo));
    }

    const handleChangeVille = (event) => {
        setVille(event.target.value)
    }

    return (
        <Fragment>
            <div className="recherche">
                <div className="rechercheBar">
                    <label className="" style={{width: '200px'}}>Recherche une ville :</label>
                        <input id="ville" type="text" onChange={handleChangeVille}/>
                </div>
                <div className="bouton">
                    <Bouton onClick={onClick}>chercher</Bouton>
                </div>
            </div>
        </Fragment>
    )
}
