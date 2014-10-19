function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_271";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_271 = Ti.UI.createView({
        id: "widget_271"
    });
    $.__views.widget_271 && $.addTopLevelView($.__views.widget_271);
    $.__views.__alloyId5018 = Ti.UI.createView({
        id: "__alloyId5018"
    });
    $.__views.widget_271.add($.__views.__alloyId5018);
    $.__views.__alloyId5019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5019"
    });
    $.__views.__alloyId5018.add($.__views.__alloyId5019);
    $.__views.__alloyId5020 = Ti.UI.createView({
        id: "__alloyId5020"
    });
    $.__views.__alloyId5020 && $.addTopLevelView($.__views.__alloyId5020);
    $.__views.__alloyId5021 = Ti.UI.createView({
        id: "__alloyId5021"
    });
    $.__views.__alloyId5020.add($.__views.__alloyId5021);
    $.__views.__alloyId5022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5022"
    });
    $.__views.__alloyId5021.add($.__views.__alloyId5022);
    $.__views.__alloyId5023 = Ti.UI.createView({
        id: "__alloyId5023"
    });
    $.__views.__alloyId5023 && $.addTopLevelView($.__views.__alloyId5023);
    $.__views.__alloyId5024 = Ti.UI.createView({
        id: "__alloyId5024"
    });
    $.__views.__alloyId5023.add($.__views.__alloyId5024);
    $.__views.__alloyId5025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5025"
    });
    $.__views.__alloyId5024.add($.__views.__alloyId5025);
    $.__views.__alloyId5026 = Ti.UI.createView({
        id: "__alloyId5026"
    });
    $.__views.__alloyId5026 && $.addTopLevelView($.__views.__alloyId5026);
    $.__views.__alloyId5027 = Ti.UI.createView({
        id: "__alloyId5027"
    });
    $.__views.__alloyId5026.add($.__views.__alloyId5027);
    $.__views.__alloyId5028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5028"
    });
    $.__views.__alloyId5027.add($.__views.__alloyId5028);
    $.__views.__alloyId5029 = Ti.UI.createView({
        id: "__alloyId5029"
    });
    $.__views.__alloyId5029 && $.addTopLevelView($.__views.__alloyId5029);
    $.__views.__alloyId5030 = Ti.UI.createView({
        id: "__alloyId5030"
    });
    $.__views.__alloyId5029.add($.__views.__alloyId5030);
    $.__views.__alloyId5031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5031"
    });
    $.__views.__alloyId5030.add($.__views.__alloyId5031);
    $.__views.__alloyId5032 = Ti.UI.createView({
        id: "__alloyId5032"
    });
    $.__views.__alloyId5032 && $.addTopLevelView($.__views.__alloyId5032);
    $.__views.__alloyId5033 = Ti.UI.createView({
        id: "__alloyId5033"
    });
    $.__views.__alloyId5032.add($.__views.__alloyId5033);
    $.__views.__alloyId5034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5034"
    });
    $.__views.__alloyId5033.add($.__views.__alloyId5034);
    $.__views.__alloyId5035 = Ti.UI.createView({
        id: "__alloyId5035"
    });
    $.__views.__alloyId5035 && $.addTopLevelView($.__views.__alloyId5035);
    $.__views.__alloyId5036 = Ti.UI.createView({
        id: "__alloyId5036"
    });
    $.__views.__alloyId5035.add($.__views.__alloyId5036);
    $.__views.__alloyId5037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5037"
    });
    $.__views.__alloyId5036.add($.__views.__alloyId5037);
    $.__views.__alloyId5038 = Ti.UI.createView({
        id: "__alloyId5038"
    });
    $.__views.__alloyId5038 && $.addTopLevelView($.__views.__alloyId5038);
    $.__views.__alloyId5039 = Ti.UI.createView({
        id: "__alloyId5039"
    });
    $.__views.__alloyId5038.add($.__views.__alloyId5039);
    $.__views.__alloyId5040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5040"
    });
    $.__views.__alloyId5039.add($.__views.__alloyId5040);
    $.__views.__alloyId5041 = Ti.UI.createView({
        id: "__alloyId5041"
    });
    $.__views.__alloyId5041 && $.addTopLevelView($.__views.__alloyId5041);
    $.__views.__alloyId5042 = Ti.UI.createView({
        id: "__alloyId5042"
    });
    $.__views.__alloyId5041.add($.__views.__alloyId5042);
    $.__views.__alloyId5043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5043"
    });
    $.__views.__alloyId5042.add($.__views.__alloyId5043);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;