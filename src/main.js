import './main.css'
import { getUser } from './components/getUser'

document.querySelector('#app').innerHTML = `
    <div id='title'>
        <h1>MusTrack</h1>
    </div>
    <div id='cover'>
        <form method='get' action=''>
            <div class='tb'>
                <div class='td'><input id='search' type='text' placeholder='Search' required></div>
                <div class='td' id='s-cover'>
                    <button id='submit' type='button'>
                        <div id='s-circle'></div>
                        <span></span>
                    </button>
                </div>
            </div>
        </form>
    </div>
`

document.getElementById('submit').addEventListener('click', getUser);