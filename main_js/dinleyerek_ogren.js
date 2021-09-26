    var hst = document.getElementById("makale_girisi");
    var get_url = 'https://res.cloudinary.com/senaslanugur/raw/upload/v1/dinleme.json';
    $.getJSON(get_url, function(d) {


        for(let i=0; i<70; i++){
          

                hst.innerHTML += "<div class='paper'><img class='poster' src='https://cdn-icons-png.flaticon.com/512/2991/2991595.png'  width='170' height='170'/><h2>Podcast</h2><h1>"+d[i].title+"</h1><a class='btn' href='#0' onclick = 'reply_click(this.id)' id='"+d[i].audio_list+"'>Hemen Dinle</a><div class='space'></div>";

        }

    });

                function reply_click(clicked_id){

                    Swal.fire({
              title: 'Podcast',
              html:
                 '<audio controls><source src="'+clicked_id+'" preload="auto" ></audio>',                     
              showCloseButton: false,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText:
                  '<i class="fa fa-times-circle" aria-hidden="true"></i> Kapat!',
              confirmButtonAriaLabel: 'Thumbs up, great!',
              cancelButtonText:
                  '<i class="fa fa-ban" aria-hidden="true"></i> Kapat',
              cancelButtonAriaLabel: 'Thumbs down'
              })
            }
