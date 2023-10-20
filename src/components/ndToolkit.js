export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getImg(id, platform){

    switch (platform) {

        case 'YTM':
            id = id.substr(34,11);

            let
                response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=AIzaSyAg9ltkljz6x7qme7zvTW3PrX03dHkDfXA'),
                data = await response.json();

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