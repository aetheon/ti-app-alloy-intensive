function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_917";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_917 = Ti.UI.createView({
        id: "widget_917"
    });
    $.__views.widget_917 && $.addTopLevelView($.__views.widget_917);
    $.__views.__alloyId23660 = Ti.UI.createView({
        id: "__alloyId23660"
    });
    $.__views.widget_917.add($.__views.__alloyId23660);
    $.__views.__alloyId23661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23661"
    });
    $.__views.__alloyId23660.add($.__views.__alloyId23661);
    $.__views.__alloyId23662 = Ti.UI.createView({
        id: "__alloyId23662"
    });
    $.__views.__alloyId23662 && $.addTopLevelView($.__views.__alloyId23662);
    $.__views.__alloyId23663 = Ti.UI.createView({
        id: "__alloyId23663"
    });
    $.__views.__alloyId23662.add($.__views.__alloyId23663);
    $.__views.__alloyId23664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23664"
    });
    $.__views.__alloyId23663.add($.__views.__alloyId23664);
    $.__views.__alloyId23665 = Ti.UI.createView({
        id: "__alloyId23665"
    });
    $.__views.__alloyId23665 && $.addTopLevelView($.__views.__alloyId23665);
    $.__views.__alloyId23666 = Ti.UI.createView({
        id: "__alloyId23666"
    });
    $.__views.__alloyId23665.add($.__views.__alloyId23666);
    $.__views.__alloyId23667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23667"
    });
    $.__views.__alloyId23666.add($.__views.__alloyId23667);
    $.__views.__alloyId23668 = Ti.UI.createView({
        id: "__alloyId23668"
    });
    $.__views.__alloyId23668 && $.addTopLevelView($.__views.__alloyId23668);
    $.__views.__alloyId23669 = Ti.UI.createView({
        id: "__alloyId23669"
    });
    $.__views.__alloyId23668.add($.__views.__alloyId23669);
    $.__views.__alloyId23670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23670"
    });
    $.__views.__alloyId23669.add($.__views.__alloyId23670);
    $.__views.__alloyId23671 = Ti.UI.createView({
        id: "__alloyId23671"
    });
    $.__views.__alloyId23671 && $.addTopLevelView($.__views.__alloyId23671);
    $.__views.__alloyId23672 = Ti.UI.createView({
        id: "__alloyId23672"
    });
    $.__views.__alloyId23671.add($.__views.__alloyId23672);
    $.__views.__alloyId23673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23673"
    });
    $.__views.__alloyId23672.add($.__views.__alloyId23673);
    $.__views.__alloyId23674 = Ti.UI.createView({
        id: "__alloyId23674"
    });
    $.__views.__alloyId23674 && $.addTopLevelView($.__views.__alloyId23674);
    $.__views.__alloyId23675 = Ti.UI.createView({
        id: "__alloyId23675"
    });
    $.__views.__alloyId23674.add($.__views.__alloyId23675);
    $.__views.__alloyId23676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23676"
    });
    $.__views.__alloyId23675.add($.__views.__alloyId23676);
    $.__views.__alloyId23677 = Ti.UI.createView({
        id: "__alloyId23677"
    });
    $.__views.__alloyId23677 && $.addTopLevelView($.__views.__alloyId23677);
    $.__views.__alloyId23678 = Ti.UI.createView({
        id: "__alloyId23678"
    });
    $.__views.__alloyId23677.add($.__views.__alloyId23678);
    $.__views.__alloyId23679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23679"
    });
    $.__views.__alloyId23678.add($.__views.__alloyId23679);
    $.__views.__alloyId23680 = Ti.UI.createView({
        id: "__alloyId23680"
    });
    $.__views.__alloyId23680 && $.addTopLevelView($.__views.__alloyId23680);
    $.__views.__alloyId23681 = Ti.UI.createView({
        id: "__alloyId23681"
    });
    $.__views.__alloyId23680.add($.__views.__alloyId23681);
    $.__views.__alloyId23682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23682"
    });
    $.__views.__alloyId23681.add($.__views.__alloyId23682);
    $.__views.__alloyId23683 = Ti.UI.createView({
        id: "__alloyId23683"
    });
    $.__views.__alloyId23683 && $.addTopLevelView($.__views.__alloyId23683);
    $.__views.__alloyId23684 = Ti.UI.createView({
        id: "__alloyId23684"
    });
    $.__views.__alloyId23683.add($.__views.__alloyId23684);
    $.__views.__alloyId23685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23685"
    });
    $.__views.__alloyId23684.add($.__views.__alloyId23685);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;