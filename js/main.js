window.onload = function (e) {


    let div = document.querySelector('.fields');
    let matrix = new Matrix(div);
    matrix.create();

    (new Fruit(matrix, [[18, 10]])).show();
    

    let wall = new Wall(matrix, [[3, 5], [2, 5], [4, 5], [2, 6], [2, 7], [2, 8], [11, 6], [11, 7], [11, 8], [11, 9], [17, 16], [17, 15], [17, 14], [9, 13], [9, 16], [9, 15], [9, 14], [9, 13], [8,16], [7, 16], [6, 16], 
     [5, 13], [5, 16], [5, 15], [5, 14], [5, 13]]);
    wall.show();

    let snake = new Snake(matrix, [[10, 10], [9, 10], [8, 10]], 'right');
    snake.show();

    let score = 0;


    document.onkeydown = function(e) {

        switch(e.keyCode){
            case 37:
            if(snake.course !== 'right'){
                snake.newCourse = 'left';
            }
                break;
            case 38:
            if(snake.course !== 'down'){
                snake.newCourse = 'up';
            }
                break;
            case 39:
            if(snake.course !== 'left'){
                snake.newCourse = 'right';
            }
                break;
            case 40:
            if(snake.course !== 'up'){
                snake.newCourse = 'down';
            }
                break;
        }
    }

    let timer =  setInterval(() => {
        snake.move();

        if(!snake.alive){
            clearInterval(timer);
            alert('game over');
        }
        if(snake.eaten === true){
            score++;

            let x = Healpers.random(1, matrix.cols);
            let y = Healpers.random(1, matrix.rows);

            while(matrix.getCell(x,y) !== '') {
                x = Healpers.random(1, matrix.cols);
                y = Healpers.random(1, matrix.rows);
            }
        
            (new Fruit(matrix, [[x, y]])).show();
        }


        let scoreNum = document.querySelector('.divScore .scoreTxt');
            scoreNum.innerHTML = score;

    }, 150);
    

}