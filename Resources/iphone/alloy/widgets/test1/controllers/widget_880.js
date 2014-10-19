function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_880";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_880 = Ti.UI.createView({
        id: "widget_880"
    });
    $.__views.widget_880 && $.addTopLevelView($.__views.widget_880);
    $.__views.__alloyId22594 = Ti.UI.createView({
        id: "__alloyId22594"
    });
    $.__views.widget_880.add($.__views.__alloyId22594);
    $.__views.__alloyId22595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22595"
    });
    $.__views.__alloyId22594.add($.__views.__alloyId22595);
    $.__views.__alloyId22596 = Ti.UI.createView({
        id: "__alloyId22596"
    });
    $.__views.__alloyId22596 && $.addTopLevelView($.__views.__alloyId22596);
    $.__views.__alloyId22597 = Ti.UI.createView({
        id: "__alloyId22597"
    });
    $.__views.__alloyId22596.add($.__views.__alloyId22597);
    $.__views.__alloyId22598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22598"
    });
    $.__views.__alloyId22597.add($.__views.__alloyId22598);
    $.__views.__alloyId22599 = Ti.UI.createView({
        id: "__alloyId22599"
    });
    $.__views.__alloyId22599 && $.addTopLevelView($.__views.__alloyId22599);
    $.__views.__alloyId22600 = Ti.UI.createView({
        id: "__alloyId22600"
    });
    $.__views.__alloyId22599.add($.__views.__alloyId22600);
    $.__views.__alloyId22601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22601"
    });
    $.__views.__alloyId22600.add($.__views.__alloyId22601);
    $.__views.__alloyId22602 = Ti.UI.createView({
        id: "__alloyId22602"
    });
    $.__views.__alloyId22602 && $.addTopLevelView($.__views.__alloyId22602);
    $.__views.__alloyId22603 = Ti.UI.createView({
        id: "__alloyId22603"
    });
    $.__views.__alloyId22602.add($.__views.__alloyId22603);
    $.__views.__alloyId22604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22604"
    });
    $.__views.__alloyId22603.add($.__views.__alloyId22604);
    $.__views.__alloyId22605 = Ti.UI.createView({
        id: "__alloyId22605"
    });
    $.__views.__alloyId22605 && $.addTopLevelView($.__views.__alloyId22605);
    $.__views.__alloyId22606 = Ti.UI.createView({
        id: "__alloyId22606"
    });
    $.__views.__alloyId22605.add($.__views.__alloyId22606);
    $.__views.__alloyId22607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22607"
    });
    $.__views.__alloyId22606.add($.__views.__alloyId22607);
    $.__views.__alloyId22608 = Ti.UI.createView({
        id: "__alloyId22608"
    });
    $.__views.__alloyId22608 && $.addTopLevelView($.__views.__alloyId22608);
    $.__views.__alloyId22609 = Ti.UI.createView({
        id: "__alloyId22609"
    });
    $.__views.__alloyId22608.add($.__views.__alloyId22609);
    $.__views.__alloyId22610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22610"
    });
    $.__views.__alloyId22609.add($.__views.__alloyId22610);
    $.__views.__alloyId22611 = Ti.UI.createView({
        id: "__alloyId22611"
    });
    $.__views.__alloyId22611 && $.addTopLevelView($.__views.__alloyId22611);
    $.__views.__alloyId22612 = Ti.UI.createView({
        id: "__alloyId22612"
    });
    $.__views.__alloyId22611.add($.__views.__alloyId22612);
    $.__views.__alloyId22613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22613"
    });
    $.__views.__alloyId22612.add($.__views.__alloyId22613);
    $.__views.__alloyId22614 = Ti.UI.createView({
        id: "__alloyId22614"
    });
    $.__views.__alloyId22614 && $.addTopLevelView($.__views.__alloyId22614);
    $.__views.__alloyId22615 = Ti.UI.createView({
        id: "__alloyId22615"
    });
    $.__views.__alloyId22614.add($.__views.__alloyId22615);
    $.__views.__alloyId22616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22616"
    });
    $.__views.__alloyId22615.add($.__views.__alloyId22616);
    $.__views.__alloyId22617 = Ti.UI.createView({
        id: "__alloyId22617"
    });
    $.__views.__alloyId22617 && $.addTopLevelView($.__views.__alloyId22617);
    $.__views.__alloyId22618 = Ti.UI.createView({
        id: "__alloyId22618"
    });
    $.__views.__alloyId22617.add($.__views.__alloyId22618);
    $.__views.__alloyId22619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22619"
    });
    $.__views.__alloyId22618.add($.__views.__alloyId22619);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;