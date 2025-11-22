// Sony lens tag support patch
if (typeof EXIF !== 'undefined' && EXIF.Tags) {
    EXIF.Tags[0x0095] = "LensModel";
}

// Handle unmapped Sony lens tags
(function() {
    var originalGetTag = EXIF.getTag;
    EXIF.getTag = function(img, tag) {
        var result = originalGetTag.call(this, img, tag);
        if (result === undefined && img.exifdata && img.exifdata['undefined']) {
            if (tag === 'LensModel') {
                return img.exifdata['undefined'];
            }
        }
        return result;
    };
})();
