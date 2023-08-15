var Links={
    setColor:function (color){
           //var alist=document.querySelectorAll('a');
   //var i=0;
   //while(i<alist.length){
   //alist[i].style.color='powderblue';
   //i=i+1;
   //}
   $('a').css('color',color);
       }
   }
       function LinksSetColor
   var Body={
       setColor:function(color){
       //document.querySelector('body').style.color=color;
       $('a').css('color',color);
       },
       setBackgroundColor:function (color){
        //document.querySelector('body').style.backgroundColor=color;
        $('a').css('backgrounndColor',color);
       }
   }
   function nightDayHandler(self){
       var target=document.querySelector('body');
   if (self.value==='night'){
   Body.setBackgroundColor='black';
   Body.setColor='white';
   self.value='day';
   
   LinksSetColor('powderblue');
   }else{
       Body.setBackgroundColor='white';
       Body.setColor='black';
   self.value='night';

   LinksSetColor('blue');
   }
}