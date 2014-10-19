function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_248";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_248 = Ti.UI.createView({
        id: "widget_248"
    });
    $.__views.widget_248 && $.addTopLevelView($.__views.widget_248);
    $.__views.__alloyId4342 = Ti.UI.createView({
        id: "__alloyId4342"
    });
    $.__views.widget_248.add($.__views.__alloyId4342);
    $.__views.__alloyId4343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4343"
    });
    $.__views.__alloyId4342.add($.__views.__alloyId4343);
    $.__views.__alloyId4344 = Ti.UI.createView({
        id: "__alloyId4344"
    });
    $.__views.__alloyId4344 && $.addTopLevelView($.__views.__alloyId4344);
    $.__views.__alloyId4345 = Ti.UI.createView({
        id: "__alloyId4345"
    });
    $.__views.__alloyId4344.add($.__views.__alloyId4345);
    $.__views.__alloyId4346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4346"
    });
    $.__views.__alloyId4345.add($.__views.__alloyId4346);
    $.__views.__alloyId4347 = Ti.UI.createView({
        id: "__alloyId4347"
    });
    $.__views.__alloyId4347 && $.addTopLevelView($.__views.__alloyId4347);
    $.__views.__alloyId4348 = Ti.UI.createView({
        id: "__alloyId4348"
    });
    $.__views.__alloyId4347.add($.__views.__alloyId4348);
    $.__views.__alloyId4349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4349"
    });
    $.__views.__alloyId4348.add($.__views.__alloyId4349);
    $.__views.__alloyId4350 = Ti.UI.createView({
        id: "__alloyId4350"
    });
    $.__views.__alloyId4350 && $.addTopLevelView($.__views.__alloyId4350);
    $.__views.__alloyId4351 = Ti.UI.createView({
        id: "__alloyId4351"
    });
    $.__views.__alloyId4350.add($.__views.__alloyId4351);
    $.__views.__alloyId4352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4352"
    });
    $.__views.__alloyId4351.add($.__views.__alloyId4352);
    $.__views.__alloyId4353 = Ti.UI.createView({
        id: "__alloyId4353"
    });
    $.__views.__alloyId4353 && $.addTopLevelView($.__views.__alloyId4353);
    $.__views.__alloyId4354 = Ti.UI.createView({
        id: "__alloyId4354"
    });
    $.__views.__alloyId4353.add($.__views.__alloyId4354);
    $.__views.__alloyId4355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4355"
    });
    $.__views.__alloyId4354.add($.__views.__alloyId4355);
    $.__views.__alloyId4356 = Ti.UI.createView({
        id: "__alloyId4356"
    });
    $.__views.__alloyId4356 && $.addTopLevelView($.__views.__alloyId4356);
    $.__views.__alloyId4357 = Ti.UI.createView({
        id: "__alloyId4357"
    });
    $.__views.__alloyId4356.add($.__views.__alloyId4357);
    $.__views.__alloyId4358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4358"
    });
    $.__views.__alloyId4357.add($.__views.__alloyId4358);
    $.__views.__alloyId4359 = Ti.UI.createView({
        id: "__alloyId4359"
    });
    $.__views.__alloyId4359 && $.addTopLevelView($.__views.__alloyId4359);
    $.__views.__alloyId4360 = Ti.UI.createView({
        id: "__alloyId4360"
    });
    $.__views.__alloyId4359.add($.__views.__alloyId4360);
    $.__views.__alloyId4361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4361"
    });
    $.__views.__alloyId4360.add($.__views.__alloyId4361);
    $.__views.__alloyId4362 = Ti.UI.createView({
        id: "__alloyId4362"
    });
    $.__views.__alloyId4362 && $.addTopLevelView($.__views.__alloyId4362);
    $.__views.__alloyId4363 = Ti.UI.createView({
        id: "__alloyId4363"
    });
    $.__views.__alloyId4362.add($.__views.__alloyId4363);
    $.__views.__alloyId4364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4364"
    });
    $.__views.__alloyId4363.add($.__views.__alloyId4364);
    $.__views.__alloyId4365 = Ti.UI.createView({
        id: "__alloyId4365"
    });
    $.__views.__alloyId4365 && $.addTopLevelView($.__views.__alloyId4365);
    $.__views.__alloyId4366 = Ti.UI.createView({
        id: "__alloyId4366"
    });
    $.__views.__alloyId4365.add($.__views.__alloyId4366);
    $.__views.__alloyId4367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4367"
    });
    $.__views.__alloyId4366.add($.__views.__alloyId4367);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;