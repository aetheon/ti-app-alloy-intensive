function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_452";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_452 = Ti.UI.createView({
        id: "widget_452"
    });
    $.__views.widget_452 && $.addTopLevelView($.__views.widget_452);
    $.__views.__alloyId10244 = Ti.UI.createView({
        id: "__alloyId10244"
    });
    $.__views.widget_452.add($.__views.__alloyId10244);
    $.__views.__alloyId10245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10245"
    });
    $.__views.__alloyId10244.add($.__views.__alloyId10245);
    $.__views.__alloyId10246 = Ti.UI.createView({
        id: "__alloyId10246"
    });
    $.__views.__alloyId10246 && $.addTopLevelView($.__views.__alloyId10246);
    $.__views.__alloyId10247 = Ti.UI.createView({
        id: "__alloyId10247"
    });
    $.__views.__alloyId10246.add($.__views.__alloyId10247);
    $.__views.__alloyId10248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10248"
    });
    $.__views.__alloyId10247.add($.__views.__alloyId10248);
    $.__views.__alloyId10249 = Ti.UI.createView({
        id: "__alloyId10249"
    });
    $.__views.__alloyId10249 && $.addTopLevelView($.__views.__alloyId10249);
    $.__views.__alloyId10250 = Ti.UI.createView({
        id: "__alloyId10250"
    });
    $.__views.__alloyId10249.add($.__views.__alloyId10250);
    $.__views.__alloyId10251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10251"
    });
    $.__views.__alloyId10250.add($.__views.__alloyId10251);
    $.__views.__alloyId10252 = Ti.UI.createView({
        id: "__alloyId10252"
    });
    $.__views.__alloyId10252 && $.addTopLevelView($.__views.__alloyId10252);
    $.__views.__alloyId10253 = Ti.UI.createView({
        id: "__alloyId10253"
    });
    $.__views.__alloyId10252.add($.__views.__alloyId10253);
    $.__views.__alloyId10254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10254"
    });
    $.__views.__alloyId10253.add($.__views.__alloyId10254);
    $.__views.__alloyId10255 = Ti.UI.createView({
        id: "__alloyId10255"
    });
    $.__views.__alloyId10255 && $.addTopLevelView($.__views.__alloyId10255);
    $.__views.__alloyId10256 = Ti.UI.createView({
        id: "__alloyId10256"
    });
    $.__views.__alloyId10255.add($.__views.__alloyId10256);
    $.__views.__alloyId10257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10257"
    });
    $.__views.__alloyId10256.add($.__views.__alloyId10257);
    $.__views.__alloyId10258 = Ti.UI.createView({
        id: "__alloyId10258"
    });
    $.__views.__alloyId10258 && $.addTopLevelView($.__views.__alloyId10258);
    $.__views.__alloyId10259 = Ti.UI.createView({
        id: "__alloyId10259"
    });
    $.__views.__alloyId10258.add($.__views.__alloyId10259);
    $.__views.__alloyId10260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10260"
    });
    $.__views.__alloyId10259.add($.__views.__alloyId10260);
    $.__views.__alloyId10261 = Ti.UI.createView({
        id: "__alloyId10261"
    });
    $.__views.__alloyId10261 && $.addTopLevelView($.__views.__alloyId10261);
    $.__views.__alloyId10262 = Ti.UI.createView({
        id: "__alloyId10262"
    });
    $.__views.__alloyId10261.add($.__views.__alloyId10262);
    $.__views.__alloyId10263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10263"
    });
    $.__views.__alloyId10262.add($.__views.__alloyId10263);
    $.__views.__alloyId10264 = Ti.UI.createView({
        id: "__alloyId10264"
    });
    $.__views.__alloyId10264 && $.addTopLevelView($.__views.__alloyId10264);
    $.__views.__alloyId10265 = Ti.UI.createView({
        id: "__alloyId10265"
    });
    $.__views.__alloyId10264.add($.__views.__alloyId10265);
    $.__views.__alloyId10266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10266"
    });
    $.__views.__alloyId10265.add($.__views.__alloyId10266);
    $.__views.__alloyId10267 = Ti.UI.createView({
        id: "__alloyId10267"
    });
    $.__views.__alloyId10267 && $.addTopLevelView($.__views.__alloyId10267);
    $.__views.__alloyId10268 = Ti.UI.createView({
        id: "__alloyId10268"
    });
    $.__views.__alloyId10267.add($.__views.__alloyId10268);
    $.__views.__alloyId10269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10269"
    });
    $.__views.__alloyId10268.add($.__views.__alloyId10269);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;