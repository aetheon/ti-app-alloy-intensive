function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_850";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_850 = Ti.UI.createView({
        id: "widget_850"
    });
    $.__views.widget_850 && $.addTopLevelView($.__views.widget_850);
    $.__views.__alloyId21736 = Ti.UI.createView({
        id: "__alloyId21736"
    });
    $.__views.widget_850.add($.__views.__alloyId21736);
    $.__views.__alloyId21737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21737"
    });
    $.__views.__alloyId21736.add($.__views.__alloyId21737);
    $.__views.__alloyId21738 = Ti.UI.createView({
        id: "__alloyId21738"
    });
    $.__views.__alloyId21738 && $.addTopLevelView($.__views.__alloyId21738);
    $.__views.__alloyId21739 = Ti.UI.createView({
        id: "__alloyId21739"
    });
    $.__views.__alloyId21738.add($.__views.__alloyId21739);
    $.__views.__alloyId21740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21740"
    });
    $.__views.__alloyId21739.add($.__views.__alloyId21740);
    $.__views.__alloyId21741 = Ti.UI.createView({
        id: "__alloyId21741"
    });
    $.__views.__alloyId21741 && $.addTopLevelView($.__views.__alloyId21741);
    $.__views.__alloyId21742 = Ti.UI.createView({
        id: "__alloyId21742"
    });
    $.__views.__alloyId21741.add($.__views.__alloyId21742);
    $.__views.__alloyId21743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21743"
    });
    $.__views.__alloyId21742.add($.__views.__alloyId21743);
    $.__views.__alloyId21744 = Ti.UI.createView({
        id: "__alloyId21744"
    });
    $.__views.__alloyId21744 && $.addTopLevelView($.__views.__alloyId21744);
    $.__views.__alloyId21745 = Ti.UI.createView({
        id: "__alloyId21745"
    });
    $.__views.__alloyId21744.add($.__views.__alloyId21745);
    $.__views.__alloyId21746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21746"
    });
    $.__views.__alloyId21745.add($.__views.__alloyId21746);
    $.__views.__alloyId21747 = Ti.UI.createView({
        id: "__alloyId21747"
    });
    $.__views.__alloyId21747 && $.addTopLevelView($.__views.__alloyId21747);
    $.__views.__alloyId21748 = Ti.UI.createView({
        id: "__alloyId21748"
    });
    $.__views.__alloyId21747.add($.__views.__alloyId21748);
    $.__views.__alloyId21749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21749"
    });
    $.__views.__alloyId21748.add($.__views.__alloyId21749);
    $.__views.__alloyId21750 = Ti.UI.createView({
        id: "__alloyId21750"
    });
    $.__views.__alloyId21750 && $.addTopLevelView($.__views.__alloyId21750);
    $.__views.__alloyId21751 = Ti.UI.createView({
        id: "__alloyId21751"
    });
    $.__views.__alloyId21750.add($.__views.__alloyId21751);
    $.__views.__alloyId21752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21752"
    });
    $.__views.__alloyId21751.add($.__views.__alloyId21752);
    $.__views.__alloyId21753 = Ti.UI.createView({
        id: "__alloyId21753"
    });
    $.__views.__alloyId21753 && $.addTopLevelView($.__views.__alloyId21753);
    $.__views.__alloyId21754 = Ti.UI.createView({
        id: "__alloyId21754"
    });
    $.__views.__alloyId21753.add($.__views.__alloyId21754);
    $.__views.__alloyId21755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21755"
    });
    $.__views.__alloyId21754.add($.__views.__alloyId21755);
    $.__views.__alloyId21756 = Ti.UI.createView({
        id: "__alloyId21756"
    });
    $.__views.__alloyId21756 && $.addTopLevelView($.__views.__alloyId21756);
    $.__views.__alloyId21757 = Ti.UI.createView({
        id: "__alloyId21757"
    });
    $.__views.__alloyId21756.add($.__views.__alloyId21757);
    $.__views.__alloyId21758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21758"
    });
    $.__views.__alloyId21757.add($.__views.__alloyId21758);
    $.__views.__alloyId21759 = Ti.UI.createView({
        id: "__alloyId21759"
    });
    $.__views.__alloyId21759 && $.addTopLevelView($.__views.__alloyId21759);
    $.__views.__alloyId21760 = Ti.UI.createView({
        id: "__alloyId21760"
    });
    $.__views.__alloyId21759.add($.__views.__alloyId21760);
    $.__views.__alloyId21761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21761"
    });
    $.__views.__alloyId21760.add($.__views.__alloyId21761);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;