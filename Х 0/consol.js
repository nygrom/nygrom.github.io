
    for (var i=0; i<9; i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }


        var hod = 0;
        var gameAria = document.querySelector('#game');

        gameAria.addEventListener('click', function(event){
            
            if (event.target.className=='block'){
                if (hod%2==0){
                event.target.innerHTML='X';}
                else{
                    event.target.innerHTML='O';
                };
                hod++; 
                chekWinner() 
            };

            function chekWinner(){
                var col = document.querySelectorAll('.block');
            
                if (col[0].innerHTML == 'X' && col[1].innerHTML == 'X' && col[2].innerHTML == 'X') alert('Победили крестики!');
                if (col[3].innerHTML == 'X' && col[4].innerHTML == 'X' && col[5].innerHTML == 'X') alert('Победили крестики!');
                if (col[6].innerHTML == 'X' && col[7].innerHTML == 'X' && col[8].innerHTML == 'X') alert('Победили крестики!');
                if (col[0].innerHTML == 'X' && col[3].innerHTML == 'X' && col[6].innerHTML == 'X') alert('Победили крестики!');
                if (col[1].innerHTML == 'X' && col[4].innerHTML == 'X' && col[7].innerHTML == 'X') alert('Победили крестики!');
                if (col[2].innerHTML == 'X' && col[5].innerHTML == 'X' && col[8].innerHTML == 'X') alert('Победили крестики!');
                if (col[0].innerHTML == 'X' && col[4].innerHTML == 'X' && col[8].innerHTML == 'X') alert('Победили крестики!');
                if (col[2].innerHTML == 'X' && col[4].innerHTML == 'X' && col[6].innerHTML == 'X') alert('Победили крестики!');
                if (col[0].innerHTML == 'O' && col[1].innerHTML == 'O' && col[2].innerHTML == 'O') alert('Победили нолики!');
                if (col[3].innerHTML == 'O' && col[4].innerHTML == 'O' && col[5].innerHTML == 'O') alert('Победили нолики!');
                if (col[6].innerHTML == 'O' && col[7].innerHTML == 'O' && col[8].innerHTML == 'O') alert('Победили нолики!');
                if (col[0].innerHTML == 'O' && col[3].innerHTML == 'O' && col[6].innerHTML == 'O') alert('Победили нолики!');
                if (col[1].innerHTML == 'O' && col[4].innerHTML == 'O' && col[7].innerHTML == 'O') alert('Победили нолики!');
                if (col[2].innerHTML == 'O' && col[5].innerHTML == 'O' && col[8].innerHTML == 'O') alert('Победили нолики!');
                if (col[0].innerHTML == 'O' && col[4].innerHTML == 'O' && col[8].innerHTML == 'O') alert('Победили нолики!');
                if (col[2].innerHTML == 'O' && col[4].innerHTML == 'O' && col[6].innerHTML == 'O') alert('Победили нолики!');
            };

        });
