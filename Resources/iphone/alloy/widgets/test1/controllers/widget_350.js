function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_350";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_350 = Ti.UI.createView({
        id: "widget_350"
    });
    $.__views.widget_350 && $.addTopLevelView($.__views.widget_350);
    $.__views.__alloyId7306 = Ti.UI.createView({
        id: "__alloyId7306"
    });
    $.__views.widget_350.add($.__views.__alloyId7306);
    $.__views.__alloyId7307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7307"
    });
    $.__views.__alloyId7306.add($.__views.__alloyId7307);
    $.__views.__alloyId7308 = Ti.UI.createView({
        id: "__alloyId7308"
    });
    $.__views.__alloyId7308 && $.addTopLevelView($.__views.__alloyId7308);
    $.__views.__alloyId7309 = Ti.UI.createView({
        id: "__alloyId7309"
    });
    $.__views.__alloyId7308.add($.__views.__alloyId7309);
    $.__views.__alloyId7310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7310"
    });
    $.__views.__alloyId7309.add($.__views.__alloyId7310);
    $.__views.__alloyId7311 = Ti.UI.createView({
        id: "__alloyId7311"
    });
    $.__views.__alloyId7311 && $.addTopLevelView($.__views.__alloyId7311);
    $.__views.__alloyId7312 = Ti.UI.createView({
        id: "__alloyId7312"
    });
    $.__views.__alloyId7311.add($.__views.__alloyId7312);
    $.__views.__alloyId7313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7313"
    });
    $.__views.__alloyId7312.add($.__views.__alloyId7313);
    $.__views.__alloyId7314 = Ti.UI.createView({
        id: "__alloyId7314"
    });
    $.__views.__alloyId7314 && $.addTopLevelView($.__views.__alloyId7314);
    $.__views.__alloyId7315 = Ti.UI.createView({
        id: "__alloyId7315"
    });
    $.__views.__alloyId7314.add($.__views.__alloyId7315);
    $.__views.__alloyId7316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7316"
    });
    $.__views.__alloyId7315.add($.__views.__alloyId7316);
    $.__views.__alloyId7317 = Ti.UI.createView({
        id: "__alloyId7317"
    });
    $.__views.__alloyId7317 && $.addTopLevelView($.__views.__alloyId7317);
    $.__views.__alloyId7318 = Ti.UI.createView({
        id: "__alloyId7318"
    });
    $.__views.__alloyId7317.add($.__views.__alloyId7318);
    $.__views.__alloyId7319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7319"
    });
    $.__views.__alloyId7318.add($.__views.__alloyId7319);
    $.__views.__alloyId7320 = Ti.UI.createView({
        id: "__alloyId7320"
    });
    $.__views.__alloyId7320 && $.addTopLevelView($.__views.__alloyId7320);
    $.__views.__alloyId7321 = Ti.UI.createView({
        id: "__alloyId7321"
    });
    $.__views.__alloyId7320.add($.__views.__alloyId7321);
    $.__views.__alloyId7322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7322"
    });
    $.__views.__alloyId7321.add($.__views.__alloyId7322);
    $.__views.__alloyId7323 = Ti.UI.createView({
        id: "__alloyId7323"
    });
    $.__views.__alloyId7323 && $.addTopLevelView($.__views.__alloyId7323);
    $.__views.__alloyId7324 = Ti.UI.createView({
        id: "__alloyId7324"
    });
    $.__views.__alloyId7323.add($.__views.__alloyId7324);
    $.__views.__alloyId7325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7325"
    });
    $.__views.__alloyId7324.add($.__views.__alloyId7325);
    $.__views.__alloyId7326 = Ti.UI.createView({
        id: "__alloyId7326"
    });
    $.__views.__alloyId7326 && $.addTopLevelView($.__views.__alloyId7326);
    $.__views.__alloyId7327 = Ti.UI.createView({
        id: "__alloyId7327"
    });
    $.__views.__alloyId7326.add($.__views.__alloyId7327);
    $.__views.__alloyId7328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7328"
    });
    $.__views.__alloyId7327.add($.__views.__alloyId7328);
    $.__views.__alloyId7329 = Ti.UI.createView({
        id: "__alloyId7329"
    });
    $.__views.__alloyId7329 && $.addTopLevelView($.__views.__alloyId7329);
    $.__views.__alloyId7330 = Ti.UI.createView({
        id: "__alloyId7330"
    });
    $.__views.__alloyId7329.add($.__views.__alloyId7330);
    $.__views.__alloyId7331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7331"
    });
    $.__views.__alloyId7330.add($.__views.__alloyId7331);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;