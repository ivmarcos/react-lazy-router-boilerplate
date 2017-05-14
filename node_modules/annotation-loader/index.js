module.exports = function(content) {
    var currentLoader = this.options.module.loaders[this.loaderIndex];
    var annotations = currentLoader.annotations;
    var i = 0;
    var iMax = annotations.length;

    for (; i < iMax; i += 1) {
        var annotation = annotations[i];
        var annotationFor = annotation['for'];
        content = content.replace(
            new RegExp(
                '\\/\\*@'
                    + annotationFor
                    + '\\*\\/([\\w\\.=+\\-<>,\'"/%/\\[\\];:(){}\\s]*)\\*@\\/'
                    + annotationFor + '\\*\\/',
                'g'),
            annotation['do']
        );
    }

    return content;
};