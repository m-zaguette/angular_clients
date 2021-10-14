import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-clients';

  ngAfterViewInit(): void{
    // (function($) {
    //   "use strict";
    //     var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    //       $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
    //           if (this.getAttribute("href") === path) {
    //               $(this).addClass("active");
    //           }
    //       });   
    //   $("#sidebarToggle").on("click", function(e) {
    //     console.log("Toggle clicado");
    //     e.preventDefault();
    //     $("#accordionSidebar").toggleClass("toggled");
    //   });
    // })(jQuery);
    
    (function($) {
      "use strict"; // Start of use strict
    
      // Toggle the side navigation
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          (<any>$('.sidebar .collapse')).collapse('hide');
        };
      });
    
      // Close any open menu accordions when window is resized below 768px
      $(window).resize(function() {
        if ((<any>$(window)).width() < 768) {
          (<any>$('.sidebar .collapse')).collapse('hide');
        };
        
        // Toggle the side navigation when window is resized below 480px
        if (<any>($(window)).width() < 480 && !$(".sidebar").hasClass("toggled")) {
          $("body").addClass("sidebar-toggled");
          $(".sidebar").addClass("toggled");
          (<any>$('.sidebar .collapse')).collapse('hide');
        };
      });
    
      // Scroll to top button appear
      $(document).on('scroll', function() {
        var scrollDistance = (<any>$(this).scrollTop());
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
        
    })(jQuery); // End of use strict
    
  }
}
