function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_93";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_93 = Ti.UI.createView({
        id: "widget_93"
    });
    $.__views.widget_93 && $.addTopLevelView($.__views.widget_93);
    $.__views.__alloyId24024 = Ti.UI.createView({
        id: "__alloyId24024"
    });
    $.__views.widget_93.add($.__views.__alloyId24024);
    $.__views.__alloyId24025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24025"
    });
    $.__views.__alloyId24024.add($.__views.__alloyId24025);
    $.__views.__alloyId24026 = Ti.UI.createView({
        id: "__alloyId24026"
    });
    $.__views.__alloyId24026 && $.addTopLevelView($.__views.__alloyId24026);
    $.__views.__alloyId24027 = Ti.UI.createView({
        id: "__alloyId24027"
    });
    $.__views.__alloyId24026.add($.__views.__alloyId24027);
    $.__views.__alloyId24028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24028"
    });
    $.__views.__alloyId24027.add($.__views.__alloyId24028);
    $.__views.__alloyId24029 = Ti.UI.createView({
        id: "__alloyId24029"
    });
    $.__views.__alloyId24029 && $.addTopLevelView($.__views.__alloyId24029);
    $.__views.__alloyId24030 = Ti.UI.createView({
        id: "__alloyId24030"
    });
    $.__views.__alloyId24029.add($.__views.__alloyId24030);
    $.__views.__alloyId24031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24031"
    });
    $.__views.__alloyId24030.add($.__views.__alloyId24031);
    $.__views.__alloyId24032 = Ti.UI.createView({
        id: "__alloyId24032"
    });
    $.__views.__alloyId24032 && $.addTopLevelView($.__views.__alloyId24032);
    $.__views.__alloyId24033 = Ti.UI.createView({
        id: "__alloyId24033"
    });
    $.__views.__alloyId24032.add($.__views.__alloyId24033);
    $.__views.__alloyId24034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24034"
    });
    $.__views.__alloyId24033.add($.__views.__alloyId24034);
    $.__views.__alloyId24035 = Ti.UI.createView({
        id: "__alloyId24035"
    });
    $.__views.__alloyId24035 && $.addTopLevelView($.__views.__alloyId24035);
    $.__views.__alloyId24036 = Ti.UI.createView({
        id: "__alloyId24036"
    });
    $.__views.__alloyId24035.add($.__views.__alloyId24036);
    $.__views.__alloyId24037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24037"
    });
    $.__views.__alloyId24036.add($.__views.__alloyId24037);
    $.__views.__alloyId24038 = Ti.UI.createView({
        id: "__alloyId24038"
    });
    $.__views.__alloyId24038 && $.addTopLevelView($.__views.__alloyId24038);
    $.__views.__alloyId24039 = Ti.UI.createView({
        id: "__alloyId24039"
    });
    $.__views.__alloyId24038.add($.__views.__alloyId24039);
    $.__views.__alloyId24040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24040"
    });
    $.__views.__alloyId24039.add($.__views.__alloyId24040);
    $.__views.__alloyId24041 = Ti.UI.createView({
        id: "__alloyId24041"
    });
    $.__views.__alloyId24041 && $.addTopLevelView($.__views.__alloyId24041);
    $.__views.__alloyId24042 = Ti.UI.createView({
        id: "__alloyId24042"
    });
    $.__views.__alloyId24041.add($.__views.__alloyId24042);
    $.__views.__alloyId24043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24043"
    });
    $.__views.__alloyId24042.add($.__views.__alloyId24043);
    $.__views.__alloyId24044 = Ti.UI.createView({
        id: "__alloyId24044"
    });
    $.__views.__alloyId24044 && $.addTopLevelView($.__views.__alloyId24044);
    $.__views.__alloyId24045 = Ti.UI.createView({
        id: "__alloyId24045"
    });
    $.__views.__alloyId24044.add($.__views.__alloyId24045);
    $.__views.__alloyId24046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24046"
    });
    $.__views.__alloyId24045.add($.__views.__alloyId24046);
    $.__views.__alloyId24047 = Ti.UI.createView({
        id: "__alloyId24047"
    });
    $.__views.__alloyId24047 && $.addTopLevelView($.__views.__alloyId24047);
    $.__views.__alloyId24048 = Ti.UI.createView({
        id: "__alloyId24048"
    });
    $.__views.__alloyId24047.add($.__views.__alloyId24048);
    $.__views.__alloyId24049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24049"
    });
    $.__views.__alloyId24048.add($.__views.__alloyId24049);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;