function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_330";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_330 = Ti.UI.createView({
        id: "widget_330"
    });
    $.__views.widget_330 && $.addTopLevelView($.__views.widget_330);
    $.__views.__alloyId6734 = Ti.UI.createView({
        id: "__alloyId6734"
    });
    $.__views.widget_330.add($.__views.__alloyId6734);
    $.__views.__alloyId6735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6735"
    });
    $.__views.__alloyId6734.add($.__views.__alloyId6735);
    $.__views.__alloyId6736 = Ti.UI.createView({
        id: "__alloyId6736"
    });
    $.__views.__alloyId6736 && $.addTopLevelView($.__views.__alloyId6736);
    $.__views.__alloyId6737 = Ti.UI.createView({
        id: "__alloyId6737"
    });
    $.__views.__alloyId6736.add($.__views.__alloyId6737);
    $.__views.__alloyId6738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6738"
    });
    $.__views.__alloyId6737.add($.__views.__alloyId6738);
    $.__views.__alloyId6739 = Ti.UI.createView({
        id: "__alloyId6739"
    });
    $.__views.__alloyId6739 && $.addTopLevelView($.__views.__alloyId6739);
    $.__views.__alloyId6740 = Ti.UI.createView({
        id: "__alloyId6740"
    });
    $.__views.__alloyId6739.add($.__views.__alloyId6740);
    $.__views.__alloyId6741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6741"
    });
    $.__views.__alloyId6740.add($.__views.__alloyId6741);
    $.__views.__alloyId6742 = Ti.UI.createView({
        id: "__alloyId6742"
    });
    $.__views.__alloyId6742 && $.addTopLevelView($.__views.__alloyId6742);
    $.__views.__alloyId6743 = Ti.UI.createView({
        id: "__alloyId6743"
    });
    $.__views.__alloyId6742.add($.__views.__alloyId6743);
    $.__views.__alloyId6744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6744"
    });
    $.__views.__alloyId6743.add($.__views.__alloyId6744);
    $.__views.__alloyId6745 = Ti.UI.createView({
        id: "__alloyId6745"
    });
    $.__views.__alloyId6745 && $.addTopLevelView($.__views.__alloyId6745);
    $.__views.__alloyId6746 = Ti.UI.createView({
        id: "__alloyId6746"
    });
    $.__views.__alloyId6745.add($.__views.__alloyId6746);
    $.__views.__alloyId6747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6747"
    });
    $.__views.__alloyId6746.add($.__views.__alloyId6747);
    $.__views.__alloyId6748 = Ti.UI.createView({
        id: "__alloyId6748"
    });
    $.__views.__alloyId6748 && $.addTopLevelView($.__views.__alloyId6748);
    $.__views.__alloyId6749 = Ti.UI.createView({
        id: "__alloyId6749"
    });
    $.__views.__alloyId6748.add($.__views.__alloyId6749);
    $.__views.__alloyId6750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6750"
    });
    $.__views.__alloyId6749.add($.__views.__alloyId6750);
    $.__views.__alloyId6751 = Ti.UI.createView({
        id: "__alloyId6751"
    });
    $.__views.__alloyId6751 && $.addTopLevelView($.__views.__alloyId6751);
    $.__views.__alloyId6752 = Ti.UI.createView({
        id: "__alloyId6752"
    });
    $.__views.__alloyId6751.add($.__views.__alloyId6752);
    $.__views.__alloyId6753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6753"
    });
    $.__views.__alloyId6752.add($.__views.__alloyId6753);
    $.__views.__alloyId6754 = Ti.UI.createView({
        id: "__alloyId6754"
    });
    $.__views.__alloyId6754 && $.addTopLevelView($.__views.__alloyId6754);
    $.__views.__alloyId6755 = Ti.UI.createView({
        id: "__alloyId6755"
    });
    $.__views.__alloyId6754.add($.__views.__alloyId6755);
    $.__views.__alloyId6756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6756"
    });
    $.__views.__alloyId6755.add($.__views.__alloyId6756);
    $.__views.__alloyId6757 = Ti.UI.createView({
        id: "__alloyId6757"
    });
    $.__views.__alloyId6757 && $.addTopLevelView($.__views.__alloyId6757);
    $.__views.__alloyId6758 = Ti.UI.createView({
        id: "__alloyId6758"
    });
    $.__views.__alloyId6757.add($.__views.__alloyId6758);
    $.__views.__alloyId6759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6759"
    });
    $.__views.__alloyId6758.add($.__views.__alloyId6759);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;