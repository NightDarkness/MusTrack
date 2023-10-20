export async function useFetch(mode, url, user, dir, alterDir){

    const response = await fetch(url + user + dir);

    let data = await response.json();

    if(response.status === 200){

        switch(mode){
            case 'song':
                try{
                    data = data['payload']['listens'][0]['track_metadata'];
                }catch(e){
                    if(alterDir !== undefined){
                        data = await useFetch('song', url, user, alterDir);
                    }else{
                        data = '404';
                    }
                }
                break;
            default:
                break;
        }

    }else{
        data = '404';
    }

    return data;
}