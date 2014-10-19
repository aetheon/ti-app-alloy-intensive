function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_397";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_397 = Ti.UI.createView({
        id: "widget_397"
    });
    $.__views.widget_397 && $.addTopLevelView($.__views.widget_397);
    $.__views.__alloyId8632 = Ti.UI.createView({
        id: "__alloyId8632"
    });
    $.__views.widget_397.add($.__views.__alloyId8632);
    $.__views.__alloyId8633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8633"
    });
    $.__views.__alloyId8632.add($.__views.__alloyId8633);
    $.__views.__alloyId8634 = Ti.UI.createView({
        id: "__alloyId8634"
    });
    $.__views.__alloyId8634 && $.addTopLevelView($.__views.__alloyId8634);
    $.__views.__alloyId8635 = Ti.UI.createView({
        id: "__alloyId8635"
    });
    $.__views.__alloyId8634.add($.__views.__alloyId8635);
    $.__views.__alloyId8636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8636"
    });
    $.__views.__alloyId8635.add($.__views.__alloyId8636);
    $.__views.__alloyId8637 = Ti.UI.createView({
        id: "__alloyId8637"
    });
    $.__views.__alloyId8637 && $.addTopLevelView($.__views.__alloyId8637);
    $.__views.__alloyId8638 = Ti.UI.createView({
        id: "__alloyId8638"
    });
    $.__views.__alloyId8637.add($.__views.__alloyId8638);
    $.__views.__alloyId8639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8639"
    });
    $.__views.__alloyId8638.add($.__views.__alloyId8639);
    $.__views.__alloyId8640 = Ti.UI.createView({
        id: "__alloyId8640"
    });
    $.__views.__alloyId8640 && $.addTopLevelView($.__views.__alloyId8640);
    $.__views.__alloyId8641 = Ti.UI.createView({
        id: "__alloyId8641"
    });
    $.__views.__alloyId8640.add($.__views.__alloyId8641);
    $.__views.__alloyId8642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8642"
    });
    $.__views.__alloyId8641.add($.__views.__alloyId8642);
    $.__views.__alloyId8643 = Ti.UI.createView({
        id: "__alloyId8643"
    });
    $.__views.__alloyId8643 && $.addTopLevelView($.__views.__alloyId8643);
    $.__views.__alloyId8644 = Ti.UI.createView({
        id: "__alloyId8644"
    });
    $.__views.__alloyId8643.add($.__views.__alloyId8644);
    $.__views.__alloyId8645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8645"
    });
    $.__views.__alloyId8644.add($.__views.__alloyId8645);
    $.__views.__alloyId8646 = Ti.UI.createView({
        id: "__alloyId8646"
    });
    $.__views.__alloyId8646 && $.addTopLevelView($.__views.__alloyId8646);
    $.__views.__alloyId8647 = Ti.UI.createView({
        id: "__alloyId8647"
    });
    $.__views.__alloyId8646.add($.__views.__alloyId8647);
    $.__views.__alloyId8648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8648"
    });
    $.__views.__alloyId8647.add($.__views.__alloyId8648);
    $.__views.__alloyId8649 = Ti.UI.createView({
        id: "__alloyId8649"
    });
    $.__views.__alloyId8649 && $.addTopLevelView($.__views.__alloyId8649);
    $.__views.__alloyId8650 = Ti.UI.createView({
        id: "__alloyId8650"
    });
    $.__views.__alloyId8649.add($.__views.__alloyId8650);
    $.__views.__alloyId8651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8651"
    });
    $.__views.__alloyId8650.add($.__views.__alloyId8651);
    $.__views.__alloyId8652 = Ti.UI.createView({
        id: "__alloyId8652"
    });
    $.__views.__alloyId8652 && $.addTopLevelView($.__views.__alloyId8652);
    $.__views.__alloyId8653 = Ti.UI.createView({
        id: "__alloyId8653"
    });
    $.__views.__alloyId8652.add($.__views.__alloyId8653);
    $.__views.__alloyId8654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8654"
    });
    $.__views.__alloyId8653.add($.__views.__alloyId8654);
    $.__views.__alloyId8655 = Ti.UI.createView({
        id: "__alloyId8655"
    });
    $.__views.__alloyId8655 && $.addTopLevelView($.__views.__alloyId8655);
    $.__views.__alloyId8656 = Ti.UI.createView({
        id: "__alloyId8656"
    });
    $.__views.__alloyId8655.add($.__views.__alloyId8656);
    $.__views.__alloyId8657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8657"
    });
    $.__views.__alloyId8656.add($.__views.__alloyId8657);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;