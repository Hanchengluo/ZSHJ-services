/*获取网页参数函数*/
(function($){
  $.getUrlParam = function(name)
  {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r!=null) return unescape(r[2]); return null;
  }
})(jQuery);

/*主导航*/
$(function() {
	  $('nav#menu').mmenu({
		  //slidingSubmenus: false
	  });
});


