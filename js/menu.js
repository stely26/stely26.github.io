$(document).ready(function () {

	var $body = $('body');

	function menuPopup() {
		var $menuBottom = $body.find('.h-menu');　　　　　　　　　　　//主選單按鈕
		var $menuPopupWrap = $body.find('.menu-popup-wrap');　　　　　//背景黑
		var $menuPopup = $body.find('.menu-popup');　　　　　　　　　//popup區塊
		var $menuList = $body.find('.popup-list');　　　　　　　　　//menu list區塊
		var $menuClose = $body.find('.menu-close');　　　　　　　　//Close區塊

		//menu list
		var $menuTop = $body.find('.menu-top');
		var $menuNews = $body.find('.menu-news');
		var $menuMedia = $body.find('.menu-media');
		var $menuDiscography = $body.find('.menu-discography');
		var $menuLive = $body.find('.menu-live');
		var $menuAbout = $body.find('.menu-about');		
		var $menuMail = $body.find('.menu-mail');
		var $menuContact = $body.find('.menu-contact');


		//Open
		$menuBottom.click(function () {
			$(this).addClass('current');
			$menuPopupWrap.show();
			$menuPopupWrap.animate({ height: '100vh'}, 300, function () {
				$menuPopup.show(100);
				$menuList.animate({ opacity: '1' }, 100);
				$menuClose.show(300);
			});
		});


		//Close
		$menuClose.click(function () {
			$menuList.animate({ opacity: '0' }, 100, function () {
				$menuClose.hide(100);
				$menuPopupWrap.animate({ height: '0' }, 200, function () {
					$menuBottom.removeClass('current');
					$menuPopup.hide();					
				});
			});
		});



		// Menu List function
		function closeList() {
			$menuList.animate({ opacity: '0' }, 100, function () {
				$menuClose.hide(100);
				$menuPopupWrap.animate({ height: '0' }, 200, function () {
					$menuBottom.removeClass('current');	
					$menuPopup.hide();				

				});
			});
		}

		

	}



	menuPopup();
});