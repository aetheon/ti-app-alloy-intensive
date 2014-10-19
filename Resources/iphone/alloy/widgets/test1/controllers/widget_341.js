function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_341";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_341 = Ti.UI.createView({
        id: "widget_341"
    });
    $.__views.widget_341 && $.addTopLevelView($.__views.widget_341);
    $.__views.__alloyId7046 = Ti.UI.createView({
        id: "__alloyId7046"
    });
    $.__views.widget_341.add($.__views.__alloyId7046);
    $.__views.__alloyId7047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7047"
    });
    $.__views.__alloyId7046.add($.__views.__alloyId7047);
    $.__views.__alloyId7048 = Ti.UI.createView({
        id: "__alloyId7048"
    });
    $.__views.__alloyId7048 && $.addTopLevelView($.__views.__alloyId7048);
    $.__views.__alloyId7049 = Ti.UI.createView({
        id: "__alloyId7049"
    });
    $.__views.__alloyId7048.add($.__views.__alloyId7049);
    $.__views.__alloyId7050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7050"
    });
    $.__views.__alloyId7049.add($.__views.__alloyId7050);
    $.__views.__alloyId7051 = Ti.UI.createView({
        id: "__alloyId7051"
    });
    $.__views.__alloyId7051 && $.addTopLevelView($.__views.__alloyId7051);
    $.__views.__alloyId7052 = Ti.UI.createView({
        id: "__alloyId7052"
    });
    $.__views.__alloyId7051.add($.__views.__alloyId7052);
    $.__views.__alloyId7053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7053"
    });
    $.__views.__alloyId7052.add($.__views.__alloyId7053);
    $.__views.__alloyId7054 = Ti.UI.createView({
        id: "__alloyId7054"
    });
    $.__views.__alloyId7054 && $.addTopLevelView($.__views.__alloyId7054);
    $.__views.__alloyId7055 = Ti.UI.createView({
        id: "__alloyId7055"
    });
    $.__views.__alloyId7054.add($.__views.__alloyId7055);
    $.__views.__alloyId7056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7056"
    });
    $.__views.__alloyId7055.add($.__views.__alloyId7056);
    $.__views.__alloyId7057 = Ti.UI.createView({
        id: "__alloyId7057"
    });
    $.__views.__alloyId7057 && $.addTopLevelView($.__views.__alloyId7057);
    $.__views.__alloyId7058 = Ti.UI.createView({
        id: "__alloyId7058"
    });
    $.__views.__alloyId7057.add($.__views.__alloyId7058);
    $.__views.__alloyId7059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7059"
    });
    $.__views.__alloyId7058.add($.__views.__alloyId7059);
    $.__views.__alloyId7060 = Ti.UI.createView({
        id: "__alloyId7060"
    });
    $.__views.__alloyId7060 && $.addTopLevelView($.__views.__alloyId7060);
    $.__views.__alloyId7061 = Ti.UI.createView({
        id: "__alloyId7061"
    });
    $.__views.__alloyId7060.add($.__views.__alloyId7061);
    $.__views.__alloyId7062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7062"
    });
    $.__views.__alloyId7061.add($.__views.__alloyId7062);
    $.__views.__alloyId7063 = Ti.UI.createView({
        id: "__alloyId7063"
    });
    $.__views.__alloyId7063 && $.addTopLevelView($.__views.__alloyId7063);
    $.__views.__alloyId7064 = Ti.UI.createView({
        id: "__alloyId7064"
    });
    $.__views.__alloyId7063.add($.__views.__alloyId7064);
    $.__views.__alloyId7065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7065"
    });
    $.__views.__alloyId7064.add($.__views.__alloyId7065);
    $.__views.__alloyId7066 = Ti.UI.createView({
        id: "__alloyId7066"
    });
    $.__views.__alloyId7066 && $.addTopLevelView($.__views.__alloyId7066);
    $.__views.__alloyId7067 = Ti.UI.createView({
        id: "__alloyId7067"
    });
    $.__views.__alloyId7066.add($.__views.__alloyId7067);
    $.__views.__alloyId7068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7068"
    });
    $.__views.__alloyId7067.add($.__views.__alloyId7068);
    $.__views.__alloyId7069 = Ti.UI.createView({
        id: "__alloyId7069"
    });
    $.__views.__alloyId7069 && $.addTopLevelView($.__views.__alloyId7069);
    $.__views.__alloyId7070 = Ti.UI.createView({
        id: "__alloyId7070"
    });
    $.__views.__alloyId7069.add($.__views.__alloyId7070);
    $.__views.__alloyId7071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7071"
    });
    $.__views.__alloyId7070.add($.__views.__alloyId7071);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;