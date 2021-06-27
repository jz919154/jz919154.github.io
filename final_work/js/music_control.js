// JavaScript Document
		var music = document.getElementById("audio1");
		var toggleBtn = document.getElementById("play");
		function toggleMusic() 
		{
			if (music.paused)
			{
				music.play(); //如果音乐未播放则播放音乐
				document.getElementById("start").src = "img/pause.png";
			} else {
				music.pause(); //暂停音乐
				document.getElementById("start").src = "img/play.png";
			}
		}
