function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_930";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_930 = Ti.UI.createView({
        id: "widget_930"
    });
    $.__views.widget_930 && $.addTopLevelView($.__views.widget_930);
    $.__views.__alloyId24050 = Ti.UI.createView({
        id: "__alloyId24050"
    });
    $.__views.widget_930.add($.__views.__alloyId24050);
    $.__views.__alloyId24051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24051"
    });
    $.__views.__alloyId24050.add($.__views.__alloyId24051);
    $.__views.__alloyId24052 = Ti.UI.createView({
        id: "__alloyId24052"
    });
    $.__views.__alloyId24052 && $.addTopLevelView($.__views.__alloyId24052);
    $.__views.__alloyId24053 = Ti.UI.createView({
        id: "__alloyId24053"
    });
    $.__views.__alloyId24052.add($.__views.__alloyId24053);
    $.__views.__alloyId24054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24054"
    });
    $.__views.__alloyId24053.add($.__views.__alloyId24054);
    $.__views.__alloyId24055 = Ti.UI.createView({
        id: "__alloyId24055"
    });
    $.__views.__alloyId24055 && $.addTopLevelView($.__views.__alloyId24055);
    $.__views.__alloyId24056 = Ti.UI.createView({
        id: "__alloyId24056"
    });
    $.__views.__alloyId24055.add($.__views.__alloyId24056);
    $.__views.__alloyId24057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24057"
    });
    $.__views.__alloyId24056.add($.__views.__alloyId24057);
    $.__views.__alloyId24058 = Ti.UI.createView({
        id: "__alloyId24058"
    });
    $.__views.__alloyId24058 && $.addTopLevelView($.__views.__alloyId24058);
    $.__views.__alloyId24059 = Ti.UI.createView({
        id: "__alloyId24059"
    });
    $.__views.__alloyId24058.add($.__views.__alloyId24059);
    $.__views.__alloyId24060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24060"
    });
    $.__views.__alloyId24059.add($.__views.__alloyId24060);
    $.__views.__alloyId24061 = Ti.UI.createView({
        id: "__alloyId24061"
    });
    $.__views.__alloyId24061 && $.addTopLevelView($.__views.__alloyId24061);
    $.__views.__alloyId24062 = Ti.UI.createView({
        id: "__alloyId24062"
    });
    $.__views.__alloyId24061.add($.__views.__alloyId24062);
    $.__views.__alloyId24063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24063"
    });
    $.__views.__alloyId24062.add($.__views.__alloyId24063);
    $.__views.__alloyId24064 = Ti.UI.createView({
        id: "__alloyId24064"
    });
    $.__views.__alloyId24064 && $.addTopLevelView($.__views.__alloyId24064);
    $.__views.__alloyId24065 = Ti.UI.createView({
        id: "__alloyId24065"
    });
    $.__views.__alloyId24064.add($.__views.__alloyId24065);
    $.__views.__alloyId24066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24066"
    });
    $.__views.__alloyId24065.add($.__views.__alloyId24066);
    $.__views.__alloyId24067 = Ti.UI.createView({
        id: "__alloyId24067"
    });
    $.__views.__alloyId24067 && $.addTopLevelView($.__views.__alloyId24067);
    $.__views.__alloyId24068 = Ti.UI.createView({
        id: "__alloyId24068"
    });
    $.__views.__alloyId24067.add($.__views.__alloyId24068);
    $.__views.__alloyId24069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24069"
    });
    $.__views.__alloyId24068.add($.__views.__alloyId24069);
    $.__views.__alloyId24070 = Ti.UI.createView({
        id: "__alloyId24070"
    });
    $.__views.__alloyId24070 && $.addTopLevelView($.__views.__alloyId24070);
    $.__views.__alloyId24071 = Ti.UI.createView({
        id: "__alloyId24071"
    });
    $.__views.__alloyId24070.add($.__views.__alloyId24071);
    $.__views.__alloyId24072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24072"
    });
    $.__views.__alloyId24071.add($.__views.__alloyId24072);
    $.__views.__alloyId24073 = Ti.UI.createView({
        id: "__alloyId24073"
    });
    $.__views.__alloyId24073 && $.addTopLevelView($.__views.__alloyId24073);
    $.__views.__alloyId24074 = Ti.UI.createView({
        id: "__alloyId24074"
    });
    $.__views.__alloyId24073.add($.__views.__alloyId24074);
    $.__views.__alloyId24075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24075"
    });
    $.__views.__alloyId24074.add($.__views.__alloyId24075);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;