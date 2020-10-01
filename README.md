# What is this?

A JavaScript package that helps generate the layouts for a face authentication service. It gives both the login and Register Layouts.

# Installation

`npm install seven-face-auth --save` 

or simply

`npm i seven-face-auth --save`


Then...

...
import {templatefaceui} from "seven-face-auth" ;

templatefaceui({
    path_url:"login",
    shape: "square",
    buttonColor: "#ffffff",
    bgColor: "#05AB9F"
})
...

## Options
Seven Face Auth supports 4 options, both options are based on what you want as outcome and are required:

* *path_url* - _login / register_ (No default, hence you have to state if you want the login or the register page)
* *shape* - _square / circle_ (Default is sqaure. This is the give the shape of the camera spot)
* *buttonColor* - _#ffffff / #fff / white_ (Default is rgb(239, 239, 239) black text. This is to give your button the choice of color you want it to have)
* *bgColor* - _#05AB9F /orange_ (Default is white. This is to give the section any color of your choice),

Colors can be written in words(black), 3place hexadecimals(#000) or 6place hexadecimals(#000000).


## Html template
In the section or div you want to pass your render the page:

* Add...
...
id="faceUi"
...