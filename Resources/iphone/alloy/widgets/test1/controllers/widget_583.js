function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_583";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_583 = Ti.UI.createView({
        id: "widget_583"
    });
    $.__views.widget_583 && $.addTopLevelView($.__views.widget_583);
    $.__views.__alloyId14014 = Ti.UI.createView({
        id: "__alloyId14014"
    });
    $.__views.widget_583.add($.__views.__alloyId14014);
    $.__views.__alloyId14015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14015"
    });
    $.__views.__alloyId14014.add($.__views.__alloyId14015);
    $.__views.__alloyId14016 = Ti.UI.createView({
        id: "__alloyId14016"
    });
    $.__views.__alloyId14016 && $.addTopLevelView($.__views.__alloyId14016);
    $.__views.__alloyId14017 = Ti.UI.createView({
        id: "__alloyId14017"
    });
    $.__views.__alloyId14016.add($.__views.__alloyId14017);
    $.__views.__alloyId14018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14018"
    });
    $.__views.__alloyId14017.add($.__views.__alloyId14018);
    $.__views.__alloyId14019 = Ti.UI.createView({
        id: "__alloyId14019"
    });
    $.__views.__alloyId14019 && $.addTopLevelView($.__views.__alloyId14019);
    $.__views.__alloyId14020 = Ti.UI.createView({
        id: "__alloyId14020"
    });
    $.__views.__alloyId14019.add($.__views.__alloyId14020);
    $.__views.__alloyId14021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14021"
    });
    $.__views.__alloyId14020.add($.__views.__alloyId14021);
    $.__views.__alloyId14022 = Ti.UI.createView({
        id: "__alloyId14022"
    });
    $.__views.__alloyId14022 && $.addTopLevelView($.__views.__alloyId14022);
    $.__views.__alloyId14023 = Ti.UI.createView({
        id: "__alloyId14023"
    });
    $.__views.__alloyId14022.add($.__views.__alloyId14023);
    $.__views.__alloyId14024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14024"
    });
    $.__views.__alloyId14023.add($.__views.__alloyId14024);
    $.__views.__alloyId14025 = Ti.UI.createView({
        id: "__alloyId14025"
    });
    $.__views.__alloyId14025 && $.addTopLevelView($.__views.__alloyId14025);
    $.__views.__alloyId14026 = Ti.UI.createView({
        id: "__alloyId14026"
    });
    $.__views.__alloyId14025.add($.__views.__alloyId14026);
    $.__views.__alloyId14027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14027"
    });
    $.__views.__alloyId14026.add($.__views.__alloyId14027);
    $.__views.__alloyId14028 = Ti.UI.createView({
        id: "__alloyId14028"
    });
    $.__views.__alloyId14028 && $.addTopLevelView($.__views.__alloyId14028);
    $.__views.__alloyId14029 = Ti.UI.createView({
        id: "__alloyId14029"
    });
    $.__views.__alloyId14028.add($.__views.__alloyId14029);
    $.__views.__alloyId14030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14030"
    });
    $.__views.__alloyId14029.add($.__views.__alloyId14030);
    $.__views.__alloyId14031 = Ti.UI.createView({
        id: "__alloyId14031"
    });
    $.__views.__alloyId14031 && $.addTopLevelView($.__views.__alloyId14031);
    $.__views.__alloyId14032 = Ti.UI.createView({
        id: "__alloyId14032"
    });
    $.__views.__alloyId14031.add($.__views.__alloyId14032);
    $.__views.__alloyId14033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14033"
    });
    $.__views.__alloyId14032.add($.__views.__alloyId14033);
    $.__views.__alloyId14034 = Ti.UI.createView({
        id: "__alloyId14034"
    });
    $.__views.__alloyId14034 && $.addTopLevelView($.__views.__alloyId14034);
    $.__views.__alloyId14035 = Ti.UI.createView({
        id: "__alloyId14035"
    });
    $.__views.__alloyId14034.add($.__views.__alloyId14035);
    $.__views.__alloyId14036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14036"
    });
    $.__views.__alloyId14035.add($.__views.__alloyId14036);
    $.__views.__alloyId14037 = Ti.UI.createView({
        id: "__alloyId14037"
    });
    $.__views.__alloyId14037 && $.addTopLevelView($.__views.__alloyId14037);
    $.__views.__alloyId14038 = Ti.UI.createView({
        id: "__alloyId14038"
    });
    $.__views.__alloyId14037.add($.__views.__alloyId14038);
    $.__views.__alloyId14039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14039"
    });
    $.__views.__alloyId14038.add($.__views.__alloyId14039);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;