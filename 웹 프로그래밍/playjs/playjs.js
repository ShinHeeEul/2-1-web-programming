window.onload = start;

function calc(){
   var x = document.getElementById('x');   //getElementById까지만 하면 객체를 참고, .value를 통해 input tag에 접근해서 value를 가져온다!
   var y = document.getElementById('y');   //value값은 문자열이므로 그냥 더하면 concat이 됨. 따라서 정수로 바꿔주도록 하자.
   var sum = document.getElementById('sum');
   sum.value = parseInt(x.value) + parseInt(y.value);
   
   // var a = "1";
   // var b = 1;
   // console.log(a==b);   //true
   //console.log(a===b);    //false
   //== -->단순한 값의 비교
   //=== -->값+type의 비교
   /*주의*/
   // var y = new String("John");
   // var z = new String("John");
   // console.log(y==z);   //false-->객체는 모두 다르기 때문에, 항상 비교하면 다르다고 나온다!



   //primitive value(상수): 변경 불가, 항상 call by value로 전달된다.
   //var s=13; s=15; 에서 13이 15로 바뀌는것이 아니고, 가리키는 값을 변경하는 것이다.
   //var a=3, b=5;
   //var c= func(a,b);
   //function func(x,y){
   //   x=10;   //primitive로 넘겨준 a의 값은 바뀌지 않는다.
   //   return x+y;
   //}
}


var computerNumber = Math.floor(Math.random()*100+1);   //정답-->global var로 선언한다. 함수 실행할때마다 바뀌면 안되므로
//Math의 특징
//1. new 안해줘도 됨
//2. random returns a random real number between 0(inclusive) and 1(exclusive: 포함x)
//-->var rand1to10 = Math.floor(Math.random()*10+1); floor: 소수점 이하 잘라줌(정수화)
var nGusses = 0; //추측횟수
function guess(){
   console.log("your random number is...",computerNumber);
   var userNum = parseInt(document.getElementById("user").value);
   console.log('typeof userNum: ',typeof userNum);
   if(userNum>computerNumber){
      document.getElementById("result").value = "정답이 더 작습니다.";
      nGusses++;
      document.getElementById("guesses").value = nGusses;
   }
   else if(userNum<computerNumber){
      document.getElementById("result").value = "정답이 더 큽니다.";
      nGusses++;
      document.getElementById("guesses").value = nGusses;
   }
   else if(userNum==computerNumber){
      document.getElementById("result").value = "정답입니다!";
      nGusses++;
      document.getElementById("guesses").value = "총 "+nGusses+"회";
   }
   else
      document.getElementById("result").value = "정답을 입력해주세요!";

//js의 객체 유형
//코어 객체: 기본 객체
//HTML DOM 객체: 태그들을 객체화 한 것.
//BOM(브라우저 관련 객체): 브라우저 종류, 스크린 크기정보 등

//js is mutable : 객체 하나를 공유하기 때문이다!(대입 연산시 참조의 공유가 이뤄질뿐, 복사 등이 일어나지는 않는듯)
//()의 차이--> ()이 있다~>함수의 실행 결과가 반환, ()없이 메소드 이름만~>함수 정의 자체가 할당이 됨.
}

function replay(){
   computerNumber = Math.floor(Math.random()*100+1);
   nGusses = 0;
   document.getElementById("result").value = null;
   document.getElementById("guesses").value = null;
   document.getElementById("user").value = null;
   var inputCollec = document.getElementsByTagName("INPUT");
   console.log('replay clicked, new number is...',computerNumber);
}

function setCTime() {
   var now = new Date();
   var m = now.getMonth();
   var d = now.getDate();
   var h = now.getHours();
   var min = now.getMinutes();
   var sec = now.getSeconds();
   var str;
   if (m == 0)
      m = "January";
   else if(m == 1)
      m = "Feburary";
   else if(m == 2)
      m = "March";
   else if(m == 3)
      m = 'April';
   else if(m == 4)
      m = "May";
   else if(m == 5)
      m = "June";
   else if(m == 6)
      m = "July";
   else if(m == 7)
      m = "August";
   else if(m == 8)
      m = "September";
   else if(m == 9)
      m = "October";
   else if(m == 10)
      m = 'November';
   else
      m = 'December';

   str = m + ", " + d + ", " + h + " : " + min + " : " + sec;
   document.getElementById("ctime").innerHTML = str;
   setTimeout('setCTime()',1000);
}

//constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious",
 "dissonant", "toady", "idempotent"];
var MAX_GUESSES = 6;

//global variables
var guesses = "";
var guessCount = MAX_GUESSES;
var word;

