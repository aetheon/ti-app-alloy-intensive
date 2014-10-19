function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_297";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_297 = Ti.UI.createView({
        id: "widget_297"
    });
    $.__views.widget_297 && $.addTopLevelView($.__views.widget_297);
    $.__views.__alloyId5746 = Ti.UI.createView({
        id: "__alloyId5746"
    });
    $.__views.widget_297.add($.__views.__alloyId5746);
    $.__views.__alloyId5747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5747"
    });
    $.__views.__alloyId5746.add($.__views.__alloyId5747);
    $.__views.__alloyId5748 = Ti.UI.createView({
        id: "__alloyId5748"
    });
    $.__views.__alloyId5748 && $.addTopLevelView($.__views.__alloyId5748);
    $.__views.__alloyId5749 = Ti.UI.createView({
        id: "__alloyId5749"
    });
    $.__views.__alloyId5748.add($.__views.__alloyId5749);
    $.__views.__alloyId5750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5750"
    });
    $.__views.__alloyId5749.add($.__views.__alloyId5750);
    $.__views.__alloyId5751 = Ti.UI.createView({
        id: "__alloyId5751"
    });
    $.__views.__alloyId5751 && $.addTopLevelView($.__views.__alloyId5751);
    $.__views.__alloyId5752 = Ti.UI.createView({
        id: "__alloyId5752"
    });
    $.__views.__alloyId5751.add($.__views.__alloyId5752);
    $.__views.__alloyId5753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5753"
    });
    $.__views.__alloyId5752.add($.__views.__alloyId5753);
    $.__views.__alloyId5754 = Ti.UI.createView({
        id: "__alloyId5754"
    });
    $.__views.__alloyId5754 && $.addTopLevelView($.__views.__alloyId5754);
    $.__views.__alloyId5755 = Ti.UI.createView({
        id: "__alloyId5755"
    });
    $.__views.__alloyId5754.add($.__views.__alloyId5755);
    $.__views.__alloyId5756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5756"
    });
    $.__views.__alloyId5755.add($.__views.__alloyId5756);
    $.__views.__alloyId5757 = Ti.UI.createView({
        id: "__alloyId5757"
    });
    $.__views.__alloyId5757 && $.addTopLevelView($.__views.__alloyId5757);
    $.__views.__alloyId5758 = Ti.UI.createView({
        id: "__alloyId5758"
    });
    $.__views.__alloyId5757.add($.__views.__alloyId5758);
    $.__views.__alloyId5759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5759"
    });
    $.__views.__alloyId5758.add($.__views.__alloyId5759);
    $.__views.__alloyId5760 = Ti.UI.createView({
        id: "__alloyId5760"
    });
    $.__views.__alloyId5760 && $.addTopLevelView($.__views.__alloyId5760);
    $.__views.__alloyId5761 = Ti.UI.createView({
        id: "__alloyId5761"
    });
    $.__views.__alloyId5760.add($.__views.__alloyId5761);
    $.__views.__alloyId5762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5762"
    });
    $.__views.__alloyId5761.add($.__views.__alloyId5762);
    $.__views.__alloyId5763 = Ti.UI.createView({
        id: "__alloyId5763"
    });
    $.__views.__alloyId5763 && $.addTopLevelView($.__views.__alloyId5763);
    $.__views.__alloyId5764 = Ti.UI.createView({
        id: "__alloyId5764"
    });
    $.__views.__alloyId5763.add($.__views.__alloyId5764);
    $.__views.__alloyId5765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5765"
    });
    $.__views.__alloyId5764.add($.__views.__alloyId5765);
    $.__views.__alloyId5766 = Ti.UI.createView({
        id: "__alloyId5766"
    });
    $.__views.__alloyId5766 && $.addTopLevelView($.__views.__alloyId5766);
    $.__views.__alloyId5767 = Ti.UI.createView({
        id: "__alloyId5767"
    });
    $.__views.__alloyId5766.add($.__views.__alloyId5767);
    $.__views.__alloyId5768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5768"
    });
    $.__views.__alloyId5767.add($.__views.__alloyId5768);
    $.__views.__alloyId5769 = Ti.UI.createView({
        id: "__alloyId5769"
    });
    $.__views.__alloyId5769 && $.addTopLevelView($.__views.__alloyId5769);
    $.__views.__alloyId5770 = Ti.UI.createView({
        id: "__alloyId5770"
    });
    $.__views.__alloyId5769.add($.__views.__alloyId5770);
    $.__views.__alloyId5771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5771"
    });
    $.__views.__alloyId5770.add($.__views.__alloyId5771);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;