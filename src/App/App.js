import './App.css'
import { useFetch } from '../components/useFetch.js'
import { update } from '../components/ndToolkit.js'

const 
    url_values = window.location.search,
    url_params = new URLSearchParams(url_values),
    user = url_params.get("user"),
    url = 'https://api.listenbrainz.org/1/user/';

let cache = {
    track_name: 'none'
}

document.querySelector('#app').innerHTML = `
  <div class='cover-image'>
    <img id='cover' src='logo.png' alt='COVER'/>
  </div>
  <div class='song-data'>
    <section class='song-name'>
        <div class='text-container'>
            <span id='song'>MusTrack</span>
        </div>
    </section>
    <section class='song-artist'>
        <div class='text-container'>
            <span id='artist'>v1.1</span>
        </div>
    </section>
    <section class='spacer'></section>
  </div>
`

function reloadContent(delay){
    setInterval(async () => {
        
        let song = await useFetch('song', url,  user, '/playing-now', '/listens?count=1');

        if(cache['track_name'] == song['track_name'] && cache['artist_name'] == song['artist_name'] && cache['release_name'] == song['release_name']){
            console.log('refreshing');
        }else{
            cache = await song;
            console.log('cache');
            console.log(cache);
            update(cache);
        }

    },delay);
}
reloadContent(3000);