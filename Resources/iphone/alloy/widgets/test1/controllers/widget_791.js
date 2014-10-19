function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_791";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_791 = Ti.UI.createView({
        id: "widget_791"
    });
    $.__views.widget_791 && $.addTopLevelView($.__views.widget_791);
    $.__views.__alloyId20020 = Ti.UI.createView({
        id: "__alloyId20020"
    });
    $.__views.widget_791.add($.__views.__alloyId20020);
    $.__views.__alloyId20021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20021"
    });
    $.__views.__alloyId20020.add($.__views.__alloyId20021);
    $.__views.__alloyId20022 = Ti.UI.createView({
        id: "__alloyId20022"
    });
    $.__views.__alloyId20022 && $.addTopLevelView($.__views.__alloyId20022);
    $.__views.__alloyId20023 = Ti.UI.createView({
        id: "__alloyId20023"
    });
    $.__views.__alloyId20022.add($.__views.__alloyId20023);
    $.__views.__alloyId20024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20024"
    });
    $.__views.__alloyId20023.add($.__views.__alloyId20024);
    $.__views.__alloyId20025 = Ti.UI.createView({
        id: "__alloyId20025"
    });
    $.__views.__alloyId20025 && $.addTopLevelView($.__views.__alloyId20025);
    $.__views.__alloyId20026 = Ti.UI.createView({
        id: "__alloyId20026"
    });
    $.__views.__alloyId20025.add($.__views.__alloyId20026);
    $.__views.__alloyId20027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20027"
    });
    $.__views.__alloyId20026.add($.__views.__alloyId20027);
    $.__views.__alloyId20028 = Ti.UI.createView({
        id: "__alloyId20028"
    });
    $.__views.__alloyId20028 && $.addTopLevelView($.__views.__alloyId20028);
    $.__views.__alloyId20029 = Ti.UI.createView({
        id: "__alloyId20029"
    });
    $.__views.__alloyId20028.add($.__views.__alloyId20029);
    $.__views.__alloyId20030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20030"
    });
    $.__views.__alloyId20029.add($.__views.__alloyId20030);
    $.__views.__alloyId20031 = Ti.UI.createView({
        id: "__alloyId20031"
    });
    $.__views.__alloyId20031 && $.addTopLevelView($.__views.__alloyId20031);
    $.__views.__alloyId20032 = Ti.UI.createView({
        id: "__alloyId20032"
    });
    $.__views.__alloyId20031.add($.__views.__alloyId20032);
    $.__views.__alloyId20033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20033"
    });
    $.__views.__alloyId20032.add($.__views.__alloyId20033);
    $.__views.__alloyId20034 = Ti.UI.createView({
        id: "__alloyId20034"
    });
    $.__views.__alloyId20034 && $.addTopLevelView($.__views.__alloyId20034);
    $.__views.__alloyId20035 = Ti.UI.createView({
        id: "__alloyId20035"
    });
    $.__views.__alloyId20034.add($.__views.__alloyId20035);
    $.__views.__alloyId20036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20036"
    });
    $.__views.__alloyId20035.add($.__views.__alloyId20036);
    $.__views.__alloyId20037 = Ti.UI.createView({
        id: "__alloyId20037"
    });
    $.__views.__alloyId20037 && $.addTopLevelView($.__views.__alloyId20037);
    $.__views.__alloyId20038 = Ti.UI.createView({
        id: "__alloyId20038"
    });
    $.__views.__alloyId20037.add($.__views.__alloyId20038);
    $.__views.__alloyId20039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20039"
    });
    $.__views.__alloyId20038.add($.__views.__alloyId20039);
    $.__views.__alloyId20040 = Ti.UI.createView({
        id: "__alloyId20040"
    });
    $.__views.__alloyId20040 && $.addTopLevelView($.__views.__alloyId20040);
    $.__views.__alloyId20041 = Ti.UI.createView({
        id: "__alloyId20041"
    });
    $.__views.__alloyId20040.add($.__views.__alloyId20041);
    $.__views.__alloyId20042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20042"
    });
    $.__views.__alloyId20041.add($.__views.__alloyId20042);
    $.__views.__alloyId20043 = Ti.UI.createView({
        id: "__alloyId20043"
    });
    $.__views.__alloyId20043 && $.addTopLevelView($.__views.__alloyId20043);
    $.__views.__alloyId20044 = Ti.UI.createView({
        id: "__alloyId20044"
    });
    $.__views.__alloyId20043.add($.__views.__alloyId20044);
    $.__views.__alloyId20045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20045"
    });
    $.__views.__alloyId20044.add($.__views.__alloyId20045);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;