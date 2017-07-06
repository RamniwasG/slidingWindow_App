/*for draggin from left to right OR vice-versa */

var dragging = false;
$('#dragbar').mousedown(function(e){
   e.preventDefault();
   
   dragging = true;
   var main = $('#videoAndConsoleArea');
   var ghostbar = $('<div>',
                    {id:'ghostbar',
                     css: {
                            height: main.outerHeight(),
                            top: main.offset().top,
                            left: main.offset().left
                           }
                    }).appendTo('body');
   
    $(document).mousemove(function(e){
      ghostbar.css("left",e.pageX+2);
   });
});

$(document).mouseup(function(e){
   if (dragging) 
   {
       $('#codeArea').css("width",e.pageX+2);
       $('#videoAndConsoleArea').css("left",e.pageX+2);
       $('#ghostbar').remove();
       $(document).unbind('mousemove');
       dragging = false;
   }
});

/*for draggin top to bottom OR vice-versa*/

var draggingNew = false;
$('#newDragbar').mousedown(function(e){
   e.preventDefault();
   
   draggingNew = true;
   var main = $('#consoleArea');
   var dragbar = $("#newDragbar");
   var ghostbar = $('<div>',
                    {id:'ghostbar',
                     css: {
                            height: dragbar.outerHeight(),
                            width: dragbar.outerWidth(),
                            top: main.offset().top,
                            bottom: main.offset().bottom
                           }
                    }).appendTo('body');
   
    $(document).mousemove(function(e){
      ghostbar.css("top",e.pageY+2);
   });
});

$(document).mouseup(function(e){
   if (draggingNew) 
   {
       $('#videoArea').css("height",e.pageY+2);
       $('#consoleArea').css("top",e.pageY+2);
       $('#ghostbar').remove();
       $(document).unbind('mousemove');
       draggingNew = false;
   }
});



