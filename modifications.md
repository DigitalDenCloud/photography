# Modifications to Photography Theme

## Camera Lens EXIF Support

**What it does:** Displays camera lens information on photos (e.g., "E 18-135mm F3.5-5.6 OSS")

**Files modified:**
- `assets/js/exif-patch.js` (created) - Patches EXIF.js to recognize camera lens tags
- `_config.yml` - Updated EXIF configuration
- `_includes/footer.html` - Changed to load `exif.js` instead of `exif.min.js`

**To customize:** Edit the `exif:` configuration in `_config.yml`

**How it works:**
The default EXIF.js library doesn't recognize all camera lens tags. This patch adds support by:
1. Mapping camera lens tags to "LensModel"
2. Handling unmapped tags that come through as undefined

**Supported:**
Works with most camera brands that embed lens data in EXIF. If it doesn't work with your camera, your camera may not store lens information in standard EXIF fields.

---

## EXIF Configuration

Made the EXIF field configuration more readable and user-friendly.

**Available fields:**
- Model - Camera model
- LensModel - Lens name
- FocalLength - Focal length in mm
- FNumber - Aperture
- ExposureTime - Shutter speed
- ISOSpeedRatings - ISO sensitivity
- Make - Camera brand

See `_config.yml` for examples on how to customize.