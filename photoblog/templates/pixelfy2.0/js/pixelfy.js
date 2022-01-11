
document.write("<style type='text/css'>#image {visibility:hidden;}</style>");

var PixelFy = {

	init: function() {
		/* Thumbs */
		if(document.getElementById("browse")) {
			$(".thumbnails").bind("mouseover", function(event){ 
				$(this).css("border-color","#555555").css("background-color","#000000");
			});
			$(".thumbnails").bind("mouseout", function(event){ 
				$(this).css("border-color","#333333").css("background-color","#151515");
			});
		}
		
		/* Deal with image displays */
		if(!document.getElementById("image")) {
			return;
		}
		
		$("#image").css("z-index", 10);
		
		
		PixelFy.minContainerWidth = 480;
		PixelFy.containerWidth = PixelFy.minContainerWidth;
		PixelFy.setContainerWidth();

		$("#exif").hide();
		$("#commentWrap").hide();

		PixelFy.exIfInit();
		PixelFy.commentsInit();
		
		$("#image").css("z-index", 10);
		
		PixelFy.exifOn = false;
		PixelFy.commentsOn = false;
		
		PixelFy.toggleExIf();
		PixelFy.toggleComments();

	},
	
	
	toggleExIf: function() {
		$("#view_exif").bind("click", function(event){ 
			
			// If it's on
			if(PixelFy.exifOn) {
				$("#exif").fadeTo("slow", 0.99).fadeOut();
				PixelFy.exifOn = false;
				$("#view_exif").css("color","#777777");				
			
			// If it's off
			} else {
				$("#exif").fadeIn("slow").fadeTo("slow", 0.60);
				PixelFy.exifOn = true;
				$("#view_exif").css("color","orange");
			}
			
			
			
			// DOM Event Handling
			if(event.preventDefault) {
				event.preventDefault();

			// IE Event Handling
			} else {
				event.returnValue = false;
			}			
		});
	},
	
	toggleComments: function() {
		$("#view_comments").bind("click", function(event){ 

			// If it's on
			if(PixelFy.commentsOn) {
				$("#commentWrap").fadeTo("slow", 0.99).fadeOut();
				PixelFy.commentsOn = false;
				$("#view_comments").css("color","#777777");				
			
			// If it's off
			} else {
				$("#commentWrap").fadeIn("slow").fadeTo("slow", 0.60);
				PixelFy.commentsOn = true;
				$("#view_comments").css("color","orange");
			}


			// DOM Event Handling
			if(event.preventDefault) {
				event.preventDefault();

			// IE Event Handling
			} else {
				event.returnValue = false;
			}			
			
		});
	},
	
	exIfInit: function() {
		var offset = $("#image").offset();
		var gap = Math.floor( ($("#image").width() * 3) / 100);
		var width = Math.floor( ($("#image").width() * 30) / 100 );

		
		$("#exif").css("position", "absolute");
		$("#exif").css("top", offset.top);
		$("#exif").css("left", offset.left);
		$("#exif").css("z-index", 20);
		
		$("#exif").css("border", "1px solid #cccccc");
		$("#exif").css("background-color", "#ffffff");
		$("#exif").css("color", "#000000");
		$("#exif").css("margin", "0em");
		$("#exif").css("padding", gap+"px");
		$("#exif").width(width);		
		//$("#exif").fadeIn("slow").fadeTo("slow", 0.50);
	},
	
	commentsInit: function() {
		
		var offset = $("#image").offset();
		var width = Math.floor( ($("#image").width() * 55) / 100 );
		var gap = Math.floor( ($("#image").width() * 3) / 100);
		var left = offset.left + $("#exif").width() + (gap * 3);

		
		$("#commentWrap").css("position", "absolute");
		$("#commentWrap").css("top", offset.top);
		
		$("#commentWrap").css("left",left);

		$("#commentWrap").css("z-index", 30);

		$("#commentWrap").css("border", "1px solid #cccccc");
		$("#commentWrap").css("background-color", "#ffffff");
		$("#commentWrap").css("color", "#000000");
		$("#commentWrap").css("padding", gap+"px");
		$("#exif").css("margin", "0em");
		
		$("#commentWrap").width(width);
		$("#commentWrap").height(Math.floor( ($("#image").height() * 80) / 100 ));
		$("#commentWrap").css("overflow", "auto");
		
		//$("#commentWrap").fadeIn("slow").fadeTo("slow", 0.70);
	},
	
	setContainerWidth: function() {
		var pictureWidth = $("#image").width();
		PixelFy.containerWidth = (pictureWidth < PixelFy.minContainerWidth) ? PixelFy.minContainerWidth : pictureWidth;
		$("#container").width(PixelFy.containerWidth);
	}
}

function initImage() {
	var imageId = 'image';
	var image = document.getElementById(imageId);
	if(!image) {
		return;
	}
	var opacity = 0;
	setOpacity(image, opacity);
	image.style.visibility = "visible";
	fadeIn(imageId,0);
}
function fadeIn(objId,opacity) {
	if (document.getElementById) {
		var obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj, opacity);
			opacity += 5;
			window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 100);
		}
	}
}
function setOpacity(obj, opacity) {
	var opacity = (opacity == 100)?99.999:opacity;
	// IE/Win
	obj.style.filter = "alpha(opacity:"+opacity+")";
	// Safari<1.2, Konqueror
	obj.style.KHTMLOpacity = opacity/100;
	// Older Mozilla and Firefox
	obj.style.MozOpacity = opacity/100;
	// Safari 1.2, newer Firefox and Mozilla, CSS3
	obj.style.opacity = opacity/100;
}

window.onload = function() {initImage()}
$(document).ready(function(){
	PixelFy.init();
});