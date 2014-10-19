function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_513";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_513 = Ti.UI.createView({
        id: "widget_513"
    });
    $.__views.widget_513 && $.addTopLevelView($.__views.widget_513);
    $.__views.__alloyId12012 = Ti.UI.createView({
        id: "__alloyId12012"
    });
    $.__views.widget_513.add($.__views.__alloyId12012);
    $.__views.__alloyId12013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12013"
    });
    $.__views.__alloyId12012.add($.__views.__alloyId12013);
    $.__views.__alloyId12014 = Ti.UI.createView({
        id: "__alloyId12014"
    });
    $.__views.__alloyId12014 && $.addTopLevelView($.__views.__alloyId12014);
    $.__views.__alloyId12015 = Ti.UI.createView({
        id: "__alloyId12015"
    });
    $.__views.__alloyId12014.add($.__views.__alloyId12015);
    $.__views.__alloyId12016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12016"
    });
    $.__views.__alloyId12015.add($.__views.__alloyId12016);
    $.__views.__alloyId12017 = Ti.UI.createView({
        id: "__alloyId12017"
    });
    $.__views.__alloyId12017 && $.addTopLevelView($.__views.__alloyId12017);
    $.__views.__alloyId12018 = Ti.UI.createView({
        id: "__alloyId12018"
    });
    $.__views.__alloyId12017.add($.__views.__alloyId12018);
    $.__views.__alloyId12019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12019"
    });
    $.__views.__alloyId12018.add($.__views.__alloyId12019);
    $.__views.__alloyId12020 = Ti.UI.createView({
        id: "__alloyId12020"
    });
    $.__views.__alloyId12020 && $.addTopLevelView($.__views.__alloyId12020);
    $.__views.__alloyId12021 = Ti.UI.createView({
        id: "__alloyId12021"
    });
    $.__views.__alloyId12020.add($.__views.__alloyId12021);
    $.__views.__alloyId12022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12022"
    });
    $.__views.__alloyId12021.add($.__views.__alloyId12022);
    $.__views.__alloyId12023 = Ti.UI.createView({
        id: "__alloyId12023"
    });
    $.__views.__alloyId12023 && $.addTopLevelView($.__views.__alloyId12023);
    $.__views.__alloyId12024 = Ti.UI.createView({
        id: "__alloyId12024"
    });
    $.__views.__alloyId12023.add($.__views.__alloyId12024);
    $.__views.__alloyId12025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12025"
    });
    $.__views.__alloyId12024.add($.__views.__alloyId12025);
    $.__views.__alloyId12026 = Ti.UI.createView({
        id: "__alloyId12026"
    });
    $.__views.__alloyId12026 && $.addTopLevelView($.__views.__alloyId12026);
    $.__views.__alloyId12027 = Ti.UI.createView({
        id: "__alloyId12027"
    });
    $.__views.__alloyId12026.add($.__views.__alloyId12027);
    $.__views.__alloyId12028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12028"
    });
    $.__views.__alloyId12027.add($.__views.__alloyId12028);
    $.__views.__alloyId12029 = Ti.UI.createView({
        id: "__alloyId12029"
    });
    $.__views.__alloyId12029 && $.addTopLevelView($.__views.__alloyId12029);
    $.__views.__alloyId12030 = Ti.UI.createView({
        id: "__alloyId12030"
    });
    $.__views.__alloyId12029.add($.__views.__alloyId12030);
    $.__views.__alloyId12031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12031"
    });
    $.__views.__alloyId12030.add($.__views.__alloyId12031);
    $.__views.__alloyId12032 = Ti.UI.createView({
        id: "__alloyId12032"
    });
    $.__views.__alloyId12032 && $.addTopLevelView($.__views.__alloyId12032);
    $.__views.__alloyId12033 = Ti.UI.createView({
        id: "__alloyId12033"
    });
    $.__views.__alloyId12032.add($.__views.__alloyId12033);
    $.__views.__alloyId12034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12034"
    });
    $.__views.__alloyId12033.add($.__views.__alloyId12034);
    $.__views.__alloyId12035 = Ti.UI.createView({
        id: "__alloyId12035"
    });
    $.__views.__alloyId12035 && $.addTopLevelView($.__views.__alloyId12035);
    $.__views.__alloyId12036 = Ti.UI.createView({
        id: "__alloyId12036"
    });
    $.__views.__alloyId12035.add($.__views.__alloyId12036);
    $.__views.__alloyId12037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12037"
    });
    $.__views.__alloyId12036.add($.__views.__alloyId12037);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;