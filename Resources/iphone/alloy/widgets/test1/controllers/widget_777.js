function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_777";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_777 = Ti.UI.createView({
        id: "widget_777"
    });
    $.__views.widget_777 && $.addTopLevelView($.__views.widget_777);
    $.__views.__alloyId19604 = Ti.UI.createView({
        id: "__alloyId19604"
    });
    $.__views.widget_777.add($.__views.__alloyId19604);
    $.__views.__alloyId19605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19605"
    });
    $.__views.__alloyId19604.add($.__views.__alloyId19605);
    $.__views.__alloyId19606 = Ti.UI.createView({
        id: "__alloyId19606"
    });
    $.__views.__alloyId19606 && $.addTopLevelView($.__views.__alloyId19606);
    $.__views.__alloyId19607 = Ti.UI.createView({
        id: "__alloyId19607"
    });
    $.__views.__alloyId19606.add($.__views.__alloyId19607);
    $.__views.__alloyId19608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19608"
    });
    $.__views.__alloyId19607.add($.__views.__alloyId19608);
    $.__views.__alloyId19609 = Ti.UI.createView({
        id: "__alloyId19609"
    });
    $.__views.__alloyId19609 && $.addTopLevelView($.__views.__alloyId19609);
    $.__views.__alloyId19610 = Ti.UI.createView({
        id: "__alloyId19610"
    });
    $.__views.__alloyId19609.add($.__views.__alloyId19610);
    $.__views.__alloyId19611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19611"
    });
    $.__views.__alloyId19610.add($.__views.__alloyId19611);
    $.__views.__alloyId19612 = Ti.UI.createView({
        id: "__alloyId19612"
    });
    $.__views.__alloyId19612 && $.addTopLevelView($.__views.__alloyId19612);
    $.__views.__alloyId19613 = Ti.UI.createView({
        id: "__alloyId19613"
    });
    $.__views.__alloyId19612.add($.__views.__alloyId19613);
    $.__views.__alloyId19614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19614"
    });
    $.__views.__alloyId19613.add($.__views.__alloyId19614);
    $.__views.__alloyId19615 = Ti.UI.createView({
        id: "__alloyId19615"
    });
    $.__views.__alloyId19615 && $.addTopLevelView($.__views.__alloyId19615);
    $.__views.__alloyId19616 = Ti.UI.createView({
        id: "__alloyId19616"
    });
    $.__views.__alloyId19615.add($.__views.__alloyId19616);
    $.__views.__alloyId19617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19617"
    });
    $.__views.__alloyId19616.add($.__views.__alloyId19617);
    $.__views.__alloyId19618 = Ti.UI.createView({
        id: "__alloyId19618"
    });
    $.__views.__alloyId19618 && $.addTopLevelView($.__views.__alloyId19618);
    $.__views.__alloyId19619 = Ti.UI.createView({
        id: "__alloyId19619"
    });
    $.__views.__alloyId19618.add($.__views.__alloyId19619);
    $.__views.__alloyId19620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19620"
    });
    $.__views.__alloyId19619.add($.__views.__alloyId19620);
    $.__views.__alloyId19621 = Ti.UI.createView({
        id: "__alloyId19621"
    });
    $.__views.__alloyId19621 && $.addTopLevelView($.__views.__alloyId19621);
    $.__views.__alloyId19622 = Ti.UI.createView({
        id: "__alloyId19622"
    });
    $.__views.__alloyId19621.add($.__views.__alloyId19622);
    $.__views.__alloyId19623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19623"
    });
    $.__views.__alloyId19622.add($.__views.__alloyId19623);
    $.__views.__alloyId19624 = Ti.UI.createView({
        id: "__alloyId19624"
    });
    $.__views.__alloyId19624 && $.addTopLevelView($.__views.__alloyId19624);
    $.__views.__alloyId19625 = Ti.UI.createView({
        id: "__alloyId19625"
    });
    $.__views.__alloyId19624.add($.__views.__alloyId19625);
    $.__views.__alloyId19626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19626"
    });
    $.__views.__alloyId19625.add($.__views.__alloyId19626);
    $.__views.__alloyId19627 = Ti.UI.createView({
        id: "__alloyId19627"
    });
    $.__views.__alloyId19627 && $.addTopLevelView($.__views.__alloyId19627);
    $.__views.__alloyId19628 = Ti.UI.createView({
        id: "__alloyId19628"
    });
    $.__views.__alloyId19627.add($.__views.__alloyId19628);
    $.__views.__alloyId19629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19629"
    });
    $.__views.__alloyId19628.add($.__views.__alloyId19629);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;