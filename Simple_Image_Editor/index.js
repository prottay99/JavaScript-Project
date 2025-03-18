// get the source image to be edited
let image = document.getElementById('sourceImage')
// get the canvas for the edited image
let canvas = document.getElementById('canvas')
// get the 2d context for the image
let context = canvas.getContext("2d")

// get all the slides of the image 
let brightness = document.getElementById('brightnessSlider')
let contrast = document.getElementById('contrastSlider')
let grayscale = document.getElementById('grayscaleSlider')
let saturation = document.getElementById('saturationSlider')
let sepia = document.getElementById('sepiaSlider')
let hue = document.getElementById('heuSlider')

// loading an image from the file system
function uploadImage(event) {
    // Set the source of the image from the uploaded file
    image.src = URL.createObjectURL(event.target.files[0]);

    image.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.crossOrigin = "anonymous";
        applyFilter();
    }

    document.querySelector('.help-text').style.display = 'none'
    document.querySelector('.image-controls').style.display = 'block'
    document.querySelector('.image-save').style.display = 'block'
    document.querySelector('.preset-filters').style.display = 'block'
}

// drawing the image and applying the filter values

function applyFilter() {
    // Create a string that will contain all the filters to be used for the image 
    let filterString =
        "brightness(" + brightness.value + "%" +
        ") contrast(" + contrast.value + "%" +
        ") grayscale(" + grayscale.value + "%" +
        ") saturate(" + saturation.value + "%" +
        ") sepia(" + sepia.value + "%" +
        ") hue-rotate(" + hue.value + "deg" + ")";

    // Apply the filter to the image
    context.filter = filterString;
    // draw the edited image to the canvas
    context.drawImage(image, 0, 0)
}

// using preset filters to the image
function brightenFilter() {
    resetImage()
    brightness.value = 130
    contrast.value = 130
    saturation.value = 130
    applyFilter()
}

function bwFilter() {
    resetImage();
    grayscale.value = 100;
    brightness.value = 120;
    contrast.value = 120;
    applyFilter();
}

function funkyFilter() {
    resetImage();

    // Set a random hue rotation everytime
    hue.value =
        Math.floor(Math.random() * 360) + 1;
    contrast.value = 120;
    applyFilter();
}

function vintageFilter() {
    resetImage();
    brightness.value = 120;
    saturation.value = 120;
    sepia.value = 150;
    applyFilter();
}

function resetImage() {
    brightness.value = 100;
    contrast.value = 100;
    saturation.value = 0;
    hue.value = 0;
    saturate.value = 100;
    sepia.value = 0;
    applyFilter();
}

function saveImage() {
    // Select the temporary element we have created for helping to save the image
    let linkElement = document.getElementById('link');
    linkElement.setAttribute(
        'download', 'edited_image.png'
    );

    // Convert the canvas data to a image data URL
    let canvasData = canvas.toDataURL("image/png")

    // Replace it with a stream so that it starts downloading
    canvasData.replace(
        "image/png", "image/octet-stream"
    )

    // Set the location href to the canvas data
    linkElement.setAttribute('href', canvasData);

    // Click on the link to start the download 
    linkElement.click();
}