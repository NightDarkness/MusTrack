function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function reload_content(delay) {
    setInterval(async function () {

        const url_values = window.location.search;
        const url_params = new URLSearchParams(url_values);

        let user = url_params.get("user"),
            api_key = url_params.get("api_key"),
            lb_user = url_params.get("lb"),
            url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+ user +"&api_key=" + api_key + "&format=json&limit=1",
            data,
            song = {
                platform: "static/img/logo.png",
                id: "",
                status: "undefined",
                artist_name: "NO SONG - " + user,
                track_name: "MusTrack",
                img_link: "static/img/logo.png",
                logo:"static/img/logo.png"
            };

        response = await fetch(url);

        if(response.status === 200) {

            data = await response.json();
            data = data["recenttracks"]["track"][0];

            //console.log(data);

            if(data["@attr"] !== undefined){
                song["status"] = "now playing";
            }else{
                song["status"] = "last song";
            }

            song["platform"] = "static/img/logo.png";
            song["artist_name"] = data["artist"]["#text"];
            song["track_name"] = data["name"];
            song["id"] = "no-id";

            if(data["image"][data["image"].length-1]["#text"] !== ""){
                song["img_link"] = data["image"][data["image"].length-1]["#text"];
            }else{
                song["img_link"] = "static/img/logo.png";
            }

            song["logo"] = "static/img/logo.png";

            /*response = await fetch("https://api.listenbrainz.org/1/user/" + lb_user + "/playing-now");

            if(response.status === 200){

                data = await response.json();

                if(data["payload"]["listens"].length < 1){

                    response = await fetch("https://api.listenbrainz.org/1/user/" + lb_user + "/listens?count=1");
                    data = await response.json();  

                }


                song["platform"] = data["payload"]["listens"][0]["track_metadata"]["additional_info"]["music_service_name"];

                switch(song["platform"]) {

                    case "YouTube Music":
                        
                        song["platform"] = "static/img/ytm.png";
                        break;
    
                    case 'YouTube':

                        song["platform"] = "static/img/yt.png";
                        break;
    
                    case "Spotify":
    
                        song["platform"] = "static/img/spotify.png";
                        break;
    
                    case "SoundCloud":
    
                        song["platform"] = "static/img/sndc.png";
                        break;
    
                }

            }*/

        } else {
            
            if(user != null) {
                song = {
                    artist_name: "NO SONG - INVALID USER OR KEY",
                    track_name: "MusTrack",
                    img_link: "static/img/logo.png",
                    id: "no-id",
                    platform: "static/img/logo.png"
                };
            }
        }

        if(url_params.get("debug") == "true") {
            console.log("user= " + user + " API=" + api_key);
            console.log(song);
        }

        if(song["artist_name"] != document.getElementsByTagName("span")[3].innerText || song["track_name"] != document.getElementsByTagName("span")[2].innerText) {

            /*if(song["artist_name"] != document.getElementsByTagName("span")[1].innerText){
                console.log("webo");
            }*/

            document.getElementsByClassName("info")[0].classList.replace("animation-out", "animation-in");
            await sleep(20);
            document.getElementsByClassName("frame")[0].classList.replace("animation-out", "animation-in");

            await sleep(1000);

            document.getElementsByTagName("img")[0].setAttribute("src", song["img_link"]);
            document.getElementsByTagName("img")[1].setAttribute("src", song["img_link"]);

            await sleep(250);

            document.getElementsByTagName("div")[6].innerText = song["status"];
            document.getElementsByTagName("img")[2].setAttribute("src", song["platform"]);
            document.getElementsByTagName("span")[0].innerText = song["track_name"];
            document.getElementsByTagName("span")[1].innerText = song["artist_name"];
            document.getElementsByTagName("span")[2].innerText = song["track_name"];
            document.getElementsByTagName("span")[3].innerText = song["artist_name"];

            if(song["track_name"].length > 28) {
                document.getElementsByTagName("span")[0].setAttribute("class", "text animate");
                document.getElementsByTagName("span")[0].innerText = song["track_name"] + " " + song["track_name"] + " " + song["track_name"];
            } else {
                document.getElementsByTagName("span")[0].setAttribute("class", "text");
            }

            if(song["artist_name"].length > 28) {
                document.getElementsByTagName("span")[1].setAttribute("class", "text2 animate");
                document.getElementsByTagName("span")[1].innerText = song["artist_name"] + " " + song["artist_name"] + " " + song["artist_name"];
            } else {
                document.getElementsByTagName("span")[1].setAttribute("class", "text2");
            }

            await sleep(200);

            document.getElementsByClassName("frame")[0].classList.replace("animation-in", "animation-out");
            await sleep(20);
            document.getElementsByClassName("info")[0].classList.replace("animation-in", "animation-out");
        }

    }, delay);
}

reload_content(3000);
