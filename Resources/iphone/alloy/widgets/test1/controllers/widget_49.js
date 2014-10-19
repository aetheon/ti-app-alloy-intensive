function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_49";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_49 = Ti.UI.createView({
        id: "widget_49"
    });
    $.__views.widget_49 && $.addTopLevelView($.__views.widget_49);
    $.__views.__alloyId11310 = Ti.UI.createView({
        id: "__alloyId11310"
    });
    $.__views.widget_49.add($.__views.__alloyId11310);
    $.__views.__alloyId11311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11311"
    });
    $.__views.__alloyId11310.add($.__views.__alloyId11311);
    $.__views.__alloyId11312 = Ti.UI.createView({
        id: "__alloyId11312"
    });
    $.__views.__alloyId11312 && $.addTopLevelView($.__views.__alloyId11312);
    $.__views.__alloyId11313 = Ti.UI.createView({
        id: "__alloyId11313"
    });
    $.__views.__alloyId11312.add($.__views.__alloyId11313);
    $.__views.__alloyId11314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11314"
    });
    $.__views.__alloyId11313.add($.__views.__alloyId11314);
    $.__views.__alloyId11315 = Ti.UI.createView({
        id: "__alloyId11315"
    });
    $.__views.__alloyId11315 && $.addTopLevelView($.__views.__alloyId11315);
    $.__views.__alloyId11316 = Ti.UI.createView({
        id: "__alloyId11316"
    });
    $.__views.__alloyId11315.add($.__views.__alloyId11316);
    $.__views.__alloyId11317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11317"
    });
    $.__views.__alloyId11316.add($.__views.__alloyId11317);
    $.__views.__alloyId11318 = Ti.UI.createView({
        id: "__alloyId11318"
    });
    $.__views.__alloyId11318 && $.addTopLevelView($.__views.__alloyId11318);
    $.__views.__alloyId11319 = Ti.UI.createView({
        id: "__alloyId11319"
    });
    $.__views.__alloyId11318.add($.__views.__alloyId11319);
    $.__views.__alloyId11320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11320"
    });
    $.__views.__alloyId11319.add($.__views.__alloyId11320);
    $.__views.__alloyId11321 = Ti.UI.createView({
        id: "__alloyId11321"
    });
    $.__views.__alloyId11321 && $.addTopLevelView($.__views.__alloyId11321);
    $.__views.__alloyId11322 = Ti.UI.createView({
        id: "__alloyId11322"
    });
    $.__views.__alloyId11321.add($.__views.__alloyId11322);
    $.__views.__alloyId11323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11323"
    });
    $.__views.__alloyId11322.add($.__views.__alloyId11323);
    $.__views.__alloyId11324 = Ti.UI.createView({
        id: "__alloyId11324"
    });
    $.__views.__alloyId11324 && $.addTopLevelView($.__views.__alloyId11324);
    $.__views.__alloyId11325 = Ti.UI.createView({
        id: "__alloyId11325"
    });
    $.__views.__alloyId11324.add($.__views.__alloyId11325);
    $.__views.__alloyId11326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11326"
    });
    $.__views.__alloyId11325.add($.__views.__alloyId11326);
    $.__views.__alloyId11327 = Ti.UI.createView({
        id: "__alloyId11327"
    });
    $.__views.__alloyId11327 && $.addTopLevelView($.__views.__alloyId11327);
    $.__views.__alloyId11328 = Ti.UI.createView({
        id: "__alloyId11328"
    });
    $.__views.__alloyId11327.add($.__views.__alloyId11328);
    $.__views.__alloyId11329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11329"
    });
    $.__views.__alloyId11328.add($.__views.__alloyId11329);
    $.__views.__alloyId11330 = Ti.UI.createView({
        id: "__alloyId11330"
    });
    $.__views.__alloyId11330 && $.addTopLevelView($.__views.__alloyId11330);
    $.__views.__alloyId11331 = Ti.UI.createView({
        id: "__alloyId11331"
    });
    $.__views.__alloyId11330.add($.__views.__alloyId11331);
    $.__views.__alloyId11332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11332"
    });
    $.__views.__alloyId11331.add($.__views.__alloyId11332);
    $.__views.__alloyId11333 = Ti.UI.createView({
        id: "__alloyId11333"
    });
    $.__views.__alloyId11333 && $.addTopLevelView($.__views.__alloyId11333);
    $.__views.__alloyId11334 = Ti.UI.createView({
        id: "__alloyId11334"
    });
    $.__views.__alloyId11333.add($.__views.__alloyId11334);
    $.__views.__alloyId11335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11335"
    });
    $.__views.__alloyId11334.add($.__views.__alloyId11335);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;