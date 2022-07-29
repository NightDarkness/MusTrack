let api = 'https://api.listenbrainz.org/1/user/nightd/playing-now';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function reload_content(url, delay){

    setInterval(async function(){
        let response = await fetch(url);
        let data = await response.text();
        let jsonRAW = JSON.parse(data);
        let jsonFile = new Map(Object.entries(jsonRAW));
        let payload = new Map();
        let song = new Map();
        let link;
        let id;

        payload = jsonFile.get('payload');
        song = payload['listens'][0]['track_metadata'];
        id = payload['listens'][0]['track_metadata']['additional_info']['origin_url'];
        id = id.substr(0,45);
        id = id.substr(34,45);
        link = 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg'
        song['img_id'] = id;
        song['img_link'] = link;

        console.log(data);
        //console.log(document.getElementsByTagName('img')[0].getAttribute('src'));

        if(link != document.getElementsByTagName('img')[0].getAttribute('src')){
            
            document.getElementsByTagName('div')[3].setAttribute('class', 'info animation-in');
            //await sleep(1000);
            document.getElementsByTagName('div')[2].setAttribute('class', 'frame animation-in');

            //document.getElementsByTagName('div')[3].style.animation = 'in';

            await sleep(1000);

            document.getElementsByTagName('img')[0].setAttribute('src','https://img.youtube.com/vi/' + song['img_id'] + '/maxresdefault.jpg');
            
            document.getElementsByTagName('img')[1].setAttribute('src','https://img.youtube.com/vi/' + song['img_id'] + '/maxresdefault.jpg');

            await sleep(250);

            document.getElementsByTagName('p')[0].innerText = song['track_name'];
            document.getElementsByTagName('p')[1].innerText = song['artist_name'];

            if(song['track_name'].length > 28){
                document.getElementsByTagName('p')[0].setAttribute('class', 'text');
            }else{
                document.getElementsByTagName('p')[0].setAttribute('class', '');
            }
            if(song['artist_name'].length > 28){
                document.getElementsByTagName('p')[1].setAttribute('class', 'text');
            }else{
                document.getElementsByTagName('p')[1].setAttribute('class', '');
            }

            document.getElementsByTagName('div')[2].setAttribute('class', 'frame animation-out');
            //await sleep(1000);
            document.getElementsByTagName('div')[3].setAttribute('class', 'info animation-out');
            //document.getElementsByClassName('info')[3].style. 

        }

    },delay);

}



reload_content(api, 3000);
