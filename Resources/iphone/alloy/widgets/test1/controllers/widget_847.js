function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_847";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_847 = Ti.UI.createView({
        id: "widget_847"
    });
    $.__views.widget_847 && $.addTopLevelView($.__views.widget_847);
    $.__views.__alloyId21632 = Ti.UI.createView({
        id: "__alloyId21632"
    });
    $.__views.widget_847.add($.__views.__alloyId21632);
    $.__views.__alloyId21633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21633"
    });
    $.__views.__alloyId21632.add($.__views.__alloyId21633);
    $.__views.__alloyId21634 = Ti.UI.createView({
        id: "__alloyId21634"
    });
    $.__views.__alloyId21634 && $.addTopLevelView($.__views.__alloyId21634);
    $.__views.__alloyId21635 = Ti.UI.createView({
        id: "__alloyId21635"
    });
    $.__views.__alloyId21634.add($.__views.__alloyId21635);
    $.__views.__alloyId21636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21636"
    });
    $.__views.__alloyId21635.add($.__views.__alloyId21636);
    $.__views.__alloyId21637 = Ti.UI.createView({
        id: "__alloyId21637"
    });
    $.__views.__alloyId21637 && $.addTopLevelView($.__views.__alloyId21637);
    $.__views.__alloyId21638 = Ti.UI.createView({
        id: "__alloyId21638"
    });
    $.__views.__alloyId21637.add($.__views.__alloyId21638);
    $.__views.__alloyId21639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21639"
    });
    $.__views.__alloyId21638.add($.__views.__alloyId21639);
    $.__views.__alloyId21640 = Ti.UI.createView({
        id: "__alloyId21640"
    });
    $.__views.__alloyId21640 && $.addTopLevelView($.__views.__alloyId21640);
    $.__views.__alloyId21641 = Ti.UI.createView({
        id: "__alloyId21641"
    });
    $.__views.__alloyId21640.add($.__views.__alloyId21641);
    $.__views.__alloyId21642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21642"
    });
    $.__views.__alloyId21641.add($.__views.__alloyId21642);
    $.__views.__alloyId21643 = Ti.UI.createView({
        id: "__alloyId21643"
    });
    $.__views.__alloyId21643 && $.addTopLevelView($.__views.__alloyId21643);
    $.__views.__alloyId21644 = Ti.UI.createView({
        id: "__alloyId21644"
    });
    $.__views.__alloyId21643.add($.__views.__alloyId21644);
    $.__views.__alloyId21645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21645"
    });
    $.__views.__alloyId21644.add($.__views.__alloyId21645);
    $.__views.__alloyId21646 = Ti.UI.createView({
        id: "__alloyId21646"
    });
    $.__views.__alloyId21646 && $.addTopLevelView($.__views.__alloyId21646);
    $.__views.__alloyId21647 = Ti.UI.createView({
        id: "__alloyId21647"
    });
    $.__views.__alloyId21646.add($.__views.__alloyId21647);
    $.__views.__alloyId21648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21648"
    });
    $.__views.__alloyId21647.add($.__views.__alloyId21648);
    $.__views.__alloyId21649 = Ti.UI.createView({
        id: "__alloyId21649"
    });
    $.__views.__alloyId21649 && $.addTopLevelView($.__views.__alloyId21649);
    $.__views.__alloyId21650 = Ti.UI.createView({
        id: "__alloyId21650"
    });
    $.__views.__alloyId21649.add($.__views.__alloyId21650);
    $.__views.__alloyId21651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21651"
    });
    $.__views.__alloyId21650.add($.__views.__alloyId21651);
    $.__views.__alloyId21652 = Ti.UI.createView({
        id: "__alloyId21652"
    });
    $.__views.__alloyId21652 && $.addTopLevelView($.__views.__alloyId21652);
    $.__views.__alloyId21653 = Ti.UI.createView({
        id: "__alloyId21653"
    });
    $.__views.__alloyId21652.add($.__views.__alloyId21653);
    $.__views.__alloyId21654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21654"
    });
    $.__views.__alloyId21653.add($.__views.__alloyId21654);
    $.__views.__alloyId21655 = Ti.UI.createView({
        id: "__alloyId21655"
    });
    $.__views.__alloyId21655 && $.addTopLevelView($.__views.__alloyId21655);
    $.__views.__alloyId21656 = Ti.UI.createView({
        id: "__alloyId21656"
    });
    $.__views.__alloyId21655.add($.__views.__alloyId21656);
    $.__views.__alloyId21657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21657"
    });
    $.__views.__alloyId21656.add($.__views.__alloyId21657);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;