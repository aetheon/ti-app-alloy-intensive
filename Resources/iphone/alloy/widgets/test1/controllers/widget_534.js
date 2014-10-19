function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_534";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_534 = Ti.UI.createView({
        id: "widget_534"
    });
    $.__views.widget_534 && $.addTopLevelView($.__views.widget_534);
    $.__views.__alloyId12610 = Ti.UI.createView({
        id: "__alloyId12610"
    });
    $.__views.widget_534.add($.__views.__alloyId12610);
    $.__views.__alloyId12611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12611"
    });
    $.__views.__alloyId12610.add($.__views.__alloyId12611);
    $.__views.__alloyId12612 = Ti.UI.createView({
        id: "__alloyId12612"
    });
    $.__views.__alloyId12612 && $.addTopLevelView($.__views.__alloyId12612);
    $.__views.__alloyId12613 = Ti.UI.createView({
        id: "__alloyId12613"
    });
    $.__views.__alloyId12612.add($.__views.__alloyId12613);
    $.__views.__alloyId12614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12614"
    });
    $.__views.__alloyId12613.add($.__views.__alloyId12614);
    $.__views.__alloyId12615 = Ti.UI.createView({
        id: "__alloyId12615"
    });
    $.__views.__alloyId12615 && $.addTopLevelView($.__views.__alloyId12615);
    $.__views.__alloyId12616 = Ti.UI.createView({
        id: "__alloyId12616"
    });
    $.__views.__alloyId12615.add($.__views.__alloyId12616);
    $.__views.__alloyId12617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12617"
    });
    $.__views.__alloyId12616.add($.__views.__alloyId12617);
    $.__views.__alloyId12618 = Ti.UI.createView({
        id: "__alloyId12618"
    });
    $.__views.__alloyId12618 && $.addTopLevelView($.__views.__alloyId12618);
    $.__views.__alloyId12619 = Ti.UI.createView({
        id: "__alloyId12619"
    });
    $.__views.__alloyId12618.add($.__views.__alloyId12619);
    $.__views.__alloyId12620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12620"
    });
    $.__views.__alloyId12619.add($.__views.__alloyId12620);
    $.__views.__alloyId12621 = Ti.UI.createView({
        id: "__alloyId12621"
    });
    $.__views.__alloyId12621 && $.addTopLevelView($.__views.__alloyId12621);
    $.__views.__alloyId12622 = Ti.UI.createView({
        id: "__alloyId12622"
    });
    $.__views.__alloyId12621.add($.__views.__alloyId12622);
    $.__views.__alloyId12623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12623"
    });
    $.__views.__alloyId12622.add($.__views.__alloyId12623);
    $.__views.__alloyId12624 = Ti.UI.createView({
        id: "__alloyId12624"
    });
    $.__views.__alloyId12624 && $.addTopLevelView($.__views.__alloyId12624);
    $.__views.__alloyId12625 = Ti.UI.createView({
        id: "__alloyId12625"
    });
    $.__views.__alloyId12624.add($.__views.__alloyId12625);
    $.__views.__alloyId12626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12626"
    });
    $.__views.__alloyId12625.add($.__views.__alloyId12626);
    $.__views.__alloyId12627 = Ti.UI.createView({
        id: "__alloyId12627"
    });
    $.__views.__alloyId12627 && $.addTopLevelView($.__views.__alloyId12627);
    $.__views.__alloyId12628 = Ti.UI.createView({
        id: "__alloyId12628"
    });
    $.__views.__alloyId12627.add($.__views.__alloyId12628);
    $.__views.__alloyId12629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12629"
    });
    $.__views.__alloyId12628.add($.__views.__alloyId12629);
    $.__views.__alloyId12630 = Ti.UI.createView({
        id: "__alloyId12630"
    });
    $.__views.__alloyId12630 && $.addTopLevelView($.__views.__alloyId12630);
    $.__views.__alloyId12631 = Ti.UI.createView({
        id: "__alloyId12631"
    });
    $.__views.__alloyId12630.add($.__views.__alloyId12631);
    $.__views.__alloyId12632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12632"
    });
    $.__views.__alloyId12631.add($.__views.__alloyId12632);
    $.__views.__alloyId12633 = Ti.UI.createView({
        id: "__alloyId12633"
    });
    $.__views.__alloyId12633 && $.addTopLevelView($.__views.__alloyId12633);
    $.__views.__alloyId12634 = Ti.UI.createView({
        id: "__alloyId12634"
    });
    $.__views.__alloyId12633.add($.__views.__alloyId12634);
    $.__views.__alloyId12635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12635"
    });
    $.__views.__alloyId12634.add($.__views.__alloyId12635);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;