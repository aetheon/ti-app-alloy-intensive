function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_435";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_435 = Ti.UI.createView({
        id: "widget_435"
    });
    $.__views.widget_435 && $.addTopLevelView($.__views.widget_435);
    $.__views.__alloyId9750 = Ti.UI.createView({
        id: "__alloyId9750"
    });
    $.__views.widget_435.add($.__views.__alloyId9750);
    $.__views.__alloyId9751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9751"
    });
    $.__views.__alloyId9750.add($.__views.__alloyId9751);
    $.__views.__alloyId9752 = Ti.UI.createView({
        id: "__alloyId9752"
    });
    $.__views.__alloyId9752 && $.addTopLevelView($.__views.__alloyId9752);
    $.__views.__alloyId9753 = Ti.UI.createView({
        id: "__alloyId9753"
    });
    $.__views.__alloyId9752.add($.__views.__alloyId9753);
    $.__views.__alloyId9754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9754"
    });
    $.__views.__alloyId9753.add($.__views.__alloyId9754);
    $.__views.__alloyId9755 = Ti.UI.createView({
        id: "__alloyId9755"
    });
    $.__views.__alloyId9755 && $.addTopLevelView($.__views.__alloyId9755);
    $.__views.__alloyId9756 = Ti.UI.createView({
        id: "__alloyId9756"
    });
    $.__views.__alloyId9755.add($.__views.__alloyId9756);
    $.__views.__alloyId9757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9757"
    });
    $.__views.__alloyId9756.add($.__views.__alloyId9757);
    $.__views.__alloyId9758 = Ti.UI.createView({
        id: "__alloyId9758"
    });
    $.__views.__alloyId9758 && $.addTopLevelView($.__views.__alloyId9758);
    $.__views.__alloyId9759 = Ti.UI.createView({
        id: "__alloyId9759"
    });
    $.__views.__alloyId9758.add($.__views.__alloyId9759);
    $.__views.__alloyId9760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9760"
    });
    $.__views.__alloyId9759.add($.__views.__alloyId9760);
    $.__views.__alloyId9761 = Ti.UI.createView({
        id: "__alloyId9761"
    });
    $.__views.__alloyId9761 && $.addTopLevelView($.__views.__alloyId9761);
    $.__views.__alloyId9762 = Ti.UI.createView({
        id: "__alloyId9762"
    });
    $.__views.__alloyId9761.add($.__views.__alloyId9762);
    $.__views.__alloyId9763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9763"
    });
    $.__views.__alloyId9762.add($.__views.__alloyId9763);
    $.__views.__alloyId9764 = Ti.UI.createView({
        id: "__alloyId9764"
    });
    $.__views.__alloyId9764 && $.addTopLevelView($.__views.__alloyId9764);
    $.__views.__alloyId9765 = Ti.UI.createView({
        id: "__alloyId9765"
    });
    $.__views.__alloyId9764.add($.__views.__alloyId9765);
    $.__views.__alloyId9766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9766"
    });
    $.__views.__alloyId9765.add($.__views.__alloyId9766);
    $.__views.__alloyId9767 = Ti.UI.createView({
        id: "__alloyId9767"
    });
    $.__views.__alloyId9767 && $.addTopLevelView($.__views.__alloyId9767);
    $.__views.__alloyId9768 = Ti.UI.createView({
        id: "__alloyId9768"
    });
    $.__views.__alloyId9767.add($.__views.__alloyId9768);
    $.__views.__alloyId9769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9769"
    });
    $.__views.__alloyId9768.add($.__views.__alloyId9769);
    $.__views.__alloyId9770 = Ti.UI.createView({
        id: "__alloyId9770"
    });
    $.__views.__alloyId9770 && $.addTopLevelView($.__views.__alloyId9770);
    $.__views.__alloyId9771 = Ti.UI.createView({
        id: "__alloyId9771"
    });
    $.__views.__alloyId9770.add($.__views.__alloyId9771);
    $.__views.__alloyId9772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9772"
    });
    $.__views.__alloyId9771.add($.__views.__alloyId9772);
    $.__views.__alloyId9773 = Ti.UI.createView({
        id: "__alloyId9773"
    });
    $.__views.__alloyId9773 && $.addTopLevelView($.__views.__alloyId9773);
    $.__views.__alloyId9774 = Ti.UI.createView({
        id: "__alloyId9774"
    });
    $.__views.__alloyId9773.add($.__views.__alloyId9774);
    $.__views.__alloyId9775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9775"
    });
    $.__views.__alloyId9774.add($.__views.__alloyId9775);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;