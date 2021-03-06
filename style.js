// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  25/09/2020 
// * Contributors : contributor name,
// **/

styles = `
.app_body {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  padding: 10px;
  background-color: #fefefefe;
}
/* Styles containing the camera section for both pages and the input field for the register page */
  .box {
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  .app_header {
    display: flex;
    flex-direction: column;
    flex: 0.6;
    justify-content: space-between;
    padding-top: 0em;
  }
  .app_picture {
    display: none;
  }
  .video_container {
    width: 75%;
    height: 90%;
    background-color: hsl(122, 6%, 16%);
   
  }
  .video_container > video{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  /* Styles for the button and footer text of the pages */
   
  .app__footer {
    flex: 0.2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .app__footer > input{
    width: 50%;
    height: 2.5em;
  }
  .app__footer > button {
    width: 50%;
    height: 3em;
    font-size: 1em;
    padding: 10px;
    font-weight: normal;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    color: black;
    border-radius:0.25em;
  }
  
  .app__footer > p {
    font-weight: 500;
    font-size: 1.1em;
    color: hsl(222, 16%, 6%);
  }
  /* media query responsiveness of video container for particular screen sizes */
  @media screen and (min-width : 490px){
    .video_container{
      width: 50%;
    }
  }
  @media screen and (min-width: 440px) and (max-width : 489px){
    .video_container{
      width: 46%;
    }
  }
  @media screen and (max-width : 439px){
    .video_container{
      width: 46%;
    }
  }
  .alert_message{
    flex: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert_message > p {
    color: red;
    font-size: 1.2em;
    font-weight: normal;
    padding: 0.6em;
  }
  /* loader */
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .ripple {
    box-sizing:border-box;
    position:relative;
  }
  
  .ripple:before {
    animation:ripple 1s ease-out infinite;
    border:4px solid  #09c;
    border-radius:100%;
    bottom:0;
    box-sizing:border-box;
    content:"";
    left:0;
    position:absolute;
    right:0;
    top:0;
  }
  
  .ripple:after {
    animation:ripple 1s 1s ease-out infinite;
    border:4px solid  #09c;
    border-radius:100%;
    bottom:0;
    box-sizing:border-box;
    content:"";
    left:0;
    position:absolute;
    right:0;
    top:0;
  }
  
  @keyframes ripple {
    0% {
      opacity:.25;
    }
    100% {
      border-radius:100%;
      opacity:0;
      transform:scale(1);
    }
  }
  
`;
module.exports = {
  styles: styles,
};