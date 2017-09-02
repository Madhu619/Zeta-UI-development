	function myFunction(x) {
    x.classList.toggle("change");
}
var colorCodes = ["#ff5a5a", "#ffc845" , "#56dd82"]
var data ='';
			 $.ajax({
            url     : 'sample.json',
            method  : 'get',
            success : function( response ) {
                alert( response );
            }
        });
for (var i=0; i<data["ideas"].length ; i++){
		var 	button = (data.ideas[i].button == "play") ? "<i class= 'fa fa-play'></i>" : "<i class= 'fa fa-stop'></i>" ,
		result = "<div class='resultData'> <span> <img src='"+data.ideas[i].image+"''></span><span>"+data.ideas[i].message+"</span><span>"+button+"</span></div>";
	$(".ideaData").append(result);
	$(".ideaData .resultData").each(function(){
		color = colorCodes[Math.floor(Math.random()*colorCodes.length)];
		$(this).attr("style","border-left : 4px solid "+color+";");
	})
}
for (var i=0; i<data["progress"].length ; i++){
		var 	button = (data.ideas[i].button == "play") ? "<i class= 'fa fa-play'></i>" : "<i class= 'fa fa-stop'></i>" ,
			result = "<div class='resultData'> <span> <img src='"+data.progress[i].image+"''></span><span>"+data.progress[i].message+"</span><span>"+button+"</span></div>";
	$(".progressData").append(result);
	$(".progressData .resultData").each(function(){
		color = colorCodes[Math.floor(Math.random()*colorCodes.length)];
		$(this).attr("style","border-left : 4px solid "+color+";");
	})
}
for (var i=0; i<data["review"].length ; i++){
		var 	button = (data.ideas[i].button == "play") ? "<i class= 'fa fa-play'></i>" : "<i class= 'fa fa-stop'></i>" ,
		result = "<div class='resultData'> <span> <img src='"+data.review[i].image+"''></span><span>"+data.review[i].message+"</span><span>"+button+"</span></div>";
	console.log(result)
	$(".reviewData").append(result);
	$(".reviewData .resultData").each(function(){
		color = colorCodes[Math.floor(Math.random()*colorCodes.length)];
		$(this).attr("style","border-left : 4px solid "+color+";");
	})
}

for (var i=0; i<data["approved"].length ; i++){
	var 	button = (data.ideas[i].button == "play") ? "<i class= 'fa fa-play'></i>" : "<i class= 'fa fa-stop'></i>" ,
		result = "<div class='resultData'> <span> <img src='"+data.approved[i].image+"''></span><span>"+data.approved[i].message+"</span><span>"+button+"</span></div>";
	$(".approvedData").append(result);
	$(".approvedData .resultData").each(function(){
		color = colorCodes[Math.floor(Math.random()*colorCodes.length)];
		$(this).attr("style","border-left : 4px solid "+color+";");
	})
}
