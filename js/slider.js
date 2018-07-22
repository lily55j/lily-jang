// document.addEventListener("DOMContentLoaded", function() {
//   $('.single-item').slick({
//     fade: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     arrows: true
//   })
// })

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth > 768){
    var isSp = ".slider-img"
    var images = document.querySelectorAll(".slider-img")
  } else {
    var isSp = ".slider-img_sp"
    var images = document.querySelectorAll(".slider-img_sp")
  }

  var count = 0
  var speed = 2500

  setInterval(function() {
      count = count + 1 
      if (count == 3) {
        count = 0
      }

      for (let image of images){
        image.style.display = "none"
      }

      console.log(isSp + ".image" + count)
      var image = document.querySelector(isSp + ".image" + count)
        //console.log("image" , image)
        image.style.display = "block"


  }, speed)


})