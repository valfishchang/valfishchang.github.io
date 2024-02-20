let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a p5.MediaElement using createCapture().
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  // Display the video stream and invert the colors.
  //image(capture, 0, 0, width, width * capture.height / capture.width);
  image(capture, (width - capture.width) /2, 0, capture.width , capture.height);
  //filter(INVERT);
}