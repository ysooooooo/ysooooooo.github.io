window.onload = function(){

    //사이드메뉴
    sideMenu();
    function sideMenu(){
        var body = document.querySelector("body");
        var openBtn = document.querySelector(".more_btn")
        var closeBtn = document.querySelector(".side_close");
        var sideMenuEl = document.querySelector(".side_menu");

        openBtn.addEventListener("click", function(e){
            e.preventDefault();
            sideMenuEl.classList.add("on");
            sideMenuEl.style.height = body.clientHeight + "px";
        })
        
        closeBtn.addEventListener("click", function(e){
            e.preventDefault();
            sideMenuEl.classList.remove("on");
        })
    }

    //etcList의 각 메뉴를 클릭하면 그 메뉴를 보여주기
    etcList();
    function etcList(){
        var etcBtn = document.querySelector(".etclist > .menu2 > ul");
        var headEls = document.querySelectorAll(".head_tit > h3");
        var titleEls = etcBtn.querySelectorAll("li");
        var menuEls = document.querySelectorAll(".menu_list > div")

        headEls[0].classList.add("on"); //기본값으로 첫번째 메뉴를 보여준다
        titleEls[0].classList.add("on");
        menuEls[0].classList.add("on");

        etcBtn.addEventListener("click", function(e){
            e.preventDefault();

            for(var i=0;i<titleEls.length;i++){
                if(titleEls[i].classList.contains("on")){
                    headEls[i].classList.remove("on");
                    titleEls[i].classList.remove("on");
                    menuEls[i].classList.remove("on");
                }
            }
            for(var j=0;j<titleEls.length;j++){
                if(e.target.parentNode === titleEls[j]){
                    headEls[j].classList.add("on");
                    titleEls[j].classList.add("on");
                    menuEls[j].classList.add("on");
                }
            }
        });
    }
    
    //실시간이슈 각 메뉴를 클릭하면 그 메뉴를 보여주기
    realTimeIssue();
    function realTimeIssue(){
        var hotIssueBtn = document.querySelector(".hotissue > .menu2 > ul");
        var titleEls = hotIssueBtn.querySelectorAll("li");
        var menuEls = document.querySelectorAll(".issue_area")

        titleEls[0].classList.add("on"); //기본값으로 첫번째 메뉴를 보여준다
        menuEls[0].classList.add("on");

        hotIssueBtn.addEventListener("click", function(e){
            e.preventDefault();

            for(var i=0;i<titleEls.length;i++){
                if(titleEls[i].classList.contains("on")){
                    titleEls[i].classList.remove("on");
                    menuEls[i].classList.remove("on");
                }
            }
            for(var j=0;j<titleEls.length;j++){
                if(e.target.parentNode === titleEls[j]){
                    titleEls[j].classList.add("on");
                    menuEls[j].classList.add("on");
                }
            }
        });
    }
}