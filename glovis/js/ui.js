window.onload = function(){
	$(document).ready(function(){
		$(".newslist").bxSlider({pagerType:"short"});
	});
	$(document).ready(function(){
		$(".bglist").bxSlider({});
	});

    var curtain = document.querySelector(".curtain"); //전체 어두워지는 태그설정

	navHover();
	langClick();
	mobileMenu();
	mobileMenuSub();
	popOpen();
	popClose();
	mobileVideo();
	mainScroll();
	mainBackAni();
	partnerHover();
	familysite();

//------------------------------------------------------------------------
	//헤더 메뉴 호버하면 서브메뉴 열기

	function navHover(){ 
		var header = document.querySelector("header");
		var header_tab = header.querySelector(".header_tab");
		var header_img = header.querySelector(".h1_img");
		var srch_img = header.querySelector(".srch_img");
		
		header_tab.addEventListener("mouseover", header_open)
		function header_open(){
			header_tab.classList.add("on");
			header.classList.add("on");
			curtain.classList.add("on");
			header_img.setAttribute("src", "images/logo_on.png");
			srch_img.setAttribute("src", "images/header_srch_on.png");
		}
		header_tab.addEventListener("mouseout", header_close)
		function header_close(){
			header_tab.classList.remove("on");
			header.classList.remove("on");
			curtain.classList.remove("on");
			header_img.setAttribute("src", "images/logo.png");
			srch_img.setAttribute("src", "images/header_srch.png");
		}
	}

//------------------------------------------------------------------------
	//lang 클릭기능하면 서브메뉴 열기

	function langClick(){
		var lang = document.querySelector(".lang");
		lang.addEventListener("click", lang_open)
		function lang_open(){
			lang.className = "lang on";
		}
		lang.addEventListener("mouseleave", lang_close)
		function lang_close(){
			lang.className = "lang";
		}
	}

//------------------------------------------------------------------------
	//mobile 헤더 메뉴 열기

	function mobileMenu(){
		var htmlEl = document.querySelector("html");
		var mMenu = document.querySelector(".mheader > .menu");
		var openBtn = document.querySelector(".mheader > .open_btn");
		var closeBtn = mMenu.querySelector(".close_btn");
		var mText = document.querySelector(".m_overview > .text");
		var mHeader_tab = document.querySelector(".mHeader_tab");
		var subEls = mHeader_tab.querySelectorAll(".sub");
		var tabTitleEls = mHeader_tab.querySelectorAll(".tabTitle");

		openBtn.addEventListener("click", menuOpen);
		closeBtn.addEventListener("click", menuClose);
		function menuOpen(e){
			e.preventDefault();
			mMenu.classList.add("on");
			htmlEl.style.height = "887px";
			htmlEl.style.overflow = "hidden";
			mText.style.zIndex = "0"
		}
		function menuClose(e){
			e.preventDefault();
			mMenu.classList.remove("on");
			htmlEl.style.height = "auto";
			htmlEl.style.overflow = "auto";
			mText.style.zIndex = "9700"
			for(var i=0;i<subEls.length;i++){ // 메뉴를 닫으면 열려있던 서브메뉴들을 전부 닫아준다
				subEls[i].classList.remove("on");
				subEls[i].style.height = "0";
				tabTitleEls[i].classList.remove("on");
			}
		}
	}
	
//------------------------------------------------------------------------
	//mobile 헤더 메뉴에서 서브 열기

	function mobileMenuSub(){
		var mHeader_tab = document.querySelector(".mHeader_tab");
		
		var subEls = mHeader_tab.querySelectorAll(".sub");
		var tabTitleEls = mHeader_tab.querySelectorAll(".tabTitle");
		
		mHeader_tab.addEventListener("click", clickWork);

		function clickWork(e){
			e.preventDefault();
			var subEl = e.target.parentNode.parentNode.querySelector(".sub");
			if(e.target.tagName !== 'SPAN'){
				return
			}
			if(subEl.classList.contains("on")){
				subEl.classList.remove("on");
				subEl.style.height = "";
				e.target.parentNode.classList.remove("on");
			}else{
				for(var i=0;i<subEls.length;i++){
					subEls[i].classList.remove("on");
					subEls[i].style.height = "";
					tabTitleEls[i].classList.remove("on");
				}
				subEl.classList.add("on");
				subEl.style.height = subEl.scrollHeight + "px";
				e.target.parentNode.classList.add("on");
			}
		}
	}

//------------------------------------------------------------------------
	// overview pop 열기

	function popOpen(){
		var popOpenBtn = document.querySelector(".text_overview > ul");
		var mobilePopOpenBtn = document.querySelector(".m_overview > ul");

		popOpenBtn.addEventListener("click", openPop);
		mobilePopOpenBtn.addEventListener("click", openMobilePop);

		function openPop(e){
			e.preventDefault();
			if(e.target.tagName !== 'A'){
				return;
			}else{
				var textPop = e.target.parentNode.querySelector(".text_pop");
				textPop.classList.add("on")
				curtain.classList.add("on");
				curtain.style.zIndex = "9500";
			}
		}
		function openMobilePop(e){
			e.preventDefault();
			if(e.target.tagName !== 'IMG'){
				return;
			}else{
				var textPop = e.target.parentNode.parentNode.querySelector(".text_pop");
				textPop.classList.add("on")
				curtain.classList.add("on");
				curtain.style.zIndex = "9500";
			}
		}
	}

//------------------------------------------------------------------------
	// overview pop 닫기

	function popClose(){
		var popCloseBtn = document.querySelectorAll(".pop_close");

		for(var i=0;i<popCloseBtn.length;i++){
			popCloseBtn[i].addEventListener("click", closePop);
		}

		function closePop(e){
			e.preventDefault();
			e.stopPropagation();
			e.target.parentNode.parentNode.classList.remove("on");
			curtain.classList.remove("on");
			curtain.style.zIndex = "0";
		}
	}

//------------------------------------------------------------------------
	//모바일버전 재생버튼 클릭하면 동영상페이지로 이동

	function mobileVideo(){
		var playBtn = document.querySelector(".playbtn");
		playBtn.addEventListener("click", playVideo);
		function playVideo(e){
			var check = confirm("동영상을 재생하시겠습니까?");
			if(!check){
				e.preventDefault();
				return;
			}
		}
	}

//------------------------------------------------------------------------
	// 스크롤버튼을 클릭하면 아래로 이동

	function mainScroll(){
		var scrollBtn = document.querySelectorAll(".scroll");
		var mainPartner = document.querySelector(".main_partner")
		var htmlValue = document.querySelector("html");
		var aniAction;
		
		for(var i=0;i<scrollBtn.length;i++){
			scrollBtn[i].addEventListener("click", moveDown);
		}
		
		function moveDown(e){
			if(e.target){e.preventDefault()}
			aniAction = requestAnimationFrame(moveDown);
			htmlValue.scrollTop += 60;
			if(htmlValue.scrollTop >= mainPartner.offsetTop){
				cancelAnimationFrame(aniAction);
				htmlValue.scrollTop = mainPartner.offsetTop;
				return;
			}			
		}
	}

//------------------------------------------------------------------------
	//메인 배경색 애니메이션효과

	function mainBackAni(){
		var htmlValue = document.querySelector("html");
		var partnerBack = document.querySelector(".main_partner > .back")
		var partnerMask = document.querySelector(".main_partner > .mask")
		var recruitBack = document.querySelector(".recruit > .back")
		var recruitMask = document.querySelector(".recruit > .mask")
		var rugbyBack = document.querySelector(".rugby > .back")
		var rugbyMask = document.querySelector(".rugby > .mask")
		var mainPartner = document.querySelector(".main_partner")
		var mainEtc = document.querySelector(".main_etc")

		window.addEventListener("scroll", startAni);
		function startAni(){
			if(htmlValue.scrollTop+500 > mainPartner.offsetTop){
				partnerBack.classList.add("on");
				partnerMask.classList.add("on");
			}
			if(htmlValue.scrollTop+530 > mainEtc.offsetTop){
				recruitBack.classList.add("on");
				recruitMask.classList.add("on");
				rugbyBack.classList.add("on");
				rugbyMask.classList.add("on");
				window.removeEventListener("scroll", startAni);
			}
		}
	}

//------------------------------------------------------------------------
	//partners 호버할때 나머지 어둡게
	function partnerHover(){
		var hoverBtn = document.querySelectorAll(".partners A");

		choiceSize();
		function choiceSize() {
			var inWidth = window.innerWidth;
			if (inWidth < 981) { 
				for(var i=0;i<hoverBtn.length;i++){
					hoverBtn[i].removeEventListener("mouseenter", hoverDark);
					hoverBtn[i].removeEventListener("mouseleave", hoverLight);
				}
			} else {
				for(var i=0;i<hoverBtn.length;i++){
					hoverBtn[i].addEventListener("mouseenter", hoverDark);
					hoverBtn[i].addEventListener("mouseleave", hoverLight);
				}
			}
		}
		
		window.addEventListener("resize", function(){
			clearTimeout(check);
			var check = setTimeout(choiceSize,300)
		});

		function hoverDark(e){
			for(var i=0;i<hoverBtn.length;i++){
				if(hoverBtn[i] !== e.target){
					hoverBtn[i].classList.add("off");
				}
			}
		}
		function hoverLight(){
			for(var i=0;i<hoverBtn.length;i++){
				hoverBtn[i].classList.remove("off");
			}				
		}
	}

	

//------------------------------------------------------------------------
	//footer familysite 열고 닫기
	
	function familysite(){
		var familyBtn = document.querySelector(".familyBtn");
		var familySub = document.querySelector(".familysite > .sub")
		familyBtn.addEventListener("click", familyOpen);

		function familyOpen(e){
			e.preventDefault();
			if(familySub.classList.contains("on")){
				familySub.classList.remove("on");
				familyBtn.style.backgroundImage = "url('images/family_icon.png')";
			}else{
				familySub.classList.add("on");
				familyBtn.style.backgroundImage = "url('images/family_icon_on.png')";
			}
		}
	}
}
