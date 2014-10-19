function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_40";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_40 = Ti.UI.createView({
        id: "widget_40"
    });
    $.__views.widget_40 && $.addTopLevelView($.__views.widget_40);
    $.__views.__alloyId8736 = Ti.UI.createView({
        id: "__alloyId8736"
    });
    $.__views.widget_40.add($.__views.__alloyId8736);
    $.__views.__alloyId8737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8737"
    });
    $.__views.__alloyId8736.add($.__views.__alloyId8737);
    $.__views.__alloyId8738 = Ti.UI.createView({
        id: "__alloyId8738"
    });
    $.__views.__alloyId8738 && $.addTopLevelView($.__views.__alloyId8738);
    $.__views.__alloyId8739 = Ti.UI.createView({
        id: "__alloyId8739"
    });
    $.__views.__alloyId8738.add($.__views.__alloyId8739);
    $.__views.__alloyId8740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8740"
    });
    $.__views.__alloyId8739.add($.__views.__alloyId8740);
    $.__views.__alloyId8741 = Ti.UI.createView({
        id: "__alloyId8741"
    });
    $.__views.__alloyId8741 && $.addTopLevelView($.__views.__alloyId8741);
    $.__views.__alloyId8742 = Ti.UI.createView({
        id: "__alloyId8742"
    });
    $.__views.__alloyId8741.add($.__views.__alloyId8742);
    $.__views.__alloyId8743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8743"
    });
    $.__views.__alloyId8742.add($.__views.__alloyId8743);
    $.__views.__alloyId8744 = Ti.UI.createView({
        id: "__alloyId8744"
    });
    $.__views.__alloyId8744 && $.addTopLevelView($.__views.__alloyId8744);
    $.__views.__alloyId8745 = Ti.UI.createView({
        id: "__alloyId8745"
    });
    $.__views.__alloyId8744.add($.__views.__alloyId8745);
    $.__views.__alloyId8746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8746"
    });
    $.__views.__alloyId8745.add($.__views.__alloyId8746);
    $.__views.__alloyId8747 = Ti.UI.createView({
        id: "__alloyId8747"
    });
    $.__views.__alloyId8747 && $.addTopLevelView($.__views.__alloyId8747);
    $.__views.__alloyId8748 = Ti.UI.createView({
        id: "__alloyId8748"
    });
    $.__views.__alloyId8747.add($.__views.__alloyId8748);
    $.__views.__alloyId8749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8749"
    });
    $.__views.__alloyId8748.add($.__views.__alloyId8749);
    $.__views.__alloyId8750 = Ti.UI.createView({
        id: "__alloyId8750"
    });
    $.__views.__alloyId8750 && $.addTopLevelView($.__views.__alloyId8750);
    $.__views.__alloyId8751 = Ti.UI.createView({
        id: "__alloyId8751"
    });
    $.__views.__alloyId8750.add($.__views.__alloyId8751);
    $.__views.__alloyId8752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8752"
    });
    $.__views.__alloyId8751.add($.__views.__alloyId8752);
    $.__views.__alloyId8753 = Ti.UI.createView({
        id: "__alloyId8753"
    });
    $.__views.__alloyId8753 && $.addTopLevelView($.__views.__alloyId8753);
    $.__views.__alloyId8754 = Ti.UI.createView({
        id: "__alloyId8754"
    });
    $.__views.__alloyId8753.add($.__views.__alloyId8754);
    $.__views.__alloyId8755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8755"
    });
    $.__views.__alloyId8754.add($.__views.__alloyId8755);
    $.__views.__alloyId8756 = Ti.UI.createView({
        id: "__alloyId8756"
    });
    $.__views.__alloyId8756 && $.addTopLevelView($.__views.__alloyId8756);
    $.__views.__alloyId8757 = Ti.UI.createView({
        id: "__alloyId8757"
    });
    $.__views.__alloyId8756.add($.__views.__alloyId8757);
    $.__views.__alloyId8758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8758"
    });
    $.__views.__alloyId8757.add($.__views.__alloyId8758);
    $.__views.__alloyId8759 = Ti.UI.createView({
        id: "__alloyId8759"
    });
    $.__views.__alloyId8759 && $.addTopLevelView($.__views.__alloyId8759);
    $.__views.__alloyId8760 = Ti.UI.createView({
        id: "__alloyId8760"
    });
    $.__views.__alloyId8759.add($.__views.__alloyId8760);
    $.__views.__alloyId8761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8761"
    });
    $.__views.__alloyId8760.add($.__views.__alloyId8761);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;