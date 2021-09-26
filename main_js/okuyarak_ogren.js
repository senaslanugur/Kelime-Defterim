
    var hst = document.getElementById("makale_girisi");
    var get_url = 'https://api.rss2json.com/v1/api.json?rss_url=https://phys.org/rss-feed/';
    $.getJSON(get_url, function(d) {


        for(let i=0; i<10; i++){
            
            if("" != d.items[i].thumbnail){

                hst.innerHTML += "<div class='paper'><img class='poster' src='"+d.items[i].thumbnail+"'/><h2>Makale</h2><h1>"+d.items[i].title+"</h1><hr/><p>"+d.items[i].content+"</p><a class='btn' href="+d.items[i].link+">Daha Fazla Oku</a><div class='space'></div>";

            }else {

                hst.innerHTML += "<div class='paper'><img class='poster' src='https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jp'/><h2>Makale</h2><h1>"+d.items[i].title+"</h1><hr/><p>"+d.items[i].content+"</p><a class='btn' href="+d.items[i].link+">Daha Fazla Oku</a><div class='space'></div>";
                
            }

            
        }
    });