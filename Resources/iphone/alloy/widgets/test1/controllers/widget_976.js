function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_976";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_976 = Ti.UI.createView({
        id: "widget_976"
    });
    $.__views.widget_976 && $.addTopLevelView($.__views.widget_976);
    $.__views.__alloyId25350 = Ti.UI.createView({
        id: "__alloyId25350"
    });
    $.__views.widget_976.add($.__views.__alloyId25350);
    $.__views.__alloyId25351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25351"
    });
    $.__views.__alloyId25350.add($.__views.__alloyId25351);
    $.__views.__alloyId25352 = Ti.UI.createView({
        id: "__alloyId25352"
    });
    $.__views.__alloyId25352 && $.addTopLevelView($.__views.__alloyId25352);
    $.__views.__alloyId25353 = Ti.UI.createView({
        id: "__alloyId25353"
    });
    $.__views.__alloyId25352.add($.__views.__alloyId25353);
    $.__views.__alloyId25354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25354"
    });
    $.__views.__alloyId25353.add($.__views.__alloyId25354);
    $.__views.__alloyId25355 = Ti.UI.createView({
        id: "__alloyId25355"
    });
    $.__views.__alloyId25355 && $.addTopLevelView($.__views.__alloyId25355);
    $.__views.__alloyId25356 = Ti.UI.createView({
        id: "__alloyId25356"
    });
    $.__views.__alloyId25355.add($.__views.__alloyId25356);
    $.__views.__alloyId25357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25357"
    });
    $.__views.__alloyId25356.add($.__views.__alloyId25357);
    $.__views.__alloyId25358 = Ti.UI.createView({
        id: "__alloyId25358"
    });
    $.__views.__alloyId25358 && $.addTopLevelView($.__views.__alloyId25358);
    $.__views.__alloyId25359 = Ti.UI.createView({
        id: "__alloyId25359"
    });
    $.__views.__alloyId25358.add($.__views.__alloyId25359);
    $.__views.__alloyId25360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25360"
    });
    $.__views.__alloyId25359.add($.__views.__alloyId25360);
    $.__views.__alloyId25361 = Ti.UI.createView({
        id: "__alloyId25361"
    });
    $.__views.__alloyId25361 && $.addTopLevelView($.__views.__alloyId25361);
    $.__views.__alloyId25362 = Ti.UI.createView({
        id: "__alloyId25362"
    });
    $.__views.__alloyId25361.add($.__views.__alloyId25362);
    $.__views.__alloyId25363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25363"
    });
    $.__views.__alloyId25362.add($.__views.__alloyId25363);
    $.__views.__alloyId25364 = Ti.UI.createView({
        id: "__alloyId25364"
    });
    $.__views.__alloyId25364 && $.addTopLevelView($.__views.__alloyId25364);
    $.__views.__alloyId25365 = Ti.UI.createView({
        id: "__alloyId25365"
    });
    $.__views.__alloyId25364.add($.__views.__alloyId25365);
    $.__views.__alloyId25366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25366"
    });
    $.__views.__alloyId25365.add($.__views.__alloyId25366);
    $.__views.__alloyId25367 = Ti.UI.createView({
        id: "__alloyId25367"
    });
    $.__views.__alloyId25367 && $.addTopLevelView($.__views.__alloyId25367);
    $.__views.__alloyId25368 = Ti.UI.createView({
        id: "__alloyId25368"
    });
    $.__views.__alloyId25367.add($.__views.__alloyId25368);
    $.__views.__alloyId25369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25369"
    });
    $.__views.__alloyId25368.add($.__views.__alloyId25369);
    $.__views.__alloyId25370 = Ti.UI.createView({
        id: "__alloyId25370"
    });
    $.__views.__alloyId25370 && $.addTopLevelView($.__views.__alloyId25370);
    $.__views.__alloyId25371 = Ti.UI.createView({
        id: "__alloyId25371"
    });
    $.__views.__alloyId25370.add($.__views.__alloyId25371);
    $.__views.__alloyId25372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25372"
    });
    $.__views.__alloyId25371.add($.__views.__alloyId25372);
    $.__views.__alloyId25373 = Ti.UI.createView({
        id: "__alloyId25373"
    });
    $.__views.__alloyId25373 && $.addTopLevelView($.__views.__alloyId25373);
    $.__views.__alloyId25374 = Ti.UI.createView({
        id: "__alloyId25374"
    });
    $.__views.__alloyId25373.add($.__views.__alloyId25374);
    $.__views.__alloyId25375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25375"
    });
    $.__views.__alloyId25374.add($.__views.__alloyId25375);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;