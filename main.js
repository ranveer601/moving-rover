canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
rover_x = 200;
rover_y = 200;
rover_image = "rover.png";
canvas_background = "mars.jpg";
var pictures= ["p2.jpg","mars.jpg"];
var random_number= Math.floor(Math.random()*2);
canvas_background=pictures[random_number];
function load_images() {
    canvas_bg = new Image();
    canvas_bg.onload = upload_background;
    canvas_bg.src = canvas_background;
    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src = rover_image;
}
function upload_background() {
    ctx.drawImage(canvas_bg, 0, 0, canvas.width, canvas.height);
}
function upload_rover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", key_down);
function key_down(e) {
    var key_pressed = e.keyCode;
    if (key_pressed = "37") {
        left();
        console.log("left");
    }
    if (key_pressed = "38") {
        up();
        console.log("up");
    }
    if (key_pressed = "39") {
        right();
        console.log("right");
    }
    if (key_pressed = "40") {
        down();
        console.log("down");
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
    }

}
function left() {
    if (rover_x >= 0) {


        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
    }
}
function right() {
    if (rover_x <= 700) {


        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
    }
}
function down() {
    if (rover_y <= 500) {


        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
    }
}
