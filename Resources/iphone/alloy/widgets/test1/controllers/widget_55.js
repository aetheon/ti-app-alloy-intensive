function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_55";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_55 = Ti.UI.createView({
        id: "widget_55"
    });
    $.__views.widget_55 && $.addTopLevelView($.__views.widget_55);
    $.__views.__alloyId13052 = Ti.UI.createView({
        id: "__alloyId13052"
    });
    $.__views.widget_55.add($.__views.__alloyId13052);
    $.__views.__alloyId13053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13053"
    });
    $.__views.__alloyId13052.add($.__views.__alloyId13053);
    $.__views.__alloyId13054 = Ti.UI.createView({
        id: "__alloyId13054"
    });
    $.__views.__alloyId13054 && $.addTopLevelView($.__views.__alloyId13054);
    $.__views.__alloyId13055 = Ti.UI.createView({
        id: "__alloyId13055"
    });
    $.__views.__alloyId13054.add($.__views.__alloyId13055);
    $.__views.__alloyId13056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13056"
    });
    $.__views.__alloyId13055.add($.__views.__alloyId13056);
    $.__views.__alloyId13057 = Ti.UI.createView({
        id: "__alloyId13057"
    });
    $.__views.__alloyId13057 && $.addTopLevelView($.__views.__alloyId13057);
    $.__views.__alloyId13058 = Ti.UI.createView({
        id: "__alloyId13058"
    });
    $.__views.__alloyId13057.add($.__views.__alloyId13058);
    $.__views.__alloyId13059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13059"
    });
    $.__views.__alloyId13058.add($.__views.__alloyId13059);
    $.__views.__alloyId13060 = Ti.UI.createView({
        id: "__alloyId13060"
    });
    $.__views.__alloyId13060 && $.addTopLevelView($.__views.__alloyId13060);
    $.__views.__alloyId13061 = Ti.UI.createView({
        id: "__alloyId13061"
    });
    $.__views.__alloyId13060.add($.__views.__alloyId13061);
    $.__views.__alloyId13062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13062"
    });
    $.__views.__alloyId13061.add($.__views.__alloyId13062);
    $.__views.__alloyId13063 = Ti.UI.createView({
        id: "__alloyId13063"
    });
    $.__views.__alloyId13063 && $.addTopLevelView($.__views.__alloyId13063);
    $.__views.__alloyId13064 = Ti.UI.createView({
        id: "__alloyId13064"
    });
    $.__views.__alloyId13063.add($.__views.__alloyId13064);
    $.__views.__alloyId13065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13065"
    });
    $.__views.__alloyId13064.add($.__views.__alloyId13065);
    $.__views.__alloyId13066 = Ti.UI.createView({
        id: "__alloyId13066"
    });
    $.__views.__alloyId13066 && $.addTopLevelView($.__views.__alloyId13066);
    $.__views.__alloyId13067 = Ti.UI.createView({
        id: "__alloyId13067"
    });
    $.__views.__alloyId13066.add($.__views.__alloyId13067);
    $.__views.__alloyId13068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13068"
    });
    $.__views.__alloyId13067.add($.__views.__alloyId13068);
    $.__views.__alloyId13069 = Ti.UI.createView({
        id: "__alloyId13069"
    });
    $.__views.__alloyId13069 && $.addTopLevelView($.__views.__alloyId13069);
    $.__views.__alloyId13070 = Ti.UI.createView({
        id: "__alloyId13070"
    });
    $.__views.__alloyId13069.add($.__views.__alloyId13070);
    $.__views.__alloyId13071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13071"
    });
    $.__views.__alloyId13070.add($.__views.__alloyId13071);
    $.__views.__alloyId13072 = Ti.UI.createView({
        id: "__alloyId13072"
    });
    $.__views.__alloyId13072 && $.addTopLevelView($.__views.__alloyId13072);
    $.__views.__alloyId13073 = Ti.UI.createView({
        id: "__alloyId13073"
    });
    $.__views.__alloyId13072.add($.__views.__alloyId13073);
    $.__views.__alloyId13074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13074"
    });
    $.__views.__alloyId13073.add($.__views.__alloyId13074);
    $.__views.__alloyId13075 = Ti.UI.createView({
        id: "__alloyId13075"
    });
    $.__views.__alloyId13075 && $.addTopLevelView($.__views.__alloyId13075);
    $.__views.__alloyId13076 = Ti.UI.createView({
        id: "__alloyId13076"
    });
    $.__views.__alloyId13075.add($.__views.__alloyId13076);
    $.__views.__alloyId13077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13077"
    });
    $.__views.__alloyId13076.add($.__views.__alloyId13077);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;