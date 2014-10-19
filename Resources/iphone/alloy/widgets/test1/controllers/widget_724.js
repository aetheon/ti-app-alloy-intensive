function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_724";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_724 = Ti.UI.createView({
        id: "widget_724"
    });
    $.__views.widget_724 && $.addTopLevelView($.__views.widget_724);
    $.__views.__alloyId18096 = Ti.UI.createView({
        id: "__alloyId18096"
    });
    $.__views.widget_724.add($.__views.__alloyId18096);
    $.__views.__alloyId18097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18097"
    });
    $.__views.__alloyId18096.add($.__views.__alloyId18097);
    $.__views.__alloyId18098 = Ti.UI.createView({
        id: "__alloyId18098"
    });
    $.__views.__alloyId18098 && $.addTopLevelView($.__views.__alloyId18098);
    $.__views.__alloyId18099 = Ti.UI.createView({
        id: "__alloyId18099"
    });
    $.__views.__alloyId18098.add($.__views.__alloyId18099);
    $.__views.__alloyId18100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18100"
    });
    $.__views.__alloyId18099.add($.__views.__alloyId18100);
    $.__views.__alloyId18101 = Ti.UI.createView({
        id: "__alloyId18101"
    });
    $.__views.__alloyId18101 && $.addTopLevelView($.__views.__alloyId18101);
    $.__views.__alloyId18102 = Ti.UI.createView({
        id: "__alloyId18102"
    });
    $.__views.__alloyId18101.add($.__views.__alloyId18102);
    $.__views.__alloyId18103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18103"
    });
    $.__views.__alloyId18102.add($.__views.__alloyId18103);
    $.__views.__alloyId18104 = Ti.UI.createView({
        id: "__alloyId18104"
    });
    $.__views.__alloyId18104 && $.addTopLevelView($.__views.__alloyId18104);
    $.__views.__alloyId18105 = Ti.UI.createView({
        id: "__alloyId18105"
    });
    $.__views.__alloyId18104.add($.__views.__alloyId18105);
    $.__views.__alloyId18106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18106"
    });
    $.__views.__alloyId18105.add($.__views.__alloyId18106);
    $.__views.__alloyId18107 = Ti.UI.createView({
        id: "__alloyId18107"
    });
    $.__views.__alloyId18107 && $.addTopLevelView($.__views.__alloyId18107);
    $.__views.__alloyId18108 = Ti.UI.createView({
        id: "__alloyId18108"
    });
    $.__views.__alloyId18107.add($.__views.__alloyId18108);
    $.__views.__alloyId18109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18109"
    });
    $.__views.__alloyId18108.add($.__views.__alloyId18109);
    $.__views.__alloyId18110 = Ti.UI.createView({
        id: "__alloyId18110"
    });
    $.__views.__alloyId18110 && $.addTopLevelView($.__views.__alloyId18110);
    $.__views.__alloyId18111 = Ti.UI.createView({
        id: "__alloyId18111"
    });
    $.__views.__alloyId18110.add($.__views.__alloyId18111);
    $.__views.__alloyId18112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18112"
    });
    $.__views.__alloyId18111.add($.__views.__alloyId18112);
    $.__views.__alloyId18113 = Ti.UI.createView({
        id: "__alloyId18113"
    });
    $.__views.__alloyId18113 && $.addTopLevelView($.__views.__alloyId18113);
    $.__views.__alloyId18114 = Ti.UI.createView({
        id: "__alloyId18114"
    });
    $.__views.__alloyId18113.add($.__views.__alloyId18114);
    $.__views.__alloyId18115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18115"
    });
    $.__views.__alloyId18114.add($.__views.__alloyId18115);
    $.__views.__alloyId18116 = Ti.UI.createView({
        id: "__alloyId18116"
    });
    $.__views.__alloyId18116 && $.addTopLevelView($.__views.__alloyId18116);
    $.__views.__alloyId18117 = Ti.UI.createView({
        id: "__alloyId18117"
    });
    $.__views.__alloyId18116.add($.__views.__alloyId18117);
    $.__views.__alloyId18118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18118"
    });
    $.__views.__alloyId18117.add($.__views.__alloyId18118);
    $.__views.__alloyId18119 = Ti.UI.createView({
        id: "__alloyId18119"
    });
    $.__views.__alloyId18119 && $.addTopLevelView($.__views.__alloyId18119);
    $.__views.__alloyId18120 = Ti.UI.createView({
        id: "__alloyId18120"
    });
    $.__views.__alloyId18119.add($.__views.__alloyId18120);
    $.__views.__alloyId18121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18121"
    });
    $.__views.__alloyId18120.add($.__views.__alloyId18121);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;