function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_625";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_625 = Ti.UI.createView({
        id: "widget_625"
    });
    $.__views.widget_625 && $.addTopLevelView($.__views.widget_625);
    $.__views.__alloyId15236 = Ti.UI.createView({
        id: "__alloyId15236"
    });
    $.__views.widget_625.add($.__views.__alloyId15236);
    $.__views.__alloyId15237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15237"
    });
    $.__views.__alloyId15236.add($.__views.__alloyId15237);
    $.__views.__alloyId15238 = Ti.UI.createView({
        id: "__alloyId15238"
    });
    $.__views.__alloyId15238 && $.addTopLevelView($.__views.__alloyId15238);
    $.__views.__alloyId15239 = Ti.UI.createView({
        id: "__alloyId15239"
    });
    $.__views.__alloyId15238.add($.__views.__alloyId15239);
    $.__views.__alloyId15240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15240"
    });
    $.__views.__alloyId15239.add($.__views.__alloyId15240);
    $.__views.__alloyId15241 = Ti.UI.createView({
        id: "__alloyId15241"
    });
    $.__views.__alloyId15241 && $.addTopLevelView($.__views.__alloyId15241);
    $.__views.__alloyId15242 = Ti.UI.createView({
        id: "__alloyId15242"
    });
    $.__views.__alloyId15241.add($.__views.__alloyId15242);
    $.__views.__alloyId15243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15243"
    });
    $.__views.__alloyId15242.add($.__views.__alloyId15243);
    $.__views.__alloyId15244 = Ti.UI.createView({
        id: "__alloyId15244"
    });
    $.__views.__alloyId15244 && $.addTopLevelView($.__views.__alloyId15244);
    $.__views.__alloyId15245 = Ti.UI.createView({
        id: "__alloyId15245"
    });
    $.__views.__alloyId15244.add($.__views.__alloyId15245);
    $.__views.__alloyId15246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15246"
    });
    $.__views.__alloyId15245.add($.__views.__alloyId15246);
    $.__views.__alloyId15247 = Ti.UI.createView({
        id: "__alloyId15247"
    });
    $.__views.__alloyId15247 && $.addTopLevelView($.__views.__alloyId15247);
    $.__views.__alloyId15248 = Ti.UI.createView({
        id: "__alloyId15248"
    });
    $.__views.__alloyId15247.add($.__views.__alloyId15248);
    $.__views.__alloyId15249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15249"
    });
    $.__views.__alloyId15248.add($.__views.__alloyId15249);
    $.__views.__alloyId15250 = Ti.UI.createView({
        id: "__alloyId15250"
    });
    $.__views.__alloyId15250 && $.addTopLevelView($.__views.__alloyId15250);
    $.__views.__alloyId15251 = Ti.UI.createView({
        id: "__alloyId15251"
    });
    $.__views.__alloyId15250.add($.__views.__alloyId15251);
    $.__views.__alloyId15252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15252"
    });
    $.__views.__alloyId15251.add($.__views.__alloyId15252);
    $.__views.__alloyId15253 = Ti.UI.createView({
        id: "__alloyId15253"
    });
    $.__views.__alloyId15253 && $.addTopLevelView($.__views.__alloyId15253);
    $.__views.__alloyId15254 = Ti.UI.createView({
        id: "__alloyId15254"
    });
    $.__views.__alloyId15253.add($.__views.__alloyId15254);
    $.__views.__alloyId15255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15255"
    });
    $.__views.__alloyId15254.add($.__views.__alloyId15255);
    $.__views.__alloyId15256 = Ti.UI.createView({
        id: "__alloyId15256"
    });
    $.__views.__alloyId15256 && $.addTopLevelView($.__views.__alloyId15256);
    $.__views.__alloyId15257 = Ti.UI.createView({
        id: "__alloyId15257"
    });
    $.__views.__alloyId15256.add($.__views.__alloyId15257);
    $.__views.__alloyId15258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15258"
    });
    $.__views.__alloyId15257.add($.__views.__alloyId15258);
    $.__views.__alloyId15259 = Ti.UI.createView({
        id: "__alloyId15259"
    });
    $.__views.__alloyId15259 && $.addTopLevelView($.__views.__alloyId15259);
    $.__views.__alloyId15260 = Ti.UI.createView({
        id: "__alloyId15260"
    });
    $.__views.__alloyId15259.add($.__views.__alloyId15260);
    $.__views.__alloyId15261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15261"
    });
    $.__views.__alloyId15260.add($.__views.__alloyId15261);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;