// prefixer for js
var cssPrefixString = {};
var cssTransform;

function cssPrefix(propertie) {
    if (cssPrefixString[propertie] || cssPrefixString[propertie] === '') return cssPrefixString[propertie] + propertie;
    var e = document.createElement('div');
    var prefixes = ['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml']; 
    for (var i in prefixes) {
        if (typeof e.style[prefixes[i] + propertie] !== 'undefined') {
            cssPrefixString[propertie] = prefixes[i];
            return prefixes[i] + propertie;
        }
    }
    return false;
};

cssTransform = cssPrefix('Transform');

// jquery plugin for stacknav
(function($){
  
	var navigationStack = function(options){
		return api() 
		
		function api(){
			return {
				init: init,
				showNav: showNav,
				hideNav: hideNav,
				toggleNav: toggleNav,
				openStack: openStack
			}	
		}	
		
	
		var animationProperties = {};
		var settings = $.extend({
			color: "#fff",
			backgroundColor: "#333"
		},options);

		// prepare nav
		function init(el){ 
			_this = $(el)
			// nav tag im root
			_this.parent().css({
				height: '100%',
				position: 'absolute',
				left:0,
				top:0,
				width:320,
				overflow: 'hidden',
				transition: 'all 300ms ease-in-out',
				cssTransform: function(){
					if(cssTransform.indexOf('ebkit')>-1){
						
						return "translate3d(-320px,0,0)"	
					}
					else{
						return "translate(-320px,0)"	
					}	
				}
			});
			
			_this.parent().css(cssTransform,'translate(0,0)')
			
			// menu container
			_this.css({
				height: '100%',
				position: 'absolute',
				left:0,
				top:0,
				right:0,
				bottom:0,
				overflow: 'auto',
				overflowX: 'hidden',
				'-webkit-overflow-scrolling': 'touch',
				background: '#000',
				color: '#fff'
			})
	
			// menu toggler
			toggler = $('<div>',{id: 'navToggler'}).css({
				position: 'absolute',
				left:270,
				top:20,
				zIndex: 2,
				background:'white',
				transition: 'all 300ms ease-in-out'
			}).html('<i class="fa fa-bars fa-2x"></i>').on('click',function(e){
				toggleNav()
			}).appendTo('body')	
			
			stackMenus()
		}
		
		function openStack(id){
			$('div[data-stackID='+id+']').css({
				WebkitTransform: "translate3d(0,0,0)",	
				MozTransform: "translate(0,0)",	
				MsTransform: "translate(0,0)",	
				transform: "translate(0,0)"	
			}).addClass('open')
			$('#navToggler').hide()
		}
		
		function closeStack(){
			$('.sub-menu-wrapper.open').css({
				WebkitTransform: "translate3d(320px,0,0)",	
				MozTransform: "translate(320px,0)",	
				MsTransform: "translate(320px,0)",	
				transform: "translate(320px,0)"	
			}).removeClass('open')
			$('#navToggler').show()
		}
		
		function stackMenus(){
			
			$('.sub-menu-wrapper').each(function(i){
				var newNavSlide = $(this).attr('data-stackid','stackID-'+i).clone().appendTo(_this.parent())
				newNavSlide.find('.sub-menu-titel i').css('cursor','pointer').on('click',function(e){
					e.preventDefault()
					closeStack('stackID-'+i);
				})
			})
			$('#main-menu > ul > li a').each(function(i){
				$(this).on('click',function(e){
					e.preventDefault();
					// open subnav
					
					if($(this).next().index() != -1){
						openStack('stackID-'+(i/2));
						e.preventDefault()
					}
					// open page
					else{
						app.loadPage($(this).attr('data-id'))
					}
				})	
			})
		}
		
		function showNav(){
			_this.parent().css(cssTransform,'translate(0,0)')
			$('#navToggler').css({
				left: 270
			})
		}
		
		function hideNav(){
			_this.parent().css(cssTransform,'translate(-320px,0)')
			$('#navToggler').css({
				left: 20
			})
		}
		
		// nav toggle funktion
		function toggleNav(){
			if(_this.parent().css(cssTransform).replace('matrix(','').replace(')','').split(', ')[4] != -320){
				hideNav()	
			}
			else{
				showNav()	
			}	
		}
		
		
	
   	}
	
    $.fn.navigationStack = function(options) { 	
		return new navigationStack(options)
    };
}(jQuery));
