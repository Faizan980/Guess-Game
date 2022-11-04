        function GuessGame(){
            let num = +document.querySelector('#num').value;
            let fnum = +document.querySelector('#fnum').value;
            let result = num + fnum;

            if(result > 100){
                document.write(`You loss!! ${result} is greater than 100`)
            }else if(result == 100){
                document.write(`Congrats!! you matched the number ${result} and it equals to 100`)
            }else{
                document.write(`So close but ${result} is less than 100`)
            }
    }
