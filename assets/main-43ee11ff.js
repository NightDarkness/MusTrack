import{u as t}from"./useFetch-ab59d005.js";async function i(){const e=document.querySelector("#search");await t("default","https://api.listenbrainz.org/1/user/",e.value,"/listens?count=1")!="404"?window.location.replace(window.location.href+"app/?user="+e.value):(e.value="",e.setAttribute("placeholder","Invalid User"))}document.querySelector("#app").innerHTML=`
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
`;document.getElementById("submit").addEventListener("click",i);
