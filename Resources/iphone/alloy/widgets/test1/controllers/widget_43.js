function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_43";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_43 = Ti.UI.createView({
        id: "widget_43"
    });
    $.__views.widget_43 && $.addTopLevelView($.__views.widget_43);
    $.__views.__alloyId9594 = Ti.UI.createView({
        id: "__alloyId9594"
    });
    $.__views.widget_43.add($.__views.__alloyId9594);
    $.__views.__alloyId9595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9595"
    });
    $.__views.__alloyId9594.add($.__views.__alloyId9595);
    $.__views.__alloyId9596 = Ti.UI.createView({
        id: "__alloyId9596"
    });
    $.__views.__alloyId9596 && $.addTopLevelView($.__views.__alloyId9596);
    $.__views.__alloyId9597 = Ti.UI.createView({
        id: "__alloyId9597"
    });
    $.__views.__alloyId9596.add($.__views.__alloyId9597);
    $.__views.__alloyId9598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9598"
    });
    $.__views.__alloyId9597.add($.__views.__alloyId9598);
    $.__views.__alloyId9599 = Ti.UI.createView({
        id: "__alloyId9599"
    });
    $.__views.__alloyId9599 && $.addTopLevelView($.__views.__alloyId9599);
    $.__views.__alloyId9600 = Ti.UI.createView({
        id: "__alloyId9600"
    });
    $.__views.__alloyId9599.add($.__views.__alloyId9600);
    $.__views.__alloyId9601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9601"
    });
    $.__views.__alloyId9600.add($.__views.__alloyId9601);
    $.__views.__alloyId9602 = Ti.UI.createView({
        id: "__alloyId9602"
    });
    $.__views.__alloyId9602 && $.addTopLevelView($.__views.__alloyId9602);
    $.__views.__alloyId9603 = Ti.UI.createView({
        id: "__alloyId9603"
    });
    $.__views.__alloyId9602.add($.__views.__alloyId9603);
    $.__views.__alloyId9604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9604"
    });
    $.__views.__alloyId9603.add($.__views.__alloyId9604);
    $.__views.__alloyId9605 = Ti.UI.createView({
        id: "__alloyId9605"
    });
    $.__views.__alloyId9605 && $.addTopLevelView($.__views.__alloyId9605);
    $.__views.__alloyId9606 = Ti.UI.createView({
        id: "__alloyId9606"
    });
    $.__views.__alloyId9605.add($.__views.__alloyId9606);
    $.__views.__alloyId9607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9607"
    });
    $.__views.__alloyId9606.add($.__views.__alloyId9607);
    $.__views.__alloyId9608 = Ti.UI.createView({
        id: "__alloyId9608"
    });
    $.__views.__alloyId9608 && $.addTopLevelView($.__views.__alloyId9608);
    $.__views.__alloyId9609 = Ti.UI.createView({
        id: "__alloyId9609"
    });
    $.__views.__alloyId9608.add($.__views.__alloyId9609);
    $.__views.__alloyId9610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9610"
    });
    $.__views.__alloyId9609.add($.__views.__alloyId9610);
    $.__views.__alloyId9611 = Ti.UI.createView({
        id: "__alloyId9611"
    });
    $.__views.__alloyId9611 && $.addTopLevelView($.__views.__alloyId9611);
    $.__views.__alloyId9612 = Ti.UI.createView({
        id: "__alloyId9612"
    });
    $.__views.__alloyId9611.add($.__views.__alloyId9612);
    $.__views.__alloyId9613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9613"
    });
    $.__views.__alloyId9612.add($.__views.__alloyId9613);
    $.__views.__alloyId9614 = Ti.UI.createView({
        id: "__alloyId9614"
    });
    $.__views.__alloyId9614 && $.addTopLevelView($.__views.__alloyId9614);
    $.__views.__alloyId9615 = Ti.UI.createView({
        id: "__alloyId9615"
    });
    $.__views.__alloyId9614.add($.__views.__alloyId9615);
    $.__views.__alloyId9616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9616"
    });
    $.__views.__alloyId9615.add($.__views.__alloyId9616);
    $.__views.__alloyId9617 = Ti.UI.createView({
        id: "__alloyId9617"
    });
    $.__views.__alloyId9617 && $.addTopLevelView($.__views.__alloyId9617);
    $.__views.__alloyId9618 = Ti.UI.createView({
        id: "__alloyId9618"
    });
    $.__views.__alloyId9617.add($.__views.__alloyId9618);
    $.__views.__alloyId9619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9619"
    });
    $.__views.__alloyId9618.add($.__views.__alloyId9619);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;