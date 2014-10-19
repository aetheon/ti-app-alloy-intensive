function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_410";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_410 = Ti.UI.createView({
        id: "widget_410"
    });
    $.__views.widget_410 && $.addTopLevelView($.__views.widget_410);
    $.__views.__alloyId9048 = Ti.UI.createView({
        id: "__alloyId9048"
    });
    $.__views.widget_410.add($.__views.__alloyId9048);
    $.__views.__alloyId9049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9049"
    });
    $.__views.__alloyId9048.add($.__views.__alloyId9049);
    $.__views.__alloyId9050 = Ti.UI.createView({
        id: "__alloyId9050"
    });
    $.__views.__alloyId9050 && $.addTopLevelView($.__views.__alloyId9050);
    $.__views.__alloyId9051 = Ti.UI.createView({
        id: "__alloyId9051"
    });
    $.__views.__alloyId9050.add($.__views.__alloyId9051);
    $.__views.__alloyId9052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9052"
    });
    $.__views.__alloyId9051.add($.__views.__alloyId9052);
    $.__views.__alloyId9053 = Ti.UI.createView({
        id: "__alloyId9053"
    });
    $.__views.__alloyId9053 && $.addTopLevelView($.__views.__alloyId9053);
    $.__views.__alloyId9054 = Ti.UI.createView({
        id: "__alloyId9054"
    });
    $.__views.__alloyId9053.add($.__views.__alloyId9054);
    $.__views.__alloyId9055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9055"
    });
    $.__views.__alloyId9054.add($.__views.__alloyId9055);
    $.__views.__alloyId9056 = Ti.UI.createView({
        id: "__alloyId9056"
    });
    $.__views.__alloyId9056 && $.addTopLevelView($.__views.__alloyId9056);
    $.__views.__alloyId9057 = Ti.UI.createView({
        id: "__alloyId9057"
    });
    $.__views.__alloyId9056.add($.__views.__alloyId9057);
    $.__views.__alloyId9058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9058"
    });
    $.__views.__alloyId9057.add($.__views.__alloyId9058);
    $.__views.__alloyId9059 = Ti.UI.createView({
        id: "__alloyId9059"
    });
    $.__views.__alloyId9059 && $.addTopLevelView($.__views.__alloyId9059);
    $.__views.__alloyId9060 = Ti.UI.createView({
        id: "__alloyId9060"
    });
    $.__views.__alloyId9059.add($.__views.__alloyId9060);
    $.__views.__alloyId9061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9061"
    });
    $.__views.__alloyId9060.add($.__views.__alloyId9061);
    $.__views.__alloyId9062 = Ti.UI.createView({
        id: "__alloyId9062"
    });
    $.__views.__alloyId9062 && $.addTopLevelView($.__views.__alloyId9062);
    $.__views.__alloyId9063 = Ti.UI.createView({
        id: "__alloyId9063"
    });
    $.__views.__alloyId9062.add($.__views.__alloyId9063);
    $.__views.__alloyId9064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9064"
    });
    $.__views.__alloyId9063.add($.__views.__alloyId9064);
    $.__views.__alloyId9065 = Ti.UI.createView({
        id: "__alloyId9065"
    });
    $.__views.__alloyId9065 && $.addTopLevelView($.__views.__alloyId9065);
    $.__views.__alloyId9066 = Ti.UI.createView({
        id: "__alloyId9066"
    });
    $.__views.__alloyId9065.add($.__views.__alloyId9066);
    $.__views.__alloyId9067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9067"
    });
    $.__views.__alloyId9066.add($.__views.__alloyId9067);
    $.__views.__alloyId9068 = Ti.UI.createView({
        id: "__alloyId9068"
    });
    $.__views.__alloyId9068 && $.addTopLevelView($.__views.__alloyId9068);
    $.__views.__alloyId9069 = Ti.UI.createView({
        id: "__alloyId9069"
    });
    $.__views.__alloyId9068.add($.__views.__alloyId9069);
    $.__views.__alloyId9070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9070"
    });
    $.__views.__alloyId9069.add($.__views.__alloyId9070);
    $.__views.__alloyId9071 = Ti.UI.createView({
        id: "__alloyId9071"
    });
    $.__views.__alloyId9071 && $.addTopLevelView($.__views.__alloyId9071);
    $.__views.__alloyId9072 = Ti.UI.createView({
        id: "__alloyId9072"
    });
    $.__views.__alloyId9071.add($.__views.__alloyId9072);
    $.__views.__alloyId9073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9073"
    });
    $.__views.__alloyId9072.add($.__views.__alloyId9073);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;