// Variables
const squarePicker   = $('#square-color');
const squareWrapper  = $('#square-color-wrapper');
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
    preview();

});

/**
* @description Updates color changes
*/
function colorPicker() {

    // Square color
    squarePicker.change(function () {
        let currentColor = squarePicker.val();
        squareWrapper.css('backgroundColor', currentColor);
        $('td.active').each(function() {
            $(this).css('backgroundColor', currentColor);
        });
    });
    squareWrapper.css('backgroundColor', squarePicker.val());

    // Background color
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

    // Clears canvas
    canvas.html('');


    // Format form values
    $(this).serializeArray().map((row) => data[row.name] = row.value);

    // Show current dimensions
    dimensions.text(data.height + 'x' + data.width);
    dimensionsElem.css('display', 'block').fadeIn(500);

    // Show canvas and preview button
    canvas.fadeIn(500);
    $('#preview').fadeIn(500);

    // Draws rows based on chosen height
    for (let i = 0; i < data.height; i++) {
        canvas.append('<tr></tr>');
    }

    // Draws cells based on chosen width
    for (let i = 0; i < data.width; i++) {
        $('tr').append('<td></td>');
    }

    // Calls painting listener
    paint();

};

/**
* @description Paints/re-paints clicked squares inside the canvas
*/
function paint() {

    $('td').click(function(e) {
        e.preventDefault();
        const currentColor = $('#square-color').val();
        // Removes color when the square is clicked again
        if (rgb2hex($(this).css('backgroundColor')) != currentColor) {
            $(this).css('backgroundColor', currentColor).addClass('active');
        } else {
            $(this).css('backgroundColor', 'transparent').removeClass('active');
        }
    });

};

/**
* @description Previews the pixel art as a PNG
*/
function preview() {
    $('#preview').click(function(e) {
        e.preventDefault();
        // Transforms the table to a canvas, displays it then prepare the link to download
        html2canvas(canvas, {
            onrendered: function (canvas) {
                $('.preview').html('');
                $('.preview').append(canvas).css('marginTop', '10px');
                let image = ($('canvas')[0]).toDataURL("image/png");
                let newData = image.replace(/^data:image\/png/, 'data:application/octet-stream');
                $('#download').attr('download', 'pixel-art.png').attr('href', newData).fadeIn(500);
            }
        });
    });
};

/**
* @description Helper function to transform rgb format to hex format
*/
function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return rgb != null ? "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]) : false;
};
