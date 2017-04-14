$(document).ready(function() {    
    $('#Hamburger').remove();
    addHamburger();
    checkAddress();
    resizePage();

});

window.onresize = function(){
    resizePage();
}

function resizePage(){

    if(window.innerWidth >= 640){
        $('#Hamburger').remove();
        $('.Nav-Option').each(function(i,obj){
            $(obj).removeClass('hidden');
            $(obj).removeClass('ms-u-slideUpOut10');
        }); 
        
        $('#partialViews').height('auto'); 
        $('.Site-Content').height($('auto').height()); 
        $('.Site-Content').height($('body').height()); 
        $('#partialViews').height($('.Site-Content').height()); 

    }
    else{
        $('.Site-Content').height('auto');
        $('#Nav').height('auto'); 
        $('#partialViews').height('auto'); 
        $('#trendingTopics').height('auto');  

        addHamburger();
    }

}

function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
}

function downloadZip(){
      window.open("https://github.com/OfficeDev/Office-IT-Pro-Deployment-Scripts/zipball/master");
        return false;
}

function loadSection(sectionId){
    window.location.hash = sectionId; 

    if (location.hash) {
      setTimeout(function() {

        window.scrollTo(0, 0);
      }, 1);
    }

    $('.Nav-Option').each(function(i,obj){
        $(obj).removeClass('Selected'); 
    });

    $('#'+sectionId).addClass('Selected');

    $('#partial-views').empty();
    $.ajax({
        type: 'GET',
        url: './Partials/'+sectionId+'.html',    
        dataType: 'html', 
        success:function(result)
        {
           $('#partialViews').html(result);   
        }
     });  
}         


// function toggleSection(item){

//     var section_body = $(item).parent().children('.Section-Body') 
//     var chevron = $(item).parent().children('.Section-Header').children('.section-Header-Chevron'); 

//     if(section_body.hasClass('ms-u-slideDownIn10')){
//         section_body.removeClass('ms-u-slideDownIn10');
//         section_body.addClass('ms-u-slideUpOut10');
//         section_body.addClass('hidden');

//         chevron.removeClass('open-Chevron');
//         chevron.addClass('close-Chevron');


//     }else if(section_body.hasClass('hidden') || section_body.hasClass('ms-u-slideUpOut10')){
//         var parentId =  $(item).parent().children('.Section-Header').attr('id') 
//         section_body.removeClass('hidden');
//         section_body.addClass('ms-u-slideDownIn10');
//         section_body.removeClass('ms-u-slideUpOut10');

//         chevron.removeClass('close-Chevron');
//         chevron.addClass('open-Chevron');

//         var pageId = location.hash.split('#')[1];
//         location ='#'+ pageId + '#' + $(item).attr('Id'); 
//     }
//     resizePage();
// }

// function loadPartial(sectionId,item){

//     var oldSectionId = location.hash.split('#')[1]
//     if(oldSectionId !== sectionId){
//         location.hash = '';
//         location.hash = '#'+sectionId;   
//     }

//     $('.Nav-Option').each(function(i,obj){
//         $(obj).removeClass('selected');
//         $(obj).parent().removeClass('selected');

//     });

//     $('#partial-views').empty();
//      $.ajax({
//             type: 'GET',
//             url: './Partials/'+sectionId+'.html',    
//             dataType: 'html', //dataType - html
//             success:function(result)
//             {
//                //Create a Div around the Partial View and fill the result
//                $('#partial-views').html(result);   
//                openSection();              
//             }
//          });           

//     $(item).addClass('selected');
//     $(item).parent().addClass('selected');

//     if($(window).width() < 480){
//       toggleHamburger();
//     }

// }

// function resizePage(){
//     var windowWidth = $(window).outerWidth(); 
//     var orientation = window.screen.orientation.type.split('-')[0]; 

//     if(windowWidth > 639){
//          $('#Hamburger').remove();
//          $('#siteNav').parents().each(function(i,obj){ 
//             $(obj).height('100%');
//         });

//           $('#Trending').parents().each(function(i,obj){ 
//             $(obj).height('100%');
//         });

//         $('#Trending').removeClass('ms-u-slideLeftIn40');
//         $('#Trending').removeClass('ms-u-slideRightOut40')
//         $('#Trending').addClass('ms-u-slideLeftIn40');


