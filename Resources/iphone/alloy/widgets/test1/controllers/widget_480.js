function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_480";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_480 = Ti.UI.createView({
        id: "widget_480"
    });
    $.__views.widget_480 && $.addTopLevelView($.__views.widget_480);
    $.__views.__alloyId11050 = Ti.UI.createView({
        id: "__alloyId11050"
    });
    $.__views.widget_480.add($.__views.__alloyId11050);
    $.__views.__alloyId11051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11051"
    });
    $.__views.__alloyId11050.add($.__views.__alloyId11051);
    $.__views.__alloyId11052 = Ti.UI.createView({
        id: "__alloyId11052"
    });
    $.__views.__alloyId11052 && $.addTopLevelView($.__views.__alloyId11052);
    $.__views.__alloyId11053 = Ti.UI.createView({
        id: "__alloyId11053"
    });
    $.__views.__alloyId11052.add($.__views.__alloyId11053);
    $.__views.__alloyId11054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11054"
    });
    $.__views.__alloyId11053.add($.__views.__alloyId11054);
    $.__views.__alloyId11055 = Ti.UI.createView({
        id: "__alloyId11055"
    });
    $.__views.__alloyId11055 && $.addTopLevelView($.__views.__alloyId11055);
    $.__views.__alloyId11056 = Ti.UI.createView({
        id: "__alloyId11056"
    });
    $.__views.__alloyId11055.add($.__views.__alloyId11056);
    $.__views.__alloyId11057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11057"
    });
    $.__views.__alloyId11056.add($.__views.__alloyId11057);
    $.__views.__alloyId11058 = Ti.UI.createView({
        id: "__alloyId11058"
    });
    $.__views.__alloyId11058 && $.addTopLevelView($.__views.__alloyId11058);
    $.__views.__alloyId11059 = Ti.UI.createView({
        id: "__alloyId11059"
    });
    $.__views.__alloyId11058.add($.__views.__alloyId11059);
    $.__views.__alloyId11060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11060"
    });
    $.__views.__alloyId11059.add($.__views.__alloyId11060);
    $.__views.__alloyId11061 = Ti.UI.createView({
        id: "__alloyId11061"
    });
    $.__views.__alloyId11061 && $.addTopLevelView($.__views.__alloyId11061);
    $.__views.__alloyId11062 = Ti.UI.createView({
        id: "__alloyId11062"
    });
    $.__views.__alloyId11061.add($.__views.__alloyId11062);
    $.__views.__alloyId11063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11063"
    });
    $.__views.__alloyId11062.add($.__views.__alloyId11063);
    $.__views.__alloyId11064 = Ti.UI.createView({
        id: "__alloyId11064"
    });
    $.__views.__alloyId11064 && $.addTopLevelView($.__views.__alloyId11064);
    $.__views.__alloyId11065 = Ti.UI.createView({
        id: "__alloyId11065"
    });
    $.__views.__alloyId11064.add($.__views.__alloyId11065);
    $.__views.__alloyId11066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11066"
    });
    $.__views.__alloyId11065.add($.__views.__alloyId11066);
    $.__views.__alloyId11067 = Ti.UI.createView({
        id: "__alloyId11067"
    });
    $.__views.__alloyId11067 && $.addTopLevelView($.__views.__alloyId11067);
    $.__views.__alloyId11068 = Ti.UI.createView({
        id: "__alloyId11068"
    });
    $.__views.__alloyId11067.add($.__views.__alloyId11068);
    $.__views.__alloyId11069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11069"
    });
    $.__views.__alloyId11068.add($.__views.__alloyId11069);
    $.__views.__alloyId11070 = Ti.UI.createView({
        id: "__alloyId11070"
    });
    $.__views.__alloyId11070 && $.addTopLevelView($.__views.__alloyId11070);
    $.__views.__alloyId11071 = Ti.UI.createView({
        id: "__alloyId11071"
    });
    $.__views.__alloyId11070.add($.__views.__alloyId11071);
    $.__views.__alloyId11072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11072"
    });
    $.__views.__alloyId11071.add($.__views.__alloyId11072);
    $.__views.__alloyId11073 = Ti.UI.createView({
        id: "__alloyId11073"
    });
    $.__views.__alloyId11073 && $.addTopLevelView($.__views.__alloyId11073);
    $.__views.__alloyId11074 = Ti.UI.createView({
        id: "__alloyId11074"
    });
    $.__views.__alloyId11073.add($.__views.__alloyId11074);
    $.__views.__alloyId11075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11075"
    });
    $.__views.__alloyId11074.add($.__views.__alloyId11075);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;