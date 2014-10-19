function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_896";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_896 = Ti.UI.createView({
        id: "widget_896"
    });
    $.__views.widget_896 && $.addTopLevelView($.__views.widget_896);
    $.__views.__alloyId23036 = Ti.UI.createView({
        id: "__alloyId23036"
    });
    $.__views.widget_896.add($.__views.__alloyId23036);
    $.__views.__alloyId23037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23037"
    });
    $.__views.__alloyId23036.add($.__views.__alloyId23037);
    $.__views.__alloyId23038 = Ti.UI.createView({
        id: "__alloyId23038"
    });
    $.__views.__alloyId23038 && $.addTopLevelView($.__views.__alloyId23038);
    $.__views.__alloyId23039 = Ti.UI.createView({
        id: "__alloyId23039"
    });
    $.__views.__alloyId23038.add($.__views.__alloyId23039);
    $.__views.__alloyId23040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23040"
    });
    $.__views.__alloyId23039.add($.__views.__alloyId23040);
    $.__views.__alloyId23041 = Ti.UI.createView({
        id: "__alloyId23041"
    });
    $.__views.__alloyId23041 && $.addTopLevelView($.__views.__alloyId23041);
    $.__views.__alloyId23042 = Ti.UI.createView({
        id: "__alloyId23042"
    });
    $.__views.__alloyId23041.add($.__views.__alloyId23042);
    $.__views.__alloyId23043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23043"
    });
    $.__views.__alloyId23042.add($.__views.__alloyId23043);
    $.__views.__alloyId23044 = Ti.UI.createView({
        id: "__alloyId23044"
    });
    $.__views.__alloyId23044 && $.addTopLevelView($.__views.__alloyId23044);
    $.__views.__alloyId23045 = Ti.UI.createView({
        id: "__alloyId23045"
    });
    $.__views.__alloyId23044.add($.__views.__alloyId23045);
    $.__views.__alloyId23046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23046"
    });
    $.__views.__alloyId23045.add($.__views.__alloyId23046);
    $.__views.__alloyId23047 = Ti.UI.createView({
        id: "__alloyId23047"
    });
    $.__views.__alloyId23047 && $.addTopLevelView($.__views.__alloyId23047);
    $.__views.__alloyId23048 = Ti.UI.createView({
        id: "__alloyId23048"
    });
    $.__views.__alloyId23047.add($.__views.__alloyId23048);
    $.__views.__alloyId23049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23049"
    });
    $.__views.__alloyId23048.add($.__views.__alloyId23049);
    $.__views.__alloyId23050 = Ti.UI.createView({
        id: "__alloyId23050"
    });
    $.__views.__alloyId23050 && $.addTopLevelView($.__views.__alloyId23050);
    $.__views.__alloyId23051 = Ti.UI.createView({
        id: "__alloyId23051"
    });
    $.__views.__alloyId23050.add($.__views.__alloyId23051);
    $.__views.__alloyId23052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23052"
    });
    $.__views.__alloyId23051.add($.__views.__alloyId23052);
    $.__views.__alloyId23053 = Ti.UI.createView({
        id: "__alloyId23053"
    });
    $.__views.__alloyId23053 && $.addTopLevelView($.__views.__alloyId23053);
    $.__views.__alloyId23054 = Ti.UI.createView({
        id: "__alloyId23054"
    });
    $.__views.__alloyId23053.add($.__views.__alloyId23054);
    $.__views.__alloyId23055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23055"
    });
    $.__views.__alloyId23054.add($.__views.__alloyId23055);
    $.__views.__alloyId23056 = Ti.UI.createView({
        id: "__alloyId23056"
    });
    $.__views.__alloyId23056 && $.addTopLevelView($.__views.__alloyId23056);
    $.__views.__alloyId23057 = Ti.UI.createView({
        id: "__alloyId23057"
    });
    $.__views.__alloyId23056.add($.__views.__alloyId23057);
    $.__views.__alloyId23058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23058"
    });
    $.__views.__alloyId23057.add($.__views.__alloyId23058);
    $.__views.__alloyId23059 = Ti.UI.createView({
        id: "__alloyId23059"
    });
    $.__views.__alloyId23059 && $.addTopLevelView($.__views.__alloyId23059);
    $.__views.__alloyId23060 = Ti.UI.createView({
        id: "__alloyId23060"
    });
    $.__views.__alloyId23059.add($.__views.__alloyId23060);
    $.__views.__alloyId23061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23061"
    });
    $.__views.__alloyId23060.add($.__views.__alloyId23061);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;