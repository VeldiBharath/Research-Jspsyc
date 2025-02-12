function set_slider() {
  // Initialize the slider
  $('#jspsych-html-slider-response-response').slider();

  // Hide all slider handles initially
  $('.ui-slider-handle').hide();

  // Event listener for when the slider is first clicked (slidestart event)
  $('#jspsych-html-slider-response-response').slider().on('slidestart', function(event, ui) {
      // Show the handle
      $(this).find('.ui-slider-handle').show();

      // Enable the next button
      $('#jspsych-html-slider-response-next').prop('disabled', false);

      // Update the displayed value with the initial slider value on first click
      update_slider_value($(this).slider('option', 'value'));
  });

  // Event listener for slider movement (slide event)
  $('#jspsych-html-slider-response-response').slider().on('slide', function(event, ui) {
      // Update the value display dynamically as the slider is moved
      update_slider_value(ui.value);
  });
}

// Function to update the slider value display
function update_slider_value(value) {
  document.getElementById('jspsych-html-slider-response-value').textContent = value;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function order_condensed(t) {
    //var order = [...Array(28).keys()].map(i => i + 2);
    var order = [...Array(28).keys()];
    order = shuffle(order);
    order.splice(18, 0, 29);    // X2
    order.splice(9, 0, 28);    // X1
    //console.log(order);
    return order;
}
