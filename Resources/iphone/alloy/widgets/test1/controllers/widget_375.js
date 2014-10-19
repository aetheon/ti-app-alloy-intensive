function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_375";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_375 = Ti.UI.createView({
        id: "widget_375"
    });
    $.__views.widget_375 && $.addTopLevelView($.__views.widget_375);
    $.__views.__alloyId8008 = Ti.UI.createView({
        id: "__alloyId8008"
    });
    $.__views.widget_375.add($.__views.__alloyId8008);
    $.__views.__alloyId8009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8009"
    });
    $.__views.__alloyId8008.add($.__views.__alloyId8009);
    $.__views.__alloyId8010 = Ti.UI.createView({
        id: "__alloyId8010"
    });
    $.__views.__alloyId8010 && $.addTopLevelView($.__views.__alloyId8010);
    $.__views.__alloyId8011 = Ti.UI.createView({
        id: "__alloyId8011"
    });
    $.__views.__alloyId8010.add($.__views.__alloyId8011);
    $.__views.__alloyId8012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8012"
    });
    $.__views.__alloyId8011.add($.__views.__alloyId8012);
    $.__views.__alloyId8013 = Ti.UI.createView({
        id: "__alloyId8013"
    });
    $.__views.__alloyId8013 && $.addTopLevelView($.__views.__alloyId8013);
    $.__views.__alloyId8014 = Ti.UI.createView({
        id: "__alloyId8014"
    });
    $.__views.__alloyId8013.add($.__views.__alloyId8014);
    $.__views.__alloyId8015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8015"
    });
    $.__views.__alloyId8014.add($.__views.__alloyId8015);
    $.__views.__alloyId8016 = Ti.UI.createView({
        id: "__alloyId8016"
    });
    $.__views.__alloyId8016 && $.addTopLevelView($.__views.__alloyId8016);
    $.__views.__alloyId8017 = Ti.UI.createView({
        id: "__alloyId8017"
    });
    $.__views.__alloyId8016.add($.__views.__alloyId8017);
    $.__views.__alloyId8018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8018"
    });
    $.__views.__alloyId8017.add($.__views.__alloyId8018);
    $.__views.__alloyId8019 = Ti.UI.createView({
        id: "__alloyId8019"
    });
    $.__views.__alloyId8019 && $.addTopLevelView($.__views.__alloyId8019);
    $.__views.__alloyId8020 = Ti.UI.createView({
        id: "__alloyId8020"
    });
    $.__views.__alloyId8019.add($.__views.__alloyId8020);
    $.__views.__alloyId8021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8021"
    });
    $.__views.__alloyId8020.add($.__views.__alloyId8021);
    $.__views.__alloyId8022 = Ti.UI.createView({
        id: "__alloyId8022"
    });
    $.__views.__alloyId8022 && $.addTopLevelView($.__views.__alloyId8022);
    $.__views.__alloyId8023 = Ti.UI.createView({
        id: "__alloyId8023"
    });
    $.__views.__alloyId8022.add($.__views.__alloyId8023);
    $.__views.__alloyId8024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8024"
    });
    $.__views.__alloyId8023.add($.__views.__alloyId8024);
    $.__views.__alloyId8025 = Ti.UI.createView({
        id: "__alloyId8025"
    });
    $.__views.__alloyId8025 && $.addTopLevelView($.__views.__alloyId8025);
    $.__views.__alloyId8026 = Ti.UI.createView({
        id: "__alloyId8026"
    });
    $.__views.__alloyId8025.add($.__views.__alloyId8026);
    $.__views.__alloyId8027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8027"
    });
    $.__views.__alloyId8026.add($.__views.__alloyId8027);
    $.__views.__alloyId8028 = Ti.UI.createView({
        id: "__alloyId8028"
    });
    $.__views.__alloyId8028 && $.addTopLevelView($.__views.__alloyId8028);
    $.__views.__alloyId8029 = Ti.UI.createView({
        id: "__alloyId8029"
    });
    $.__views.__alloyId8028.add($.__views.__alloyId8029);
    $.__views.__alloyId8030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8030"
    });
    $.__views.__alloyId8029.add($.__views.__alloyId8030);
    $.__views.__alloyId8031 = Ti.UI.createView({
        id: "__alloyId8031"
    });
    $.__views.__alloyId8031 && $.addTopLevelView($.__views.__alloyId8031);
    $.__views.__alloyId8032 = Ti.UI.createView({
        id: "__alloyId8032"
    });
    $.__views.__alloyId8031.add($.__views.__alloyId8032);
    $.__views.__alloyId8033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8033"
    });
    $.__views.__alloyId8032.add($.__views.__alloyId8033);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;