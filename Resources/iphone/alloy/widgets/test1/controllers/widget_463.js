function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_463";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_463 = Ti.UI.createView({
        id: "widget_463"
    });
    $.__views.widget_463 && $.addTopLevelView($.__views.widget_463);
    $.__views.__alloyId10556 = Ti.UI.createView({
        id: "__alloyId10556"
    });
    $.__views.widget_463.add($.__views.__alloyId10556);
    $.__views.__alloyId10557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10557"
    });
    $.__views.__alloyId10556.add($.__views.__alloyId10557);
    $.__views.__alloyId10558 = Ti.UI.createView({
        id: "__alloyId10558"
    });
    $.__views.__alloyId10558 && $.addTopLevelView($.__views.__alloyId10558);
    $.__views.__alloyId10559 = Ti.UI.createView({
        id: "__alloyId10559"
    });
    $.__views.__alloyId10558.add($.__views.__alloyId10559);
    $.__views.__alloyId10560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10560"
    });
    $.__views.__alloyId10559.add($.__views.__alloyId10560);
    $.__views.__alloyId10561 = Ti.UI.createView({
        id: "__alloyId10561"
    });
    $.__views.__alloyId10561 && $.addTopLevelView($.__views.__alloyId10561);
    $.__views.__alloyId10562 = Ti.UI.createView({
        id: "__alloyId10562"
    });
    $.__views.__alloyId10561.add($.__views.__alloyId10562);
    $.__views.__alloyId10563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10563"
    });
    $.__views.__alloyId10562.add($.__views.__alloyId10563);
    $.__views.__alloyId10564 = Ti.UI.createView({
        id: "__alloyId10564"
    });
    $.__views.__alloyId10564 && $.addTopLevelView($.__views.__alloyId10564);
    $.__views.__alloyId10565 = Ti.UI.createView({
        id: "__alloyId10565"
    });
    $.__views.__alloyId10564.add($.__views.__alloyId10565);
    $.__views.__alloyId10566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10566"
    });
    $.__views.__alloyId10565.add($.__views.__alloyId10566);
    $.__views.__alloyId10567 = Ti.UI.createView({
        id: "__alloyId10567"
    });
    $.__views.__alloyId10567 && $.addTopLevelView($.__views.__alloyId10567);
    $.__views.__alloyId10568 = Ti.UI.createView({
        id: "__alloyId10568"
    });
    $.__views.__alloyId10567.add($.__views.__alloyId10568);
    $.__views.__alloyId10569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10569"
    });
    $.__views.__alloyId10568.add($.__views.__alloyId10569);
    $.__views.__alloyId10570 = Ti.UI.createView({
        id: "__alloyId10570"
    });
    $.__views.__alloyId10570 && $.addTopLevelView($.__views.__alloyId10570);
    $.__views.__alloyId10571 = Ti.UI.createView({
        id: "__alloyId10571"
    });
    $.__views.__alloyId10570.add($.__views.__alloyId10571);
    $.__views.__alloyId10572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10572"
    });
    $.__views.__alloyId10571.add($.__views.__alloyId10572);
    $.__views.__alloyId10573 = Ti.UI.createView({
        id: "__alloyId10573"
    });
    $.__views.__alloyId10573 && $.addTopLevelView($.__views.__alloyId10573);
    $.__views.__alloyId10574 = Ti.UI.createView({
        id: "__alloyId10574"
    });
    $.__views.__alloyId10573.add($.__views.__alloyId10574);
    $.__views.__alloyId10575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10575"
    });
    $.__views.__alloyId10574.add($.__views.__alloyId10575);
    $.__views.__alloyId10576 = Ti.UI.createView({
        id: "__alloyId10576"
    });
    $.__views.__alloyId10576 && $.addTopLevelView($.__views.__alloyId10576);
    $.__views.__alloyId10577 = Ti.UI.createView({
        id: "__alloyId10577"
    });
    $.__views.__alloyId10576.add($.__views.__alloyId10577);
    $.__views.__alloyId10578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10578"
    });
    $.__views.__alloyId10577.add($.__views.__alloyId10578);
    $.__views.__alloyId10579 = Ti.UI.createView({
        id: "__alloyId10579"
    });
    $.__views.__alloyId10579 && $.addTopLevelView($.__views.__alloyId10579);
    $.__views.__alloyId10580 = Ti.UI.createView({
        id: "__alloyId10580"
    });
    $.__views.__alloyId10579.add($.__views.__alloyId10580);
    $.__views.__alloyId10581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10581"
    });
    $.__views.__alloyId10580.add($.__views.__alloyId10581);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;