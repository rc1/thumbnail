(function($){
	$(document).ready(function(){
		$(".field-upload, .selectable").find("a").map(function(){
			if (this.href.match(/\.(?:bmp|gif|jpe?g|png)$/i)) return this;
		}).each(function(index,obj) {
				var height 			= 80;
				var width 			= 80;
		
				var link 			= $(obj);
				var cell 			= link.parent();
				var fileData 		= link.attr('href').match(/(.*)(workspace\/)(.*(:bmp|gif|jpe?g|png))/);
				var thumbnailURL 	= fileData[1] + 'image/2/' + width + '/' + height + '/5/' + fileData[3]
				
				cell.css('height', height);
				cell.css('padding', '0 20px 0 20px');
				//cell.css('width', width);
				cell.css('background-image', 'url(' + thumbnailURL + ')');
				cell.css('background-repeat', ' no-repeat');

				link.hide();
			});
	});
})(jQuery);