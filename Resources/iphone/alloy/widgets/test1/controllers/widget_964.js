function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_964";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_964 = Ti.UI.createView({
        id: "widget_964"
    });
    $.__views.widget_964 && $.addTopLevelView($.__views.widget_964);
    $.__views.__alloyId25012 = Ti.UI.createView({
        id: "__alloyId25012"
    });
    $.__views.widget_964.add($.__views.__alloyId25012);
    $.__views.__alloyId25013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25013"
    });
    $.__views.__alloyId25012.add($.__views.__alloyId25013);
    $.__views.__alloyId25014 = Ti.UI.createView({
        id: "__alloyId25014"
    });
    $.__views.__alloyId25014 && $.addTopLevelView($.__views.__alloyId25014);
    $.__views.__alloyId25015 = Ti.UI.createView({
        id: "__alloyId25015"
    });
    $.__views.__alloyId25014.add($.__views.__alloyId25015);
    $.__views.__alloyId25016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25016"
    });
    $.__views.__alloyId25015.add($.__views.__alloyId25016);
    $.__views.__alloyId25017 = Ti.UI.createView({
        id: "__alloyId25017"
    });
    $.__views.__alloyId25017 && $.addTopLevelView($.__views.__alloyId25017);
    $.__views.__alloyId25018 = Ti.UI.createView({
        id: "__alloyId25018"
    });
    $.__views.__alloyId25017.add($.__views.__alloyId25018);
    $.__views.__alloyId25019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25019"
    });
    $.__views.__alloyId25018.add($.__views.__alloyId25019);
    $.__views.__alloyId25020 = Ti.UI.createView({
        id: "__alloyId25020"
    });
    $.__views.__alloyId25020 && $.addTopLevelView($.__views.__alloyId25020);
    $.__views.__alloyId25021 = Ti.UI.createView({
        id: "__alloyId25021"
    });
    $.__views.__alloyId25020.add($.__views.__alloyId25021);
    $.__views.__alloyId25022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25022"
    });
    $.__views.__alloyId25021.add($.__views.__alloyId25022);
    $.__views.__alloyId25023 = Ti.UI.createView({
        id: "__alloyId25023"
    });
    $.__views.__alloyId25023 && $.addTopLevelView($.__views.__alloyId25023);
    $.__views.__alloyId25024 = Ti.UI.createView({
        id: "__alloyId25024"
    });
    $.__views.__alloyId25023.add($.__views.__alloyId25024);
    $.__views.__alloyId25025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25025"
    });
    $.__views.__alloyId25024.add($.__views.__alloyId25025);
    $.__views.__alloyId25026 = Ti.UI.createView({
        id: "__alloyId25026"
    });
    $.__views.__alloyId25026 && $.addTopLevelView($.__views.__alloyId25026);
    $.__views.__alloyId25027 = Ti.UI.createView({
        id: "__alloyId25027"
    });
    $.__views.__alloyId25026.add($.__views.__alloyId25027);
    $.__views.__alloyId25028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25028"
    });
    $.__views.__alloyId25027.add($.__views.__alloyId25028);
    $.__views.__alloyId25029 = Ti.UI.createView({
        id: "__alloyId25029"
    });
    $.__views.__alloyId25029 && $.addTopLevelView($.__views.__alloyId25029);
    $.__views.__alloyId25030 = Ti.UI.createView({
        id: "__alloyId25030"
    });
    $.__views.__alloyId25029.add($.__views.__alloyId25030);
    $.__views.__alloyId25031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25031"
    });
    $.__views.__alloyId25030.add($.__views.__alloyId25031);
    $.__views.__alloyId25032 = Ti.UI.createView({
        id: "__alloyId25032"
    });
    $.__views.__alloyId25032 && $.addTopLevelView($.__views.__alloyId25032);
    $.__views.__alloyId25033 = Ti.UI.createView({
        id: "__alloyId25033"
    });
    $.__views.__alloyId25032.add($.__views.__alloyId25033);
    $.__views.__alloyId25034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25034"
    });
    $.__views.__alloyId25033.add($.__views.__alloyId25034);
    $.__views.__alloyId25035 = Ti.UI.createView({
        id: "__alloyId25035"
    });
    $.__views.__alloyId25035 && $.addTopLevelView($.__views.__alloyId25035);
    $.__views.__alloyId25036 = Ti.UI.createView({
        id: "__alloyId25036"
    });
    $.__views.__alloyId25035.add($.__views.__alloyId25036);
    $.__views.__alloyId25037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25037"
    });
    $.__views.__alloyId25036.add($.__views.__alloyId25037);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;