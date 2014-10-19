function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_706";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_706 = Ti.UI.createView({
        id: "widget_706"
    });
    $.__views.widget_706 && $.addTopLevelView($.__views.widget_706);
    $.__views.__alloyId17576 = Ti.UI.createView({
        id: "__alloyId17576"
    });
    $.__views.widget_706.add($.__views.__alloyId17576);
    $.__views.__alloyId17577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17577"
    });
    $.__views.__alloyId17576.add($.__views.__alloyId17577);
    $.__views.__alloyId17578 = Ti.UI.createView({
        id: "__alloyId17578"
    });
    $.__views.__alloyId17578 && $.addTopLevelView($.__views.__alloyId17578);
    $.__views.__alloyId17579 = Ti.UI.createView({
        id: "__alloyId17579"
    });
    $.__views.__alloyId17578.add($.__views.__alloyId17579);
    $.__views.__alloyId17580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17580"
    });
    $.__views.__alloyId17579.add($.__views.__alloyId17580);
    $.__views.__alloyId17581 = Ti.UI.createView({
        id: "__alloyId17581"
    });
    $.__views.__alloyId17581 && $.addTopLevelView($.__views.__alloyId17581);
    $.__views.__alloyId17582 = Ti.UI.createView({
        id: "__alloyId17582"
    });
    $.__views.__alloyId17581.add($.__views.__alloyId17582);
    $.__views.__alloyId17583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17583"
    });
    $.__views.__alloyId17582.add($.__views.__alloyId17583);
    $.__views.__alloyId17584 = Ti.UI.createView({
        id: "__alloyId17584"
    });
    $.__views.__alloyId17584 && $.addTopLevelView($.__views.__alloyId17584);
    $.__views.__alloyId17585 = Ti.UI.createView({
        id: "__alloyId17585"
    });
    $.__views.__alloyId17584.add($.__views.__alloyId17585);
    $.__views.__alloyId17586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17586"
    });
    $.__views.__alloyId17585.add($.__views.__alloyId17586);
    $.__views.__alloyId17587 = Ti.UI.createView({
        id: "__alloyId17587"
    });
    $.__views.__alloyId17587 && $.addTopLevelView($.__views.__alloyId17587);
    $.__views.__alloyId17588 = Ti.UI.createView({
        id: "__alloyId17588"
    });
    $.__views.__alloyId17587.add($.__views.__alloyId17588);
    $.__views.__alloyId17589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17589"
    });
    $.__views.__alloyId17588.add($.__views.__alloyId17589);
    $.__views.__alloyId17590 = Ti.UI.createView({
        id: "__alloyId17590"
    });
    $.__views.__alloyId17590 && $.addTopLevelView($.__views.__alloyId17590);
    $.__views.__alloyId17591 = Ti.UI.createView({
        id: "__alloyId17591"
    });
    $.__views.__alloyId17590.add($.__views.__alloyId17591);
    $.__views.__alloyId17592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17592"
    });
    $.__views.__alloyId17591.add($.__views.__alloyId17592);
    $.__views.__alloyId17593 = Ti.UI.createView({
        id: "__alloyId17593"
    });
    $.__views.__alloyId17593 && $.addTopLevelView($.__views.__alloyId17593);
    $.__views.__alloyId17594 = Ti.UI.createView({
        id: "__alloyId17594"
    });
    $.__views.__alloyId17593.add($.__views.__alloyId17594);
    $.__views.__alloyId17595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17595"
    });
    $.__views.__alloyId17594.add($.__views.__alloyId17595);
    $.__views.__alloyId17596 = Ti.UI.createView({
        id: "__alloyId17596"
    });
    $.__views.__alloyId17596 && $.addTopLevelView($.__views.__alloyId17596);
    $.__views.__alloyId17597 = Ti.UI.createView({
        id: "__alloyId17597"
    });
    $.__views.__alloyId17596.add($.__views.__alloyId17597);
    $.__views.__alloyId17598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17598"
    });
    $.__views.__alloyId17597.add($.__views.__alloyId17598);
    $.__views.__alloyId17599 = Ti.UI.createView({
        id: "__alloyId17599"
    });
    $.__views.__alloyId17599 && $.addTopLevelView($.__views.__alloyId17599);
    $.__views.__alloyId17600 = Ti.UI.createView({
        id: "__alloyId17600"
    });
    $.__views.__alloyId17599.add($.__views.__alloyId17600);
    $.__views.__alloyId17601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17601"
    });
    $.__views.__alloyId17600.add($.__views.__alloyId17601);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;