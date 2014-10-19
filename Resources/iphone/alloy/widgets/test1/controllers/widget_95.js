function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_95";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_95 = Ti.UI.createView({
        id: "widget_95"
    });
    $.__views.widget_95 && $.addTopLevelView($.__views.widget_95);
    $.__views.__alloyId24596 = Ti.UI.createView({
        id: "__alloyId24596"
    });
    $.__views.widget_95.add($.__views.__alloyId24596);
    $.__views.__alloyId24597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24597"
    });
    $.__views.__alloyId24596.add($.__views.__alloyId24597);
    $.__views.__alloyId24598 = Ti.UI.createView({
        id: "__alloyId24598"
    });
    $.__views.__alloyId24598 && $.addTopLevelView($.__views.__alloyId24598);
    $.__views.__alloyId24599 = Ti.UI.createView({
        id: "__alloyId24599"
    });
    $.__views.__alloyId24598.add($.__views.__alloyId24599);
    $.__views.__alloyId24600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24600"
    });
    $.__views.__alloyId24599.add($.__views.__alloyId24600);
    $.__views.__alloyId24601 = Ti.UI.createView({
        id: "__alloyId24601"
    });
    $.__views.__alloyId24601 && $.addTopLevelView($.__views.__alloyId24601);
    $.__views.__alloyId24602 = Ti.UI.createView({
        id: "__alloyId24602"
    });
    $.__views.__alloyId24601.add($.__views.__alloyId24602);
    $.__views.__alloyId24603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24603"
    });
    $.__views.__alloyId24602.add($.__views.__alloyId24603);
    $.__views.__alloyId24604 = Ti.UI.createView({
        id: "__alloyId24604"
    });
    $.__views.__alloyId24604 && $.addTopLevelView($.__views.__alloyId24604);
    $.__views.__alloyId24605 = Ti.UI.createView({
        id: "__alloyId24605"
    });
    $.__views.__alloyId24604.add($.__views.__alloyId24605);
    $.__views.__alloyId24606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24606"
    });
    $.__views.__alloyId24605.add($.__views.__alloyId24606);
    $.__views.__alloyId24607 = Ti.UI.createView({
        id: "__alloyId24607"
    });
    $.__views.__alloyId24607 && $.addTopLevelView($.__views.__alloyId24607);
    $.__views.__alloyId24608 = Ti.UI.createView({
        id: "__alloyId24608"
    });
    $.__views.__alloyId24607.add($.__views.__alloyId24608);
    $.__views.__alloyId24609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24609"
    });
    $.__views.__alloyId24608.add($.__views.__alloyId24609);
    $.__views.__alloyId24610 = Ti.UI.createView({
        id: "__alloyId24610"
    });
    $.__views.__alloyId24610 && $.addTopLevelView($.__views.__alloyId24610);
    $.__views.__alloyId24611 = Ti.UI.createView({
        id: "__alloyId24611"
    });
    $.__views.__alloyId24610.add($.__views.__alloyId24611);
    $.__views.__alloyId24612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24612"
    });
    $.__views.__alloyId24611.add($.__views.__alloyId24612);
    $.__views.__alloyId24613 = Ti.UI.createView({
        id: "__alloyId24613"
    });
    $.__views.__alloyId24613 && $.addTopLevelView($.__views.__alloyId24613);
    $.__views.__alloyId24614 = Ti.UI.createView({
        id: "__alloyId24614"
    });
    $.__views.__alloyId24613.add($.__views.__alloyId24614);
    $.__views.__alloyId24615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24615"
    });
    $.__views.__alloyId24614.add($.__views.__alloyId24615);
    $.__views.__alloyId24616 = Ti.UI.createView({
        id: "__alloyId24616"
    });
    $.__views.__alloyId24616 && $.addTopLevelView($.__views.__alloyId24616);
    $.__views.__alloyId24617 = Ti.UI.createView({
        id: "__alloyId24617"
    });
    $.__views.__alloyId24616.add($.__views.__alloyId24617);
    $.__views.__alloyId24618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24618"
    });
    $.__views.__alloyId24617.add($.__views.__alloyId24618);
    $.__views.__alloyId24619 = Ti.UI.createView({
        id: "__alloyId24619"
    });
    $.__views.__alloyId24619 && $.addTopLevelView($.__views.__alloyId24619);
    $.__views.__alloyId24620 = Ti.UI.createView({
        id: "__alloyId24620"
    });
    $.__views.__alloyId24619.add($.__views.__alloyId24620);
    $.__views.__alloyId24621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24621"
    });
    $.__views.__alloyId24620.add($.__views.__alloyId24621);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;