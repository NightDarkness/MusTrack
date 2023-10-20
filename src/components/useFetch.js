const 
    url_values = window.location.search,
    url_params = new URLSearchParams(url_values),
    user = url_params.get("user"),
    url = 'https://api.listenbrainz.org/1/user/' + user;

export async function loadSong(dir){

    const 
        response = await fetch(url + dir),
        data = await response.json();

    let song;

    if(response.status === 200){

        try{
            song = data['payload']['listens'][0]['track_metadata'];
        }catch(e){
            song = await loadSong('/listens?count=1');
        }

    }

    return song;
}