function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_227";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_227 = Ti.UI.createView({
        id: "widget_227"
    });
    $.__views.widget_227 && $.addTopLevelView($.__views.widget_227);
    $.__views.__alloyId3744 = Ti.UI.createView({
        id: "__alloyId3744"
    });
    $.__views.widget_227.add($.__views.__alloyId3744);
    $.__views.__alloyId3745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3745"
    });
    $.__views.__alloyId3744.add($.__views.__alloyId3745);
    $.__views.__alloyId3746 = Ti.UI.createView({
        id: "__alloyId3746"
    });
    $.__views.__alloyId3746 && $.addTopLevelView($.__views.__alloyId3746);
    $.__views.__alloyId3747 = Ti.UI.createView({
        id: "__alloyId3747"
    });
    $.__views.__alloyId3746.add($.__views.__alloyId3747);
    $.__views.__alloyId3748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3748"
    });
    $.__views.__alloyId3747.add($.__views.__alloyId3748);
    $.__views.__alloyId3749 = Ti.UI.createView({
        id: "__alloyId3749"
    });
    $.__views.__alloyId3749 && $.addTopLevelView($.__views.__alloyId3749);
    $.__views.__alloyId3750 = Ti.UI.createView({
        id: "__alloyId3750"
    });
    $.__views.__alloyId3749.add($.__views.__alloyId3750);
    $.__views.__alloyId3751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3751"
    });
    $.__views.__alloyId3750.add($.__views.__alloyId3751);
    $.__views.__alloyId3752 = Ti.UI.createView({
        id: "__alloyId3752"
    });
    $.__views.__alloyId3752 && $.addTopLevelView($.__views.__alloyId3752);
    $.__views.__alloyId3753 = Ti.UI.createView({
        id: "__alloyId3753"
    });
    $.__views.__alloyId3752.add($.__views.__alloyId3753);
    $.__views.__alloyId3754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3754"
    });
    $.__views.__alloyId3753.add($.__views.__alloyId3754);
    $.__views.__alloyId3755 = Ti.UI.createView({
        id: "__alloyId3755"
    });
    $.__views.__alloyId3755 && $.addTopLevelView($.__views.__alloyId3755);
    $.__views.__alloyId3756 = Ti.UI.createView({
        id: "__alloyId3756"
    });
    $.__views.__alloyId3755.add($.__views.__alloyId3756);
    $.__views.__alloyId3757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3757"
    });
    $.__views.__alloyId3756.add($.__views.__alloyId3757);
    $.__views.__alloyId3758 = Ti.UI.createView({
        id: "__alloyId3758"
    });
    $.__views.__alloyId3758 && $.addTopLevelView($.__views.__alloyId3758);
    $.__views.__alloyId3759 = Ti.UI.createView({
        id: "__alloyId3759"
    });
    $.__views.__alloyId3758.add($.__views.__alloyId3759);
    $.__views.__alloyId3760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3760"
    });
    $.__views.__alloyId3759.add($.__views.__alloyId3760);
    $.__views.__alloyId3761 = Ti.UI.createView({
        id: "__alloyId3761"
    });
    $.__views.__alloyId3761 && $.addTopLevelView($.__views.__alloyId3761);
    $.__views.__alloyId3762 = Ti.UI.createView({
        id: "__alloyId3762"
    });
    $.__views.__alloyId3761.add($.__views.__alloyId3762);
    $.__views.__alloyId3763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3763"
    });
    $.__views.__alloyId3762.add($.__views.__alloyId3763);
    $.__views.__alloyId3764 = Ti.UI.createView({
        id: "__alloyId3764"
    });
    $.__views.__alloyId3764 && $.addTopLevelView($.__views.__alloyId3764);
    $.__views.__alloyId3765 = Ti.UI.createView({
        id: "__alloyId3765"
    });
    $.__views.__alloyId3764.add($.__views.__alloyId3765);
    $.__views.__alloyId3766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3766"
    });
    $.__views.__alloyId3765.add($.__views.__alloyId3766);
    $.__views.__alloyId3767 = Ti.UI.createView({
        id: "__alloyId3767"
    });
    $.__views.__alloyId3767 && $.addTopLevelView($.__views.__alloyId3767);
    $.__views.__alloyId3768 = Ti.UI.createView({
        id: "__alloyId3768"
    });
    $.__views.__alloyId3767.add($.__views.__alloyId3768);
    $.__views.__alloyId3769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3769"
    });
    $.__views.__alloyId3768.add($.__views.__alloyId3769);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;