// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  25/09/2020 
// * Contributors : contributor name,
// **/

const verify = `
<!-- video camera section -->
<div class="app_header box">
    <div class="video_container circle">
        <video playsinline autoplay id="video" class="circle"></video>
    </div>
    <div class="app_picture">
        <canvas id="canvas"></canvas>
    </div>
</div>
<div class="alert_message">
    <p id ="alertName"></>
    <p id="alertMessage"></p>
</div>
<!-- login button and footer message section -->
<div class="app__footer box">
    <button type="button" class="app__footerButton">
        <span id="login_label">Login</span>
        <div class="loader" id="loader" style="display: none;"></div>
    </button>
    <p>Power by SevenGPS</p>
</div>

`;

module.exports = {
  verify: verify,
};
