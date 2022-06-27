let img = '';
// function preload() {
//     img = loadImage("img/dog.png");
// }

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.drop(gotFile); // ドラッグ＆ドロップされた画像を取得

    //pixelDensity(0.5);
    background(0);
    textSize(width / 25);
    textAlign(CENTER, CENTER);
    fill(255)
    text("好きな画像をドラッグ＆ドロップしてネ☆彡", width/2, height/4)
    text("画像を保存したいときはクリックしてネ☆彡", width/2, height/3)
}

function draw() {
    if (img) {
        background(255);
        // canvasの大きさを画像の大きさに変更
        resizeCanvas(img.width, img.height);

        // 画像のピクセルデータ読み込み
        img.loadPixels();

        function writeColor(image, x, y, red, green, blue, alpha) {
            noise_density = Math.floor(image.length / 1000000) * 2;
            let index = (x + y * width) * 8;
            image.pixels[index] = red;
            image.pixels[index + 1] = green;
            image.pixels[index + 2] = blue;
            image.pixels[index + 3] = alpha;
        }

        // fill with random colors
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                let red = random(255);
                let green = random(255);
                let blue = random(255);
                // let blue = (x+y)/2;
                let alpha = 100;
                writeColor(img, x, y, red, green, blue, alpha);
            }
        }

        img.updatePixels();
        image(img, 0, 0);
    }
}

function gotFile(file) {
  img = loadImage(file.data, '');
}

function mouseClicked() {
    saveCanvas("myImage", "jpg");
}