function newGame() {
   var r_num =  Math.floor(Math.random()* POSSIBLE_WORDS.length);
   var word = POSSIBLE_WORDS[r_num];
   guessCount = 0;
   guesses = "";
   var guessButton = document.getElementById("guessbutton").disabled = false;
   updatePage();
}

function updatePage() {
	var clue = "";

   for(var i = 0; i < word.length(); i++){
   		if(guesses.indexOf(word.charAt(i)) >= 0) {
   			clue += word.charAt(i) + " ";
   		}
   		else
   			clue += "_ ";
   	}
   document.getElementById("clue").innerHTML = clue;
   var user = document.getElementById("guessbutton").value;
   document.getElementById("guessstr").innerHTML = "Guesses : " + guesses;
   document.getElementById("hangmapic").src = "hangman" + guessCount + ".gif";

   	if(guessCount == 0) {
		document.getElementById("guessstr").innerHTML = "You Lose!";
   	}
	if(clue.indexOf('_') < 0) {
		document.getElementById("guessstr").innerHTML = "You Win!";
	}
}

function guessLetter() {
	var letter = document.getElementById("hguess").value;
	if(document.getElementById("clue").innerHTML.indexOf('_') < 0)
		return;
	else if(guessCount == 0)
		return;
	if(guesses.indexOf(letter) >= 0)
		return;
	guesses += letter;
	if(word.indexOf(letter) < 0)
		guessCount--;
   updatePage();
}

function changeImage() {
	var img = document.getElementById("image");
	var sarray = img.src.split('/');
	var str = sarray[sarray.length - 1];
	if(str == "1_rgb.bmp")
		//비교할 때는 c:부터 다 저장되엉 있는 값이므로 고쳐야된다.
		img.src = "2.bmp";
	else
		img.src = "1_rgb.bmp";
}
var colorNames = ["maroon", "red", "orange", "yellow", "olive", "purple", "fuchsia", "while",
"lime", "navy", "blue", "aqua", "teal", "black", "silver", "gray"];

function createColorTable() {
	for(var i = 0; i < colorNames.length; i++) {
		var c_div = document.createElement("div");
		c_div.class = "ctbox";
		c_div.style.display = "inline-block";
		c_div.style.width = "60px";
		c_div.style.padding = "10px";
		c_div.innerHTML = colorNames[i];
		c_div.style.backgroundColor = colorNames[i];
		document.getElementById("colorTable").appendChild(c_div);
	}
}

function removeColorTable() {
		var parent = document.getElementById("colorTable");
		var child = parent.getElementsByTagName("div");
		while(child[0])
			parent.removeChild(child[0]);
}
var action;
function changeColor() {
	action = setInterval(flashText, 1000);
}

function flashText() {
	var c_p = document.getElementById("target");

	if(c_p.style.color == "red")
		c_p.style.color = "blue";
	else
		c_p.style.color = "red";
	if(c_p.style.backgroundColor == "green")
		c_p.style.backgroundColor = "yellow";
	else
		c_p.style.backgroundColor = "green";
}

function stopTextColor() {
	clearInterval(action);
}

var act;
var tp = 0;
function myMove() {
	clearInterval(act);
	tp = 0;
	act = setInterval(move,5); 
}

function move() {
	tp++;
	var c_m = document.getElementById("container");
	var c_c = document.getElementById("animate");
	c_c.style.top = tp + "px";
	c_c.style.left = tp + "px";
	if(c_c.style.left == 350 + "px") {
		clearInterval(act);
	}
	c_c.style.backgroundColor = "red";
}

function start(){

	var button1 = document.getElementById("button1");
	button1.onclick = calc;
	
	var button2 = document.getElementById("button2");
	button2.onclick = guess;

	var button3 = document.getElementById("button3");
	button3.onclick = replay;

	var button4 = document.getElementById("guessbutton");
	button4.onclick = guessLetter;

	var button5 = document.getElementById("button5");
	button5.onclick = newGame;

	var changeButton = document.getElementById("changebutton");
	changeButton.onclick = changeImage;

	var ctCreate = document.getElementById("ctCreate");
	ctCreate.onclick = createColorTable;

	var ctRemove = document.getElementById("ctRemove");
	ctRemove.onclick = removeColorTable;

	var button6 = document.getElementById("button6");
	button6.onclick = stopTextColor;

	var button7 = document.getElementById("button7");
	button7.onclick = myMove;

	var main = document.getElementById("main");
 	main.onload = changeColor();
 	
 	var ctime = document.getElementById("ctime");
 	ctime.onload = setCTime();

}