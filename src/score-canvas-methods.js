export const renderCanvas = function(canvas, text, width) {
    const context = canvas.getContext('2d');
    width = width || canvas.clientWidth;
    setCanvasSizes(context, width, text);
    clearCanvas(context);
    context.font = '5rem Serenissima';
    context.textBaseline = 'top';
    context.fillStyle = '#2c3e50';
    fillTextMultiline(context, text, 0, 0, measureTextHeight(context), width);
};

export const clearCanvas = function(context) {
    let ratio = pixelRatio(context);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
};

export const setCanvasSizes = function(context, width, text) {
    let ratio = pixelRatio(context);
    let height = getCanvasHeight(context, text, width);
    context.canvas.width = width * ratio;
    context.canvas.height = height * ratio;
    context.canvas.style.width = width + 'px';
    context.canvas.style.height = height + 'px';
};

export const getCanvasHeight = function(context, text, width) {
    return countTextLines(context, text, width) * measureTextHeight(context);
};

export const pixelRatio = function(context) {
    let dpr = window.devicePixelRatio || 1,
        bsr = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
    return dpr / bsr;
};

export const fillTextMultiline = function(context, text, x, y, lineHeight, fitWidth) {
    // https://stackoverflow.com/a/4478894/9009012
    // https://codepen.io/bramus/pen/eZYqoO
    fitWidth = fitWidth || 0;
    if (fitWidth <= 0) {
        context.fillText(text, x, y);
        return;
    }
    for (let idx = 1; idx <= text.length; idx++) {
        let str = text.substr(0, idx);
        if(context.measureText(str).width > fitWidth) {
            context.fillText(text.substr(0, idx-1), x, y);
            fillTextMultiline(context, text.substr(idx-1), x, y + lineHeight, lineHeight,  fitWidth);
            return;
        }
    }
    context.fillText(text, x, y);
};

export const countTextLines = function(context, text, fitWidth) {
    let lines = 1;
    for (let idx = 1; idx <= text.length; idx++) {
        let str = text.substr(0, idx);
        if(context.measureText(str).width > fitWidth) {
            return lines + countTextLines(context, text.substr(idx-1), fitWidth);
        }
    }
    return lines;
};

export const measureTextHeight = function(context) {
    const ratio = 10/49;
    return context.measureText('C3').width / ratio;
};
