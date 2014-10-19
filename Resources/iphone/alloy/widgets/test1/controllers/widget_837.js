function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_837";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_837 = Ti.UI.createView({
        id: "widget_837"
    });
    $.__views.widget_837 && $.addTopLevelView($.__views.widget_837);
    $.__views.__alloyId21346 = Ti.UI.createView({
        id: "__alloyId21346"
    });
    $.__views.widget_837.add($.__views.__alloyId21346);
    $.__views.__alloyId21347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21347"
    });
    $.__views.__alloyId21346.add($.__views.__alloyId21347);
    $.__views.__alloyId21348 = Ti.UI.createView({
        id: "__alloyId21348"
    });
    $.__views.__alloyId21348 && $.addTopLevelView($.__views.__alloyId21348);
    $.__views.__alloyId21349 = Ti.UI.createView({
        id: "__alloyId21349"
    });
    $.__views.__alloyId21348.add($.__views.__alloyId21349);
    $.__views.__alloyId21350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21350"
    });
    $.__views.__alloyId21349.add($.__views.__alloyId21350);
    $.__views.__alloyId21351 = Ti.UI.createView({
        id: "__alloyId21351"
    });
    $.__views.__alloyId21351 && $.addTopLevelView($.__views.__alloyId21351);
    $.__views.__alloyId21352 = Ti.UI.createView({
        id: "__alloyId21352"
    });
    $.__views.__alloyId21351.add($.__views.__alloyId21352);
    $.__views.__alloyId21353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21353"
    });
    $.__views.__alloyId21352.add($.__views.__alloyId21353);
    $.__views.__alloyId21354 = Ti.UI.createView({
        id: "__alloyId21354"
    });
    $.__views.__alloyId21354 && $.addTopLevelView($.__views.__alloyId21354);
    $.__views.__alloyId21355 = Ti.UI.createView({
        id: "__alloyId21355"
    });
    $.__views.__alloyId21354.add($.__views.__alloyId21355);
    $.__views.__alloyId21356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21356"
    });
    $.__views.__alloyId21355.add($.__views.__alloyId21356);
    $.__views.__alloyId21357 = Ti.UI.createView({
        id: "__alloyId21357"
    });
    $.__views.__alloyId21357 && $.addTopLevelView($.__views.__alloyId21357);
    $.__views.__alloyId21358 = Ti.UI.createView({
        id: "__alloyId21358"
    });
    $.__views.__alloyId21357.add($.__views.__alloyId21358);
    $.__views.__alloyId21359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21359"
    });
    $.__views.__alloyId21358.add($.__views.__alloyId21359);
    $.__views.__alloyId21360 = Ti.UI.createView({
        id: "__alloyId21360"
    });
    $.__views.__alloyId21360 && $.addTopLevelView($.__views.__alloyId21360);
    $.__views.__alloyId21361 = Ti.UI.createView({
        id: "__alloyId21361"
    });
    $.__views.__alloyId21360.add($.__views.__alloyId21361);
    $.__views.__alloyId21362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21362"
    });
    $.__views.__alloyId21361.add($.__views.__alloyId21362);
    $.__views.__alloyId21363 = Ti.UI.createView({
        id: "__alloyId21363"
    });
    $.__views.__alloyId21363 && $.addTopLevelView($.__views.__alloyId21363);
    $.__views.__alloyId21364 = Ti.UI.createView({
        id: "__alloyId21364"
    });
    $.__views.__alloyId21363.add($.__views.__alloyId21364);
    $.__views.__alloyId21365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21365"
    });
    $.__views.__alloyId21364.add($.__views.__alloyId21365);
    $.__views.__alloyId21366 = Ti.UI.createView({
        id: "__alloyId21366"
    });
    $.__views.__alloyId21366 && $.addTopLevelView($.__views.__alloyId21366);
    $.__views.__alloyId21367 = Ti.UI.createView({
        id: "__alloyId21367"
    });
    $.__views.__alloyId21366.add($.__views.__alloyId21367);
    $.__views.__alloyId21368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21368"
    });
    $.__views.__alloyId21367.add($.__views.__alloyId21368);
    $.__views.__alloyId21369 = Ti.UI.createView({
        id: "__alloyId21369"
    });
    $.__views.__alloyId21369 && $.addTopLevelView($.__views.__alloyId21369);
    $.__views.__alloyId21370 = Ti.UI.createView({
        id: "__alloyId21370"
    });
    $.__views.__alloyId21369.add($.__views.__alloyId21370);
    $.__views.__alloyId21371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21371"
    });
    $.__views.__alloyId21370.add($.__views.__alloyId21371);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;