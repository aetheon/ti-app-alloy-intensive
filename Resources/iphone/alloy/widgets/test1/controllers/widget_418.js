function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_418";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_418 = Ti.UI.createView({
        id: "widget_418"
    });
    $.__views.widget_418 && $.addTopLevelView($.__views.widget_418);
    $.__views.__alloyId9256 = Ti.UI.createView({
        id: "__alloyId9256"
    });
    $.__views.widget_418.add($.__views.__alloyId9256);
    $.__views.__alloyId9257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9257"
    });
    $.__views.__alloyId9256.add($.__views.__alloyId9257);
    $.__views.__alloyId9258 = Ti.UI.createView({
        id: "__alloyId9258"
    });
    $.__views.__alloyId9258 && $.addTopLevelView($.__views.__alloyId9258);
    $.__views.__alloyId9259 = Ti.UI.createView({
        id: "__alloyId9259"
    });
    $.__views.__alloyId9258.add($.__views.__alloyId9259);
    $.__views.__alloyId9260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9260"
    });
    $.__views.__alloyId9259.add($.__views.__alloyId9260);
    $.__views.__alloyId9261 = Ti.UI.createView({
        id: "__alloyId9261"
    });
    $.__views.__alloyId9261 && $.addTopLevelView($.__views.__alloyId9261);
    $.__views.__alloyId9262 = Ti.UI.createView({
        id: "__alloyId9262"
    });
    $.__views.__alloyId9261.add($.__views.__alloyId9262);
    $.__views.__alloyId9263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9263"
    });
    $.__views.__alloyId9262.add($.__views.__alloyId9263);
    $.__views.__alloyId9264 = Ti.UI.createView({
        id: "__alloyId9264"
    });
    $.__views.__alloyId9264 && $.addTopLevelView($.__views.__alloyId9264);
    $.__views.__alloyId9265 = Ti.UI.createView({
        id: "__alloyId9265"
    });
    $.__views.__alloyId9264.add($.__views.__alloyId9265);
    $.__views.__alloyId9266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9266"
    });
    $.__views.__alloyId9265.add($.__views.__alloyId9266);
    $.__views.__alloyId9267 = Ti.UI.createView({
        id: "__alloyId9267"
    });
    $.__views.__alloyId9267 && $.addTopLevelView($.__views.__alloyId9267);
    $.__views.__alloyId9268 = Ti.UI.createView({
        id: "__alloyId9268"
    });
    $.__views.__alloyId9267.add($.__views.__alloyId9268);
    $.__views.__alloyId9269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9269"
    });
    $.__views.__alloyId9268.add($.__views.__alloyId9269);
    $.__views.__alloyId9270 = Ti.UI.createView({
        id: "__alloyId9270"
    });
    $.__views.__alloyId9270 && $.addTopLevelView($.__views.__alloyId9270);
    $.__views.__alloyId9271 = Ti.UI.createView({
        id: "__alloyId9271"
    });
    $.__views.__alloyId9270.add($.__views.__alloyId9271);
    $.__views.__alloyId9272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9272"
    });
    $.__views.__alloyId9271.add($.__views.__alloyId9272);
    $.__views.__alloyId9273 = Ti.UI.createView({
        id: "__alloyId9273"
    });
    $.__views.__alloyId9273 && $.addTopLevelView($.__views.__alloyId9273);
    $.__views.__alloyId9274 = Ti.UI.createView({
        id: "__alloyId9274"
    });
    $.__views.__alloyId9273.add($.__views.__alloyId9274);
    $.__views.__alloyId9275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9275"
    });
    $.__views.__alloyId9274.add($.__views.__alloyId9275);
    $.__views.__alloyId9276 = Ti.UI.createView({
        id: "__alloyId9276"
    });
    $.__views.__alloyId9276 && $.addTopLevelView($.__views.__alloyId9276);
    $.__views.__alloyId9277 = Ti.UI.createView({
        id: "__alloyId9277"
    });
    $.__views.__alloyId9276.add($.__views.__alloyId9277);
    $.__views.__alloyId9278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9278"
    });
    $.__views.__alloyId9277.add($.__views.__alloyId9278);
    $.__views.__alloyId9279 = Ti.UI.createView({
        id: "__alloyId9279"
    });
    $.__views.__alloyId9279 && $.addTopLevelView($.__views.__alloyId9279);
    $.__views.__alloyId9280 = Ti.UI.createView({
        id: "__alloyId9280"
    });
    $.__views.__alloyId9279.add($.__views.__alloyId9280);
    $.__views.__alloyId9281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9281"
    });
    $.__views.__alloyId9280.add($.__views.__alloyId9281);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;