function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_399";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_399 = Ti.UI.createView({
        id: "widget_399"
    });
    $.__views.widget_399 && $.addTopLevelView($.__views.widget_399);
    $.__views.__alloyId8684 = Ti.UI.createView({
        id: "__alloyId8684"
    });
    $.__views.widget_399.add($.__views.__alloyId8684);
    $.__views.__alloyId8685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8685"
    });
    $.__views.__alloyId8684.add($.__views.__alloyId8685);
    $.__views.__alloyId8686 = Ti.UI.createView({
        id: "__alloyId8686"
    });
    $.__views.__alloyId8686 && $.addTopLevelView($.__views.__alloyId8686);
    $.__views.__alloyId8687 = Ti.UI.createView({
        id: "__alloyId8687"
    });
    $.__views.__alloyId8686.add($.__views.__alloyId8687);
    $.__views.__alloyId8688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8688"
    });
    $.__views.__alloyId8687.add($.__views.__alloyId8688);
    $.__views.__alloyId8689 = Ti.UI.createView({
        id: "__alloyId8689"
    });
    $.__views.__alloyId8689 && $.addTopLevelView($.__views.__alloyId8689);
    $.__views.__alloyId8690 = Ti.UI.createView({
        id: "__alloyId8690"
    });
    $.__views.__alloyId8689.add($.__views.__alloyId8690);
    $.__views.__alloyId8691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8691"
    });
    $.__views.__alloyId8690.add($.__views.__alloyId8691);
    $.__views.__alloyId8692 = Ti.UI.createView({
        id: "__alloyId8692"
    });
    $.__views.__alloyId8692 && $.addTopLevelView($.__views.__alloyId8692);
    $.__views.__alloyId8693 = Ti.UI.createView({
        id: "__alloyId8693"
    });
    $.__views.__alloyId8692.add($.__views.__alloyId8693);
    $.__views.__alloyId8694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8694"
    });
    $.__views.__alloyId8693.add($.__views.__alloyId8694);
    $.__views.__alloyId8695 = Ti.UI.createView({
        id: "__alloyId8695"
    });
    $.__views.__alloyId8695 && $.addTopLevelView($.__views.__alloyId8695);
    $.__views.__alloyId8696 = Ti.UI.createView({
        id: "__alloyId8696"
    });
    $.__views.__alloyId8695.add($.__views.__alloyId8696);
    $.__views.__alloyId8697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8697"
    });
    $.__views.__alloyId8696.add($.__views.__alloyId8697);
    $.__views.__alloyId8698 = Ti.UI.createView({
        id: "__alloyId8698"
    });
    $.__views.__alloyId8698 && $.addTopLevelView($.__views.__alloyId8698);
    $.__views.__alloyId8699 = Ti.UI.createView({
        id: "__alloyId8699"
    });
    $.__views.__alloyId8698.add($.__views.__alloyId8699);
    $.__views.__alloyId8700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8700"
    });
    $.__views.__alloyId8699.add($.__views.__alloyId8700);
    $.__views.__alloyId8701 = Ti.UI.createView({
        id: "__alloyId8701"
    });
    $.__views.__alloyId8701 && $.addTopLevelView($.__views.__alloyId8701);
    $.__views.__alloyId8702 = Ti.UI.createView({
        id: "__alloyId8702"
    });
    $.__views.__alloyId8701.add($.__views.__alloyId8702);
    $.__views.__alloyId8703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8703"
    });
    $.__views.__alloyId8702.add($.__views.__alloyId8703);
    $.__views.__alloyId8704 = Ti.UI.createView({
        id: "__alloyId8704"
    });
    $.__views.__alloyId8704 && $.addTopLevelView($.__views.__alloyId8704);
    $.__views.__alloyId8705 = Ti.UI.createView({
        id: "__alloyId8705"
    });
    $.__views.__alloyId8704.add($.__views.__alloyId8705);
    $.__views.__alloyId8706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8706"
    });
    $.__views.__alloyId8705.add($.__views.__alloyId8706);
    $.__views.__alloyId8707 = Ti.UI.createView({
        id: "__alloyId8707"
    });
    $.__views.__alloyId8707 && $.addTopLevelView($.__views.__alloyId8707);
    $.__views.__alloyId8708 = Ti.UI.createView({
        id: "__alloyId8708"
    });
    $.__views.__alloyId8707.add($.__views.__alloyId8708);
    $.__views.__alloyId8709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8709"
    });
    $.__views.__alloyId8708.add($.__views.__alloyId8709);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;