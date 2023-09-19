var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0; i<navMenuAnchorTag.length; i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
      event.preventDefault();
      var targetSectionId=this.textContent.trim().toLowerCase();
      var targetSection= document.getElementById(targetSectionId);
      
      interval= setInterval(function(){
        var targetSectionCoordinates=targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top<=0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0, 50);
      }, 20);
    });
}