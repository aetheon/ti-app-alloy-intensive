function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_638";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_638 = Ti.UI.createView({
        id: "widget_638"
    });
    $.__views.widget_638 && $.addTopLevelView($.__views.widget_638);
    $.__views.__alloyId15600 = Ti.UI.createView({
        id: "__alloyId15600"
    });
    $.__views.widget_638.add($.__views.__alloyId15600);
    $.__views.__alloyId15601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15601"
    });
    $.__views.__alloyId15600.add($.__views.__alloyId15601);
    $.__views.__alloyId15602 = Ti.UI.createView({
        id: "__alloyId15602"
    });
    $.__views.__alloyId15602 && $.addTopLevelView($.__views.__alloyId15602);
    $.__views.__alloyId15603 = Ti.UI.createView({
        id: "__alloyId15603"
    });
    $.__views.__alloyId15602.add($.__views.__alloyId15603);
    $.__views.__alloyId15604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15604"
    });
    $.__views.__alloyId15603.add($.__views.__alloyId15604);
    $.__views.__alloyId15605 = Ti.UI.createView({
        id: "__alloyId15605"
    });
    $.__views.__alloyId15605 && $.addTopLevelView($.__views.__alloyId15605);
    $.__views.__alloyId15606 = Ti.UI.createView({
        id: "__alloyId15606"
    });
    $.__views.__alloyId15605.add($.__views.__alloyId15606);
    $.__views.__alloyId15607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15607"
    });
    $.__views.__alloyId15606.add($.__views.__alloyId15607);
    $.__views.__alloyId15608 = Ti.UI.createView({
        id: "__alloyId15608"
    });
    $.__views.__alloyId15608 && $.addTopLevelView($.__views.__alloyId15608);
    $.__views.__alloyId15609 = Ti.UI.createView({
        id: "__alloyId15609"
    });
    $.__views.__alloyId15608.add($.__views.__alloyId15609);
    $.__views.__alloyId15610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15610"
    });
    $.__views.__alloyId15609.add($.__views.__alloyId15610);
    $.__views.__alloyId15611 = Ti.UI.createView({
        id: "__alloyId15611"
    });
    $.__views.__alloyId15611 && $.addTopLevelView($.__views.__alloyId15611);
    $.__views.__alloyId15612 = Ti.UI.createView({
        id: "__alloyId15612"
    });
    $.__views.__alloyId15611.add($.__views.__alloyId15612);
    $.__views.__alloyId15613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15613"
    });
    $.__views.__alloyId15612.add($.__views.__alloyId15613);
    $.__views.__alloyId15614 = Ti.UI.createView({
        id: "__alloyId15614"
    });
    $.__views.__alloyId15614 && $.addTopLevelView($.__views.__alloyId15614);
    $.__views.__alloyId15615 = Ti.UI.createView({
        id: "__alloyId15615"
    });
    $.__views.__alloyId15614.add($.__views.__alloyId15615);
    $.__views.__alloyId15616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15616"
    });
    $.__views.__alloyId15615.add($.__views.__alloyId15616);
    $.__views.__alloyId15617 = Ti.UI.createView({
        id: "__alloyId15617"
    });
    $.__views.__alloyId15617 && $.addTopLevelView($.__views.__alloyId15617);
    $.__views.__alloyId15618 = Ti.UI.createView({
        id: "__alloyId15618"
    });
    $.__views.__alloyId15617.add($.__views.__alloyId15618);
    $.__views.__alloyId15619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15619"
    });
    $.__views.__alloyId15618.add($.__views.__alloyId15619);
    $.__views.__alloyId15620 = Ti.UI.createView({
        id: "__alloyId15620"
    });
    $.__views.__alloyId15620 && $.addTopLevelView($.__views.__alloyId15620);
    $.__views.__alloyId15621 = Ti.UI.createView({
        id: "__alloyId15621"
    });
    $.__views.__alloyId15620.add($.__views.__alloyId15621);
    $.__views.__alloyId15622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15622"
    });
    $.__views.__alloyId15621.add($.__views.__alloyId15622);
    $.__views.__alloyId15623 = Ti.UI.createView({
        id: "__alloyId15623"
    });
    $.__views.__alloyId15623 && $.addTopLevelView($.__views.__alloyId15623);
    $.__views.__alloyId15624 = Ti.UI.createView({
        id: "__alloyId15624"
    });
    $.__views.__alloyId15623.add($.__views.__alloyId15624);
    $.__views.__alloyId15625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15625"
    });
    $.__views.__alloyId15624.add($.__views.__alloyId15625);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;