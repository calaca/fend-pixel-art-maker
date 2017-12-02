$(document).ready(function() {
    colorPicker();
});

/**
* @description Updates colors when they change
*/
function colorPicker() {
    const linePicker  = $('#line-color');
    const lineWrapper = $('#line-color-wrapper');
    const bgPicker    = $('#bg-color');
    const bgWrapper   = $('#bg-color-wrapper');
    const canvas      = $('#canvas');

    colorPickerHandler(canvas, linePicker, lineWrapper, bgPicker, bgWrapper);
};

/**
* @description Handles color changes
* @param {object} canvas - The canvas/table to be painted on
* @param {object} linePicker - The line color picker
* @param {object} lineWrapper - The line color picker wrapper
* @param {object} bgPicker - The background color picker
* @param {object} bgWrapper - The background color picker wrapper
*/
function colorPickerHandler(canvas, linePicker, lineWrapper, bgPicker, bgWrapper) {
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
