

jQuery(document).ready(function () {
  var connection0 = jQuery('#text1').connections({ to: '#img1' });
  var connection1 = jQuery('#img1').connections({ to: '#img2' });
  var connection2 = jQuery('#img2').connections({ to: '#img3' });
  var connection3 = jQuery('#img3').connections({ to: '#img4' });
  var connection4 = jQuery('#img4').connections({ to: '#img5' });

  $(window).on('resize', function () {
    connection0.connections('update');
    connection1.connections('update');
    connection2.connections('update');
    connection3.connections('update');
    connection4.connections('update');
  });

});

