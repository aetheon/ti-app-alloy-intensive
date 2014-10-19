function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_313";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_313 = Ti.UI.createView({
        id: "widget_313"
    });
    $.__views.widget_313 && $.addTopLevelView($.__views.widget_313);
    $.__views.__alloyId6240 = Ti.UI.createView({
        id: "__alloyId6240"
    });
    $.__views.widget_313.add($.__views.__alloyId6240);
    $.__views.__alloyId6241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6241"
    });
    $.__views.__alloyId6240.add($.__views.__alloyId6241);
    $.__views.__alloyId6242 = Ti.UI.createView({
        id: "__alloyId6242"
    });
    $.__views.__alloyId6242 && $.addTopLevelView($.__views.__alloyId6242);
    $.__views.__alloyId6243 = Ti.UI.createView({
        id: "__alloyId6243"
    });
    $.__views.__alloyId6242.add($.__views.__alloyId6243);
    $.__views.__alloyId6244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6244"
    });
    $.__views.__alloyId6243.add($.__views.__alloyId6244);
    $.__views.__alloyId6245 = Ti.UI.createView({
        id: "__alloyId6245"
    });
    $.__views.__alloyId6245 && $.addTopLevelView($.__views.__alloyId6245);
    $.__views.__alloyId6246 = Ti.UI.createView({
        id: "__alloyId6246"
    });
    $.__views.__alloyId6245.add($.__views.__alloyId6246);
    $.__views.__alloyId6247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6247"
    });
    $.__views.__alloyId6246.add($.__views.__alloyId6247);
    $.__views.__alloyId6248 = Ti.UI.createView({
        id: "__alloyId6248"
    });
    $.__views.__alloyId6248 && $.addTopLevelView($.__views.__alloyId6248);
    $.__views.__alloyId6249 = Ti.UI.createView({
        id: "__alloyId6249"
    });
    $.__views.__alloyId6248.add($.__views.__alloyId6249);
    $.__views.__alloyId6250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6250"
    });
    $.__views.__alloyId6249.add($.__views.__alloyId6250);
    $.__views.__alloyId6251 = Ti.UI.createView({
        id: "__alloyId6251"
    });
    $.__views.__alloyId6251 && $.addTopLevelView($.__views.__alloyId6251);
    $.__views.__alloyId6252 = Ti.UI.createView({
        id: "__alloyId6252"
    });
    $.__views.__alloyId6251.add($.__views.__alloyId6252);
    $.__views.__alloyId6253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6253"
    });
    $.__views.__alloyId6252.add($.__views.__alloyId6253);
    $.__views.__alloyId6254 = Ti.UI.createView({
        id: "__alloyId6254"
    });
    $.__views.__alloyId6254 && $.addTopLevelView($.__views.__alloyId6254);
    $.__views.__alloyId6255 = Ti.UI.createView({
        id: "__alloyId6255"
    });
    $.__views.__alloyId6254.add($.__views.__alloyId6255);
    $.__views.__alloyId6256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6256"
    });
    $.__views.__alloyId6255.add($.__views.__alloyId6256);
    $.__views.__alloyId6257 = Ti.UI.createView({
        id: "__alloyId6257"
    });
    $.__views.__alloyId6257 && $.addTopLevelView($.__views.__alloyId6257);
    $.__views.__alloyId6258 = Ti.UI.createView({
        id: "__alloyId6258"
    });
    $.__views.__alloyId6257.add($.__views.__alloyId6258);
    $.__views.__alloyId6259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6259"
    });
    $.__views.__alloyId6258.add($.__views.__alloyId6259);
    $.__views.__alloyId6260 = Ti.UI.createView({
        id: "__alloyId6260"
    });
    $.__views.__alloyId6260 && $.addTopLevelView($.__views.__alloyId6260);
    $.__views.__alloyId6261 = Ti.UI.createView({
        id: "__alloyId6261"
    });
    $.__views.__alloyId6260.add($.__views.__alloyId6261);
    $.__views.__alloyId6262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6262"
    });
    $.__views.__alloyId6261.add($.__views.__alloyId6262);
    $.__views.__alloyId6263 = Ti.UI.createView({
        id: "__alloyId6263"
    });
    $.__views.__alloyId6263 && $.addTopLevelView($.__views.__alloyId6263);
    $.__views.__alloyId6264 = Ti.UI.createView({
        id: "__alloyId6264"
    });
    $.__views.__alloyId6263.add($.__views.__alloyId6264);
    $.__views.__alloyId6265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6265"
    });
    $.__views.__alloyId6264.add($.__views.__alloyId6265);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;