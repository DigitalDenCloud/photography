// Sony lens tag support patch
if (typeof EXIF !== 'undefined' && EXIF.Tags) {
    EXIF.Tags[0x0095] = "LensModel";
}
