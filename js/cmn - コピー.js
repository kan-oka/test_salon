$(function () {

//セクションの座標位置を取得して、アクションを起こす

var sec01Y = $("#sec01").offset().top;
var sec02Y = $("#sec02").offset().top;
var sec03Y = $("#sec03").offset().top;
var sec04Y = $("#sec04").offset().top;
var sec05Y = $("#sec05").offset().top;


		$(window).scroll(function () {
			var wY = $( window ).scrollTop()+1 ;
			$(".sideNav li").removeClass("active"); //activeクラスをリセット

			if(wY > sec01Y && wY < sec02Y){
				$("#nav01").addClass("active");
			}
			if(wY > sec02Y && wY < sec03Y){
				$("#nav02").addClass("active");
			}
			if(wY > sec03Y && wY < sec04Y){
				$("#nav03").addClass("active");
			}
			if(wY > sec04Y && wY < sec05Y){
				$("#nav04").addClass("active");
			}
			if(wY > sec05Y){
				$("#nav05").addClass("active");
			}
});

//スムーススクロール
	$('a[href^=#],area[href^=#]').click(function () {
		var speed = 800;// ミリ秒
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

//マウスオン(on画像に差し替え)
	if ((navigator.userAgent.indexOf('iPhone') > 0 ||
	navigator.userAgent.indexOf('iPad') > 0) ||
	navigator.userAgent.indexOf('iPod') > 0 ||
	navigator.userAgent.indexOf('Android') > 0 ){
	}else{
	$(".hoverChange").hover(
	function(){
		var imgSrc = $(this).attr("src");
		var imgOnSrc = imgSrc.replace(".","_on.");
		$(this).attr("src",imgOnSrc)
	},
	function(){
		var imgOnSrc = $(this).attr("src");
		var imgSrc = imgOnSrc.replace("_on.",".");
		$(this).attr("src",imgSrc)
	});
	}

//------------------------
});
