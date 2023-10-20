import '../App.css'
import { useFetch } from './useFetch.js'

async function checkUser() {

    const user = document.querySelector('#search');

    let response = await useFetch('default', 'https://api.listenbrainz.org/1/user/', user.value , '/listens?count=1');

    if(response != '404'){
        user.setAttribute('style', 'background: rgba(0,255,0,0.2);');
        window.location.replace('http://mustrack.nightdarkness.com/App.html?user=' + user.value);
    }else{
        user.setAttribute('style', 'background: rgba(255,0,0,0.2);');
        user.value = '';
        user.setAttribute('placeholder', 'Invalid User');
    }
}

document.querySelector('#app').innerHTML = `
  <div class='form-container'>
    <form id='form'>
        <input type='text' id='search' placeholder='Your UserName'>
        <button type='button' id='submit'>Search</button>
    </form>
  </div>
`

document.getElementById('submit').addEventListener('click', checkUser);