!function(){var c;document.cookie;window.onload=function(){0===c||void 0===c||isNaN(c)?document.cookie="visitCount=1; expires=Thu, 26 Dec 2030 12:00:00 UTC":(c++,document.cookie="visitCount="+c+"; expires=Thu, 26 Dec 2030 12:00:00 UTC");var e=document.getElementById("openSurveyBtn"),n=document.getElementById("closeSurveyBtn"),o=document.getElementById("optOut"),t=function(){document.getElementById("survey-container").classList="survey-container close"};e.onclick=function(){document.getElementById("survey-container").classList="survey-container open"},n.onclick=function(){t()},o.onclick=function(){t(),document.cookie="optOut=true; expires=Thu, 26 Dec 2030 12:00:00 UTC"}}}();