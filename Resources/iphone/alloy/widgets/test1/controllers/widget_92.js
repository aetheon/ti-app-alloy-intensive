function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_92";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_92 = Ti.UI.createView({
        id: "widget_92"
    });
    $.__views.widget_92 && $.addTopLevelView($.__views.widget_92);
    $.__views.__alloyId23738 = Ti.UI.createView({
        id: "__alloyId23738"
    });
    $.__views.widget_92.add($.__views.__alloyId23738);
    $.__views.__alloyId23739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23739"
    });
    $.__views.__alloyId23738.add($.__views.__alloyId23739);
    $.__views.__alloyId23740 = Ti.UI.createView({
        id: "__alloyId23740"
    });
    $.__views.__alloyId23740 && $.addTopLevelView($.__views.__alloyId23740);
    $.__views.__alloyId23741 = Ti.UI.createView({
        id: "__alloyId23741"
    });
    $.__views.__alloyId23740.add($.__views.__alloyId23741);
    $.__views.__alloyId23742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23742"
    });
    $.__views.__alloyId23741.add($.__views.__alloyId23742);
    $.__views.__alloyId23743 = Ti.UI.createView({
        id: "__alloyId23743"
    });
    $.__views.__alloyId23743 && $.addTopLevelView($.__views.__alloyId23743);
    $.__views.__alloyId23744 = Ti.UI.createView({
        id: "__alloyId23744"
    });
    $.__views.__alloyId23743.add($.__views.__alloyId23744);
    $.__views.__alloyId23745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23745"
    });
    $.__views.__alloyId23744.add($.__views.__alloyId23745);
    $.__views.__alloyId23746 = Ti.UI.createView({
        id: "__alloyId23746"
    });
    $.__views.__alloyId23746 && $.addTopLevelView($.__views.__alloyId23746);
    $.__views.__alloyId23747 = Ti.UI.createView({
        id: "__alloyId23747"
    });
    $.__views.__alloyId23746.add($.__views.__alloyId23747);
    $.__views.__alloyId23748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23748"
    });
    $.__views.__alloyId23747.add($.__views.__alloyId23748);
    $.__views.__alloyId23749 = Ti.UI.createView({
        id: "__alloyId23749"
    });
    $.__views.__alloyId23749 && $.addTopLevelView($.__views.__alloyId23749);
    $.__views.__alloyId23750 = Ti.UI.createView({
        id: "__alloyId23750"
    });
    $.__views.__alloyId23749.add($.__views.__alloyId23750);
    $.__views.__alloyId23751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23751"
    });
    $.__views.__alloyId23750.add($.__views.__alloyId23751);
    $.__views.__alloyId23752 = Ti.UI.createView({
        id: "__alloyId23752"
    });
    $.__views.__alloyId23752 && $.addTopLevelView($.__views.__alloyId23752);
    $.__views.__alloyId23753 = Ti.UI.createView({
        id: "__alloyId23753"
    });
    $.__views.__alloyId23752.add($.__views.__alloyId23753);
    $.__views.__alloyId23754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23754"
    });
    $.__views.__alloyId23753.add($.__views.__alloyId23754);
    $.__views.__alloyId23755 = Ti.UI.createView({
        id: "__alloyId23755"
    });
    $.__views.__alloyId23755 && $.addTopLevelView($.__views.__alloyId23755);
    $.__views.__alloyId23756 = Ti.UI.createView({
        id: "__alloyId23756"
    });
    $.__views.__alloyId23755.add($.__views.__alloyId23756);
    $.__views.__alloyId23757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23757"
    });
    $.__views.__alloyId23756.add($.__views.__alloyId23757);
    $.__views.__alloyId23758 = Ti.UI.createView({
        id: "__alloyId23758"
    });
    $.__views.__alloyId23758 && $.addTopLevelView($.__views.__alloyId23758);
    $.__views.__alloyId23759 = Ti.UI.createView({
        id: "__alloyId23759"
    });
    $.__views.__alloyId23758.add($.__views.__alloyId23759);
    $.__views.__alloyId23760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23760"
    });
    $.__views.__alloyId23759.add($.__views.__alloyId23760);
    $.__views.__alloyId23761 = Ti.UI.createView({
        id: "__alloyId23761"
    });
    $.__views.__alloyId23761 && $.addTopLevelView($.__views.__alloyId23761);
    $.__views.__alloyId23762 = Ti.UI.createView({
        id: "__alloyId23762"
    });
    $.__views.__alloyId23761.add($.__views.__alloyId23762);
    $.__views.__alloyId23763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23763"
    });
    $.__views.__alloyId23762.add($.__views.__alloyId23763);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;