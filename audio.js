var elements = document.getElementsByTagName('*');
var links = document.getElementsByTagName('a');
var counter = 0;
var left = 0;
var animate;
var bg = document.getElementsByTagName('body');
var angleCounter = 10;
var ready4dank = false;
for(var i = 0; i < bg.length; i++)
{
	bg[i].id = 'mlgPro';
}

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
meme1 = document.createElement('IMG');
meme2 = document.createElement('IMG');
shakememe = document.createElement('IMG');
pepe1 = document.createElement('IMG');
pepe2 = document.createElement('IMG');
mtndew= document.createElement('IMG');
shiah = document.createElement('IMG');
corey = document.createElement('IMG');
cena = document.createElement('IMG');
coreyText = document.createElement('P');
rekt=document.createElement('P');


for (var i = 0; i < elements.length; i++)
{
	document.onmousedown = function(){
		
		if(getRandomInt(1,5) === 2)
		{
			var shot = new Audio('http://soundboard.panictank.net/intervention%20420.mp3');
			var getCam = new Audio('http://soundboard.panictank.net/MOM%20GET%20THE%20CAMERA.mp3');
			var skrillex = new Audio('http://soundboard.panictank.net/SKRILLEX%20Scary.mp3');
			var airporn = new Audio('http://soundboard.panictank.net/AIRPORN.mp3');
			var weed = new Audio('http://soundboard.panictank.net/SMOKE%20WEEK%20EVERYDAY.mp3');
			var noscoped = new Audio('http://soundboard.panictank.net/GET%20NOSCOPED.mp3');
			shot.play();
			skrillex.volume=.6;
			skrillex.play();
			setTimeout(function(){getCam.play();},500);
			setTimeout(function(){airporn.play();},500);
			setTimeout(function(){weed.play();},3000);
			setTimeout(function(){noscoped.play();},5000);
			setTimeout(dankMemes,500);

			counter=0;
		}
		else
		{
			
		var myAudio = new Audio('http://soundboard.panictank.net/HITMARKER.mp3');
		myAudio.play();
		counter++;
		}
		
		};
}


function dankMemes()
{
	
	document.body.appendChild(meme1);
	meme1.setAttribute("src","https://i.ytimg.com/vi/dIsdsZsIouM/maxresdefault.jpg");
	meme1.setAttribute("width","300");
	meme1.setAttribute("height","200");
	meme1.setAttribute("id","memeShit");
	meme1.style.zIndex = "500";
	meme1.style.left="0px";
	meme1.style.top="10px";
	meme1.style.position='fixed';
	moveSideways();

	
	document.body.appendChild(meme2);
	meme2.setAttribute("src","http://images.vg247.com/current//2011/08/20110829mlg.jpg");
	meme2.setAttribute("width","300");
	meme2.setAttribute("height","200");
	meme2.setAttribute("id","memeShit");
	meme2.style.zIndex = "501";
	meme2.style.left="50%";
	meme2.style.top="10px";
	meme2.style.position='fixed';
	moveUpways();

	document.body.appendChild(shakememe);
	shakememe.setAttribute("src","http://www.themebeta.com/media/cache/resolve/728/files/chrome/images/201509/24/2549c0113e006b6f9c6540b65f972d13.jpeg");
	shakememe.setAttribute("width","300");
	shakememe.setAttribute("height","200");
	shakememe.setAttribute("id","memeShit");
	shakememe.style.zIndex = "501";
	shakememe.style.left="350px";
	shakememe.style.top="400px";
	shakememe.style.transform="rotate(90deg)";
	shakememe.style.position='fixed';
	shake();

	document.body.appendChild(pepe1);
	pepe1.setAttribute("src","http://img.ifcdn.com/images/8ccb06379043d4eb85b355d9927a16880f85c941cb390c273d006b0dacc14ed0_1.gif");
	
	pepe1.setAttribute("id","memeShit");
	pepe1.style.zIndex = "500";
	pepe1.style.left="0px";
	pepe1.style.top="600px";
	pepe1.style.position='fixed';

	document.body.appendChild(pepe2);
	pepe2.setAttribute("src","http://cdn.makeagif.com/media/7-27-2015/x8TJDZ.gif");
	
	pepe2.setAttribute("id","memeShit");
	pepe2.style.zIndex = "500";
	pepe2.style.right="0px";
	pepe2.style.top="600px";
	pepe2.style.position='fixed';
	pepe2.style.id='rightPepe';

	document.body.appendChild(mtndew);
	mtndew.setAttribute("src","https://49.media.tumblr.com/26b94c2da1eb3d648e74be182d5a8b20/tumblr_nq4cm1emHA1t8xblso1_400.gif");
	
	mtndew.setAttribute("id","memeShit");
	mtndew.style.zIndex = "500";
	mtndew.style.left="70%";
	mtndew.style.top="300px";
	mtndew.style.position='fixed';
	mtndew.style.id='rightPepe';

	document.body.appendChild(shiah);
	shiah.setAttribute("src","https://media.giphy.com/media/ld4SSznH1Lxx6/giphy.gif");
	shiah.setAttribute("width","200px");
	shiah.setAttribute("height","300px");
	shiah.setAttribute("id","memeShit");
	shiah.style.zIndex = "500";
	shiah.style.left="500px";
	shiah.style.top="600px";
	shiah.style.position='fixed';

	document.body.appendChild(corey);
	corey.setAttribute("src","http://forums.na.leagueoflegends.com/board/attachment.php?attachmentid=1083226");
	
	corey.setAttribute("id","memeShit");
	corey.style.zIndex = "500";
	corey.style.left="100px";
	corey.style.top="200px";
	corey.style.position='fixed';
	
	document.body.appendChild(cena);
	cena.setAttribute("src","http://i.imgur.com/17djyaF.gif");
	cena.setAttribute("width","300px");
	cena.setAttribute("height","200px");
	cena.setAttribute("id","memeShit");
	cena.style.zIndex = "500";
	cena.style.left="750px";
	cena.style.top="400px";
	cena.style.position='fixed';

	
	shakeCena();
	text();
	coreyInTheHouse();
	growText();
	strobe();
	
}

