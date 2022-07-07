document.getElementById('tabPadrao').click();

        function optab (event, idTab){
            var dados = document.getElementsByClassName ('dado');

            for (var i = 0; i < dados.length; i++) {
                dados[i].style.display = 'none';
            }
            var tabs = document.getElementsByClassName('tab-button');
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].className = tabs[i].className.replace('select', '');
            }
            document.getElementById(idTab).style.display = 'block';
            event.currentTarget.className += ' select';
        }