function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_504";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_504 = Ti.UI.createView({
        id: "widget_504"
    });
    $.__views.widget_504 && $.addTopLevelView($.__views.widget_504);
    $.__views.__alloyId11752 = Ti.UI.createView({
        id: "__alloyId11752"
    });
    $.__views.widget_504.add($.__views.__alloyId11752);
    $.__views.__alloyId11753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11753"
    });
    $.__views.__alloyId11752.add($.__views.__alloyId11753);
    $.__views.__alloyId11754 = Ti.UI.createView({
        id: "__alloyId11754"
    });
    $.__views.__alloyId11754 && $.addTopLevelView($.__views.__alloyId11754);
    $.__views.__alloyId11755 = Ti.UI.createView({
        id: "__alloyId11755"
    });
    $.__views.__alloyId11754.add($.__views.__alloyId11755);
    $.__views.__alloyId11756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11756"
    });
    $.__views.__alloyId11755.add($.__views.__alloyId11756);
    $.__views.__alloyId11757 = Ti.UI.createView({
        id: "__alloyId11757"
    });
    $.__views.__alloyId11757 && $.addTopLevelView($.__views.__alloyId11757);
    $.__views.__alloyId11758 = Ti.UI.createView({
        id: "__alloyId11758"
    });
    $.__views.__alloyId11757.add($.__views.__alloyId11758);
    $.__views.__alloyId11759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11759"
    });
    $.__views.__alloyId11758.add($.__views.__alloyId11759);
    $.__views.__alloyId11760 = Ti.UI.createView({
        id: "__alloyId11760"
    });
    $.__views.__alloyId11760 && $.addTopLevelView($.__views.__alloyId11760);
    $.__views.__alloyId11761 = Ti.UI.createView({
        id: "__alloyId11761"
    });
    $.__views.__alloyId11760.add($.__views.__alloyId11761);
    $.__views.__alloyId11762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11762"
    });
    $.__views.__alloyId11761.add($.__views.__alloyId11762);
    $.__views.__alloyId11763 = Ti.UI.createView({
        id: "__alloyId11763"
    });
    $.__views.__alloyId11763 && $.addTopLevelView($.__views.__alloyId11763);
    $.__views.__alloyId11764 = Ti.UI.createView({
        id: "__alloyId11764"
    });
    $.__views.__alloyId11763.add($.__views.__alloyId11764);
    $.__views.__alloyId11765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11765"
    });
    $.__views.__alloyId11764.add($.__views.__alloyId11765);
    $.__views.__alloyId11766 = Ti.UI.createView({
        id: "__alloyId11766"
    });
    $.__views.__alloyId11766 && $.addTopLevelView($.__views.__alloyId11766);
    $.__views.__alloyId11767 = Ti.UI.createView({
        id: "__alloyId11767"
    });
    $.__views.__alloyId11766.add($.__views.__alloyId11767);
    $.__views.__alloyId11768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11768"
    });
    $.__views.__alloyId11767.add($.__views.__alloyId11768);
    $.__views.__alloyId11769 = Ti.UI.createView({
        id: "__alloyId11769"
    });
    $.__views.__alloyId11769 && $.addTopLevelView($.__views.__alloyId11769);
    $.__views.__alloyId11770 = Ti.UI.createView({
        id: "__alloyId11770"
    });
    $.__views.__alloyId11769.add($.__views.__alloyId11770);
    $.__views.__alloyId11771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11771"
    });
    $.__views.__alloyId11770.add($.__views.__alloyId11771);
    $.__views.__alloyId11772 = Ti.UI.createView({
        id: "__alloyId11772"
    });
    $.__views.__alloyId11772 && $.addTopLevelView($.__views.__alloyId11772);
    $.__views.__alloyId11773 = Ti.UI.createView({
        id: "__alloyId11773"
    });
    $.__views.__alloyId11772.add($.__views.__alloyId11773);
    $.__views.__alloyId11774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11774"
    });
    $.__views.__alloyId11773.add($.__views.__alloyId11774);
    $.__views.__alloyId11775 = Ti.UI.createView({
        id: "__alloyId11775"
    });
    $.__views.__alloyId11775 && $.addTopLevelView($.__views.__alloyId11775);
    $.__views.__alloyId11776 = Ti.UI.createView({
        id: "__alloyId11776"
    });
    $.__views.__alloyId11775.add($.__views.__alloyId11776);
    $.__views.__alloyId11777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11777"
    });
    $.__views.__alloyId11776.add($.__views.__alloyId11777);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;