//         $('#siteNav').children().children().children().children('.Nav-Option').each(function(i,obj){
//         $(obj).removeClass('hidden')
//         $(obj).removeClass('ms-u-slideUpOut10');
//         $(obj).removeClass('ms-u-slideDownIn10');
//        });
//     }
//     else{

//         if( $('#Hamburger').length === 0){
//             var navHtml = "<div id='Hamburger' class='ms-Grid-row'>\
//                           <div class='ms-Grid-col ms-u-sm12'>\
//                               <div class='Nav-Option ms-font-l ms-fontWeight-regular ms-u-textAlignLeft' onclick='toggleHamburger()'>\
//                                   <i class='ms-Icon ms-Icon--GlobalNavButton ms-fontWeight-regular'></i>\
//                               </div>\
//                           </div>\
//                        </div>  "

//            $('#siteNav').children().children().children().children('.Nav-Option').each(function(i,obj){
//             $(obj).addClass('hidden')
//            });

//            navHtml += $('#siteNav').html();
//            $('#siteNav').html(navHtml); 
//         }

//         $('#siteNav').parents().each(function(i,obj){ 
//             $(obj).height('auto');
//         });

//            $('#Trending').parents().each(function(i,obj){ 
//             $(obj).height('auto');
//         });

//         $('#Trending').removeClass('ms-u-slideLeftIn40');
//         $('#Trending').removeClass('ms-u-slideRightOut40')
//         $('#Trending').addClass('ms-u-slideRightOut40');

//         // $('#Trending').height('auto');
//         // $('#siteNav').height('auto');
//     }
// }

// function openSection(){
//     var pageId = location.hash.split('#')[1];
//     var sectionId = location.hash.split('#')[2];

//      if(sectionId && pageId === "Faq"){
//             var section_body = $('#'+sectionId).parent().children('.Section-Body') 
//             var chevron = $('#sectionId').parent().children('.Section-Header').children('.section-Header-Chevron'); 

//             if(section_body.hasClass('hidden') || section_body.hasClass('ms-u-slideUpOut10')){
//             section_body.removeClass('hidden');
//             section_body.addClass('ms-u-slideDownIn10');
//             section_body.removeClass('ms-u-slideUpOut10');

//             chevron.removeClass('close-Chevron');
//             chevron.addClass('open-Chevron');
//             $("html, body").animate({ scrollTop: $('#'+sectionId).offset().top }, 500);

//         }
//     }   
// }

function toggleHamburger(){
     $('.Nav-Option').each(function(i,obj){

        if($(obj).hasClass('hidden') || $(obj).hasClass('ms-u-slideUpOut10')){
            $(obj).removeClass('hidden');
            $(obj).removeClass('ms-u-slideUpOut10');
            $(obj).addClass('ms-u-slideDownIn10');
        }
        else if (!$(obj).hasClass('hidden') && $(obj).attr('onclick') != "toggleHamburger()"){
            $(obj).removeClass('ms-u-slideDownIn10');
            $(obj).addClass('ms-u-slideUpOut10');           
            $(obj).addClass('hidden');

        }});
}

function addHamburger(){
    if( $('#Hamburger').length === 0 && window.innerWidth < 640){
            var navHtml = "<div id='Hamburger' class='ms-Grid-row'>\
                          <div class='ms-Grid-col ms-u-sm12'>\
                              <div class='Nav-Option ms-font-l ms-fontWeight-regular ms-u-textAlignLeft' onclick='toggleHamburger()'>\
                                  <i class='ms-Icon ms-Icon--GlobalNavButton ms-fontWeight-regular'></i>\
                              </div>\
                          </div>\
                       </div>  "

           $('.Nav-Option').each(function(i,obj){
            $(obj).addClass('hidden')
           });

           $('#Nav').find('.ms-Grid').prepend(navHtml);
        }

}

function checkAddress(){
    var pageId = location.hash.split('#')[1];
    var sectionId = location.hash.split('#')[2];
    resizePage();

    if(pageId === undefined){
        pageId = 'home' 
    }  
    
    $('.Nav-Option').each(function(i,obj){
         var onclickvalue = ($(obj).attr('onClick'))        
        if(onclickvalue.indexOf(pageId) > -1){
            $(obj).click();
        }
    });
}

