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
  border: 1px solid #c3c0c0;
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
    flex: 0.8;
    justify-content: space-between;
    padding-top: 0em;
  }
  .app_picture {
    display: none;
  }
  .video_container {
    width: 75%;
    height: 75%;
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
      width: 60%;
    }
  }

  .alert_message{
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

  
`;

module.exports = {
  styles: styles,
};
