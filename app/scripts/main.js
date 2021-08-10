(function(){

    // Create cookie for user session.
    var visitCountValue;
    var optOutCookie;

    if(document.cookie){
        visitCountValue = parseInt(document.cookie
            .split('; ')
            .find(row => row.startsWith('visitCount='))
            .split('=')[1]);
        // optOutCookie = document.cookie
        //     .split('; ')
        //     .find(row => row.startsWith('opOut='))
        //     .split('=')[1];
    }

    // Measure visit count statistics via cookie.
    var increaseVisitCount = function() {
        visitCountValue++;
    }

    window.onload = function(){

        if(!optOutCookie){

            // If user's first time visiting, create cookie and set to 1 visit.
            if(visitCountValue === 0 || visitCountValue === undefined || isNaN(visitCountValue)){
                document.cookie = 'visitCount=1; expires=Thu, 26 Dec 2030 12:00:00 UTC';
            } else {
            // Otherwise, increase current number by 1.
                increaseVisitCount();
                document.cookie = 'visitCount=' + visitCountValue + '; expires=Thu, 26 Dec 2030 12:00:00 UTC';
            }
        }

        // Declaring DOM buttons which trigger survey component.
        var btnOpen = document.getElementById('openSurveyBtn'),
            btnClose = document.getElementById('closeSurveyBtn'),
            btnOptOut = document.getElementById('optOut');

        // Close survey.
        var closeSurvey = function(){
            var snackbar = document.getElementById('survey-container');
            snackbar.classList = 'survey-container close'
        }
        
        // Open survey.
        var openSurvey = function(){
            var snackbar = document.getElementById('survey-container');
            snackbar.classList = 'survey-container open'
        }

        // Event handler for open button.
        btnOpen.onclick = function(){
            openSurvey();
        }

        // Event handler for close survey button.
        btnClose.onclick = function(){
            closeSurvey();
        }

        // Event handler for opt out button.
        btnOptOut.onclick = function(){
            closeSurvey();
            document.cookie = 'optOut=true; expires=Thu, 26 Dec 2030 12:00:00 UTC';
        }
        
    }       
})();