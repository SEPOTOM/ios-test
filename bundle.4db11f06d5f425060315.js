"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[179],{340:function(e,n,t){var a=t.p+"audio/tile-sound.mp3",u=new(window.AudioContext||window.webkitAudioContext),i=new Audio;i.src=a;var d=u.createMediaElementSource(i),o=u.createGain(),s=new StereoPannerNode(u,{pan:0});d.connect(o).connect(s).connect(u.destination);var c=document.querySelector("button");c.addEventListener("click",(function(){"suspended"===u.state&&u.resume(),"false"===c.dataset.playing&&"running"===u.state?(i.play(),c.dataset.playing="true"):"true"===c.dataset.playing&&(i.pause(),c.dataset.playing="false")})),i.addEventListener("ended",(function(){c.dataset.playing="false"}));var r=document.querySelector("#volume");r.addEventListener("input",(function(){o.gain.value=r.value}));var l=document.querySelector("#panner");l.addEventListener("input",(function(){s.pan.value=l.value}))}},function(e){e(e.s=340)}]);