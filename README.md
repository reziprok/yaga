# yaga #

### yet another gallery app for demonstration purposes. ###
#### regards to flx from webkanal.ch ####
  
1) have node.js and git locally installed. Close firefox.
  
2) clone (or fork) the following repo to your projectfolder ("yaga")  
	cmd: $ git clone https://github.com/reziprok/yaga.git   
	or  
	cmd: $ git fork https://github.com/reziprok/yaga.git  
	=> mind that the repo doesn't contain  
		- any bower components  
		- any locally installed gulp components (via npm)  
		- any external libraries (jquery etc...)  
		- any bundeled (concatenated) files (app.min.js, app.min.css)  
		- .gitignore contains exceptions for syncing with git  
	=> you can check it here: https://github.com/reziprok/yaga   

3) open CLI and navigate to yaga folder
  
4) install gulp dependencies
	cmd:  $ npm install  
  
5) install all external dependencies
	cmd: $ bower install  
  
6) make initial bundle and start gulp watcher (and open browser with index.html)  
	cmd: $ gulp
  
addionitionally) gulping only specific tasks: ex:  
	*  cmd: $ gulp scripts (concatenats all scripts and minifies them. Result: assets/js/app.min.js)  
	*  cmd: $ gulp styles (concatenats all styles and minifies them. Result: assets/css/app.min.css)  
	*  cmd: $ gulp url (opens the browser)  
	*  Etc...  

