jQuery(document).ready(function( $ ) {
		// title fadeIn
		$(function() {
			$('#title').hide().fadeIn(7000);
		});
		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});
		// Footer btn setting
		$(function(){
			$('.fa').hover(
				function(){
					$(this).animate({
						'font-size':'50px'
					}, 300);
				},
				function(){
					$(this).animate({
						'font-size':'20px'
					}, 300);
				}
			);
		});

		// Smooth scroll for the menu and links with .scrollto classes
		$('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });

		$('.carousel').carousel({
      interval: 3500
    });

		// html Chart
		if($('#html').length) {

			var doughnutData = [{
	    	value: 95,
					color: "#f85c37"
	      },
	      {
	        value: 5,
	        color: "#ecf0f1"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
		};

				// css Chart
				if($('#css').length) {

					var doughnutData = [{
						value: 95,
							color: "#f85c37"
						},
						{
							value: 5,
							color: "#ecf0f1"
						}
					];
					var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);
				};

						// Javascript Chart
		if($('#javascript').length) {

			var doughnutData = [{
	    	value: 85,
					color: "#f85c37"
	      },
	      {
	        value: 15,
	        color: "#ecf0f1"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		};

				// php Chart
				if($('#php').length) {

					var doughnutData = [{
						value: 70,
							color: "#f85c37"
						},
						{
							value: 30,
							color: "#ecf0f1"
						}
					];
					var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
				};

		// mysql Chart
		if($('#mysql').length) {
			var doughnutData = [{
					value: 65,
					color: "#f85c37"
				},
				{
					value: 25,
					color: "#ecf0f1"
				}
			];
			var myDoughnut = new Chart(document.getElementById("mysql").getContext("2d")).Doughnut(doughnutData);
		}

		// bootstrap Chart
		if($('#bootstrap').length) {
			var doughnutData = [{
					value: 55,
					color: "#f85c37"
				},
				{
					value: 45,
					color: "#ecf0f1"
				}
			];
			var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
		}

});
