function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_846";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_846 = Ti.UI.createView({
        id: "widget_846"
    });
    $.__views.widget_846 && $.addTopLevelView($.__views.widget_846);
    $.__views.__alloyId21606 = Ti.UI.createView({
        id: "__alloyId21606"
    });
    $.__views.widget_846.add($.__views.__alloyId21606);
    $.__views.__alloyId21607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21607"
    });
    $.__views.__alloyId21606.add($.__views.__alloyId21607);
    $.__views.__alloyId21608 = Ti.UI.createView({
        id: "__alloyId21608"
    });
    $.__views.__alloyId21608 && $.addTopLevelView($.__views.__alloyId21608);
    $.__views.__alloyId21609 = Ti.UI.createView({
        id: "__alloyId21609"
    });
    $.__views.__alloyId21608.add($.__views.__alloyId21609);
    $.__views.__alloyId21610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21610"
    });
    $.__views.__alloyId21609.add($.__views.__alloyId21610);
    $.__views.__alloyId21611 = Ti.UI.createView({
        id: "__alloyId21611"
    });
    $.__views.__alloyId21611 && $.addTopLevelView($.__views.__alloyId21611);
    $.__views.__alloyId21612 = Ti.UI.createView({
        id: "__alloyId21612"
    });
    $.__views.__alloyId21611.add($.__views.__alloyId21612);
    $.__views.__alloyId21613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21613"
    });
    $.__views.__alloyId21612.add($.__views.__alloyId21613);
    $.__views.__alloyId21614 = Ti.UI.createView({
        id: "__alloyId21614"
    });
    $.__views.__alloyId21614 && $.addTopLevelView($.__views.__alloyId21614);
    $.__views.__alloyId21615 = Ti.UI.createView({
        id: "__alloyId21615"
    });
    $.__views.__alloyId21614.add($.__views.__alloyId21615);
    $.__views.__alloyId21616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21616"
    });
    $.__views.__alloyId21615.add($.__views.__alloyId21616);
    $.__views.__alloyId21617 = Ti.UI.createView({
        id: "__alloyId21617"
    });
    $.__views.__alloyId21617 && $.addTopLevelView($.__views.__alloyId21617);
    $.__views.__alloyId21618 = Ti.UI.createView({
        id: "__alloyId21618"
    });
    $.__views.__alloyId21617.add($.__views.__alloyId21618);
    $.__views.__alloyId21619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21619"
    });
    $.__views.__alloyId21618.add($.__views.__alloyId21619);
    $.__views.__alloyId21620 = Ti.UI.createView({
        id: "__alloyId21620"
    });
    $.__views.__alloyId21620 && $.addTopLevelView($.__views.__alloyId21620);
    $.__views.__alloyId21621 = Ti.UI.createView({
        id: "__alloyId21621"
    });
    $.__views.__alloyId21620.add($.__views.__alloyId21621);
    $.__views.__alloyId21622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21622"
    });
    $.__views.__alloyId21621.add($.__views.__alloyId21622);
    $.__views.__alloyId21623 = Ti.UI.createView({
        id: "__alloyId21623"
    });
    $.__views.__alloyId21623 && $.addTopLevelView($.__views.__alloyId21623);
    $.__views.__alloyId21624 = Ti.UI.createView({
        id: "__alloyId21624"
    });
    $.__views.__alloyId21623.add($.__views.__alloyId21624);
    $.__views.__alloyId21625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21625"
    });
    $.__views.__alloyId21624.add($.__views.__alloyId21625);
    $.__views.__alloyId21626 = Ti.UI.createView({
        id: "__alloyId21626"
    });
    $.__views.__alloyId21626 && $.addTopLevelView($.__views.__alloyId21626);
    $.__views.__alloyId21627 = Ti.UI.createView({
        id: "__alloyId21627"
    });
    $.__views.__alloyId21626.add($.__views.__alloyId21627);
    $.__views.__alloyId21628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21628"
    });
    $.__views.__alloyId21627.add($.__views.__alloyId21628);
    $.__views.__alloyId21629 = Ti.UI.createView({
        id: "__alloyId21629"
    });
    $.__views.__alloyId21629 && $.addTopLevelView($.__views.__alloyId21629);
    $.__views.__alloyId21630 = Ti.UI.createView({
        id: "__alloyId21630"
    });
    $.__views.__alloyId21629.add($.__views.__alloyId21630);
    $.__views.__alloyId21631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21631"
    });
    $.__views.__alloyId21630.add($.__views.__alloyId21631);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;