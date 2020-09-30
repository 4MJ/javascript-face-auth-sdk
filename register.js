// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  25/09/2020 
// * Contributors : contributor name,
// **/
const register = `
<div class="app_header box">
    <div class="video_container circle ripple">
        <video playsinline autoplay id="video" class="circle"></video>
    </div>
    <div class="app_picture">
        <canvas id="canvas"></canvas>
    </div>
</div>
<div class="alert_message">
  <p id="alertMessage"></p>
</div>
<div class="app__footer box">
    <input type="text" placeholder="Enter Your Name" id="name"/>
    <button type="button" class="app__footerButton" id="register">
        <span id="login_label">Register</span>
        <div class="loader" id="loader" style="display: none;"></div>
    </button>
    <p>Power by SevenGPS</p>
</div>
`;

module.exports = {
  register: register,
};
