function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_705";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_705 = Ti.UI.createView({
        id: "widget_705"
    });
    $.__views.widget_705 && $.addTopLevelView($.__views.widget_705);
    $.__views.__alloyId17550 = Ti.UI.createView({
        id: "__alloyId17550"
    });
    $.__views.widget_705.add($.__views.__alloyId17550);
    $.__views.__alloyId17551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17551"
    });
    $.__views.__alloyId17550.add($.__views.__alloyId17551);
    $.__views.__alloyId17552 = Ti.UI.createView({
        id: "__alloyId17552"
    });
    $.__views.__alloyId17552 && $.addTopLevelView($.__views.__alloyId17552);
    $.__views.__alloyId17553 = Ti.UI.createView({
        id: "__alloyId17553"
    });
    $.__views.__alloyId17552.add($.__views.__alloyId17553);
    $.__views.__alloyId17554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17554"
    });
    $.__views.__alloyId17553.add($.__views.__alloyId17554);
    $.__views.__alloyId17555 = Ti.UI.createView({
        id: "__alloyId17555"
    });
    $.__views.__alloyId17555 && $.addTopLevelView($.__views.__alloyId17555);
    $.__views.__alloyId17556 = Ti.UI.createView({
        id: "__alloyId17556"
    });
    $.__views.__alloyId17555.add($.__views.__alloyId17556);
    $.__views.__alloyId17557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17557"
    });
    $.__views.__alloyId17556.add($.__views.__alloyId17557);
    $.__views.__alloyId17558 = Ti.UI.createView({
        id: "__alloyId17558"
    });
    $.__views.__alloyId17558 && $.addTopLevelView($.__views.__alloyId17558);
    $.__views.__alloyId17559 = Ti.UI.createView({
        id: "__alloyId17559"
    });
    $.__views.__alloyId17558.add($.__views.__alloyId17559);
    $.__views.__alloyId17560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17560"
    });
    $.__views.__alloyId17559.add($.__views.__alloyId17560);
    $.__views.__alloyId17561 = Ti.UI.createView({
        id: "__alloyId17561"
    });
    $.__views.__alloyId17561 && $.addTopLevelView($.__views.__alloyId17561);
    $.__views.__alloyId17562 = Ti.UI.createView({
        id: "__alloyId17562"
    });
    $.__views.__alloyId17561.add($.__views.__alloyId17562);
    $.__views.__alloyId17563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17563"
    });
    $.__views.__alloyId17562.add($.__views.__alloyId17563);
    $.__views.__alloyId17564 = Ti.UI.createView({
        id: "__alloyId17564"
    });
    $.__views.__alloyId17564 && $.addTopLevelView($.__views.__alloyId17564);
    $.__views.__alloyId17565 = Ti.UI.createView({
        id: "__alloyId17565"
    });
    $.__views.__alloyId17564.add($.__views.__alloyId17565);
    $.__views.__alloyId17566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17566"
    });
    $.__views.__alloyId17565.add($.__views.__alloyId17566);
    $.__views.__alloyId17567 = Ti.UI.createView({
        id: "__alloyId17567"
    });
    $.__views.__alloyId17567 && $.addTopLevelView($.__views.__alloyId17567);
    $.__views.__alloyId17568 = Ti.UI.createView({
        id: "__alloyId17568"
    });
    $.__views.__alloyId17567.add($.__views.__alloyId17568);
    $.__views.__alloyId17569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17569"
    });
    $.__views.__alloyId17568.add($.__views.__alloyId17569);
    $.__views.__alloyId17570 = Ti.UI.createView({
        id: "__alloyId17570"
    });
    $.__views.__alloyId17570 && $.addTopLevelView($.__views.__alloyId17570);
    $.__views.__alloyId17571 = Ti.UI.createView({
        id: "__alloyId17571"
    });
    $.__views.__alloyId17570.add($.__views.__alloyId17571);
    $.__views.__alloyId17572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17572"
    });
    $.__views.__alloyId17571.add($.__views.__alloyId17572);
    $.__views.__alloyId17573 = Ti.UI.createView({
        id: "__alloyId17573"
    });
    $.__views.__alloyId17573 && $.addTopLevelView($.__views.__alloyId17573);
    $.__views.__alloyId17574 = Ti.UI.createView({
        id: "__alloyId17574"
    });
    $.__views.__alloyId17573.add($.__views.__alloyId17574);
    $.__views.__alloyId17575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17575"
    });
    $.__views.__alloyId17574.add($.__views.__alloyId17575);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;