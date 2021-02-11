const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = '2fcb0b67b96b049a6ed7ba7a36b048cd'
let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};

class MeteoService {
    getMeteoByVille = async (ville) => {
        console.log('url', `${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }
}

export const meteoService = Object.freeze(new MeteoService());
