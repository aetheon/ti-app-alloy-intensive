function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_47";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_47 = Ti.UI.createView({
        id: "widget_47"
    });
    $.__views.widget_47 && $.addTopLevelView($.__views.widget_47);
    $.__views.__alloyId10738 = Ti.UI.createView({
        id: "__alloyId10738"
    });
    $.__views.widget_47.add($.__views.__alloyId10738);
    $.__views.__alloyId10739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10739"
    });
    $.__views.__alloyId10738.add($.__views.__alloyId10739);
    $.__views.__alloyId10740 = Ti.UI.createView({
        id: "__alloyId10740"
    });
    $.__views.__alloyId10740 && $.addTopLevelView($.__views.__alloyId10740);
    $.__views.__alloyId10741 = Ti.UI.createView({
        id: "__alloyId10741"
    });
    $.__views.__alloyId10740.add($.__views.__alloyId10741);
    $.__views.__alloyId10742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10742"
    });
    $.__views.__alloyId10741.add($.__views.__alloyId10742);
    $.__views.__alloyId10743 = Ti.UI.createView({
        id: "__alloyId10743"
    });
    $.__views.__alloyId10743 && $.addTopLevelView($.__views.__alloyId10743);
    $.__views.__alloyId10744 = Ti.UI.createView({
        id: "__alloyId10744"
    });
    $.__views.__alloyId10743.add($.__views.__alloyId10744);
    $.__views.__alloyId10745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10745"
    });
    $.__views.__alloyId10744.add($.__views.__alloyId10745);
    $.__views.__alloyId10746 = Ti.UI.createView({
        id: "__alloyId10746"
    });
    $.__views.__alloyId10746 && $.addTopLevelView($.__views.__alloyId10746);
    $.__views.__alloyId10747 = Ti.UI.createView({
        id: "__alloyId10747"
    });
    $.__views.__alloyId10746.add($.__views.__alloyId10747);
    $.__views.__alloyId10748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10748"
    });
    $.__views.__alloyId10747.add($.__views.__alloyId10748);
    $.__views.__alloyId10749 = Ti.UI.createView({
        id: "__alloyId10749"
    });
    $.__views.__alloyId10749 && $.addTopLevelView($.__views.__alloyId10749);
    $.__views.__alloyId10750 = Ti.UI.createView({
        id: "__alloyId10750"
    });
    $.__views.__alloyId10749.add($.__views.__alloyId10750);
    $.__views.__alloyId10751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10751"
    });
    $.__views.__alloyId10750.add($.__views.__alloyId10751);
    $.__views.__alloyId10752 = Ti.UI.createView({
        id: "__alloyId10752"
    });
    $.__views.__alloyId10752 && $.addTopLevelView($.__views.__alloyId10752);
    $.__views.__alloyId10753 = Ti.UI.createView({
        id: "__alloyId10753"
    });
    $.__views.__alloyId10752.add($.__views.__alloyId10753);
    $.__views.__alloyId10754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10754"
    });
    $.__views.__alloyId10753.add($.__views.__alloyId10754);
    $.__views.__alloyId10755 = Ti.UI.createView({
        id: "__alloyId10755"
    });
    $.__views.__alloyId10755 && $.addTopLevelView($.__views.__alloyId10755);
    $.__views.__alloyId10756 = Ti.UI.createView({
        id: "__alloyId10756"
    });
    $.__views.__alloyId10755.add($.__views.__alloyId10756);
    $.__views.__alloyId10757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10757"
    });
    $.__views.__alloyId10756.add($.__views.__alloyId10757);
    $.__views.__alloyId10758 = Ti.UI.createView({
        id: "__alloyId10758"
    });
    $.__views.__alloyId10758 && $.addTopLevelView($.__views.__alloyId10758);
    $.__views.__alloyId10759 = Ti.UI.createView({
        id: "__alloyId10759"
    });
    $.__views.__alloyId10758.add($.__views.__alloyId10759);
    $.__views.__alloyId10760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10760"
    });
    $.__views.__alloyId10759.add($.__views.__alloyId10760);
    $.__views.__alloyId10761 = Ti.UI.createView({
        id: "__alloyId10761"
    });
    $.__views.__alloyId10761 && $.addTopLevelView($.__views.__alloyId10761);
    $.__views.__alloyId10762 = Ti.UI.createView({
        id: "__alloyId10762"
    });
    $.__views.__alloyId10761.add($.__views.__alloyId10762);
    $.__views.__alloyId10763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10763"
    });
    $.__views.__alloyId10762.add($.__views.__alloyId10763);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;