"use strict";

(function () {
  $(".menu-burger-btn").click(function (event) {
    $(".menu-burger-btn, .menu__list").toggleClass("active");
  });
  $(".recent-works__carousel").slick({
    dots: true
  });
  $(".staff-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1
  }); //AIzaSyD--9djeM8ipZBf9PskY_QMV3vEw9b9dmU

  var map;

  function initMap() {
    var pozition = {
      lat: 50.458560332526154,
      lng: 30.39665523997808
    };
    map = new google.maps.Map(document.getElementById("map"), {
      center: pozition,
      zoom: 18
    });
    var marker = new google.maps.Marker({
      position: pozition,
      map: map,
      icon: "../image/marker.png"
    });
  }

  window.initMap = initMap;
  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(this);

    if (!valideyt(this)) {
      this.submit();
    }
  });

  function valideyt(form) {
    var isError = false;

    for (var i = 0; i < form.length; i++) {
      var elementForm = form[i];

      if (elementForm.dataset.required && elementForm.value === "") {
        isError = true;
        elementForm.classList.add("error");
        elementForm.addEventListener("input", removeErrorClass);
      }
    }

    return isError;
  }

  function removeErrorClass() {
    this.classList.remove("error");
    this.removeEventListener("input", removeErrorClass);
    console.log("dfrgsdh");
  }

  $("#go-to-top").each(function () {
    $(this).click(function () {
      $("html,body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });
  });
  var goTop = document.getElementById("go-to-top");
  var appearsHeader = document.querySelector(".header");
  var isShouwGoTop = false;
  window.addEventListener("scroll", function (event) {
    console.log(window.pageYOffset);
    setTimeout(function () {
      if (window.pageYOffset > 300 && !isShouwGoTop) {
        goTop.classList.add("active");
        isShouwGoTop = true;
      } else if (window.pageYOffset <= 300 && isShouwGoTop) {
        goTop.classList.remove("active");
        isShouwGoTop = false;
      }

      if (window.pageYOffset > 300) {
        appearsHeader.classList.add("sticet");
      } else {
        appearsHeader.classList.remove("sticet");
      }
    }, 0);
  });
})();