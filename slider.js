Element.prototype.w_slider = function ({
    left = '.btn-left',
    right = '.btn-right',
    has_controls = false,
    controls_container = '.controls',
    controls = '.dot',
    debug = false,
} = {}) {
    const w_buttons = {
        left: this.querySelector('.w-slider-arrow-left'),
        right: this.querySelector('.w-slider-arrow-right'),
        controls: this.querySelectorAll('.w-slider-nav .w-slider-dot'),
    };

    const buttons = {
        left: this.querySelectorAll(left),
        right: this.querySelectorAll(right),
        controls: has_controls && this.querySelectorAll(controls_container),
    };

    buttons.left.forEach(
        (button) =>
            (button.onclick = function () {
                w_buttons.left.click();
            })
    );
    buttons.right.forEach(
        (button) =>
            (button.onclick = function () {
                w_buttons.right.click();
            })
    );
    if (has_controls) {
        buttons.controls.forEach((container) =>
            (function () {
                const current_controls = container.querySelectorAll(controls);
                current_controls.forEach(
                    (button, index) =>
                        (button.onclick = function () {
                            if (index >= w_buttons.controls.length)
                                w_buttons.controls[
                                    w_buttons.controls.length - 1
                                ].click();
                            else w_buttons.controls[index].click();
                        })
                );
            })()
        );
    }
    if (debug) {
        console.log(
            `Webflow helpers: \nSlider classes \nLeft button: ${left}\nRight button: ${right}\nControls container: ${controls_container}\nControls: ${controls}\n\nSlider components \n`
        );
        console.log(buttons);
    }
};

NodeList.prototype.w_slider = HTMLCollection.prototype.w_slider = function (
    options = {}
) {
    this.forEach((item) => item.w_slider(options));
};
