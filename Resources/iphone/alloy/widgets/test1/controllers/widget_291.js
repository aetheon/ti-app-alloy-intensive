function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_291";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_291 = Ti.UI.createView({
        id: "widget_291"
    });
    $.__views.widget_291 && $.addTopLevelView($.__views.widget_291);
    $.__views.__alloyId5590 = Ti.UI.createView({
        id: "__alloyId5590"
    });
    $.__views.widget_291.add($.__views.__alloyId5590);
    $.__views.__alloyId5591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5591"
    });
    $.__views.__alloyId5590.add($.__views.__alloyId5591);
    $.__views.__alloyId5592 = Ti.UI.createView({
        id: "__alloyId5592"
    });
    $.__views.__alloyId5592 && $.addTopLevelView($.__views.__alloyId5592);
    $.__views.__alloyId5593 = Ti.UI.createView({
        id: "__alloyId5593"
    });
    $.__views.__alloyId5592.add($.__views.__alloyId5593);
    $.__views.__alloyId5594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5594"
    });
    $.__views.__alloyId5593.add($.__views.__alloyId5594);
    $.__views.__alloyId5595 = Ti.UI.createView({
        id: "__alloyId5595"
    });
    $.__views.__alloyId5595 && $.addTopLevelView($.__views.__alloyId5595);
    $.__views.__alloyId5596 = Ti.UI.createView({
        id: "__alloyId5596"
    });
    $.__views.__alloyId5595.add($.__views.__alloyId5596);
    $.__views.__alloyId5597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5597"
    });
    $.__views.__alloyId5596.add($.__views.__alloyId5597);
    $.__views.__alloyId5598 = Ti.UI.createView({
        id: "__alloyId5598"
    });
    $.__views.__alloyId5598 && $.addTopLevelView($.__views.__alloyId5598);
    $.__views.__alloyId5599 = Ti.UI.createView({
        id: "__alloyId5599"
    });
    $.__views.__alloyId5598.add($.__views.__alloyId5599);
    $.__views.__alloyId5600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5600"
    });
    $.__views.__alloyId5599.add($.__views.__alloyId5600);
    $.__views.__alloyId5601 = Ti.UI.createView({
        id: "__alloyId5601"
    });
    $.__views.__alloyId5601 && $.addTopLevelView($.__views.__alloyId5601);
    $.__views.__alloyId5602 = Ti.UI.createView({
        id: "__alloyId5602"
    });
    $.__views.__alloyId5601.add($.__views.__alloyId5602);
    $.__views.__alloyId5603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5603"
    });
    $.__views.__alloyId5602.add($.__views.__alloyId5603);
    $.__views.__alloyId5604 = Ti.UI.createView({
        id: "__alloyId5604"
    });
    $.__views.__alloyId5604 && $.addTopLevelView($.__views.__alloyId5604);
    $.__views.__alloyId5605 = Ti.UI.createView({
        id: "__alloyId5605"
    });
    $.__views.__alloyId5604.add($.__views.__alloyId5605);
    $.__views.__alloyId5606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5606"
    });
    $.__views.__alloyId5605.add($.__views.__alloyId5606);
    $.__views.__alloyId5607 = Ti.UI.createView({
        id: "__alloyId5607"
    });
    $.__views.__alloyId5607 && $.addTopLevelView($.__views.__alloyId5607);
    $.__views.__alloyId5608 = Ti.UI.createView({
        id: "__alloyId5608"
    });
    $.__views.__alloyId5607.add($.__views.__alloyId5608);
    $.__views.__alloyId5609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5609"
    });
    $.__views.__alloyId5608.add($.__views.__alloyId5609);
    $.__views.__alloyId5610 = Ti.UI.createView({
        id: "__alloyId5610"
    });
    $.__views.__alloyId5610 && $.addTopLevelView($.__views.__alloyId5610);
    $.__views.__alloyId5611 = Ti.UI.createView({
        id: "__alloyId5611"
    });
    $.__views.__alloyId5610.add($.__views.__alloyId5611);
    $.__views.__alloyId5612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5612"
    });
    $.__views.__alloyId5611.add($.__views.__alloyId5612);
    $.__views.__alloyId5613 = Ti.UI.createView({
        id: "__alloyId5613"
    });
    $.__views.__alloyId5613 && $.addTopLevelView($.__views.__alloyId5613);
    $.__views.__alloyId5614 = Ti.UI.createView({
        id: "__alloyId5614"
    });
    $.__views.__alloyId5613.add($.__views.__alloyId5614);
    $.__views.__alloyId5615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5615"
    });
    $.__views.__alloyId5614.add($.__views.__alloyId5615);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;