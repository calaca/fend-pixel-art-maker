// Variables
const linePicker     = $('#line-color');
const lineWrapper    = $('#line-color-wrapper');
const bgPicker       = $('#bg-color');
const bgWrapper      = $('#bg-color-wrapper');
const canvas         = $('#canvas');
const dimensionsElem = $('.size');
const dimensions     = $('.size > .value');
const form           = $('#size');

/**
* @description Runs when the page has finished loading
*/
$(document).ready(function() {
    form.submit(makeGrid);
    colorPicker();
});

/**
* @description Updates color changes
*/
function colorPicker() {
    linePicker.change(function () {
        lineWrapper.css('backgroundColor', linePicker.val());
    });

    lineWrapper.css('backgroundColor', linePicker.val());

    bgPicker.change(function () {
        canvas.css('backgroundColor', bgPicker.val());
        bgWrapper.css('backgroundColor', bgPicker.val());
    });

    canvas.css('backgroundColor', bgPicker.val());
    bgWrapper.css('backgroundColor', bgPicker.val());
};

/**
* @description Updates grid based on user's input
* @param {object event} e - Submit event
*/
function makeGrid(e) {
    let data = {};
    e.preventDefault();
    // Format form values
    $(this).serializeArray().map((row) => data[row.name] = row.value);
    // Show current dimensions
    dimensions.text(data.height + 'x' + data.width);
    dimensionsElem.fadeIn(500);
    // Show canvas
    canvas.height(data.height);
    canvas.width(data.width);
    canvas.fadeIn(500);
};
