function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_41";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_41 = Ti.UI.createView({
        id: "widget_41"
    });
    $.__views.widget_41 && $.addTopLevelView($.__views.widget_41);
    $.__views.__alloyId9022 = Ti.UI.createView({
        id: "__alloyId9022"
    });
    $.__views.widget_41.add($.__views.__alloyId9022);
    $.__views.__alloyId9023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9023"
    });
    $.__views.__alloyId9022.add($.__views.__alloyId9023);
    $.__views.__alloyId9024 = Ti.UI.createView({
        id: "__alloyId9024"
    });
    $.__views.__alloyId9024 && $.addTopLevelView($.__views.__alloyId9024);
    $.__views.__alloyId9025 = Ti.UI.createView({
        id: "__alloyId9025"
    });
    $.__views.__alloyId9024.add($.__views.__alloyId9025);
    $.__views.__alloyId9026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9026"
    });
    $.__views.__alloyId9025.add($.__views.__alloyId9026);
    $.__views.__alloyId9027 = Ti.UI.createView({
        id: "__alloyId9027"
    });
    $.__views.__alloyId9027 && $.addTopLevelView($.__views.__alloyId9027);
    $.__views.__alloyId9028 = Ti.UI.createView({
        id: "__alloyId9028"
    });
    $.__views.__alloyId9027.add($.__views.__alloyId9028);
    $.__views.__alloyId9029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9029"
    });
    $.__views.__alloyId9028.add($.__views.__alloyId9029);
    $.__views.__alloyId9030 = Ti.UI.createView({
        id: "__alloyId9030"
    });
    $.__views.__alloyId9030 && $.addTopLevelView($.__views.__alloyId9030);
    $.__views.__alloyId9031 = Ti.UI.createView({
        id: "__alloyId9031"
    });
    $.__views.__alloyId9030.add($.__views.__alloyId9031);
    $.__views.__alloyId9032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9032"
    });
    $.__views.__alloyId9031.add($.__views.__alloyId9032);
    $.__views.__alloyId9033 = Ti.UI.createView({
        id: "__alloyId9033"
    });
    $.__views.__alloyId9033 && $.addTopLevelView($.__views.__alloyId9033);
    $.__views.__alloyId9034 = Ti.UI.createView({
        id: "__alloyId9034"
    });
    $.__views.__alloyId9033.add($.__views.__alloyId9034);
    $.__views.__alloyId9035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9035"
    });
    $.__views.__alloyId9034.add($.__views.__alloyId9035);
    $.__views.__alloyId9036 = Ti.UI.createView({
        id: "__alloyId9036"
    });
    $.__views.__alloyId9036 && $.addTopLevelView($.__views.__alloyId9036);
    $.__views.__alloyId9037 = Ti.UI.createView({
        id: "__alloyId9037"
    });
    $.__views.__alloyId9036.add($.__views.__alloyId9037);
    $.__views.__alloyId9038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9038"
    });
    $.__views.__alloyId9037.add($.__views.__alloyId9038);
    $.__views.__alloyId9039 = Ti.UI.createView({
        id: "__alloyId9039"
    });
    $.__views.__alloyId9039 && $.addTopLevelView($.__views.__alloyId9039);
    $.__views.__alloyId9040 = Ti.UI.createView({
        id: "__alloyId9040"
    });
    $.__views.__alloyId9039.add($.__views.__alloyId9040);
    $.__views.__alloyId9041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9041"
    });
    $.__views.__alloyId9040.add($.__views.__alloyId9041);
    $.__views.__alloyId9042 = Ti.UI.createView({
        id: "__alloyId9042"
    });
    $.__views.__alloyId9042 && $.addTopLevelView($.__views.__alloyId9042);
    $.__views.__alloyId9043 = Ti.UI.createView({
        id: "__alloyId9043"
    });
    $.__views.__alloyId9042.add($.__views.__alloyId9043);
    $.__views.__alloyId9044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9044"
    });
    $.__views.__alloyId9043.add($.__views.__alloyId9044);
    $.__views.__alloyId9045 = Ti.UI.createView({
        id: "__alloyId9045"
    });
    $.__views.__alloyId9045 && $.addTopLevelView($.__views.__alloyId9045);
    $.__views.__alloyId9046 = Ti.UI.createView({
        id: "__alloyId9046"
    });
    $.__views.__alloyId9045.add($.__views.__alloyId9046);
    $.__views.__alloyId9047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9047"
    });
    $.__views.__alloyId9046.add($.__views.__alloyId9047);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;