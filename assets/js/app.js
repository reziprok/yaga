
// ---------------- APP OBJECT ------------------------

var pluginInstance
var app = (function () {
	
	// VARS  ------------------------------------------
	
    var instance;
	var actPage = pages[0].id;
	var pageModel
	
	// METHODS ----------------------------------------
	
    function init() {
        var object = new Object("I am the instance");
        return object;
    }
	
	function runApp(){
		pageModel = getPageModel(actPage)
		// load Nav and inject it
		$('#menu-container').load('./assets/inc/partialviews/mainnav.html',function(data){
			// init navigationStack plugin
			pluginInstance = $('#main-menu').navigationStack({
				color: 'white'	
			})
			pluginInstance.init($('#main-menu'))
		
		})
		
		loadPage(actPage)	
	}
	
	function getPageModel(idx){
		var ret = {}
		$.each(pages,function(i,e){
			if(pages[i].id == idx){
				ret =  pages[i]	
			}	
		})	
		return ret 
	}
	
	function loadPage(id){
		
		actPage = id
		pageModel = getPageModel(actPage)  
		
		//alert('./assets/inc/views/'+pageModel.view+'/'+pageModel.view+'.html') 
		$('#app-container').load('./assets/inc/views/'+pageModel.view+'/'+pageModel.view+'.html',function(data){
			// init some template specific scripts
			
			// compile view with pageModel
			var template = $('#app-container').html();
			var compiledTemplate = Template7.compile(template);
			var html = compiledTemplate(pageModel);
			$('#app-container').html(html)
		})
		
		
		
	}
	
	function updateRender(){
		if($(window).width() < 768){
			$('#navToggler').show()
		}
		else if($(window).width() >= 1024){
			$('#navToggler').hide()
		}
	}
 	
	// RETURN INSTANCE AND PUBLIC FUNCTIONS --------------------
	
    return {
		runApp: runApp,
		loadPage: loadPage,
		updateRender: updateRender,
		getPageModel: getPageModel,
		getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();
 

$(document).ready(function(){
	app.runApp() 
	
	$(window).resize(function(){
		app.updateRender()	
	})
}) 

