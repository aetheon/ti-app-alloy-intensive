function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_326";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_326 = Ti.UI.createView({
        id: "widget_326"
    });
    $.__views.widget_326 && $.addTopLevelView($.__views.widget_326);
    $.__views.__alloyId6604 = Ti.UI.createView({
        id: "__alloyId6604"
    });
    $.__views.widget_326.add($.__views.__alloyId6604);
    $.__views.__alloyId6605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6605"
    });
    $.__views.__alloyId6604.add($.__views.__alloyId6605);
    $.__views.__alloyId6606 = Ti.UI.createView({
        id: "__alloyId6606"
    });
    $.__views.__alloyId6606 && $.addTopLevelView($.__views.__alloyId6606);
    $.__views.__alloyId6607 = Ti.UI.createView({
        id: "__alloyId6607"
    });
    $.__views.__alloyId6606.add($.__views.__alloyId6607);
    $.__views.__alloyId6608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6608"
    });
    $.__views.__alloyId6607.add($.__views.__alloyId6608);
    $.__views.__alloyId6609 = Ti.UI.createView({
        id: "__alloyId6609"
    });
    $.__views.__alloyId6609 && $.addTopLevelView($.__views.__alloyId6609);
    $.__views.__alloyId6610 = Ti.UI.createView({
        id: "__alloyId6610"
    });
    $.__views.__alloyId6609.add($.__views.__alloyId6610);
    $.__views.__alloyId6611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6611"
    });
    $.__views.__alloyId6610.add($.__views.__alloyId6611);
    $.__views.__alloyId6612 = Ti.UI.createView({
        id: "__alloyId6612"
    });
    $.__views.__alloyId6612 && $.addTopLevelView($.__views.__alloyId6612);
    $.__views.__alloyId6613 = Ti.UI.createView({
        id: "__alloyId6613"
    });
    $.__views.__alloyId6612.add($.__views.__alloyId6613);
    $.__views.__alloyId6614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6614"
    });
    $.__views.__alloyId6613.add($.__views.__alloyId6614);
    $.__views.__alloyId6615 = Ti.UI.createView({
        id: "__alloyId6615"
    });
    $.__views.__alloyId6615 && $.addTopLevelView($.__views.__alloyId6615);
    $.__views.__alloyId6616 = Ti.UI.createView({
        id: "__alloyId6616"
    });
    $.__views.__alloyId6615.add($.__views.__alloyId6616);
    $.__views.__alloyId6617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6617"
    });
    $.__views.__alloyId6616.add($.__views.__alloyId6617);
    $.__views.__alloyId6618 = Ti.UI.createView({
        id: "__alloyId6618"
    });
    $.__views.__alloyId6618 && $.addTopLevelView($.__views.__alloyId6618);
    $.__views.__alloyId6619 = Ti.UI.createView({
        id: "__alloyId6619"
    });
    $.__views.__alloyId6618.add($.__views.__alloyId6619);
    $.__views.__alloyId6620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6620"
    });
    $.__views.__alloyId6619.add($.__views.__alloyId6620);
    $.__views.__alloyId6621 = Ti.UI.createView({
        id: "__alloyId6621"
    });
    $.__views.__alloyId6621 && $.addTopLevelView($.__views.__alloyId6621);
    $.__views.__alloyId6622 = Ti.UI.createView({
        id: "__alloyId6622"
    });
    $.__views.__alloyId6621.add($.__views.__alloyId6622);
    $.__views.__alloyId6623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6623"
    });
    $.__views.__alloyId6622.add($.__views.__alloyId6623);
    $.__views.__alloyId6624 = Ti.UI.createView({
        id: "__alloyId6624"
    });
    $.__views.__alloyId6624 && $.addTopLevelView($.__views.__alloyId6624);
    $.__views.__alloyId6625 = Ti.UI.createView({
        id: "__alloyId6625"
    });
    $.__views.__alloyId6624.add($.__views.__alloyId6625);
    $.__views.__alloyId6626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6626"
    });
    $.__views.__alloyId6625.add($.__views.__alloyId6626);
    $.__views.__alloyId6627 = Ti.UI.createView({
        id: "__alloyId6627"
    });
    $.__views.__alloyId6627 && $.addTopLevelView($.__views.__alloyId6627);
    $.__views.__alloyId6628 = Ti.UI.createView({
        id: "__alloyId6628"
    });
    $.__views.__alloyId6627.add($.__views.__alloyId6628);
    $.__views.__alloyId6629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6629"
    });
    $.__views.__alloyId6628.add($.__views.__alloyId6629);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;