  jQuery(document).ready(function () {
      jQuery('#tabs #links a').on('click', function (e) {
          var selectedTab = jQuery(this).attr('href');

          jQuery('#tabs ' + selectedTab).show().siblings().hide();
          jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

          e.preventDefault();
      });
  });
