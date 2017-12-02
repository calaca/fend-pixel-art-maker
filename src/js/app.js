// Color picker
    const linePicker = document.getElementById('line-color');
    const lineWrapper = document.getElementById('line-color-wrapper');
    const bgPicker = document.getElementById('bg-color');
    const bgWrapper = document.getElementById('bg-color-wrapper');

    linePicker.onchange = function () {
        lineWrapper.style.backgroundColor = linePicker.value;
    }

    lineWrapper.style.backgroundColor = linePicker.value;

    bgPicker.onchange = function () {
        bgWrapper.style.backgroundColor = bgPicker.value;
    }

    bgWrapper.style.backgroundColor = bgPicker.value;
