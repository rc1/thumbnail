(function($){
	$(document).ready(function(){
		$(".field-upload, .selectable").find("a").map(function(){
			if (this.href.match(/\.(?:bmp|gif|jpe?g|png)$/i)) return this;
		}).each(function(index,obj) {
				var height = 50;
				var width = 150;
		
				var link = $(obj);
				var cell = link.parent();
				var fileData = link.attr('href').match(/(.*)(workspace\/)(.*(:bmp|gif|jpe?g|png))/);
				var thumbnailURL = fileData[1] + 'image/1/0/' + width + '/' + fileData[3]
				
				cell.css('height', height);
				cell.css('width', width);
				cell.css('background-image', 'url(' + thumbnailURL + ')');
				cell.css('background-repeat', ' no-repeat');

				link.hide();
			});
	});
})(jQuery);