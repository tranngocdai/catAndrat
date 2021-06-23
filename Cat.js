class Cat{
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true
    }
    sound(text) {
        alert(this.name+""+text)
    }
    catchRat(rat){
        if(this.speed>rat.speed){
            alert(this.name+'đã bắt chuột'+rat.name)
        }
    }
    eatRat(rat){
        if(rat.status){
            this.weight+=rat.weight
            rat.status=false
            alert(this.name+' đã ăn chuột '+rat.name)
        }
    }
    catchSnake(snake){
        if(this.speed>snake.speed){
            alert(this.name+'đã bắt chuột'+rat.name)
        }
    }
    eatSnake(snake){
        if(snake.status){
            this.weight+=rat.weight
            snake.status=false
            this.status=false
            alert(this.name+' đã ăn chuột '+rat.name)
        }
    }
}