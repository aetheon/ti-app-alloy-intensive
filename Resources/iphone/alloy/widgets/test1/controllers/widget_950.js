function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_950";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_950 = Ti.UI.createView({
        id: "widget_950"
    });
    $.__views.widget_950 && $.addTopLevelView($.__views.widget_950);
    $.__views.__alloyId24622 = Ti.UI.createView({
        id: "__alloyId24622"
    });
    $.__views.widget_950.add($.__views.__alloyId24622);
    $.__views.__alloyId24623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24623"
    });
    $.__views.__alloyId24622.add($.__views.__alloyId24623);
    $.__views.__alloyId24624 = Ti.UI.createView({
        id: "__alloyId24624"
    });
    $.__views.__alloyId24624 && $.addTopLevelView($.__views.__alloyId24624);
    $.__views.__alloyId24625 = Ti.UI.createView({
        id: "__alloyId24625"
    });
    $.__views.__alloyId24624.add($.__views.__alloyId24625);
    $.__views.__alloyId24626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24626"
    });
    $.__views.__alloyId24625.add($.__views.__alloyId24626);
    $.__views.__alloyId24627 = Ti.UI.createView({
        id: "__alloyId24627"
    });
    $.__views.__alloyId24627 && $.addTopLevelView($.__views.__alloyId24627);
    $.__views.__alloyId24628 = Ti.UI.createView({
        id: "__alloyId24628"
    });
    $.__views.__alloyId24627.add($.__views.__alloyId24628);
    $.__views.__alloyId24629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24629"
    });
    $.__views.__alloyId24628.add($.__views.__alloyId24629);
    $.__views.__alloyId24630 = Ti.UI.createView({
        id: "__alloyId24630"
    });
    $.__views.__alloyId24630 && $.addTopLevelView($.__views.__alloyId24630);
    $.__views.__alloyId24631 = Ti.UI.createView({
        id: "__alloyId24631"
    });
    $.__views.__alloyId24630.add($.__views.__alloyId24631);
    $.__views.__alloyId24632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24632"
    });
    $.__views.__alloyId24631.add($.__views.__alloyId24632);
    $.__views.__alloyId24633 = Ti.UI.createView({
        id: "__alloyId24633"
    });
    $.__views.__alloyId24633 && $.addTopLevelView($.__views.__alloyId24633);
    $.__views.__alloyId24634 = Ti.UI.createView({
        id: "__alloyId24634"
    });
    $.__views.__alloyId24633.add($.__views.__alloyId24634);
    $.__views.__alloyId24635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24635"
    });
    $.__views.__alloyId24634.add($.__views.__alloyId24635);
    $.__views.__alloyId24636 = Ti.UI.createView({
        id: "__alloyId24636"
    });
    $.__views.__alloyId24636 && $.addTopLevelView($.__views.__alloyId24636);
    $.__views.__alloyId24637 = Ti.UI.createView({
        id: "__alloyId24637"
    });
    $.__views.__alloyId24636.add($.__views.__alloyId24637);
    $.__views.__alloyId24638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24638"
    });
    $.__views.__alloyId24637.add($.__views.__alloyId24638);
    $.__views.__alloyId24639 = Ti.UI.createView({
        id: "__alloyId24639"
    });
    $.__views.__alloyId24639 && $.addTopLevelView($.__views.__alloyId24639);
    $.__views.__alloyId24640 = Ti.UI.createView({
        id: "__alloyId24640"
    });
    $.__views.__alloyId24639.add($.__views.__alloyId24640);
    $.__views.__alloyId24641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24641"
    });
    $.__views.__alloyId24640.add($.__views.__alloyId24641);
    $.__views.__alloyId24642 = Ti.UI.createView({
        id: "__alloyId24642"
    });
    $.__views.__alloyId24642 && $.addTopLevelView($.__views.__alloyId24642);
    $.__views.__alloyId24643 = Ti.UI.createView({
        id: "__alloyId24643"
    });
    $.__views.__alloyId24642.add($.__views.__alloyId24643);
    $.__views.__alloyId24644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24644"
    });
    $.__views.__alloyId24643.add($.__views.__alloyId24644);
    $.__views.__alloyId24645 = Ti.UI.createView({
        id: "__alloyId24645"
    });
    $.__views.__alloyId24645 && $.addTopLevelView($.__views.__alloyId24645);
    $.__views.__alloyId24646 = Ti.UI.createView({
        id: "__alloyId24646"
    });
    $.__views.__alloyId24645.add($.__views.__alloyId24646);
    $.__views.__alloyId24647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24647"
    });
    $.__views.__alloyId24646.add($.__views.__alloyId24647);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;