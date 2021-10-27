let width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

let video = null;
let canvas = null;

let startup = () => {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');

    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(stream => {
            video.srcObject = stream;
            video.play();

            setTimeout(() => {
                stream.getTracks().forEach(track => track.stop())
            }, 3000);
        })
        .catch(err => {
                console.log("An error occurred: " + err);
        });

    video.addEventListener('canplay', event => {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);

            if (isNaN(height)) {
                height = width / (4 / 3);
            }

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    let base64String = null;

    setTimeout(() => {
        base64String = takepicture();
        document.getElementsByClassName('contentarea')[0].classList.add('hide');
        getEncodedImage(base64String);
    }, 3000);
}

export const getEncodedImage = (encodedImage) => {
    return encodedImage;
}

const takepicture = () => {
    let context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    let data = canvas.toDataURL('image/png');
    
    const pictureDetails = 'data:image/png;base64,';
    const base64String = data.replace(pictureDetails, '');
    
    return base64String;
}

// export default getEncodedImage;