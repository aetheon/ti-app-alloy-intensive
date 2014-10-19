function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_573";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_573 = Ti.UI.createView({
        id: "widget_573"
    });
    $.__views.widget_573 && $.addTopLevelView($.__views.widget_573);
    $.__views.__alloyId13728 = Ti.UI.createView({
        id: "__alloyId13728"
    });
    $.__views.widget_573.add($.__views.__alloyId13728);
    $.__views.__alloyId13729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13729"
    });
    $.__views.__alloyId13728.add($.__views.__alloyId13729);
    $.__views.__alloyId13730 = Ti.UI.createView({
        id: "__alloyId13730"
    });
    $.__views.__alloyId13730 && $.addTopLevelView($.__views.__alloyId13730);
    $.__views.__alloyId13731 = Ti.UI.createView({
        id: "__alloyId13731"
    });
    $.__views.__alloyId13730.add($.__views.__alloyId13731);
    $.__views.__alloyId13732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13732"
    });
    $.__views.__alloyId13731.add($.__views.__alloyId13732);
    $.__views.__alloyId13733 = Ti.UI.createView({
        id: "__alloyId13733"
    });
    $.__views.__alloyId13733 && $.addTopLevelView($.__views.__alloyId13733);
    $.__views.__alloyId13734 = Ti.UI.createView({
        id: "__alloyId13734"
    });
    $.__views.__alloyId13733.add($.__views.__alloyId13734);
    $.__views.__alloyId13735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13735"
    });
    $.__views.__alloyId13734.add($.__views.__alloyId13735);
    $.__views.__alloyId13736 = Ti.UI.createView({
        id: "__alloyId13736"
    });
    $.__views.__alloyId13736 && $.addTopLevelView($.__views.__alloyId13736);
    $.__views.__alloyId13737 = Ti.UI.createView({
        id: "__alloyId13737"
    });
    $.__views.__alloyId13736.add($.__views.__alloyId13737);
    $.__views.__alloyId13738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13738"
    });
    $.__views.__alloyId13737.add($.__views.__alloyId13738);
    $.__views.__alloyId13739 = Ti.UI.createView({
        id: "__alloyId13739"
    });
    $.__views.__alloyId13739 && $.addTopLevelView($.__views.__alloyId13739);
    $.__views.__alloyId13740 = Ti.UI.createView({
        id: "__alloyId13740"
    });
    $.__views.__alloyId13739.add($.__views.__alloyId13740);
    $.__views.__alloyId13741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13741"
    });
    $.__views.__alloyId13740.add($.__views.__alloyId13741);
    $.__views.__alloyId13742 = Ti.UI.createView({
        id: "__alloyId13742"
    });
    $.__views.__alloyId13742 && $.addTopLevelView($.__views.__alloyId13742);
    $.__views.__alloyId13743 = Ti.UI.createView({
        id: "__alloyId13743"
    });
    $.__views.__alloyId13742.add($.__views.__alloyId13743);
    $.__views.__alloyId13744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13744"
    });
    $.__views.__alloyId13743.add($.__views.__alloyId13744);
    $.__views.__alloyId13745 = Ti.UI.createView({
        id: "__alloyId13745"
    });
    $.__views.__alloyId13745 && $.addTopLevelView($.__views.__alloyId13745);
    $.__views.__alloyId13746 = Ti.UI.createView({
        id: "__alloyId13746"
    });
    $.__views.__alloyId13745.add($.__views.__alloyId13746);
    $.__views.__alloyId13747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13747"
    });
    $.__views.__alloyId13746.add($.__views.__alloyId13747);
    $.__views.__alloyId13748 = Ti.UI.createView({
        id: "__alloyId13748"
    });
    $.__views.__alloyId13748 && $.addTopLevelView($.__views.__alloyId13748);
    $.__views.__alloyId13749 = Ti.UI.createView({
        id: "__alloyId13749"
    });
    $.__views.__alloyId13748.add($.__views.__alloyId13749);
    $.__views.__alloyId13750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13750"
    });
    $.__views.__alloyId13749.add($.__views.__alloyId13750);
    $.__views.__alloyId13751 = Ti.UI.createView({
        id: "__alloyId13751"
    });
    $.__views.__alloyId13751 && $.addTopLevelView($.__views.__alloyId13751);
    $.__views.__alloyId13752 = Ti.UI.createView({
        id: "__alloyId13752"
    });
    $.__views.__alloyId13751.add($.__views.__alloyId13752);
    $.__views.__alloyId13753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13753"
    });
    $.__views.__alloyId13752.add($.__views.__alloyId13753);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;