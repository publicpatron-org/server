      $(document).ready(function() {

       var docHeight = $(window).height();
       var footerHeight = $('#footer').height();
       var footerTop = $('#footer').position().top + footerHeight;

       if (footerTop < docHeight) {
        $('#footer').css('margin-top', -35+ (docHeight - footerTop) + 'px');
       }
      });