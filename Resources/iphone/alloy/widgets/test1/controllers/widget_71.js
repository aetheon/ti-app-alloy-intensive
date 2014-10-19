function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_71";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_71 = Ti.UI.createView({
        id: "widget_71"
    });
    $.__views.widget_71 && $.addTopLevelView($.__views.widget_71);
    $.__views.__alloyId17680 = Ti.UI.createView({
        id: "__alloyId17680"
    });
    $.__views.widget_71.add($.__views.__alloyId17680);
    $.__views.__alloyId17681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17681"
    });
    $.__views.__alloyId17680.add($.__views.__alloyId17681);
    $.__views.__alloyId17682 = Ti.UI.createView({
        id: "__alloyId17682"
    });
    $.__views.__alloyId17682 && $.addTopLevelView($.__views.__alloyId17682);
    $.__views.__alloyId17683 = Ti.UI.createView({
        id: "__alloyId17683"
    });
    $.__views.__alloyId17682.add($.__views.__alloyId17683);
    $.__views.__alloyId17684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17684"
    });
    $.__views.__alloyId17683.add($.__views.__alloyId17684);
    $.__views.__alloyId17685 = Ti.UI.createView({
        id: "__alloyId17685"
    });
    $.__views.__alloyId17685 && $.addTopLevelView($.__views.__alloyId17685);
    $.__views.__alloyId17686 = Ti.UI.createView({
        id: "__alloyId17686"
    });
    $.__views.__alloyId17685.add($.__views.__alloyId17686);
    $.__views.__alloyId17687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17687"
    });
    $.__views.__alloyId17686.add($.__views.__alloyId17687);
    $.__views.__alloyId17688 = Ti.UI.createView({
        id: "__alloyId17688"
    });
    $.__views.__alloyId17688 && $.addTopLevelView($.__views.__alloyId17688);
    $.__views.__alloyId17689 = Ti.UI.createView({
        id: "__alloyId17689"
    });
    $.__views.__alloyId17688.add($.__views.__alloyId17689);
    $.__views.__alloyId17690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17690"
    });
    $.__views.__alloyId17689.add($.__views.__alloyId17690);
    $.__views.__alloyId17691 = Ti.UI.createView({
        id: "__alloyId17691"
    });
    $.__views.__alloyId17691 && $.addTopLevelView($.__views.__alloyId17691);
    $.__views.__alloyId17692 = Ti.UI.createView({
        id: "__alloyId17692"
    });
    $.__views.__alloyId17691.add($.__views.__alloyId17692);
    $.__views.__alloyId17693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17693"
    });
    $.__views.__alloyId17692.add($.__views.__alloyId17693);
    $.__views.__alloyId17694 = Ti.UI.createView({
        id: "__alloyId17694"
    });
    $.__views.__alloyId17694 && $.addTopLevelView($.__views.__alloyId17694);
    $.__views.__alloyId17695 = Ti.UI.createView({
        id: "__alloyId17695"
    });
    $.__views.__alloyId17694.add($.__views.__alloyId17695);
    $.__views.__alloyId17696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17696"
    });
    $.__views.__alloyId17695.add($.__views.__alloyId17696);
    $.__views.__alloyId17697 = Ti.UI.createView({
        id: "__alloyId17697"
    });
    $.__views.__alloyId17697 && $.addTopLevelView($.__views.__alloyId17697);
    $.__views.__alloyId17698 = Ti.UI.createView({
        id: "__alloyId17698"
    });
    $.__views.__alloyId17697.add($.__views.__alloyId17698);
    $.__views.__alloyId17699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17699"
    });
    $.__views.__alloyId17698.add($.__views.__alloyId17699);
    $.__views.__alloyId17700 = Ti.UI.createView({
        id: "__alloyId17700"
    });
    $.__views.__alloyId17700 && $.addTopLevelView($.__views.__alloyId17700);
    $.__views.__alloyId17701 = Ti.UI.createView({
        id: "__alloyId17701"
    });
    $.__views.__alloyId17700.add($.__views.__alloyId17701);
    $.__views.__alloyId17702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17702"
    });
    $.__views.__alloyId17701.add($.__views.__alloyId17702);
    $.__views.__alloyId17703 = Ti.UI.createView({
        id: "__alloyId17703"
    });
    $.__views.__alloyId17703 && $.addTopLevelView($.__views.__alloyId17703);
    $.__views.__alloyId17704 = Ti.UI.createView({
        id: "__alloyId17704"
    });
    $.__views.__alloyId17703.add($.__views.__alloyId17704);
    $.__views.__alloyId17705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17705"
    });
    $.__views.__alloyId17704.add($.__views.__alloyId17705);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;