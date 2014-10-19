function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_722";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_722 = Ti.UI.createView({
        id: "widget_722"
    });
    $.__views.widget_722 && $.addTopLevelView($.__views.widget_722);
    $.__views.__alloyId18044 = Ti.UI.createView({
        id: "__alloyId18044"
    });
    $.__views.widget_722.add($.__views.__alloyId18044);
    $.__views.__alloyId18045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18045"
    });
    $.__views.__alloyId18044.add($.__views.__alloyId18045);
    $.__views.__alloyId18046 = Ti.UI.createView({
        id: "__alloyId18046"
    });
    $.__views.__alloyId18046 && $.addTopLevelView($.__views.__alloyId18046);
    $.__views.__alloyId18047 = Ti.UI.createView({
        id: "__alloyId18047"
    });
    $.__views.__alloyId18046.add($.__views.__alloyId18047);
    $.__views.__alloyId18048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18048"
    });
    $.__views.__alloyId18047.add($.__views.__alloyId18048);
    $.__views.__alloyId18049 = Ti.UI.createView({
        id: "__alloyId18049"
    });
    $.__views.__alloyId18049 && $.addTopLevelView($.__views.__alloyId18049);
    $.__views.__alloyId18050 = Ti.UI.createView({
        id: "__alloyId18050"
    });
    $.__views.__alloyId18049.add($.__views.__alloyId18050);
    $.__views.__alloyId18051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18051"
    });
    $.__views.__alloyId18050.add($.__views.__alloyId18051);
    $.__views.__alloyId18052 = Ti.UI.createView({
        id: "__alloyId18052"
    });
    $.__views.__alloyId18052 && $.addTopLevelView($.__views.__alloyId18052);
    $.__views.__alloyId18053 = Ti.UI.createView({
        id: "__alloyId18053"
    });
    $.__views.__alloyId18052.add($.__views.__alloyId18053);
    $.__views.__alloyId18054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18054"
    });
    $.__views.__alloyId18053.add($.__views.__alloyId18054);
    $.__views.__alloyId18055 = Ti.UI.createView({
        id: "__alloyId18055"
    });
    $.__views.__alloyId18055 && $.addTopLevelView($.__views.__alloyId18055);
    $.__views.__alloyId18056 = Ti.UI.createView({
        id: "__alloyId18056"
    });
    $.__views.__alloyId18055.add($.__views.__alloyId18056);
    $.__views.__alloyId18057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18057"
    });
    $.__views.__alloyId18056.add($.__views.__alloyId18057);
    $.__views.__alloyId18058 = Ti.UI.createView({
        id: "__alloyId18058"
    });
    $.__views.__alloyId18058 && $.addTopLevelView($.__views.__alloyId18058);
    $.__views.__alloyId18059 = Ti.UI.createView({
        id: "__alloyId18059"
    });
    $.__views.__alloyId18058.add($.__views.__alloyId18059);
    $.__views.__alloyId18060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18060"
    });
    $.__views.__alloyId18059.add($.__views.__alloyId18060);
    $.__views.__alloyId18061 = Ti.UI.createView({
        id: "__alloyId18061"
    });
    $.__views.__alloyId18061 && $.addTopLevelView($.__views.__alloyId18061);
    $.__views.__alloyId18062 = Ti.UI.createView({
        id: "__alloyId18062"
    });
    $.__views.__alloyId18061.add($.__views.__alloyId18062);
    $.__views.__alloyId18063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18063"
    });
    $.__views.__alloyId18062.add($.__views.__alloyId18063);
    $.__views.__alloyId18064 = Ti.UI.createView({
        id: "__alloyId18064"
    });
    $.__views.__alloyId18064 && $.addTopLevelView($.__views.__alloyId18064);
    $.__views.__alloyId18065 = Ti.UI.createView({
        id: "__alloyId18065"
    });
    $.__views.__alloyId18064.add($.__views.__alloyId18065);
    $.__views.__alloyId18066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18066"
    });
    $.__views.__alloyId18065.add($.__views.__alloyId18066);
    $.__views.__alloyId18067 = Ti.UI.createView({
        id: "__alloyId18067"
    });
    $.__views.__alloyId18067 && $.addTopLevelView($.__views.__alloyId18067);
    $.__views.__alloyId18068 = Ti.UI.createView({
        id: "__alloyId18068"
    });
    $.__views.__alloyId18067.add($.__views.__alloyId18068);
    $.__views.__alloyId18069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18069"
    });
    $.__views.__alloyId18068.add($.__views.__alloyId18069);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;