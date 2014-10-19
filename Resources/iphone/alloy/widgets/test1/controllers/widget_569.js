function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_569";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_569 = Ti.UI.createView({
        id: "widget_569"
    });
    $.__views.widget_569 && $.addTopLevelView($.__views.widget_569);
    $.__views.__alloyId13598 = Ti.UI.createView({
        id: "__alloyId13598"
    });
    $.__views.widget_569.add($.__views.__alloyId13598);
    $.__views.__alloyId13599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13599"
    });
    $.__views.__alloyId13598.add($.__views.__alloyId13599);
    $.__views.__alloyId13600 = Ti.UI.createView({
        id: "__alloyId13600"
    });
    $.__views.__alloyId13600 && $.addTopLevelView($.__views.__alloyId13600);
    $.__views.__alloyId13601 = Ti.UI.createView({
        id: "__alloyId13601"
    });
    $.__views.__alloyId13600.add($.__views.__alloyId13601);
    $.__views.__alloyId13602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13602"
    });
    $.__views.__alloyId13601.add($.__views.__alloyId13602);
    $.__views.__alloyId13603 = Ti.UI.createView({
        id: "__alloyId13603"
    });
    $.__views.__alloyId13603 && $.addTopLevelView($.__views.__alloyId13603);
    $.__views.__alloyId13604 = Ti.UI.createView({
        id: "__alloyId13604"
    });
    $.__views.__alloyId13603.add($.__views.__alloyId13604);
    $.__views.__alloyId13605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13605"
    });
    $.__views.__alloyId13604.add($.__views.__alloyId13605);
    $.__views.__alloyId13606 = Ti.UI.createView({
        id: "__alloyId13606"
    });
    $.__views.__alloyId13606 && $.addTopLevelView($.__views.__alloyId13606);
    $.__views.__alloyId13607 = Ti.UI.createView({
        id: "__alloyId13607"
    });
    $.__views.__alloyId13606.add($.__views.__alloyId13607);
    $.__views.__alloyId13608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13608"
    });
    $.__views.__alloyId13607.add($.__views.__alloyId13608);
    $.__views.__alloyId13609 = Ti.UI.createView({
        id: "__alloyId13609"
    });
    $.__views.__alloyId13609 && $.addTopLevelView($.__views.__alloyId13609);
    $.__views.__alloyId13610 = Ti.UI.createView({
        id: "__alloyId13610"
    });
    $.__views.__alloyId13609.add($.__views.__alloyId13610);
    $.__views.__alloyId13611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13611"
    });
    $.__views.__alloyId13610.add($.__views.__alloyId13611);
    $.__views.__alloyId13612 = Ti.UI.createView({
        id: "__alloyId13612"
    });
    $.__views.__alloyId13612 && $.addTopLevelView($.__views.__alloyId13612);
    $.__views.__alloyId13613 = Ti.UI.createView({
        id: "__alloyId13613"
    });
    $.__views.__alloyId13612.add($.__views.__alloyId13613);
    $.__views.__alloyId13614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13614"
    });
    $.__views.__alloyId13613.add($.__views.__alloyId13614);
    $.__views.__alloyId13615 = Ti.UI.createView({
        id: "__alloyId13615"
    });
    $.__views.__alloyId13615 && $.addTopLevelView($.__views.__alloyId13615);
    $.__views.__alloyId13616 = Ti.UI.createView({
        id: "__alloyId13616"
    });
    $.__views.__alloyId13615.add($.__views.__alloyId13616);
    $.__views.__alloyId13617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13617"
    });
    $.__views.__alloyId13616.add($.__views.__alloyId13617);
    $.__views.__alloyId13618 = Ti.UI.createView({
        id: "__alloyId13618"
    });
    $.__views.__alloyId13618 && $.addTopLevelView($.__views.__alloyId13618);
    $.__views.__alloyId13619 = Ti.UI.createView({
        id: "__alloyId13619"
    });
    $.__views.__alloyId13618.add($.__views.__alloyId13619);
    $.__views.__alloyId13620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13620"
    });
    $.__views.__alloyId13619.add($.__views.__alloyId13620);
    $.__views.__alloyId13621 = Ti.UI.createView({
        id: "__alloyId13621"
    });
    $.__views.__alloyId13621 && $.addTopLevelView($.__views.__alloyId13621);
    $.__views.__alloyId13622 = Ti.UI.createView({
        id: "__alloyId13622"
    });
    $.__views.__alloyId13621.add($.__views.__alloyId13622);
    $.__views.__alloyId13623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13623"
    });
    $.__views.__alloyId13622.add($.__views.__alloyId13623);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;