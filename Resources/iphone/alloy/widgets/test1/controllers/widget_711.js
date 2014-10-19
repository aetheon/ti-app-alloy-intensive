function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_711";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_711 = Ti.UI.createView({
        id: "widget_711"
    });
    $.__views.widget_711 && $.addTopLevelView($.__views.widget_711);
    $.__views.__alloyId17732 = Ti.UI.createView({
        id: "__alloyId17732"
    });
    $.__views.widget_711.add($.__views.__alloyId17732);
    $.__views.__alloyId17733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17733"
    });
    $.__views.__alloyId17732.add($.__views.__alloyId17733);
    $.__views.__alloyId17734 = Ti.UI.createView({
        id: "__alloyId17734"
    });
    $.__views.__alloyId17734 && $.addTopLevelView($.__views.__alloyId17734);
    $.__views.__alloyId17735 = Ti.UI.createView({
        id: "__alloyId17735"
    });
    $.__views.__alloyId17734.add($.__views.__alloyId17735);
    $.__views.__alloyId17736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17736"
    });
    $.__views.__alloyId17735.add($.__views.__alloyId17736);
    $.__views.__alloyId17737 = Ti.UI.createView({
        id: "__alloyId17737"
    });
    $.__views.__alloyId17737 && $.addTopLevelView($.__views.__alloyId17737);
    $.__views.__alloyId17738 = Ti.UI.createView({
        id: "__alloyId17738"
    });
    $.__views.__alloyId17737.add($.__views.__alloyId17738);
    $.__views.__alloyId17739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17739"
    });
    $.__views.__alloyId17738.add($.__views.__alloyId17739);
    $.__views.__alloyId17740 = Ti.UI.createView({
        id: "__alloyId17740"
    });
    $.__views.__alloyId17740 && $.addTopLevelView($.__views.__alloyId17740);
    $.__views.__alloyId17741 = Ti.UI.createView({
        id: "__alloyId17741"
    });
    $.__views.__alloyId17740.add($.__views.__alloyId17741);
    $.__views.__alloyId17742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17742"
    });
    $.__views.__alloyId17741.add($.__views.__alloyId17742);
    $.__views.__alloyId17743 = Ti.UI.createView({
        id: "__alloyId17743"
    });
    $.__views.__alloyId17743 && $.addTopLevelView($.__views.__alloyId17743);
    $.__views.__alloyId17744 = Ti.UI.createView({
        id: "__alloyId17744"
    });
    $.__views.__alloyId17743.add($.__views.__alloyId17744);
    $.__views.__alloyId17745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17745"
    });
    $.__views.__alloyId17744.add($.__views.__alloyId17745);
    $.__views.__alloyId17746 = Ti.UI.createView({
        id: "__alloyId17746"
    });
    $.__views.__alloyId17746 && $.addTopLevelView($.__views.__alloyId17746);
    $.__views.__alloyId17747 = Ti.UI.createView({
        id: "__alloyId17747"
    });
    $.__views.__alloyId17746.add($.__views.__alloyId17747);
    $.__views.__alloyId17748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17748"
    });
    $.__views.__alloyId17747.add($.__views.__alloyId17748);
    $.__views.__alloyId17749 = Ti.UI.createView({
        id: "__alloyId17749"
    });
    $.__views.__alloyId17749 && $.addTopLevelView($.__views.__alloyId17749);
    $.__views.__alloyId17750 = Ti.UI.createView({
        id: "__alloyId17750"
    });
    $.__views.__alloyId17749.add($.__views.__alloyId17750);
    $.__views.__alloyId17751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17751"
    });
    $.__views.__alloyId17750.add($.__views.__alloyId17751);
    $.__views.__alloyId17752 = Ti.UI.createView({
        id: "__alloyId17752"
    });
    $.__views.__alloyId17752 && $.addTopLevelView($.__views.__alloyId17752);
    $.__views.__alloyId17753 = Ti.UI.createView({
        id: "__alloyId17753"
    });
    $.__views.__alloyId17752.add($.__views.__alloyId17753);
    $.__views.__alloyId17754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17754"
    });
    $.__views.__alloyId17753.add($.__views.__alloyId17754);
    $.__views.__alloyId17755 = Ti.UI.createView({
        id: "__alloyId17755"
    });
    $.__views.__alloyId17755 && $.addTopLevelView($.__views.__alloyId17755);
    $.__views.__alloyId17756 = Ti.UI.createView({
        id: "__alloyId17756"
    });
    $.__views.__alloyId17755.add($.__views.__alloyId17756);
    $.__views.__alloyId17757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17757"
    });
    $.__views.__alloyId17756.add($.__views.__alloyId17757);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;