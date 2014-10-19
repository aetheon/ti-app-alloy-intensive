function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_919";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_919 = Ti.UI.createView({
        id: "widget_919"
    });
    $.__views.widget_919 && $.addTopLevelView($.__views.widget_919);
    $.__views.__alloyId23712 = Ti.UI.createView({
        id: "__alloyId23712"
    });
    $.__views.widget_919.add($.__views.__alloyId23712);
    $.__views.__alloyId23713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23713"
    });
    $.__views.__alloyId23712.add($.__views.__alloyId23713);
    $.__views.__alloyId23714 = Ti.UI.createView({
        id: "__alloyId23714"
    });
    $.__views.__alloyId23714 && $.addTopLevelView($.__views.__alloyId23714);
    $.__views.__alloyId23715 = Ti.UI.createView({
        id: "__alloyId23715"
    });
    $.__views.__alloyId23714.add($.__views.__alloyId23715);
    $.__views.__alloyId23716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23716"
    });
    $.__views.__alloyId23715.add($.__views.__alloyId23716);
    $.__views.__alloyId23717 = Ti.UI.createView({
        id: "__alloyId23717"
    });
    $.__views.__alloyId23717 && $.addTopLevelView($.__views.__alloyId23717);
    $.__views.__alloyId23718 = Ti.UI.createView({
        id: "__alloyId23718"
    });
    $.__views.__alloyId23717.add($.__views.__alloyId23718);
    $.__views.__alloyId23719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23719"
    });
    $.__views.__alloyId23718.add($.__views.__alloyId23719);
    $.__views.__alloyId23720 = Ti.UI.createView({
        id: "__alloyId23720"
    });
    $.__views.__alloyId23720 && $.addTopLevelView($.__views.__alloyId23720);
    $.__views.__alloyId23721 = Ti.UI.createView({
        id: "__alloyId23721"
    });
    $.__views.__alloyId23720.add($.__views.__alloyId23721);
    $.__views.__alloyId23722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23722"
    });
    $.__views.__alloyId23721.add($.__views.__alloyId23722);
    $.__views.__alloyId23723 = Ti.UI.createView({
        id: "__alloyId23723"
    });
    $.__views.__alloyId23723 && $.addTopLevelView($.__views.__alloyId23723);
    $.__views.__alloyId23724 = Ti.UI.createView({
        id: "__alloyId23724"
    });
    $.__views.__alloyId23723.add($.__views.__alloyId23724);
    $.__views.__alloyId23725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23725"
    });
    $.__views.__alloyId23724.add($.__views.__alloyId23725);
    $.__views.__alloyId23726 = Ti.UI.createView({
        id: "__alloyId23726"
    });
    $.__views.__alloyId23726 && $.addTopLevelView($.__views.__alloyId23726);
    $.__views.__alloyId23727 = Ti.UI.createView({
        id: "__alloyId23727"
    });
    $.__views.__alloyId23726.add($.__views.__alloyId23727);
    $.__views.__alloyId23728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23728"
    });
    $.__views.__alloyId23727.add($.__views.__alloyId23728);
    $.__views.__alloyId23729 = Ti.UI.createView({
        id: "__alloyId23729"
    });
    $.__views.__alloyId23729 && $.addTopLevelView($.__views.__alloyId23729);
    $.__views.__alloyId23730 = Ti.UI.createView({
        id: "__alloyId23730"
    });
    $.__views.__alloyId23729.add($.__views.__alloyId23730);
    $.__views.__alloyId23731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23731"
    });
    $.__views.__alloyId23730.add($.__views.__alloyId23731);
    $.__views.__alloyId23732 = Ti.UI.createView({
        id: "__alloyId23732"
    });
    $.__views.__alloyId23732 && $.addTopLevelView($.__views.__alloyId23732);
    $.__views.__alloyId23733 = Ti.UI.createView({
        id: "__alloyId23733"
    });
    $.__views.__alloyId23732.add($.__views.__alloyId23733);
    $.__views.__alloyId23734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23734"
    });
    $.__views.__alloyId23733.add($.__views.__alloyId23734);
    $.__views.__alloyId23735 = Ti.UI.createView({
        id: "__alloyId23735"
    });
    $.__views.__alloyId23735 && $.addTopLevelView($.__views.__alloyId23735);
    $.__views.__alloyId23736 = Ti.UI.createView({
        id: "__alloyId23736"
    });
    $.__views.__alloyId23735.add($.__views.__alloyId23736);
    $.__views.__alloyId23737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23737"
    });
    $.__views.__alloyId23736.add($.__views.__alloyId23737);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;