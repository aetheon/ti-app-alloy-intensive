function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_781";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_781 = Ti.UI.createView({
        id: "widget_781"
    });
    $.__views.widget_781 && $.addTopLevelView($.__views.widget_781);
    $.__views.__alloyId19734 = Ti.UI.createView({
        id: "__alloyId19734"
    });
    $.__views.widget_781.add($.__views.__alloyId19734);
    $.__views.__alloyId19735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19735"
    });
    $.__views.__alloyId19734.add($.__views.__alloyId19735);
    $.__views.__alloyId19736 = Ti.UI.createView({
        id: "__alloyId19736"
    });
    $.__views.__alloyId19736 && $.addTopLevelView($.__views.__alloyId19736);
    $.__views.__alloyId19737 = Ti.UI.createView({
        id: "__alloyId19737"
    });
    $.__views.__alloyId19736.add($.__views.__alloyId19737);
    $.__views.__alloyId19738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19738"
    });
    $.__views.__alloyId19737.add($.__views.__alloyId19738);
    $.__views.__alloyId19739 = Ti.UI.createView({
        id: "__alloyId19739"
    });
    $.__views.__alloyId19739 && $.addTopLevelView($.__views.__alloyId19739);
    $.__views.__alloyId19740 = Ti.UI.createView({
        id: "__alloyId19740"
    });
    $.__views.__alloyId19739.add($.__views.__alloyId19740);
    $.__views.__alloyId19741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19741"
    });
    $.__views.__alloyId19740.add($.__views.__alloyId19741);
    $.__views.__alloyId19742 = Ti.UI.createView({
        id: "__alloyId19742"
    });
    $.__views.__alloyId19742 && $.addTopLevelView($.__views.__alloyId19742);
    $.__views.__alloyId19743 = Ti.UI.createView({
        id: "__alloyId19743"
    });
    $.__views.__alloyId19742.add($.__views.__alloyId19743);
    $.__views.__alloyId19744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19744"
    });
    $.__views.__alloyId19743.add($.__views.__alloyId19744);
    $.__views.__alloyId19745 = Ti.UI.createView({
        id: "__alloyId19745"
    });
    $.__views.__alloyId19745 && $.addTopLevelView($.__views.__alloyId19745);
    $.__views.__alloyId19746 = Ti.UI.createView({
        id: "__alloyId19746"
    });
    $.__views.__alloyId19745.add($.__views.__alloyId19746);
    $.__views.__alloyId19747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19747"
    });
    $.__views.__alloyId19746.add($.__views.__alloyId19747);
    $.__views.__alloyId19748 = Ti.UI.createView({
        id: "__alloyId19748"
    });
    $.__views.__alloyId19748 && $.addTopLevelView($.__views.__alloyId19748);
    $.__views.__alloyId19749 = Ti.UI.createView({
        id: "__alloyId19749"
    });
    $.__views.__alloyId19748.add($.__views.__alloyId19749);
    $.__views.__alloyId19750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19750"
    });
    $.__views.__alloyId19749.add($.__views.__alloyId19750);
    $.__views.__alloyId19751 = Ti.UI.createView({
        id: "__alloyId19751"
    });
    $.__views.__alloyId19751 && $.addTopLevelView($.__views.__alloyId19751);
    $.__views.__alloyId19752 = Ti.UI.createView({
        id: "__alloyId19752"
    });
    $.__views.__alloyId19751.add($.__views.__alloyId19752);
    $.__views.__alloyId19753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19753"
    });
    $.__views.__alloyId19752.add($.__views.__alloyId19753);
    $.__views.__alloyId19754 = Ti.UI.createView({
        id: "__alloyId19754"
    });
    $.__views.__alloyId19754 && $.addTopLevelView($.__views.__alloyId19754);
    $.__views.__alloyId19755 = Ti.UI.createView({
        id: "__alloyId19755"
    });
    $.__views.__alloyId19754.add($.__views.__alloyId19755);
    $.__views.__alloyId19756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19756"
    });
    $.__views.__alloyId19755.add($.__views.__alloyId19756);
    $.__views.__alloyId19757 = Ti.UI.createView({
        id: "__alloyId19757"
    });
    $.__views.__alloyId19757 && $.addTopLevelView($.__views.__alloyId19757);
    $.__views.__alloyId19758 = Ti.UI.createView({
        id: "__alloyId19758"
    });
    $.__views.__alloyId19757.add($.__views.__alloyId19758);
    $.__views.__alloyId19759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19759"
    });
    $.__views.__alloyId19758.add($.__views.__alloyId19759);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;