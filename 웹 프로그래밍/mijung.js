$(document).ready( function(){
	
	// var req = $.ajax({
	// 	url: "/rss",
	// 	dataType:"xml"});
	// req.done(function(data){
	// 	var items = $(data).find("enclosure");
	// 	$("#hotissueimage iframe").attr("src",items.eq(0).attr("url"));
	// 	$("#hotissueimage img").attr("src",items.eq(0).attr("url"));

	// });
	   //topmenu hover listener 탑 메뉴 고정
	   $("dl").hide();
	   $("dt").addClass("closed");
	   $("dd").addClass("closed");
	   $("#cl_esport").addClass("selected");
	//게임 출시일 일정
	$("#cl_gameopen").on("click",function() {

		$("#calender p").removeClass("selected");
		$("#cl_gameopen").addClass("selected");

		$(".cl_sb_text").hide();
		$("dl").hide();
		$("dt").addClass("closed");
		$("dd").addClass("closed");
		$("#scheduleModule").show();
	});

//E 스포츠 일정

	$("#cl_esport").on("click",function() {

		$("#calender p").removeClass("selected");
		$("#cl_esport").addClass("selected");
		//초기 설정 (롤)
		$(".cl_sb_text").show();
		$("#scheduleModule").hide(); //추가
	});

	//서브메뉴 설정
	//롤
	$("#cl_lol").on("click",function() {
		$(".cl_sb_text").removeClass("selected");
		$("#cl_lol").addClass("selected");
		$(".cl_lol_text").show();
		$(".cl_over_text").hide();
		$(".cl_pubg_text").hide();
	});

	//keg 속성
	$('#cl_Date_keg').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/17/2019" || dateText == "06/18/2019"){
	   			window.open("http://www.e-games.or.kr/intro/keg_intro.php?p_mbs=003002003002&s_kind=03");
	   		}
	   	}
	   });
         var tr = $("#cl_Date_keg tbody").find("tr").eq(3);
         for(var i = 1; i < 3; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//2019 리프트 라이벌즈
	$('#cl_Date_ll').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText =="06/04/2019" || dateText =="06/05/2019" || dateText =="06/06/2019" || dateText =="06/07/2019")
	   			window.open("http://www.leagueoflegends.co.kr/?m=esports_intro&mod=esports_newsview&idx=1222&p=1&category=&keyword=");
	   	}
	   });
         var tr = $("#cl_Date_ll tbody").find("tr").eq(2);
         for(var i = 2; i < 7; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//한국 스웨덴 e스포츠 친선 교류전
	$('#cl_Date_kse').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/14/2019")
	   			window.open("https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=002&aid=0002093984");
	   	}
	   });
         var tr = $("#cl_Date_kse tbody").find("tr").eq(2);
         for(var i = 6; i < 7; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

   	//2019 우리은행 LoL 챔피언스 코리아 서머
	$('#cl_Date_champion').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/05/2019" || dateText == "06/06/2019" ||dateText == "06/07/2019" )
	   			window.open("http://www.leagueoflegends.co.kr/?m=esports_intro&mod=esports_season");
	   	}
	   });
         var tr = $("#cl_Date_champion tbody").find("tr").eq(1);
         for(var i = 3; i < 7; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }
   	
   	//2019 제닉스 LoL 챌린저스 코리아 서머
   	$('#cl_Date_challenge').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/06/2019" || dateText == "06/07/2019" ||dateText == "06/08/2019")
	   			window.open("http://www.leagueoflegends.co.kr/?m=esports_intro&mod=esports_newsview&idx=1228&p=1&category=&keyword=");
	   	}
	   });
         var tr = $("#cl_Date_challenge tbody").find("tr").eq(1);
         for(var i = 4; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

   	//오버워치
	$("#cl_over").on("click",function() {
		$(".cl_sb_text").removeClass("selected");
		$("#cl_over").addClass("selected");
		$(".cl_lol_text").hide();
		$(".cl_over_text").show();
		$(".cl_pubg_text").hide();
	});

	//2019 오버워치 월드컵
   	$('#cl_Date_world').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/02/2019" || dateText == "06/03/2019")
	   			window.open("https://playoverwatch.com/ko-kr/news/22944574");
	   	}
	   });
         var tr = $("#cl_Date_world tbody").find("tr").eq(1);
         for(var i = 0; i < 2; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//오버워치 컨텐더스 건틀렛
		$('#cl_Date_cg').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/09/2019" ||dateText == "06/10/2019" ||dateText == "06/11/2019" ||dateText == "06/12/2019" ||dateText == "06/13/2019")
	   			window.open("https://sports.news.naver.com/esports/news/read.nhn?oid=236&aid=0000189615");
	   	}
	   });
         var tr = $("#cl_Date_cg tbody").find("tr").eq(2);
         for(var i = 0; i < 6; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//2019 오버워치 리그 그랜드 파이널
	$('#cl_Date_lgf').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/30/2019")
	   			window.open("https://sports.news.naver.com/esports/news/read.nhn?oid=236&aid=0000189615");
	   	}
	   });
         var tr = $("#cl_Date_lgf tbody").find("tr").eq(5);
         for(var i = 0; i < 1; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//2019 오버워치 컨텐더스 코리아 시즌 2
		$('#cl_Date_ck').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/25/2019" || dateText == "06/26/2019" || dateText == "06/27/2019" || dateText == "06/28/2019" || dateText == "06/29/2019" || dateText == "06/30/2019")
	   			window.open("https://overwatchcontenders.com/ko-kr/schedule");
	   	}
	   });
         var tr = $("#cl_Date_ck tbody").find("tr").eq(3);
         for(var i = 2; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
         	}
         		var tr = $("#cl_Date_ck tbody").find("tr").eq(4);
         		var td = tr.find("td").eq(0);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
        		});
     

   	//2019 오버워치 리그
   	$('#cl_Date_lg').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/15/2019" ||
	   			dateText == "06/16/2019" ||
	   			dateText == "06/17/2019" ||
	   			dateText == "06/18/2019" ||
	   			dateText == "06/19/2019" ||
	   			dateText == "06/20/2019" ||
	   			dateText == "06/21/2019" ||
	   			dateText == "06/22/2019" ||
	   			dateText == "06/23/2019" ||
	   			dateText == "06/24/2019" ||
	   			dateText == "06/25/2019")
	   			window.open("https://overwatchleague.com/ko-kr/about");
	   	}
	   });
         var tr = $("#cl_Date_lg tbody").find("tr").eq(2);
         var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
         var tr = $("#cl_Date_lg tbody").find("tr").eq(3);
         for(var i = 0; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
         }
         var tr = $("#cl_Date_lg tbody").find("tr").eq(4);
          for(var i = 0; i < 3; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
         	}

	//배틀 그라운드
	$("#cl_pubg").on("click",function() {
		$(".cl_sb_text").removeClass("selected");
		$("#cl_pubg").addClass("selected");
		$(".cl_lol_text").hide();
		$(".cl_over_text").hide();
		$(".cl_pubg_text").show();
	});

	//GLL 그랜드 슬램: 펍지 클래식
	$('#cl_Date_gll').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/19/2019" ||
	   		dateText == "06/20/2019" ||
	   		dateText == "06/21/2019")
	   			window.open("https://www.pubgesports.kr/front/notice/detail?postId=552&postType=NOTICE&page=&postTag=");
	   	}
	   });
         var tr = $("#cl_Date_gll tbody").find("tr").eq(3);
         for(var i = 3; i < 7; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

   	//2019 펍지 코리아 컨텐더스 페이즈 2
   	$('#cl_Date_pkc').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){
	   		if(dateText == "06/28/2019" ||
	   			dateText == "06/29/2019" ||
	   			dateText == "06/30/2019")
	   			window.open("https://www.pubgesports.kr/front/notice/detail?postId=618&postType=NOTICE&page=&postTag=");
	   	}
	   });
         var tr = $("#cl_Date_pkc tbody").find("tr").eq(4);
         for(var i = 6; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }
     var tr = $("#cl_Date_pkc tbody").find("tr").eq(5);
     var td = tr.find("td").eq(0);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });

   	//2019 HOT6 펍지 코리아 리그 페이즈 2
   	$('#cl_Date_pkl').datepicker({
	   	inline: true,
	   	showOtherMonths: true,
	   	showMonthAfterYear: true,
	   	monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
	   	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	onSelect: function(dateText, inst){

	   		if(dateText == "06/20/2019" ||
	   			dateText == "06/21/2019" ||
	   			dateText == "06/22/2019" ||
	   			dateText == "06/23/2019" ||
	   			dateText == "06/24/2019" ||
	   			dateText == "06/25/2019" ||
	   			dateText == "06/26/2019" ||
	   			dateText == "06/27/2019" ||
	   			dateText == "06/28/2019" ||
	   			dateText == "06/29/2019"
	   			)
	   			window.open("https://www.pubgesports.kr/front/intro");
	   	}
	   });
         var tr = $("#cl_Date_pkl tbody").find("tr").eq(3);
         for(var i = 4; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }
        var tr = $("#cl_Date_pkl tbody").find("tr").eq(4);
         for(var i = 0; i < 8; i++){
         	var td = tr.find("td").eq(i);
         	td.css({"background-color":"red"});
         		td.hover(function mouseon() {
        	 	$(this).css({"font-size":"20px","text-decoration":"underline","font-weight":"bold"});
     	 	},function mouseoff(){
        		 $(this).css({"font-size":"15.84px","text-decoration":"none","font-weight":"400"});
     	 });
     }

	//롤
	$(".cl_lol_text").each(function () {
		var dl = $(this);
		var alldd = dl.find("dd");
		var alldt = dl.find("dt");
		alldt.css("cursor","pointer");
		//alldd.hide();
		function closeAll(){
			alldd.addClass("closed");
			alldt.addClass("closed");
		}
		function open(dt,dd){
			dt.removeClass("closed");
			dd.removeClass("closed");
		}
		closeAll();
		alldt.click(function() {
			//alldd.hide();
			closeAll();
			var dt = $(this);
			var dd = dt.next();
			open(dt,dd);
			//dd.show();
			alldt.css("cursor","pointer");
			dt.css("cursor","default");
		});

	});

	//오버워치
	$(".cl_over_text").each(function () {
		var dl = $(this);
		var alldd = dl.find("dd");
		var alldt = dl.find("dt");
		alldt.css("cursor","pointer");
		//alldd.hide();
		function closeAll(){
			alldd.addClass("closed");
			alldt.addClass("closed");
		}
		function open(dt,dd){
			dt.removeClass("closed");
			dd.removeClass("closed");
		}
		closeAll();
		alldt.click(function() {
			//alldd.hide();
			closeAll();
			var dt = $(this);
			var dd = dt.next();
			open(dt,dd);
			//dd.show();
			alldt.css("cursor","pointer");
			dt.css("cursor","default");
		});

	});

	//배그
		//롤
		$(".cl_pubg_text").each(function () {
			var dl = $(this);
			var alldd = dl.find("dd");
			var alldt = dl.find("dt");
			alldt.css("cursor","pointer");
		//alldd.hide();
		function closeAll(){
			alldd.addClass("closed");
			alldt.addClass("closed");
		}
		function open(dt,dd){
			dt.removeClass("closed");
			dd.removeClass("closed");
		}
		closeAll();
		alldt.click(function() {
			//alldd.hide();
			closeAll();
			var dt = $(this);
			var dd = dt.next();
			open(dt,dd);
			//dd.show();
			alldt.css("cursor","pointer");
			dt.css("cursor","default");
		});

	});

		var beforeMenu =  "consoleN";
		$(".menu > li")
		.mouseover(function(){
			var str = "."+beforeMenu;
			$(str).removeClass('selected');
			$(str).css({"background-color":"#00b9f1"});
      //.css 백그라운드 색상 변경, 글씨 색상 변경 추가 필요
      beforeMenu = $(this).attr("class");
      $(this).addClass('selected');
      $(this).css({"background-color":"#2b90d9"});
      //.css 백그라운드 색상 변경, 글씨 색상 변경 추가 필요
  });
		$("#list li a").click(function(){
			$(".active").removeClass("active");
			$(this).parents("li").addClass("active");
			var index = $(this).parents("li").index();
			$(".new"+index).addClass("active");
		});
		var interval=5000;
		$("#hotissueimage img:first").show();
		var shownumber = 1;
		var timer;
		var previousnumber;
		function switchImg(){
			if(shownumber==5){
				$("#hotissueimage img").eq(shownumber-1).hide();
				shownumber=0;
				previousnumber=shownumber;
				$("#hotissueimage img").eq(shownumber).fadeIn(500);
				shownumber++;
			}
			else{
				$("#hotissueimage img").eq(shownumber-1).hide();
				$("#hotissueimage img").eq(shownumber).fadeIn(500);
				previousnumber = shownumber;
				shownumber++;
			}
		}
		function startTimer(){
			timer = setInterval(switchImg,interval);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		$("#hotissueimage img").hover(stopTimer,startTimer);
		$(".container").click(function(){
			var index = $(this).index();
			$("#hotissueimage img").eq(previousnumber).hide();
			$("#hotissueimage img").eq(index).fadeIn(500);
			shownumber=index+1;
			previousnumber=index;
			stopTimer();
			startTimer();
		})
		$("#hot_left").click(function(){
			stopTimer();
			if(shownumber==1){
				$("#hotissueimage img").eq(shownumber-1).hide();
				shownumber=5;
				previousnumber=shownumber;
				$("#hotissueimage img").eq(shownumber-1).fadeIn(500);
			}
			else{
				$("#hotissueimage img").eq(shownumber-1).hide();
				$("#hotissueimage img").eq(shownumber-2).fadeIn(500);
				previousnumber = shownumber;
				shownumber--;
			}
			startTimer();
		})
		$("#hot_right").click(function(){
			stopTimer();
			switchImg();
			startTimer();
		})
		startTimer();
		var req = $.ajax({
			url: "/rss",
			dataType:"xml"});
		req.done(function(data){
		// xdata= $.parseXML(data);
		// var items = $(xdata).find("item");
		console.log(data);
		var items = $(data).find("item");
		if(items.length > 0){
			items1 = items.slice(0,22);
			var uTag = $("<ul/>");
			items1.each(function(){
				var item = $(this);
				var lk = item.find("link").text();
				var title = item.find("title").text();
				var ab = $(".new0 ul").find("li");
				var atag = $("<a />")
				.text(title)
				.attr({
					"href":lk,
					"target":"_blank"
				});
				uTag.append($("<li />").append(atag));
			});
			$(".newslist.new0").html(uTag);
		}
	});
		req.fail(function(jqXHR,textStatus){
			alert("failed:" + textStatus);
		});
		
		var req2 = $.ajax({
			url:"news.txt",
			dataType:"json"
		});
		req2.done(function(data,status){
			var k1=0;
			var k2=0;
			var k3=0;
			var uTag1 = $("<ul/>");
			var uTag2 = $("<ul/>");
			var uTag3 = $("<ul/>");
			for(var i = 0; i<data.length;i++){
				//alert("ajsdf");
				// var col = $("<ul />").append($("<li />").text(data[i].title));
				// var str = data[i].category+"_"+data[i].category_+" - "+data[i].pubDate;
				// col.append($("<li />").text(str));
				// col.append($("<li />").text(data[i].description));
				// $(".newslists").append(col);
				if(data[i].category=="PC게임"){
					if(k1<22){
					var lk = data[i].link;
					var title = data[i].title;
					var atag = $("<a />")
					.text(title)
					.attr({
						"href":lk,
						"target":"_blank"
					});
					var li = $("<li />").append(atag);
					uTag1.append(li);
					k1++;
				}
				}else if(data[i].category=="console"){
					if(k2<22){
					var lk = data[i].link;
					var title = data[i].title;
					var atag = $("<a />")
					.text(title)
					.attr({
						"href":lk,
						"target":"_blank"
					});
					var li = $("<li />").append(atag);
					uTag2.append(li);
					k2++;
				}
				}else{
					if(k3<22){
					var lk = data[i].link;
					var title = data[i].title;
					var atag = $("<a />")
					.text(title)
					.attr({
						"href":lk,
						"target":"_blank"
					});
					var li = $("<li />").append(atag);
					uTag3.append(li);
					k3++;
				}
				}
				//$(".newslist.new1").html(uTag3);
			}
			$(".newslist.new1").html(uTag1);
			$(".newslist.new2").html(uTag2);
			$(".newslist.new3").html(uTag3);
		});
	});
