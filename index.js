// /**   
// * Description of the file: The html file for the sdk face auth interface login. Add link pointers with {@link linkname}   
// * @author Mambo Joy Cho  
// * @date Date created  25/09/2020 
// * Contributors : contributor name,
// **/
import { verify } from "./verify";
import { register } from "./register";
import { styles } from "./style";

function templatefaceui(options) {
  // making square pr round borders
 
  let container = document.getElementById("faceUi");
  addStyle(styles); // include css
  includeJS("https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js");
  // ajouter style sur la page global
  if (options.path_url === "login") {
    //  render login path
    includeJS("http://localhost:9000/verify.js");
    var e = document.createElement("div");
    e.className = "app_body";
    e.innerHTML = verify;
    container.append(e);
  } else if (options.path_url === "register") {
    //  render register path
    includeJS("http://localhost:9000/register.js");
    var e = document.createElement("div");
    e.className = "app_body";
    e.innerHTML = register;
    container.append(e);
  } else {
    // # none
    // get error
  }
  if(options.shape === "circle"){
    let ele = document.getElementsByClassName('circle');
    for(let i=0; i<ele.length; i++){
      ele[i].style.borderRadius = "100%";
    }
  }else if (options.shape === "square"){
    let ele = document.getElementsByClassName('circle');
    for(let i=0; i<ele.length; i++){
      ele[i].style.borderRadius = "0%";
    }
  }else{
    // get error
  }
}

/* Function to add style element */
function addStyle(styles) {
  /* Create style document */
  var css = document.createElement("style");
  //   css.type = "text/css";

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  /* Append style to the tag name */
  document.getElementsByTagName("head")[0].appendChild(css);
}

function includeJS(jsFile) {
  document.write(
    "<" +
      'script src="' +
      jsFile +
      '"' +
      ' type="text/javascript"><' +
      "/script>"
  );
}

module.exports = { templatefaceui: templatefaceui };
