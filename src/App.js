import './App.css'
import { loadSong } from './components/useFetch.js'
import { update } from './components/ndToolkit.js'


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
        
        let song = await loadSong('/playing-now');

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