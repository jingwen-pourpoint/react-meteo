import React, {Fragment, useState} from 'react'
import {Bouton} from "../commons/Bouton";
import {meteoService} from "../service/MeteoService";


export const Recherche = (props) => {
    const [ville, setVille] = useState("");

    const onclic = () => {
        meteoService.getMeteoByVille(ville)
            .then(meteoInfo => props.getMeteo(meteoInfo));
    }

    const handleChangeVille = (event) => {
        setVille(event.target.value)
    }

    return (
        <Fragment>
            <div className="recherche">
                <div className="rechercheBar">
                    <label className="" style={{width: '200px'}}>Recherche une ville :</label>
                    <div className="">
                        <input id="ville" type="text" onChange={handleChangeVille}/>
                    </div>
                </div>
                <div className="bouton">
                    <Bouton onClick={onclic}>chercher</Bouton>
                </div>
            </div>
        </Fragment>
    )
}
