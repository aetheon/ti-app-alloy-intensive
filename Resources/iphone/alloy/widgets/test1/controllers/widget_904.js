function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_904";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_904 = Ti.UI.createView({
        id: "widget_904"
    });
    $.__views.widget_904 && $.addTopLevelView($.__views.widget_904);
    $.__views.__alloyId23296 = Ti.UI.createView({
        id: "__alloyId23296"
    });
    $.__views.widget_904.add($.__views.__alloyId23296);
    $.__views.__alloyId23297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23297"
    });
    $.__views.__alloyId23296.add($.__views.__alloyId23297);
    $.__views.__alloyId23298 = Ti.UI.createView({
        id: "__alloyId23298"
    });
    $.__views.__alloyId23298 && $.addTopLevelView($.__views.__alloyId23298);
    $.__views.__alloyId23299 = Ti.UI.createView({
        id: "__alloyId23299"
    });
    $.__views.__alloyId23298.add($.__views.__alloyId23299);
    $.__views.__alloyId23300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23300"
    });
    $.__views.__alloyId23299.add($.__views.__alloyId23300);
    $.__views.__alloyId23301 = Ti.UI.createView({
        id: "__alloyId23301"
    });
    $.__views.__alloyId23301 && $.addTopLevelView($.__views.__alloyId23301);
    $.__views.__alloyId23302 = Ti.UI.createView({
        id: "__alloyId23302"
    });
    $.__views.__alloyId23301.add($.__views.__alloyId23302);
    $.__views.__alloyId23303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23303"
    });
    $.__views.__alloyId23302.add($.__views.__alloyId23303);
    $.__views.__alloyId23304 = Ti.UI.createView({
        id: "__alloyId23304"
    });
    $.__views.__alloyId23304 && $.addTopLevelView($.__views.__alloyId23304);
    $.__views.__alloyId23305 = Ti.UI.createView({
        id: "__alloyId23305"
    });
    $.__views.__alloyId23304.add($.__views.__alloyId23305);
    $.__views.__alloyId23306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23306"
    });
    $.__views.__alloyId23305.add($.__views.__alloyId23306);
    $.__views.__alloyId23307 = Ti.UI.createView({
        id: "__alloyId23307"
    });
    $.__views.__alloyId23307 && $.addTopLevelView($.__views.__alloyId23307);
    $.__views.__alloyId23308 = Ti.UI.createView({
        id: "__alloyId23308"
    });
    $.__views.__alloyId23307.add($.__views.__alloyId23308);
    $.__views.__alloyId23309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23309"
    });
    $.__views.__alloyId23308.add($.__views.__alloyId23309);
    $.__views.__alloyId23310 = Ti.UI.createView({
        id: "__alloyId23310"
    });
    $.__views.__alloyId23310 && $.addTopLevelView($.__views.__alloyId23310);
    $.__views.__alloyId23311 = Ti.UI.createView({
        id: "__alloyId23311"
    });
    $.__views.__alloyId23310.add($.__views.__alloyId23311);
    $.__views.__alloyId23312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23312"
    });
    $.__views.__alloyId23311.add($.__views.__alloyId23312);
    $.__views.__alloyId23313 = Ti.UI.createView({
        id: "__alloyId23313"
    });
    $.__views.__alloyId23313 && $.addTopLevelView($.__views.__alloyId23313);
    $.__views.__alloyId23314 = Ti.UI.createView({
        id: "__alloyId23314"
    });
    $.__views.__alloyId23313.add($.__views.__alloyId23314);
    $.__views.__alloyId23315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23315"
    });
    $.__views.__alloyId23314.add($.__views.__alloyId23315);
    $.__views.__alloyId23316 = Ti.UI.createView({
        id: "__alloyId23316"
    });
    $.__views.__alloyId23316 && $.addTopLevelView($.__views.__alloyId23316);
    $.__views.__alloyId23317 = Ti.UI.createView({
        id: "__alloyId23317"
    });
    $.__views.__alloyId23316.add($.__views.__alloyId23317);
    $.__views.__alloyId23318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23318"
    });
    $.__views.__alloyId23317.add($.__views.__alloyId23318);
    $.__views.__alloyId23319 = Ti.UI.createView({
        id: "__alloyId23319"
    });
    $.__views.__alloyId23319 && $.addTopLevelView($.__views.__alloyId23319);
    $.__views.__alloyId23320 = Ti.UI.createView({
        id: "__alloyId23320"
    });
    $.__views.__alloyId23319.add($.__views.__alloyId23320);
    $.__views.__alloyId23321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23321"
    });
    $.__views.__alloyId23320.add($.__views.__alloyId23321);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;