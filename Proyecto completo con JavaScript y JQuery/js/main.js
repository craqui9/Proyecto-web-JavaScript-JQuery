window.addEventListener('load', function(){
    $(document).ready(function(){
        
        //SLIDER//
        if(window.location.href.indexOf('index') > -1){
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
              });
        } 
        //---------------------------------------------------------------------------------------//
        //POSTS//
        if(window.location.href.indexOf('index') > -1){
            var posts = [
                {
                    title: 'Prueba de título 1',
                    date: 'Publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum nisi sed leo maximus tincidunt. Nullam vel aliquet ante. Donec consequat risus eget lacus eleifend, lobortis sollicitudin enim rhoncus. Curabitur scelerisque lobortis consectetur. Cras sed justo in mauris hendrerit mollis sed ut magna. Maecenas imperdiet, dui vitae pharetra , quam quam vehicula sem, sit amet semper massa est at felis.  Vestibulum elementum lacus nec ipsum tincidunt, sed ornare leo  fermentum. Duis sed molestie massa. Nullam imperdiet tempor velit.  Nullam in rutrum ante. In in pulvinar nisl.'      
                },
                {
                    title: 'Prueba de título 2',
                    date: 'Publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum nisi sed leo maximus tincidunt. Nullam vel aliquet ante. Donec consequat risus eget lacus eleifend, lobortis sollicitudin enim rhoncus. Curabitur scelerisque lobortis consectetur. Cras sed justo in mauris hendrerit mollis sed ut magna. Maecenas imperdiet, dui vitae pharetra , quam quam vehicula sem, sit amet semper massa est at felis.  Vestibulum elementum lacus nec ipsum tincidunt, sed ornare leo  fermentum. Duis sed molestie massa. Nullam imperdiet tempor velit.  Nullam in rutrum ante. In in pulvinar nisl.'      
                },
                {
                    title: 'Prueba de título 3',
                    date: 'Publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum nisi sed leo maximus tincidunt. Nullam vel aliquet ante. Donec consequat risus eget lacus eleifend, lobortis sollicitudin enim rhoncus. Curabitur scelerisque lobortis consectetur. Cras sed justo in mauris hendrerit mollis sed ut magna. Maecenas imperdiet, dui vitae pharetra , quam quam vehicula sem, sit amet semper massa est at felis.  Vestibulum elementum lacus nec ipsum tincidunt, sed ornare leo  fermentum. Duis sed molestie massa. Nullam imperdiet tempor velit.  Nullam in rutrum ante. In in pulvinar nisl.'      
                },
                {
                    title: 'Prueba de título 4',
                    date: 'Publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum nisi sed leo maximus tincidunt. Nullam vel aliquet ante. Donec consequat risus eget lacus eleifend, lobortis sollicitudin enim rhoncus. Curabitur scelerisque lobortis consectetur. Cras sed justo in mauris hendrerit mollis sed ut magna. Maecenas imperdiet, dui vitae pharetra , quam quam vehicula sem, sit amet semper massa est at felis.  Vestibulum elementum lacus nec ipsum tincidunt, sed ornare leo  fermentum. Duis sed molestie massa. Nullam imperdiet tempor velit.  Nullam in rutrum ante. In in pulvinar nisl.'      
                },
                {
                    title: 'Prueba de título 5',
                    date: 'Publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum nisi sed leo maximus tincidunt. Nullam vel aliquet ante. Donec consequat risus eget lacus eleifend, lobortis sollicitudin enim rhoncus. Curabitur scelerisque lobortis consectetur. Cras sed justo in mauris hendrerit mollis sed ut magna. Maecenas imperdiet, dui vitae pharetra , quam quam vehicula sem, sit amet semper massa est at felis.  Vestibulum elementum lacus nec ipsum tincidunt, sed ornare leo  fermentum. Duis sed molestie massa. Nullam imperdiet tempor velit.  Nullam in rutrum ante. In in pulvinar nisl.'      
                }
            ];
        

            posts.forEach((item, index) => {
                var post = `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
                `;
                $('#posts').append(post);
            });
        }
        //---------------------------------------------------------------------------------------//
        //SELECTOR DE TEMA//
        var theme = $('#theme');
        $('#to-green').click(function(){
            theme.attr('href', 'css/green.css');
        });
        $('#to-red').click(function(){
            theme.attr('href', 'css/red.css');
        });
        $('#to-blue').click(function(){
            theme.attr('href', 'css/blue.css');
        });
        //---------------------------------------------------------------------------------------//
        //SCROLL ARRIBA DE LA WEB//
        $('.subir').click(function(e){
            e.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        //---------------------------------------------------------------------------------------//
        //LOGIN FALSO//
        $('#login form').submit(function(){
            var form_name = $('#form_name').val();

            localStorage.setItem('form_name', form_name);
        });

        var form_name = localStorage.getItem('form_name');
        if(form_name != null && form_name != 'undefined'){
            var about_parrafo = $('#about p');
            about_parrafo.html('<br><strong>Bienvenido, '+form_name+'</strong>');
            about_parrafo.append('<br><br><a href="#" id="logout">Cerrar Sesión</a>');

            $('#login').hide();
        }
        
        $('#logout').click(function(){
            localStorage.clear();
            location.reload()
        });
        //---------------------------------------------------------------------------------------//
        //ACORDEON DEL ABOUT//
        if(window.location.href.indexOf('about') > -1){
            $('#acordeon').accordion();
        }
        //---------------------------------------------------------------------------------------//
        //RELOJ DE RELOJ//
        if(window.location.href.indexOf('reloj') > -1){
            setInterval(function(){
                var reloj = moment().format('HH:mm:ss');
                $('#reloj').html(reloj);
            }, 1000);
        }
        //---------------------------------------------------------------------------------------//
        //FORMULARIO DE CONTACTO//
        if(window.location.href.indexOf('contact') > -1){
            
            $('form input[name="date"]').datepicker({
                dateFormat: 'dd/mm/yy'
            });
            
            $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
            });
        }

    });
});