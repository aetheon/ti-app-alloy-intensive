function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_498";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_498 = Ti.UI.createView({
        id: "widget_498"
    });
    $.__views.widget_498 && $.addTopLevelView($.__views.widget_498);
    $.__views.__alloyId11544 = Ti.UI.createView({
        id: "__alloyId11544"
    });
    $.__views.widget_498.add($.__views.__alloyId11544);
    $.__views.__alloyId11545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11545"
    });
    $.__views.__alloyId11544.add($.__views.__alloyId11545);
    $.__views.__alloyId11546 = Ti.UI.createView({
        id: "__alloyId11546"
    });
    $.__views.__alloyId11546 && $.addTopLevelView($.__views.__alloyId11546);
    $.__views.__alloyId11547 = Ti.UI.createView({
        id: "__alloyId11547"
    });
    $.__views.__alloyId11546.add($.__views.__alloyId11547);
    $.__views.__alloyId11548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11548"
    });
    $.__views.__alloyId11547.add($.__views.__alloyId11548);
    $.__views.__alloyId11549 = Ti.UI.createView({
        id: "__alloyId11549"
    });
    $.__views.__alloyId11549 && $.addTopLevelView($.__views.__alloyId11549);
    $.__views.__alloyId11550 = Ti.UI.createView({
        id: "__alloyId11550"
    });
    $.__views.__alloyId11549.add($.__views.__alloyId11550);
    $.__views.__alloyId11551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11551"
    });
    $.__views.__alloyId11550.add($.__views.__alloyId11551);
    $.__views.__alloyId11552 = Ti.UI.createView({
        id: "__alloyId11552"
    });
    $.__views.__alloyId11552 && $.addTopLevelView($.__views.__alloyId11552);
    $.__views.__alloyId11553 = Ti.UI.createView({
        id: "__alloyId11553"
    });
    $.__views.__alloyId11552.add($.__views.__alloyId11553);
    $.__views.__alloyId11554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11554"
    });
    $.__views.__alloyId11553.add($.__views.__alloyId11554);
    $.__views.__alloyId11555 = Ti.UI.createView({
        id: "__alloyId11555"
    });
    $.__views.__alloyId11555 && $.addTopLevelView($.__views.__alloyId11555);
    $.__views.__alloyId11556 = Ti.UI.createView({
        id: "__alloyId11556"
    });
    $.__views.__alloyId11555.add($.__views.__alloyId11556);
    $.__views.__alloyId11557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11557"
    });
    $.__views.__alloyId11556.add($.__views.__alloyId11557);
    $.__views.__alloyId11558 = Ti.UI.createView({
        id: "__alloyId11558"
    });
    $.__views.__alloyId11558 && $.addTopLevelView($.__views.__alloyId11558);
    $.__views.__alloyId11559 = Ti.UI.createView({
        id: "__alloyId11559"
    });
    $.__views.__alloyId11558.add($.__views.__alloyId11559);
    $.__views.__alloyId11560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11560"
    });
    $.__views.__alloyId11559.add($.__views.__alloyId11560);
    $.__views.__alloyId11561 = Ti.UI.createView({
        id: "__alloyId11561"
    });
    $.__views.__alloyId11561 && $.addTopLevelView($.__views.__alloyId11561);
    $.__views.__alloyId11562 = Ti.UI.createView({
        id: "__alloyId11562"
    });
    $.__views.__alloyId11561.add($.__views.__alloyId11562);
    $.__views.__alloyId11563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11563"
    });
    $.__views.__alloyId11562.add($.__views.__alloyId11563);
    $.__views.__alloyId11564 = Ti.UI.createView({
        id: "__alloyId11564"
    });
    $.__views.__alloyId11564 && $.addTopLevelView($.__views.__alloyId11564);
    $.__views.__alloyId11565 = Ti.UI.createView({
        id: "__alloyId11565"
    });
    $.__views.__alloyId11564.add($.__views.__alloyId11565);
    $.__views.__alloyId11566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11566"
    });
    $.__views.__alloyId11565.add($.__views.__alloyId11566);
    $.__views.__alloyId11567 = Ti.UI.createView({
        id: "__alloyId11567"
    });
    $.__views.__alloyId11567 && $.addTopLevelView($.__views.__alloyId11567);
    $.__views.__alloyId11568 = Ti.UI.createView({
        id: "__alloyId11568"
    });
    $.__views.__alloyId11567.add($.__views.__alloyId11568);
    $.__views.__alloyId11569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11569"
    });
    $.__views.__alloyId11568.add($.__views.__alloyId11569);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;