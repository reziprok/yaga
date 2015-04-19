### Welcome to my github page.
This example app is for my own personal learning curve in developing html5 and javascript the modern way.
  
For the installation process node.js and git have to be installed. At the end of the process, an initial automatic gulp-build process is run to complete the installation. firefox brower ist started automatically showing the app.
  
My Project page: http://reziprok.github.io/yaga/
  
``` 
$ cd your_repo_root/
$ git clone https://github.com/reziprok/yaga.git
```
  
now we have to get all the required componbents. I have a packages.json file in the app root to tell node what dependencies to load.
Load gulp and plugins
```  
$ npm install
```  
  
If you don't have bower installed globally on your machine, run the following command
```  
$ npm install -g bower
``` 
  
Load external JS and CSS libraries  
```  
$ bower install
``` 
  
nbow we have gulp and all libraries in place. Let's run a first initial gulp-build process to complete the final directory structure
```  
$ gulp
``` 
Firefoy should pop up with the app.  
