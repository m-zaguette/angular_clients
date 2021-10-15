import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  applicationName: string = "Dashboard";
  sideBarItemOne: string = "Home";
  sideBarItemTwo: string = "Clients";
  sideBarItemThree: string = "Utilities";
  sideBarItemFour: string = "Pages";
  sideBarItemFive: string = "Charts";
  sideBarItemSix: string = "Tables";

  constructor() { }

  ngAfterViewInit(): void{
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
