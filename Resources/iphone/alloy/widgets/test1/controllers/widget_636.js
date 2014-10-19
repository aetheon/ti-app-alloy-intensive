function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_636";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_636 = Ti.UI.createView({
        id: "widget_636"
    });
    $.__views.widget_636 && $.addTopLevelView($.__views.widget_636);
    $.__views.__alloyId15548 = Ti.UI.createView({
        id: "__alloyId15548"
    });
    $.__views.widget_636.add($.__views.__alloyId15548);
    $.__views.__alloyId15549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15549"
    });
    $.__views.__alloyId15548.add($.__views.__alloyId15549);
    $.__views.__alloyId15550 = Ti.UI.createView({
        id: "__alloyId15550"
    });
    $.__views.__alloyId15550 && $.addTopLevelView($.__views.__alloyId15550);
    $.__views.__alloyId15551 = Ti.UI.createView({
        id: "__alloyId15551"
    });
    $.__views.__alloyId15550.add($.__views.__alloyId15551);
    $.__views.__alloyId15552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15552"
    });
    $.__views.__alloyId15551.add($.__views.__alloyId15552);
    $.__views.__alloyId15553 = Ti.UI.createView({
        id: "__alloyId15553"
    });
    $.__views.__alloyId15553 && $.addTopLevelView($.__views.__alloyId15553);
    $.__views.__alloyId15554 = Ti.UI.createView({
        id: "__alloyId15554"
    });
    $.__views.__alloyId15553.add($.__views.__alloyId15554);
    $.__views.__alloyId15555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15555"
    });
    $.__views.__alloyId15554.add($.__views.__alloyId15555);
    $.__views.__alloyId15556 = Ti.UI.createView({
        id: "__alloyId15556"
    });
    $.__views.__alloyId15556 && $.addTopLevelView($.__views.__alloyId15556);
    $.__views.__alloyId15557 = Ti.UI.createView({
        id: "__alloyId15557"
    });
    $.__views.__alloyId15556.add($.__views.__alloyId15557);
    $.__views.__alloyId15558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15558"
    });
    $.__views.__alloyId15557.add($.__views.__alloyId15558);
    $.__views.__alloyId15559 = Ti.UI.createView({
        id: "__alloyId15559"
    });
    $.__views.__alloyId15559 && $.addTopLevelView($.__views.__alloyId15559);
    $.__views.__alloyId15560 = Ti.UI.createView({
        id: "__alloyId15560"
    });
    $.__views.__alloyId15559.add($.__views.__alloyId15560);
    $.__views.__alloyId15561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15561"
    });
    $.__views.__alloyId15560.add($.__views.__alloyId15561);
    $.__views.__alloyId15562 = Ti.UI.createView({
        id: "__alloyId15562"
    });
    $.__views.__alloyId15562 && $.addTopLevelView($.__views.__alloyId15562);
    $.__views.__alloyId15563 = Ti.UI.createView({
        id: "__alloyId15563"
    });
    $.__views.__alloyId15562.add($.__views.__alloyId15563);
    $.__views.__alloyId15564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15564"
    });
    $.__views.__alloyId15563.add($.__views.__alloyId15564);
    $.__views.__alloyId15565 = Ti.UI.createView({
        id: "__alloyId15565"
    });
    $.__views.__alloyId15565 && $.addTopLevelView($.__views.__alloyId15565);
    $.__views.__alloyId15566 = Ti.UI.createView({
        id: "__alloyId15566"
    });
    $.__views.__alloyId15565.add($.__views.__alloyId15566);
    $.__views.__alloyId15567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15567"
    });
    $.__views.__alloyId15566.add($.__views.__alloyId15567);
    $.__views.__alloyId15568 = Ti.UI.createView({
        id: "__alloyId15568"
    });
    $.__views.__alloyId15568 && $.addTopLevelView($.__views.__alloyId15568);
    $.__views.__alloyId15569 = Ti.UI.createView({
        id: "__alloyId15569"
    });
    $.__views.__alloyId15568.add($.__views.__alloyId15569);
    $.__views.__alloyId15570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15570"
    });
    $.__views.__alloyId15569.add($.__views.__alloyId15570);
    $.__views.__alloyId15571 = Ti.UI.createView({
        id: "__alloyId15571"
    });
    $.__views.__alloyId15571 && $.addTopLevelView($.__views.__alloyId15571);
    $.__views.__alloyId15572 = Ti.UI.createView({
        id: "__alloyId15572"
    });
    $.__views.__alloyId15571.add($.__views.__alloyId15572);
    $.__views.__alloyId15573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15573"
    });
    $.__views.__alloyId15572.add($.__views.__alloyId15573);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;