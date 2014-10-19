function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_488";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_488 = Ti.UI.createView({
        id: "widget_488"
    });
    $.__views.widget_488 && $.addTopLevelView($.__views.widget_488);
    $.__views.__alloyId11258 = Ti.UI.createView({
        id: "__alloyId11258"
    });
    $.__views.widget_488.add($.__views.__alloyId11258);
    $.__views.__alloyId11259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11259"
    });
    $.__views.__alloyId11258.add($.__views.__alloyId11259);
    $.__views.__alloyId11260 = Ti.UI.createView({
        id: "__alloyId11260"
    });
    $.__views.__alloyId11260 && $.addTopLevelView($.__views.__alloyId11260);
    $.__views.__alloyId11261 = Ti.UI.createView({
        id: "__alloyId11261"
    });
    $.__views.__alloyId11260.add($.__views.__alloyId11261);
    $.__views.__alloyId11262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11262"
    });
    $.__views.__alloyId11261.add($.__views.__alloyId11262);
    $.__views.__alloyId11263 = Ti.UI.createView({
        id: "__alloyId11263"
    });
    $.__views.__alloyId11263 && $.addTopLevelView($.__views.__alloyId11263);
    $.__views.__alloyId11264 = Ti.UI.createView({
        id: "__alloyId11264"
    });
    $.__views.__alloyId11263.add($.__views.__alloyId11264);
    $.__views.__alloyId11265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11265"
    });
    $.__views.__alloyId11264.add($.__views.__alloyId11265);
    $.__views.__alloyId11266 = Ti.UI.createView({
        id: "__alloyId11266"
    });
    $.__views.__alloyId11266 && $.addTopLevelView($.__views.__alloyId11266);
    $.__views.__alloyId11267 = Ti.UI.createView({
        id: "__alloyId11267"
    });
    $.__views.__alloyId11266.add($.__views.__alloyId11267);
    $.__views.__alloyId11268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11268"
    });
    $.__views.__alloyId11267.add($.__views.__alloyId11268);
    $.__views.__alloyId11269 = Ti.UI.createView({
        id: "__alloyId11269"
    });
    $.__views.__alloyId11269 && $.addTopLevelView($.__views.__alloyId11269);
    $.__views.__alloyId11270 = Ti.UI.createView({
        id: "__alloyId11270"
    });
    $.__views.__alloyId11269.add($.__views.__alloyId11270);
    $.__views.__alloyId11271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11271"
    });
    $.__views.__alloyId11270.add($.__views.__alloyId11271);
    $.__views.__alloyId11272 = Ti.UI.createView({
        id: "__alloyId11272"
    });
    $.__views.__alloyId11272 && $.addTopLevelView($.__views.__alloyId11272);
    $.__views.__alloyId11273 = Ti.UI.createView({
        id: "__alloyId11273"
    });
    $.__views.__alloyId11272.add($.__views.__alloyId11273);
    $.__views.__alloyId11274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11274"
    });
    $.__views.__alloyId11273.add($.__views.__alloyId11274);
    $.__views.__alloyId11275 = Ti.UI.createView({
        id: "__alloyId11275"
    });
    $.__views.__alloyId11275 && $.addTopLevelView($.__views.__alloyId11275);
    $.__views.__alloyId11276 = Ti.UI.createView({
        id: "__alloyId11276"
    });
    $.__views.__alloyId11275.add($.__views.__alloyId11276);
    $.__views.__alloyId11277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11277"
    });
    $.__views.__alloyId11276.add($.__views.__alloyId11277);
    $.__views.__alloyId11278 = Ti.UI.createView({
        id: "__alloyId11278"
    });
    $.__views.__alloyId11278 && $.addTopLevelView($.__views.__alloyId11278);
    $.__views.__alloyId11279 = Ti.UI.createView({
        id: "__alloyId11279"
    });
    $.__views.__alloyId11278.add($.__views.__alloyId11279);
    $.__views.__alloyId11280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11280"
    });
    $.__views.__alloyId11279.add($.__views.__alloyId11280);
    $.__views.__alloyId11281 = Ti.UI.createView({
        id: "__alloyId11281"
    });
    $.__views.__alloyId11281 && $.addTopLevelView($.__views.__alloyId11281);
    $.__views.__alloyId11282 = Ti.UI.createView({
        id: "__alloyId11282"
    });
    $.__views.__alloyId11281.add($.__views.__alloyId11282);
    $.__views.__alloyId11283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11283"
    });
    $.__views.__alloyId11282.add($.__views.__alloyId11283);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;