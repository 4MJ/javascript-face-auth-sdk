// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  28/09/2020 
// * Contributors : OLinga Emmanuel
// * References: https://webrtc.org/
// **/
"use strict";
const API_URL = "http://46.101.119.210";
var width = 350; // We will scale the photo width to this
var height = 0; // This will be computed based on the input stream

// |streaming| indicates whether or not we're currently streaming
// video from the camera. Obviously, we start at false.
var streaming = false;

// Put variables in global scope to make them available to the browser console.
// The various HTML elements we need to configure or control. These
// will be set by the startup() function.
var video = null;
var canvas = null;
var photo = null;
var startbutton = null;

function startup() {
    video = document.querySelector("video");
    canvas = (window.canvas = document.querySelector("canvas"));
    startbutton = document.getElementById("register");


    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("An error occurred: " + err);
        });

    video.addEventListener(
        "canplay",
        function (ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                // Firefox currently has a bug where the height can't be read from
                // the video, so we will make assumptions if this happens.

                if (isNaN(height)) {
                    height = width / (4 / 3);
                }

                video.setAttribute("width", width);
                video.setAttribute("height", height);
                canvas.setAttribute("width", width);
                canvas.setAttribute("height", height);
                streaming = true;
            }
        },
        false
    );
    startbutton.addEventListener(
        "click",
        function (ev) {
            let login_label = document.getElementById("login_label");
            let loader = document.getElementById("loader");
            let button = document.querySelector("button");
            loader.style.display = "block";
            login_label.style.display = "none";

           let face = takepicture();
            ev.preventDefault();

            // getting the name
            var name = document.getElementById("name").value;
            console.log(name);
            const blobUrl = b64toBlob(face);
            // console.log(blobUrl);
            // console.log(face);
            // console.log(name);
            var bodyFormData = new FormData();
            bodyFormData.append("image", blobUrl);
            axios({
                method: "post",
                url: `${API_URL}/api/register`,
                data: bodyFormData,
                headers: {
                    username: name,
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(function ({ data }) {
                    //handle success
                    if (data.status == false) {
                        // error message
                        console.log(data);
                        console.log(data.message);
                        var e = document.getElementById("alertMessage");
                        e.innerHTML = data.message;
                        let login_label = document.getElementById("login_label");
                        let loader = document.getElementById("loader");
                        let button = document.querySelector("button");
                        loader.style.display = "none";
                        login_label.style.display = "block";

                    } else {
                        //
                        console.log(data);
                        console.log(data.message);
                        var e = document.getElementById("alertMessage");
                        e.innerHTML = data.message;
                        let login_label = document.getElementById("login_label");
                        let loader = document.getElementById("loader");
                        let button = document.querySelector("button");
                        loader.style.display = "none";
                        login_label.style.display = "block";
                    }
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        },
        false
    );
}


function b64toBlob(dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/jpeg" });
}

// Capture a photo by fetching the current contents of the video
// and drawing it into a canvas, then converting that to a PNG
// format data URL. By drawing it on an offscreen canvas and then
// drawing that to the screen, we can change its size and/or apply
// other changes before drawing it.

function takepicture() {
    var context = canvas.getContext("2d");

    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        return canvas.toDataURL("image/jpeg");

    } else {
        //
    }
}

// Set up our event listener to run the startup process
// once loading is complete.
window.addEventListener("load", startup, false);
