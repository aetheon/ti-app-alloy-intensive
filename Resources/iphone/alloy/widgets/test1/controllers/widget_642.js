function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_642";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_642 = Ti.UI.createView({
        id: "widget_642"
    });
    $.__views.widget_642 && $.addTopLevelView($.__views.widget_642);
    $.__views.__alloyId15730 = Ti.UI.createView({
        id: "__alloyId15730"
    });
    $.__views.widget_642.add($.__views.__alloyId15730);
    $.__views.__alloyId15731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15731"
    });
    $.__views.__alloyId15730.add($.__views.__alloyId15731);
    $.__views.__alloyId15732 = Ti.UI.createView({
        id: "__alloyId15732"
    });
    $.__views.__alloyId15732 && $.addTopLevelView($.__views.__alloyId15732);
    $.__views.__alloyId15733 = Ti.UI.createView({
        id: "__alloyId15733"
    });
    $.__views.__alloyId15732.add($.__views.__alloyId15733);
    $.__views.__alloyId15734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15734"
    });
    $.__views.__alloyId15733.add($.__views.__alloyId15734);
    $.__views.__alloyId15735 = Ti.UI.createView({
        id: "__alloyId15735"
    });
    $.__views.__alloyId15735 && $.addTopLevelView($.__views.__alloyId15735);
    $.__views.__alloyId15736 = Ti.UI.createView({
        id: "__alloyId15736"
    });
    $.__views.__alloyId15735.add($.__views.__alloyId15736);
    $.__views.__alloyId15737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15737"
    });
    $.__views.__alloyId15736.add($.__views.__alloyId15737);
    $.__views.__alloyId15738 = Ti.UI.createView({
        id: "__alloyId15738"
    });
    $.__views.__alloyId15738 && $.addTopLevelView($.__views.__alloyId15738);
    $.__views.__alloyId15739 = Ti.UI.createView({
        id: "__alloyId15739"
    });
    $.__views.__alloyId15738.add($.__views.__alloyId15739);
    $.__views.__alloyId15740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15740"
    });
    $.__views.__alloyId15739.add($.__views.__alloyId15740);
    $.__views.__alloyId15741 = Ti.UI.createView({
        id: "__alloyId15741"
    });
    $.__views.__alloyId15741 && $.addTopLevelView($.__views.__alloyId15741);
    $.__views.__alloyId15742 = Ti.UI.createView({
        id: "__alloyId15742"
    });
    $.__views.__alloyId15741.add($.__views.__alloyId15742);
    $.__views.__alloyId15743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15743"
    });
    $.__views.__alloyId15742.add($.__views.__alloyId15743);
    $.__views.__alloyId15744 = Ti.UI.createView({
        id: "__alloyId15744"
    });
    $.__views.__alloyId15744 && $.addTopLevelView($.__views.__alloyId15744);
    $.__views.__alloyId15745 = Ti.UI.createView({
        id: "__alloyId15745"
    });
    $.__views.__alloyId15744.add($.__views.__alloyId15745);
    $.__views.__alloyId15746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15746"
    });
    $.__views.__alloyId15745.add($.__views.__alloyId15746);
    $.__views.__alloyId15747 = Ti.UI.createView({
        id: "__alloyId15747"
    });
    $.__views.__alloyId15747 && $.addTopLevelView($.__views.__alloyId15747);
    $.__views.__alloyId15748 = Ti.UI.createView({
        id: "__alloyId15748"
    });
    $.__views.__alloyId15747.add($.__views.__alloyId15748);
    $.__views.__alloyId15749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15749"
    });
    $.__views.__alloyId15748.add($.__views.__alloyId15749);
    $.__views.__alloyId15750 = Ti.UI.createView({
        id: "__alloyId15750"
    });
    $.__views.__alloyId15750 && $.addTopLevelView($.__views.__alloyId15750);
    $.__views.__alloyId15751 = Ti.UI.createView({
        id: "__alloyId15751"
    });
    $.__views.__alloyId15750.add($.__views.__alloyId15751);
    $.__views.__alloyId15752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15752"
    });
    $.__views.__alloyId15751.add($.__views.__alloyId15752);
    $.__views.__alloyId15753 = Ti.UI.createView({
        id: "__alloyId15753"
    });
    $.__views.__alloyId15753 && $.addTopLevelView($.__views.__alloyId15753);
    $.__views.__alloyId15754 = Ti.UI.createView({
        id: "__alloyId15754"
    });
    $.__views.__alloyId15753.add($.__views.__alloyId15754);
    $.__views.__alloyId15755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15755"
    });
    $.__views.__alloyId15754.add($.__views.__alloyId15755);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;