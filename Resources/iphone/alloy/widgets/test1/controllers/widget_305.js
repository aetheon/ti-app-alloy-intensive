function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_305";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_305 = Ti.UI.createView({
        id: "widget_305"
    });
    $.__views.widget_305 && $.addTopLevelView($.__views.widget_305);
    $.__views.__alloyId6006 = Ti.UI.createView({
        id: "__alloyId6006"
    });
    $.__views.widget_305.add($.__views.__alloyId6006);
    $.__views.__alloyId6007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6007"
    });
    $.__views.__alloyId6006.add($.__views.__alloyId6007);
    $.__views.__alloyId6008 = Ti.UI.createView({
        id: "__alloyId6008"
    });
    $.__views.__alloyId6008 && $.addTopLevelView($.__views.__alloyId6008);
    $.__views.__alloyId6009 = Ti.UI.createView({
        id: "__alloyId6009"
    });
    $.__views.__alloyId6008.add($.__views.__alloyId6009);
    $.__views.__alloyId6010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6010"
    });
    $.__views.__alloyId6009.add($.__views.__alloyId6010);
    $.__views.__alloyId6011 = Ti.UI.createView({
        id: "__alloyId6011"
    });
    $.__views.__alloyId6011 && $.addTopLevelView($.__views.__alloyId6011);
    $.__views.__alloyId6012 = Ti.UI.createView({
        id: "__alloyId6012"
    });
    $.__views.__alloyId6011.add($.__views.__alloyId6012);
    $.__views.__alloyId6013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6013"
    });
    $.__views.__alloyId6012.add($.__views.__alloyId6013);
    $.__views.__alloyId6014 = Ti.UI.createView({
        id: "__alloyId6014"
    });
    $.__views.__alloyId6014 && $.addTopLevelView($.__views.__alloyId6014);
    $.__views.__alloyId6015 = Ti.UI.createView({
        id: "__alloyId6015"
    });
    $.__views.__alloyId6014.add($.__views.__alloyId6015);
    $.__views.__alloyId6016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6016"
    });
    $.__views.__alloyId6015.add($.__views.__alloyId6016);
    $.__views.__alloyId6017 = Ti.UI.createView({
        id: "__alloyId6017"
    });
    $.__views.__alloyId6017 && $.addTopLevelView($.__views.__alloyId6017);
    $.__views.__alloyId6018 = Ti.UI.createView({
        id: "__alloyId6018"
    });
    $.__views.__alloyId6017.add($.__views.__alloyId6018);
    $.__views.__alloyId6019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6019"
    });
    $.__views.__alloyId6018.add($.__views.__alloyId6019);
    $.__views.__alloyId6020 = Ti.UI.createView({
        id: "__alloyId6020"
    });
    $.__views.__alloyId6020 && $.addTopLevelView($.__views.__alloyId6020);
    $.__views.__alloyId6021 = Ti.UI.createView({
        id: "__alloyId6021"
    });
    $.__views.__alloyId6020.add($.__views.__alloyId6021);
    $.__views.__alloyId6022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6022"
    });
    $.__views.__alloyId6021.add($.__views.__alloyId6022);
    $.__views.__alloyId6023 = Ti.UI.createView({
        id: "__alloyId6023"
    });
    $.__views.__alloyId6023 && $.addTopLevelView($.__views.__alloyId6023);
    $.__views.__alloyId6024 = Ti.UI.createView({
        id: "__alloyId6024"
    });
    $.__views.__alloyId6023.add($.__views.__alloyId6024);
    $.__views.__alloyId6025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6025"
    });
    $.__views.__alloyId6024.add($.__views.__alloyId6025);
    $.__views.__alloyId6026 = Ti.UI.createView({
        id: "__alloyId6026"
    });
    $.__views.__alloyId6026 && $.addTopLevelView($.__views.__alloyId6026);
    $.__views.__alloyId6027 = Ti.UI.createView({
        id: "__alloyId6027"
    });
    $.__views.__alloyId6026.add($.__views.__alloyId6027);
    $.__views.__alloyId6028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6028"
    });
    $.__views.__alloyId6027.add($.__views.__alloyId6028);
    $.__views.__alloyId6029 = Ti.UI.createView({
        id: "__alloyId6029"
    });
    $.__views.__alloyId6029 && $.addTopLevelView($.__views.__alloyId6029);
    $.__views.__alloyId6030 = Ti.UI.createView({
        id: "__alloyId6030"
    });
    $.__views.__alloyId6029.add($.__views.__alloyId6030);
    $.__views.__alloyId6031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6031"
    });
    $.__views.__alloyId6030.add($.__views.__alloyId6031);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;