function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_948";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_948 = Ti.UI.createView({
        id: "widget_948"
    });
    $.__views.widget_948 && $.addTopLevelView($.__views.widget_948);
    $.__views.__alloyId24544 = Ti.UI.createView({
        id: "__alloyId24544"
    });
    $.__views.widget_948.add($.__views.__alloyId24544);
    $.__views.__alloyId24545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24545"
    });
    $.__views.__alloyId24544.add($.__views.__alloyId24545);
    $.__views.__alloyId24546 = Ti.UI.createView({
        id: "__alloyId24546"
    });
    $.__views.__alloyId24546 && $.addTopLevelView($.__views.__alloyId24546);
    $.__views.__alloyId24547 = Ti.UI.createView({
        id: "__alloyId24547"
    });
    $.__views.__alloyId24546.add($.__views.__alloyId24547);
    $.__views.__alloyId24548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24548"
    });
    $.__views.__alloyId24547.add($.__views.__alloyId24548);
    $.__views.__alloyId24549 = Ti.UI.createView({
        id: "__alloyId24549"
    });
    $.__views.__alloyId24549 && $.addTopLevelView($.__views.__alloyId24549);
    $.__views.__alloyId24550 = Ti.UI.createView({
        id: "__alloyId24550"
    });
    $.__views.__alloyId24549.add($.__views.__alloyId24550);
    $.__views.__alloyId24551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24551"
    });
    $.__views.__alloyId24550.add($.__views.__alloyId24551);
    $.__views.__alloyId24552 = Ti.UI.createView({
        id: "__alloyId24552"
    });
    $.__views.__alloyId24552 && $.addTopLevelView($.__views.__alloyId24552);
    $.__views.__alloyId24553 = Ti.UI.createView({
        id: "__alloyId24553"
    });
    $.__views.__alloyId24552.add($.__views.__alloyId24553);
    $.__views.__alloyId24554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24554"
    });
    $.__views.__alloyId24553.add($.__views.__alloyId24554);
    $.__views.__alloyId24555 = Ti.UI.createView({
        id: "__alloyId24555"
    });
    $.__views.__alloyId24555 && $.addTopLevelView($.__views.__alloyId24555);
    $.__views.__alloyId24556 = Ti.UI.createView({
        id: "__alloyId24556"
    });
    $.__views.__alloyId24555.add($.__views.__alloyId24556);
    $.__views.__alloyId24557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24557"
    });
    $.__views.__alloyId24556.add($.__views.__alloyId24557);
    $.__views.__alloyId24558 = Ti.UI.createView({
        id: "__alloyId24558"
    });
    $.__views.__alloyId24558 && $.addTopLevelView($.__views.__alloyId24558);
    $.__views.__alloyId24559 = Ti.UI.createView({
        id: "__alloyId24559"
    });
    $.__views.__alloyId24558.add($.__views.__alloyId24559);
    $.__views.__alloyId24560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24560"
    });
    $.__views.__alloyId24559.add($.__views.__alloyId24560);
    $.__views.__alloyId24561 = Ti.UI.createView({
        id: "__alloyId24561"
    });
    $.__views.__alloyId24561 && $.addTopLevelView($.__views.__alloyId24561);
    $.__views.__alloyId24562 = Ti.UI.createView({
        id: "__alloyId24562"
    });
    $.__views.__alloyId24561.add($.__views.__alloyId24562);
    $.__views.__alloyId24563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24563"
    });
    $.__views.__alloyId24562.add($.__views.__alloyId24563);
    $.__views.__alloyId24564 = Ti.UI.createView({
        id: "__alloyId24564"
    });
    $.__views.__alloyId24564 && $.addTopLevelView($.__views.__alloyId24564);
    $.__views.__alloyId24565 = Ti.UI.createView({
        id: "__alloyId24565"
    });
    $.__views.__alloyId24564.add($.__views.__alloyId24565);
    $.__views.__alloyId24566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24566"
    });
    $.__views.__alloyId24565.add($.__views.__alloyId24566);
    $.__views.__alloyId24567 = Ti.UI.createView({
        id: "__alloyId24567"
    });
    $.__views.__alloyId24567 && $.addTopLevelView($.__views.__alloyId24567);
    $.__views.__alloyId24568 = Ti.UI.createView({
        id: "__alloyId24568"
    });
    $.__views.__alloyId24567.add($.__views.__alloyId24568);
    $.__views.__alloyId24569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24569"
    });
    $.__views.__alloyId24568.add($.__views.__alloyId24569);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;