function moveRight()
{
		
 		meme1.style.left = parseInt(meme1.style.left)+10+'px';
    	
        if(parseInt(meme1.style.left)>screenWidth-20)
    	{
    		animate = setTimeout(moveLeft,20);
    	}
    	else
    	{
    		animate = setTimeout(moveRight,20); // call moveRight in 20msec
    	}
}

function moveLeft()
{

	meme1.style.left = parseInt(meme1.style.left)-10+'px';
    	console.log('move left happened');
    if(parseInt(meme1.style.left)<20)
    {
    	animate = setTimeout(moveRight,20);
    }
    else{
    	animate = setTimeout(moveLeft,20); // call moveRight in 20msec

    }
        
}
function moveSideways()
{
	
	if(parseInt(meme1.style.left) <= 10)
	{
		moveRight(meme1);
		
	}
	else
	{
		moveLeft(meme1);
	}
}
function moveUpways()
{
	
	if(parseInt(meme2.style.top)<=10)
	{
		moveDown(meme2);
		
	}
	else
	{
		moveUp(meme2);
	}
}

function moveDown()
{
	meme2.style.top = parseInt(meme2.style.top) + 10 + 'px';
    	
        if(parseInt(meme2.style.top) > screenHeight - 20)
    	{
    		animate = setTimeout(moveUp,20);
    	}
    	else
    	{
    		animate = setTimeout(moveDown,20); // call moveRight in 20msec
    	}
}

function moveUp()
{
	meme2.style.top = parseInt(meme2.style.top) - 10 + 'px';
    	
    if(parseInt(meme2.style.top) < 20)
    {
    	animate = setTimeout(moveDown,20);
    }
    else{
    	animate = setTimeout(moveUp,20); // call moveRight in 20msec

    }
}

function stop(){
   clearTimeout(animate);
   meme.style.left = '0px';
}

function shake()
{
	console.log("shake");
	shakememe.style.transform = "rotate(10deg)"
	
	setTimeout(function(){shakememe.style.transform="rotate(-10deg)"; },300);
	setTimeout(shake,600);
}

function strobe()
{
	console.log("colorchange");
	document.getElementById('mlgPro').style.backgroundColor='red';
	setTimeout(function(){document.getElementById('mlgPro').style.backgroundColor='white'},100);
	setTimeout(function(){document.getElementById('mlgPro').style.backgroundColor='blue'},200);
	setTimeout(strobe,300);
}

function text()
{
	
	document.body.appendChild(rekt);
	rekt.innerHTML = 'rekt';
	rekt.style.position = 'fixed';
	rekt.style.fontFamily = 'Comic Sans MS';
	rekt.style.fontSize = '200px';
	rekt.style.color = 'purple';
	rekt.style.left = '50%';
	rekt.style.top = '50%';
	rekt.style.zIndex = '600';
	meme2.setAttribute("id","memeShit");
}

function growText()
{
	rekt.style.fontSize = parseInt(rekt.style.fontSize) + 10 + 'px';
	if(parseInt(rekt.style.fontSize) > 300)
	{
		setTimeout(shrinkText,20);

	}
	else
	{
		setTimeout(growText,20);
	}
	
}
function shrinkText()
{
	rekt.style.fontSize = parseInt(rekt.style.fontSize) - 10 + 'px';
	if(parseInt(rekt.style.fontSize) < 200)
	{
		setTimeout(growText,20);

	}
	else
	{
		setTimeout(shrinkText,20);
	}
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shakeCena()
{
	
	cena.style.transform = "rotate(-10deg)"
	
	setTimeout(function(){cena.style.transform="rotate(10deg)"; },300);
	setTimeout(shakeCena,600);
}

function coreyInTheHouse()
{
	
	document.body.appendChild(coreyText);
	coreyText.innerHTML='COREY IS IN THE HOUSE !!!!11!!1!!';
	coreyText.style.position = 'fixed';
	coreyText.style.fontFamily = 'Comic Sans MS';
	coreyText.style.fontSize = '40px';
	coreyText.style.color = 'pink';
	coreyText.style.left = '350px';
	coreyText.style.top = '250px';
	coreyText.style.zIndex = '600';
}













