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
    shape: "square"
})
...

## Options
Seven Face Auth supports 2 options, both options are based on what you want as outcome:

* *path_url* - _login / register_ (No default, hence you have to state if you want the login or the register page)
* *shape* - _square / circle_ (Default is sqaure, This is the give the shape of the camera spot)


## Html template
In the section or div you want to pass your render the page:

* Add...
...
id="faceUi"
...