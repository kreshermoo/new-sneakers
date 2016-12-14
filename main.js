var productButton = $("#product-details-button");
var sizeButton = $("#size-fit-button");
var reviewsButton = $("#reviews-button");

var buyNowButton = $(".buy-now");
var cartCount = 0;


buyNowButton.on("click", function(){
  buyNowButton.text("Added to Cart");
  cartCount++;
  $("#numberInCart").text("(" + cartCount + ")")
});

buyNowButton.on("mouseover", function(){
  buyNowButton.css("cursor","pointer");
});

buyNowButton.on("mouseleave", function(){
  buyNowButton.text("BUY NOW!");
});

productButton.on("mouseover", function(){
  productButton.css("cursor", "pointer");
});

sizeButton.on("mouseover", function(){
  sizeButton.css("cursor", "pointer");
});

reviewsButton.on("mouseover", function(){
  reviewsButton.css("cursor", "pointer");
});

$("#size-fit").hide();
$("#reviews").hide();

productButton.on("click", function(){
  productButton.css("color", "#B32900");
  productButton.css("font-weight", "bold");
  sizeButton.css("font-weight", "normal");
  sizeButton.css("color", "#FF512F");
  reviewsButton.css("color", "#FF512F");
  reviewsButton.css("font-weight", "normal");
  $("#product-details").show();
  $("#size-fit").hide();
  $("#reviews").hide();
});

sizeButton.on("click", function(){
  sizeButton.css("color", "#B32900");
  sizeButton.css("font-weight", "bold");
  reviewsButton.css("color", "#FF512F");
  reviewsButton.css("font-weight", "normal");
  productButton.css("color", "#FF512F");
  productButton.css("font-weight", "normal");
  $("#size-fit").show();
  $("#product-details").hide();
  $("#reviews").hide();
});

reviewsButton.on("click", function(){
  reviewsButton.css("color", "#B32900");
  reviewsButton.css("font-weight", "bold");
  sizeButton.css("color", "#FF512F");
  sizeButton.css("font-weight", "normal");
  productButton.css("color", "#FF512F");
  productButton.css("font-weight", "normal");
  $("#reviews").show();
  $("#product-details").hide();
  $("#size-fit").hide();
});
