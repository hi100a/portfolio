//brand-screen

    $(function(){
        $('.nav-brand').click(function(){
            $('#logo-screen').fadeIn(200);
        })
        $('#logo-screen .close_x').click(function(){
            $('#logo-screen').fadeOut(200);
        })
    

      $('#logo-screen .logo-screen_projects a').click(function(){
            $('#logo-screen').fadeOut(200);
        })


        // $('.nav-brand .bars').click(function(){
        //     $('.nav-screen').fadeIn(200);
        // })
        // $('.nav-screen .close_x').click(function(){
        //     $('.nav-screen').fadeOut(200);
        // })
    })
    