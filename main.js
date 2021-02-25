var grids = document.querySelectorAll(".grid");

// Transform nodeList in array of elements
var gridElements = [...grids];

// Masonry config
var options = {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  horizontalOrder: false
}

// Loop through every grid element
gridElements.forEach(function(elem) {
  // Wait for every image to finish loading
  imagesLoaded(elem, function () {
    // Now that every image has loaded we can initialize Masonry.
    let msnry = new Masonry(elem, options);
    // Add class to fade in images
    elem.classList.add("grid--loaded");
  });
});
