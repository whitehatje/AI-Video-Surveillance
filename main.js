video = "";
objects = [];
status = "";

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
}

function draw()
{
    image(video, 0 , 0 , 480 ,380);
     if(status != "")
     {
        objectDetector.detect(video , gotresult);
        for(i=0; i< objects.length i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects Detected : "+ objects.length;
            fill("#FF69B4");
            percentage = floor(object[i].confidence * 100 );
            text(object[i].label +" " + "percent" + percentage + "%" , object[i].x + 15 , object[i].y + 15);
            nofill();
            stroke("#FF69B4");
            rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
     }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
} 

function gotresult(error , results)
{
if(error)
{
    console.log(error);
}
 console.log(results);
 objects = results;
}

