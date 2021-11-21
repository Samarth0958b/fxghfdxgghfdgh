canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=75;
car_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=5;
car_y=225;

function add() {
	bg=new Image();
    bg.onload=uploadbg;
    bg.src=background_image;
    car=new Image();
    car.onload=uploadcar;
    car.src=greencar_image;
}

function uploadbg() {
	ctx.drawImage(bg,0,0,canvas.width,canvas.height);

}

function uploadcar() {
	ctx.drawImage(car,car_x,car_y,car_width,car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if (car_y>=0){
        car_y=car_y-10;
        uploadbg();
        uploadcar();
    }
}
function down(){
    if (car_y<=500){
        car_y=car_y+10;
        uploadbg();
        uploadcar();
    }
}
function left(){
    if (car_x>=0){
        car_x=car_x-10;
        uploadbg();
        uploadcar();
    }
}
function right(){
    if (car_x<=700){
        car_x=car_x+10;
        uploadbg();
        uploadcar();
    }
}
