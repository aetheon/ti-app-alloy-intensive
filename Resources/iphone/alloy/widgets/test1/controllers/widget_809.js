function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_809";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_809 = Ti.UI.createView({
        id: "widget_809"
    });
    $.__views.widget_809 && $.addTopLevelView($.__views.widget_809);
    $.__views.__alloyId20540 = Ti.UI.createView({
        id: "__alloyId20540"
    });
    $.__views.widget_809.add($.__views.__alloyId20540);
    $.__views.__alloyId20541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20541"
    });
    $.__views.__alloyId20540.add($.__views.__alloyId20541);
    $.__views.__alloyId20542 = Ti.UI.createView({
        id: "__alloyId20542"
    });
    $.__views.__alloyId20542 && $.addTopLevelView($.__views.__alloyId20542);
    $.__views.__alloyId20543 = Ti.UI.createView({
        id: "__alloyId20543"
    });
    $.__views.__alloyId20542.add($.__views.__alloyId20543);
    $.__views.__alloyId20544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20544"
    });
    $.__views.__alloyId20543.add($.__views.__alloyId20544);
    $.__views.__alloyId20545 = Ti.UI.createView({
        id: "__alloyId20545"
    });
    $.__views.__alloyId20545 && $.addTopLevelView($.__views.__alloyId20545);
    $.__views.__alloyId20546 = Ti.UI.createView({
        id: "__alloyId20546"
    });
    $.__views.__alloyId20545.add($.__views.__alloyId20546);
    $.__views.__alloyId20547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20547"
    });
    $.__views.__alloyId20546.add($.__views.__alloyId20547);
    $.__views.__alloyId20548 = Ti.UI.createView({
        id: "__alloyId20548"
    });
    $.__views.__alloyId20548 && $.addTopLevelView($.__views.__alloyId20548);
    $.__views.__alloyId20549 = Ti.UI.createView({
        id: "__alloyId20549"
    });
    $.__views.__alloyId20548.add($.__views.__alloyId20549);
    $.__views.__alloyId20550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20550"
    });
    $.__views.__alloyId20549.add($.__views.__alloyId20550);
    $.__views.__alloyId20551 = Ti.UI.createView({
        id: "__alloyId20551"
    });
    $.__views.__alloyId20551 && $.addTopLevelView($.__views.__alloyId20551);
    $.__views.__alloyId20552 = Ti.UI.createView({
        id: "__alloyId20552"
    });
    $.__views.__alloyId20551.add($.__views.__alloyId20552);
    $.__views.__alloyId20553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20553"
    });
    $.__views.__alloyId20552.add($.__views.__alloyId20553);
    $.__views.__alloyId20554 = Ti.UI.createView({
        id: "__alloyId20554"
    });
    $.__views.__alloyId20554 && $.addTopLevelView($.__views.__alloyId20554);
    $.__views.__alloyId20555 = Ti.UI.createView({
        id: "__alloyId20555"
    });
    $.__views.__alloyId20554.add($.__views.__alloyId20555);
    $.__views.__alloyId20556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20556"
    });
    $.__views.__alloyId20555.add($.__views.__alloyId20556);
    $.__views.__alloyId20557 = Ti.UI.createView({
        id: "__alloyId20557"
    });
    $.__views.__alloyId20557 && $.addTopLevelView($.__views.__alloyId20557);
    $.__views.__alloyId20558 = Ti.UI.createView({
        id: "__alloyId20558"
    });
    $.__views.__alloyId20557.add($.__views.__alloyId20558);
    $.__views.__alloyId20559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20559"
    });
    $.__views.__alloyId20558.add($.__views.__alloyId20559);
    $.__views.__alloyId20560 = Ti.UI.createView({
        id: "__alloyId20560"
    });
    $.__views.__alloyId20560 && $.addTopLevelView($.__views.__alloyId20560);
    $.__views.__alloyId20561 = Ti.UI.createView({
        id: "__alloyId20561"
    });
    $.__views.__alloyId20560.add($.__views.__alloyId20561);
    $.__views.__alloyId20562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20562"
    });
    $.__views.__alloyId20561.add($.__views.__alloyId20562);
    $.__views.__alloyId20563 = Ti.UI.createView({
        id: "__alloyId20563"
    });
    $.__views.__alloyId20563 && $.addTopLevelView($.__views.__alloyId20563);
    $.__views.__alloyId20564 = Ti.UI.createView({
        id: "__alloyId20564"
    });
    $.__views.__alloyId20563.add($.__views.__alloyId20564);
    $.__views.__alloyId20565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20565"
    });
    $.__views.__alloyId20564.add($.__views.__alloyId20565);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;