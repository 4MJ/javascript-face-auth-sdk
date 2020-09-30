// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  28/09/2020 
// * Contributors : contributor name,
// **/
"use strict";
const API_URL = "http://46.101.119.210";
var width = 350; // We will scale the photo width to this
var height = width / (4 / 3); // This will be computed based on the input stream
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
const canvas = (window.canvas = document.querySelector("canvas"));
canvas.width = width;
canvas.height = height;

const button = document.querySelector("button");
button.onclick = function () {
  console.log(`picture taken`);
  takepicture();
};

function takepicture() {
  var context = canvas.getContext("2d");

  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    verifier(canvas.toDataURL("image/jpeg"));
  } else {
    //error state
  }
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

function verifier(face) {
  let login_label = document.getElementById("login_label");
  let loader = document.getElementById("loader");
  let button = document.querySelector("button");
  loader.style.display = "block";
  login_label.style.display = "none";
  button.disabled = true;

  // console.log(face);
  const blobUrl = b64toBlob(face);
  var bodyFormData = new FormData();
  bodyFormData.append("image", blobUrl);
  axios({
    method: "post",
    url: `${API_URL}/api/verify`,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function ({ data }) {
      // console.log(response);
      //handle success
      console.log(data);
      console.log(data.message);
      var e = document.getElementById("alertMessage");
      e.innerHTML = data.message;
      console.log(data.name);
      var el = document.getElementById("alertName");
      el.innerHTML = data.name;
      let login_label = document.getElementById("login_label");
      let loader = document.getElementById("loader");
      let button = document.querySelector("button");
      loader.style.display = "none";
      login_label.style.display = "block";
      button.disabled = false;
    })
    .catch(function ({ data }) {
      //handle error
      console.log(data);
    });
}

const constraints = {
  video: true,
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log(
    "navigator.MediaDevices.getUserMedia error: ",
    error.message,
    error.name
  );
}

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);
