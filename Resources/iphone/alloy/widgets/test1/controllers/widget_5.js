function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_5";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_5 = Ti.UI.createView({
        id: "widget_5"
    });
    $.__views.widget_5 && $.addTopLevelView($.__views.widget_5);
    $.__views.__alloyId11596 = Ti.UI.createView({
        id: "__alloyId11596"
    });
    $.__views.widget_5.add($.__views.__alloyId11596);
    $.__views.__alloyId11597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11597"
    });
    $.__views.__alloyId11596.add($.__views.__alloyId11597);
    $.__views.__alloyId11598 = Ti.UI.createView({
        id: "__alloyId11598"
    });
    $.__views.__alloyId11598 && $.addTopLevelView($.__views.__alloyId11598);
    $.__views.__alloyId11599 = Ti.UI.createView({
        id: "__alloyId11599"
    });
    $.__views.__alloyId11598.add($.__views.__alloyId11599);
    $.__views.__alloyId11600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11600"
    });
    $.__views.__alloyId11599.add($.__views.__alloyId11600);
    $.__views.__alloyId11601 = Ti.UI.createView({
        id: "__alloyId11601"
    });
    $.__views.__alloyId11601 && $.addTopLevelView($.__views.__alloyId11601);
    $.__views.__alloyId11602 = Ti.UI.createView({
        id: "__alloyId11602"
    });
    $.__views.__alloyId11601.add($.__views.__alloyId11602);
    $.__views.__alloyId11603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11603"
    });
    $.__views.__alloyId11602.add($.__views.__alloyId11603);
    $.__views.__alloyId11604 = Ti.UI.createView({
        id: "__alloyId11604"
    });
    $.__views.__alloyId11604 && $.addTopLevelView($.__views.__alloyId11604);
    $.__views.__alloyId11605 = Ti.UI.createView({
        id: "__alloyId11605"
    });
    $.__views.__alloyId11604.add($.__views.__alloyId11605);
    $.__views.__alloyId11606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11606"
    });
    $.__views.__alloyId11605.add($.__views.__alloyId11606);
    $.__views.__alloyId11607 = Ti.UI.createView({
        id: "__alloyId11607"
    });
    $.__views.__alloyId11607 && $.addTopLevelView($.__views.__alloyId11607);
    $.__views.__alloyId11608 = Ti.UI.createView({
        id: "__alloyId11608"
    });
    $.__views.__alloyId11607.add($.__views.__alloyId11608);
    $.__views.__alloyId11609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11609"
    });
    $.__views.__alloyId11608.add($.__views.__alloyId11609);
    $.__views.__alloyId11610 = Ti.UI.createView({
        id: "__alloyId11610"
    });
    $.__views.__alloyId11610 && $.addTopLevelView($.__views.__alloyId11610);
    $.__views.__alloyId11611 = Ti.UI.createView({
        id: "__alloyId11611"
    });
    $.__views.__alloyId11610.add($.__views.__alloyId11611);
    $.__views.__alloyId11612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11612"
    });
    $.__views.__alloyId11611.add($.__views.__alloyId11612);
    $.__views.__alloyId11613 = Ti.UI.createView({
        id: "__alloyId11613"
    });
    $.__views.__alloyId11613 && $.addTopLevelView($.__views.__alloyId11613);
    $.__views.__alloyId11614 = Ti.UI.createView({
        id: "__alloyId11614"
    });
    $.__views.__alloyId11613.add($.__views.__alloyId11614);
    $.__views.__alloyId11615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11615"
    });
    $.__views.__alloyId11614.add($.__views.__alloyId11615);
    $.__views.__alloyId11616 = Ti.UI.createView({
        id: "__alloyId11616"
    });
    $.__views.__alloyId11616 && $.addTopLevelView($.__views.__alloyId11616);
    $.__views.__alloyId11617 = Ti.UI.createView({
        id: "__alloyId11617"
    });
    $.__views.__alloyId11616.add($.__views.__alloyId11617);
    $.__views.__alloyId11618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11618"
    });
    $.__views.__alloyId11617.add($.__views.__alloyId11618);
    $.__views.__alloyId11619 = Ti.UI.createView({
        id: "__alloyId11619"
    });
    $.__views.__alloyId11619 && $.addTopLevelView($.__views.__alloyId11619);
    $.__views.__alloyId11620 = Ti.UI.createView({
        id: "__alloyId11620"
    });
    $.__views.__alloyId11619.add($.__views.__alloyId11620);
    $.__views.__alloyId11621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11621"
    });
    $.__views.__alloyId11620.add($.__views.__alloyId11621);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;