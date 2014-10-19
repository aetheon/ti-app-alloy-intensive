function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_556";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_556 = Ti.UI.createView({
        id: "widget_556"
    });
    $.__views.widget_556 && $.addTopLevelView($.__views.widget_556);
    $.__views.__alloyId13234 = Ti.UI.createView({
        id: "__alloyId13234"
    });
    $.__views.widget_556.add($.__views.__alloyId13234);
    $.__views.__alloyId13235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13235"
    });
    $.__views.__alloyId13234.add($.__views.__alloyId13235);
    $.__views.__alloyId13236 = Ti.UI.createView({
        id: "__alloyId13236"
    });
    $.__views.__alloyId13236 && $.addTopLevelView($.__views.__alloyId13236);
    $.__views.__alloyId13237 = Ti.UI.createView({
        id: "__alloyId13237"
    });
    $.__views.__alloyId13236.add($.__views.__alloyId13237);
    $.__views.__alloyId13238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13238"
    });
    $.__views.__alloyId13237.add($.__views.__alloyId13238);
    $.__views.__alloyId13239 = Ti.UI.createView({
        id: "__alloyId13239"
    });
    $.__views.__alloyId13239 && $.addTopLevelView($.__views.__alloyId13239);
    $.__views.__alloyId13240 = Ti.UI.createView({
        id: "__alloyId13240"
    });
    $.__views.__alloyId13239.add($.__views.__alloyId13240);
    $.__views.__alloyId13241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13241"
    });
    $.__views.__alloyId13240.add($.__views.__alloyId13241);
    $.__views.__alloyId13242 = Ti.UI.createView({
        id: "__alloyId13242"
    });
    $.__views.__alloyId13242 && $.addTopLevelView($.__views.__alloyId13242);
    $.__views.__alloyId13243 = Ti.UI.createView({
        id: "__alloyId13243"
    });
    $.__views.__alloyId13242.add($.__views.__alloyId13243);
    $.__views.__alloyId13244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13244"
    });
    $.__views.__alloyId13243.add($.__views.__alloyId13244);
    $.__views.__alloyId13245 = Ti.UI.createView({
        id: "__alloyId13245"
    });
    $.__views.__alloyId13245 && $.addTopLevelView($.__views.__alloyId13245);
    $.__views.__alloyId13246 = Ti.UI.createView({
        id: "__alloyId13246"
    });
    $.__views.__alloyId13245.add($.__views.__alloyId13246);
    $.__views.__alloyId13247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13247"
    });
    $.__views.__alloyId13246.add($.__views.__alloyId13247);
    $.__views.__alloyId13248 = Ti.UI.createView({
        id: "__alloyId13248"
    });
    $.__views.__alloyId13248 && $.addTopLevelView($.__views.__alloyId13248);
    $.__views.__alloyId13249 = Ti.UI.createView({
        id: "__alloyId13249"
    });
    $.__views.__alloyId13248.add($.__views.__alloyId13249);
    $.__views.__alloyId13250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13250"
    });
    $.__views.__alloyId13249.add($.__views.__alloyId13250);
    $.__views.__alloyId13251 = Ti.UI.createView({
        id: "__alloyId13251"
    });
    $.__views.__alloyId13251 && $.addTopLevelView($.__views.__alloyId13251);
    $.__views.__alloyId13252 = Ti.UI.createView({
        id: "__alloyId13252"
    });
    $.__views.__alloyId13251.add($.__views.__alloyId13252);
    $.__views.__alloyId13253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13253"
    });
    $.__views.__alloyId13252.add($.__views.__alloyId13253);
    $.__views.__alloyId13254 = Ti.UI.createView({
        id: "__alloyId13254"
    });
    $.__views.__alloyId13254 && $.addTopLevelView($.__views.__alloyId13254);
    $.__views.__alloyId13255 = Ti.UI.createView({
        id: "__alloyId13255"
    });
    $.__views.__alloyId13254.add($.__views.__alloyId13255);
    $.__views.__alloyId13256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13256"
    });
    $.__views.__alloyId13255.add($.__views.__alloyId13256);
    $.__views.__alloyId13257 = Ti.UI.createView({
        id: "__alloyId13257"
    });
    $.__views.__alloyId13257 && $.addTopLevelView($.__views.__alloyId13257);
    $.__views.__alloyId13258 = Ti.UI.createView({
        id: "__alloyId13258"
    });
    $.__views.__alloyId13257.add($.__views.__alloyId13258);
    $.__views.__alloyId13259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13259"
    });
    $.__views.__alloyId13258.add($.__views.__alloyId13259);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;