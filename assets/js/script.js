$(document).ready(function () {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    // $('#menu-jk').scrollToFixed();
  }
});

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

// Form validation and submission using EmailJS
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("callbackForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Get form values
      const fullName = document.getElementById("fullName").value.trim();
      const mobileNumber = document.getElementById("mobileNumber").value.trim();
      const emailAddress = document.getElementById("emailAddress").value.trim();

      // Basic validation
      if (!fullName) {
        alert("Please enter your full name.");
        return;
      }

      if (!mobileNumber || !/^\d+$/.test(mobileNumber)) {
        alert("Please enter a valid mobile number (digits only).");
        return;
      }

      if (!emailAddress || !/\S+@\S+\.\S+/.test(emailAddress)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Initialize EmailJS (Make sure to include your User ID)
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);

      // Send the email using EmailJS
      emailjs
        .send("service_fpxnnvs", "template_i49dah4", {
          fullName: fullName,
          mobileNumber: mobileNumber,
          emailAddress: emailAddress,
        })
        .then(
          function (response) {
            alert("Your request has been sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            alert(
              "There was a problem sending your request. Please try again."
            );
            console.log("FAILED...", error);
          }
        );
    });
});
