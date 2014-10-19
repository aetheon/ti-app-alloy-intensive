function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_409";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_409 = Ti.UI.createView({
        id: "widget_409"
    });
    $.__views.widget_409 && $.addTopLevelView($.__views.widget_409);
    $.__views.__alloyId8996 = Ti.UI.createView({
        id: "__alloyId8996"
    });
    $.__views.widget_409.add($.__views.__alloyId8996);
    $.__views.__alloyId8997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8997"
    });
    $.__views.__alloyId8996.add($.__views.__alloyId8997);
    $.__views.__alloyId8998 = Ti.UI.createView({
        id: "__alloyId8998"
    });
    $.__views.__alloyId8998 && $.addTopLevelView($.__views.__alloyId8998);
    $.__views.__alloyId8999 = Ti.UI.createView({
        id: "__alloyId8999"
    });
    $.__views.__alloyId8998.add($.__views.__alloyId8999);
    $.__views.__alloyId9000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9000"
    });
    $.__views.__alloyId8999.add($.__views.__alloyId9000);
    $.__views.__alloyId9001 = Ti.UI.createView({
        id: "__alloyId9001"
    });
    $.__views.__alloyId9001 && $.addTopLevelView($.__views.__alloyId9001);
    $.__views.__alloyId9002 = Ti.UI.createView({
        id: "__alloyId9002"
    });
    $.__views.__alloyId9001.add($.__views.__alloyId9002);
    $.__views.__alloyId9003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9003"
    });
    $.__views.__alloyId9002.add($.__views.__alloyId9003);
    $.__views.__alloyId9004 = Ti.UI.createView({
        id: "__alloyId9004"
    });
    $.__views.__alloyId9004 && $.addTopLevelView($.__views.__alloyId9004);
    $.__views.__alloyId9005 = Ti.UI.createView({
        id: "__alloyId9005"
    });
    $.__views.__alloyId9004.add($.__views.__alloyId9005);
    $.__views.__alloyId9006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9006"
    });
    $.__views.__alloyId9005.add($.__views.__alloyId9006);
    $.__views.__alloyId9007 = Ti.UI.createView({
        id: "__alloyId9007"
    });
    $.__views.__alloyId9007 && $.addTopLevelView($.__views.__alloyId9007);
    $.__views.__alloyId9008 = Ti.UI.createView({
        id: "__alloyId9008"
    });
    $.__views.__alloyId9007.add($.__views.__alloyId9008);
    $.__views.__alloyId9009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9009"
    });
    $.__views.__alloyId9008.add($.__views.__alloyId9009);
    $.__views.__alloyId9010 = Ti.UI.createView({
        id: "__alloyId9010"
    });
    $.__views.__alloyId9010 && $.addTopLevelView($.__views.__alloyId9010);
    $.__views.__alloyId9011 = Ti.UI.createView({
        id: "__alloyId9011"
    });
    $.__views.__alloyId9010.add($.__views.__alloyId9011);
    $.__views.__alloyId9012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9012"
    });
    $.__views.__alloyId9011.add($.__views.__alloyId9012);
    $.__views.__alloyId9013 = Ti.UI.createView({
        id: "__alloyId9013"
    });
    $.__views.__alloyId9013 && $.addTopLevelView($.__views.__alloyId9013);
    $.__views.__alloyId9014 = Ti.UI.createView({
        id: "__alloyId9014"
    });
    $.__views.__alloyId9013.add($.__views.__alloyId9014);
    $.__views.__alloyId9015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9015"
    });
    $.__views.__alloyId9014.add($.__views.__alloyId9015);
    $.__views.__alloyId9016 = Ti.UI.createView({
        id: "__alloyId9016"
    });
    $.__views.__alloyId9016 && $.addTopLevelView($.__views.__alloyId9016);
    $.__views.__alloyId9017 = Ti.UI.createView({
        id: "__alloyId9017"
    });
    $.__views.__alloyId9016.add($.__views.__alloyId9017);
    $.__views.__alloyId9018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9018"
    });
    $.__views.__alloyId9017.add($.__views.__alloyId9018);
    $.__views.__alloyId9019 = Ti.UI.createView({
        id: "__alloyId9019"
    });
    $.__views.__alloyId9019 && $.addTopLevelView($.__views.__alloyId9019);
    $.__views.__alloyId9020 = Ti.UI.createView({
        id: "__alloyId9020"
    });
    $.__views.__alloyId9019.add($.__views.__alloyId9020);
    $.__views.__alloyId9021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9021"
    });
    $.__views.__alloyId9020.add($.__views.__alloyId9021);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;