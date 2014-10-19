function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_537";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_537 = Ti.UI.createView({
        id: "widget_537"
    });
    $.__views.widget_537 && $.addTopLevelView($.__views.widget_537);
    $.__views.__alloyId12688 = Ti.UI.createView({
        id: "__alloyId12688"
    });
    $.__views.widget_537.add($.__views.__alloyId12688);
    $.__views.__alloyId12689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12689"
    });
    $.__views.__alloyId12688.add($.__views.__alloyId12689);
    $.__views.__alloyId12690 = Ti.UI.createView({
        id: "__alloyId12690"
    });
    $.__views.__alloyId12690 && $.addTopLevelView($.__views.__alloyId12690);
    $.__views.__alloyId12691 = Ti.UI.createView({
        id: "__alloyId12691"
    });
    $.__views.__alloyId12690.add($.__views.__alloyId12691);
    $.__views.__alloyId12692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12692"
    });
    $.__views.__alloyId12691.add($.__views.__alloyId12692);
    $.__views.__alloyId12693 = Ti.UI.createView({
        id: "__alloyId12693"
    });
    $.__views.__alloyId12693 && $.addTopLevelView($.__views.__alloyId12693);
    $.__views.__alloyId12694 = Ti.UI.createView({
        id: "__alloyId12694"
    });
    $.__views.__alloyId12693.add($.__views.__alloyId12694);
    $.__views.__alloyId12695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12695"
    });
    $.__views.__alloyId12694.add($.__views.__alloyId12695);
    $.__views.__alloyId12696 = Ti.UI.createView({
        id: "__alloyId12696"
    });
    $.__views.__alloyId12696 && $.addTopLevelView($.__views.__alloyId12696);
    $.__views.__alloyId12697 = Ti.UI.createView({
        id: "__alloyId12697"
    });
    $.__views.__alloyId12696.add($.__views.__alloyId12697);
    $.__views.__alloyId12698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12698"
    });
    $.__views.__alloyId12697.add($.__views.__alloyId12698);
    $.__views.__alloyId12699 = Ti.UI.createView({
        id: "__alloyId12699"
    });
    $.__views.__alloyId12699 && $.addTopLevelView($.__views.__alloyId12699);
    $.__views.__alloyId12700 = Ti.UI.createView({
        id: "__alloyId12700"
    });
    $.__views.__alloyId12699.add($.__views.__alloyId12700);
    $.__views.__alloyId12701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12701"
    });
    $.__views.__alloyId12700.add($.__views.__alloyId12701);
    $.__views.__alloyId12702 = Ti.UI.createView({
        id: "__alloyId12702"
    });
    $.__views.__alloyId12702 && $.addTopLevelView($.__views.__alloyId12702);
    $.__views.__alloyId12703 = Ti.UI.createView({
        id: "__alloyId12703"
    });
    $.__views.__alloyId12702.add($.__views.__alloyId12703);
    $.__views.__alloyId12704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12704"
    });
    $.__views.__alloyId12703.add($.__views.__alloyId12704);
    $.__views.__alloyId12705 = Ti.UI.createView({
        id: "__alloyId12705"
    });
    $.__views.__alloyId12705 && $.addTopLevelView($.__views.__alloyId12705);
    $.__views.__alloyId12706 = Ti.UI.createView({
        id: "__alloyId12706"
    });
    $.__views.__alloyId12705.add($.__views.__alloyId12706);
    $.__views.__alloyId12707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12707"
    });
    $.__views.__alloyId12706.add($.__views.__alloyId12707);
    $.__views.__alloyId12708 = Ti.UI.createView({
        id: "__alloyId12708"
    });
    $.__views.__alloyId12708 && $.addTopLevelView($.__views.__alloyId12708);
    $.__views.__alloyId12709 = Ti.UI.createView({
        id: "__alloyId12709"
    });
    $.__views.__alloyId12708.add($.__views.__alloyId12709);
    $.__views.__alloyId12710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12710"
    });
    $.__views.__alloyId12709.add($.__views.__alloyId12710);
    $.__views.__alloyId12711 = Ti.UI.createView({
        id: "__alloyId12711"
    });
    $.__views.__alloyId12711 && $.addTopLevelView($.__views.__alloyId12711);
    $.__views.__alloyId12712 = Ti.UI.createView({
        id: "__alloyId12712"
    });
    $.__views.__alloyId12711.add($.__views.__alloyId12712);
    $.__views.__alloyId12713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12713"
    });
    $.__views.__alloyId12712.add($.__views.__alloyId12713);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;