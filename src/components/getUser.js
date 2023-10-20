import { useFetch } from './useFetch'

export async function getUser() {

    const user = document.querySelector('#search');

    let response = await useFetch('default', 'https://api.listenbrainz.org/1/user/', user.value , '/listens?count=1');

    if(response != '404'){
        window.location.replace(window.location.href + 'app/?user=' + user.value);
    }else{
        user.value = '';
        user.setAttribute('placeholder', 'Invalid User');
    }
}