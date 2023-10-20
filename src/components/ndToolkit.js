export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getImg(id, platform){

    let url;

    switch (platform) {

        case 'YTM':
            id = id.substr(34,11);

            function _0x44e8(_0x5db63e,_0x51fe61){var _0x5df83f=_0x5df8();return _0x44e8=function(_0x44e878,_0x3b0739){_0x44e878=_0x44e878-0x67;var _0x3e0b25=_0x5df83f[_0x44e878];return _0x3e0b25;},_0x44e8(_0x5db63e,_0x51fe61);}var _0x4efcc0=_0x44e8;function _0x5df8(){var _0x173de0=['207aRUHBt','2462EOBovf','372DCNskB','9471950bFyiWc','7TdfwIl','11cdMWJU','2409SzmuVy','97312MNuJsk','https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=','450193FgXbpA','249728ocAzRa','113034SvfcHR','25PojNXX','443001TIAkSC'];_0x5df8=function(){return _0x173de0;};return _0x5df8();}(function(_0x55be0d,_0xcc95dd){var _0x7a316=_0x44e8,_0x4ac5e2=_0x55be0d();while(!![]){try{var _0x57220d=-parseInt(_0x7a316(0x74))/0x1+parseInt(_0x7a316(0x6c))/0x2*(-parseInt(_0x7a316(0x71))/0x3)+-parseInt(_0x7a316(0x67))/0x4*(-parseInt(_0x7a316(0x69))/0x5)+-parseInt(_0x7a316(0x68))/0x6*(parseInt(_0x7a316(0x6f))/0x7)+parseInt(_0x7a316(0x72))/0x8*(-parseInt(_0x7a316(0x6b))/0x9)+parseInt(_0x7a316(0x6e))/0xa*(parseInt(_0x7a316(0x70))/0xb)+-parseInt(_0x7a316(0x6d))/0xc*(-parseInt(_0x7a316(0x6a))/0xd);if(_0x57220d===_0xcc95dd)break;else _0x4ac5e2['push'](_0x4ac5e2['shift']());}catch(_0x49ee7f){_0x4ac5e2['push'](_0x4ac5e2['shift']());}}}(_0x5df8,0x8d38d),url=_0x4efcc0(0x73)+id+'&key=AIzaSyAg9ltkljz6x7qme7zvTW3PrX03dHkDfXA');

            let response = await fetch(url);
            let data = await response.json();

            if(data['items']['0']['snippet']['thumbnails'].hasOwnProperty('maxres')){
                return data['items']['0']['snippet']['thumbnails']['maxres']['url'];
            }else if(data['items']['0']['snippet']['thumbnails'].hasOwnProperty('hight')){
                return data['items']['0']['snippet']['thumbnails']['high']['url'];
            }else if(data['items']['0']['snippet']['thumbnails'].hasOwnProperty('standard')){
                return data['items']['0']['snippet']['thumbnails']['standard']['url'];
            }else if(data['items']['0']['snippet']['thumbnails'].hasOwnProperty('medium')){
                return data['items']['0']['snippet']['thumbnails']['medium']['url'];
            }else if(data['items']['0']['snippet']['thumbnails'].hasOwnProperty('default')){
                return data['items']['0']['snippet']['thumbnails']['default']['url'];
            }
            break;

        case 'Spotify':
            break;

    }
}

export async function update(cache){

    const 
        frame = document.querySelector('.song-data'),
        cover = document.querySelector('#cover'),
        coverFrame = document.querySelector('.cover-image'),
        title = document.querySelector('#song'),
        artist = document.querySelector('#artist');

    let image;

    frame.classList.add('anim-IN');

    await sleep(1000);

    coverFrame.classList.add('anim-disolve');

    await sleep(500);

    switch(cache['additional_info']['music_service_name']){

        case 'YouTube Music':
            image = await getImg(cache['additional_info']['origin_url'], 'YTM');
            cover.setAttribute('src', image);
            break;
        case 'Spotify':
            break;

    }

    if(cache["track_name"].length > 22) {
        if(title.hasAttribute('class')){
            title.removeAttribute('class')
        }
        title.setAttribute('class', 'anim-LTR');
    } else {
        if(title.hasAttribute('class')){
            title.removeAttribute('class')
        }
    }

    if(cache["artist_name"].length > 22) {
        if(artist.hasAttribute('class')){
            artist.removeAttribute('class')
        }
        artist.setAttribute('class', 'anim-LTR');
    } else {
        if(artist.hasAttribute('class')){
            artist.removeAttribute('class')
        }
    }

    title.innerHTML = cache['track_name'];
    artist.innerHTML = cache['artist_name'];

    await sleep(1200);

    coverFrame.classList.remove('anim-disolve');
    frame.classList.remove('anim-IN');
    frame.classList.add('anim-OUT');

    await sleep(1000);

    frame.classList.remove('anim-OUT');


}