cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.core.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.core.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    }
]
});