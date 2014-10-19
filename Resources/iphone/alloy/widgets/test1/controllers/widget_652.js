function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_652";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_652 = Ti.UI.createView({
        id: "widget_652"
    });
    $.__views.widget_652 && $.addTopLevelView($.__views.widget_652);
    $.__views.__alloyId16016 = Ti.UI.createView({
        id: "__alloyId16016"
    });
    $.__views.widget_652.add($.__views.__alloyId16016);
    $.__views.__alloyId16017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16017"
    });
    $.__views.__alloyId16016.add($.__views.__alloyId16017);
    $.__views.__alloyId16018 = Ti.UI.createView({
        id: "__alloyId16018"
    });
    $.__views.__alloyId16018 && $.addTopLevelView($.__views.__alloyId16018);
    $.__views.__alloyId16019 = Ti.UI.createView({
        id: "__alloyId16019"
    });
    $.__views.__alloyId16018.add($.__views.__alloyId16019);
    $.__views.__alloyId16020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16020"
    });
    $.__views.__alloyId16019.add($.__views.__alloyId16020);
    $.__views.__alloyId16021 = Ti.UI.createView({
        id: "__alloyId16021"
    });
    $.__views.__alloyId16021 && $.addTopLevelView($.__views.__alloyId16021);
    $.__views.__alloyId16022 = Ti.UI.createView({
        id: "__alloyId16022"
    });
    $.__views.__alloyId16021.add($.__views.__alloyId16022);
    $.__views.__alloyId16023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16023"
    });
    $.__views.__alloyId16022.add($.__views.__alloyId16023);
    $.__views.__alloyId16024 = Ti.UI.createView({
        id: "__alloyId16024"
    });
    $.__views.__alloyId16024 && $.addTopLevelView($.__views.__alloyId16024);
    $.__views.__alloyId16025 = Ti.UI.createView({
        id: "__alloyId16025"
    });
    $.__views.__alloyId16024.add($.__views.__alloyId16025);
    $.__views.__alloyId16026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16026"
    });
    $.__views.__alloyId16025.add($.__views.__alloyId16026);
    $.__views.__alloyId16027 = Ti.UI.createView({
        id: "__alloyId16027"
    });
    $.__views.__alloyId16027 && $.addTopLevelView($.__views.__alloyId16027);
    $.__views.__alloyId16028 = Ti.UI.createView({
        id: "__alloyId16028"
    });
    $.__views.__alloyId16027.add($.__views.__alloyId16028);
    $.__views.__alloyId16029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16029"
    });
    $.__views.__alloyId16028.add($.__views.__alloyId16029);
    $.__views.__alloyId16030 = Ti.UI.createView({
        id: "__alloyId16030"
    });
    $.__views.__alloyId16030 && $.addTopLevelView($.__views.__alloyId16030);
    $.__views.__alloyId16031 = Ti.UI.createView({
        id: "__alloyId16031"
    });
    $.__views.__alloyId16030.add($.__views.__alloyId16031);
    $.__views.__alloyId16032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16032"
    });
    $.__views.__alloyId16031.add($.__views.__alloyId16032);
    $.__views.__alloyId16033 = Ti.UI.createView({
        id: "__alloyId16033"
    });
    $.__views.__alloyId16033 && $.addTopLevelView($.__views.__alloyId16033);
    $.__views.__alloyId16034 = Ti.UI.createView({
        id: "__alloyId16034"
    });
    $.__views.__alloyId16033.add($.__views.__alloyId16034);
    $.__views.__alloyId16035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16035"
    });
    $.__views.__alloyId16034.add($.__views.__alloyId16035);
    $.__views.__alloyId16036 = Ti.UI.createView({
        id: "__alloyId16036"
    });
    $.__views.__alloyId16036 && $.addTopLevelView($.__views.__alloyId16036);
    $.__views.__alloyId16037 = Ti.UI.createView({
        id: "__alloyId16037"
    });
    $.__views.__alloyId16036.add($.__views.__alloyId16037);
    $.__views.__alloyId16038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16038"
    });
    $.__views.__alloyId16037.add($.__views.__alloyId16038);
    $.__views.__alloyId16039 = Ti.UI.createView({
        id: "__alloyId16039"
    });
    $.__views.__alloyId16039 && $.addTopLevelView($.__views.__alloyId16039);
    $.__views.__alloyId16040 = Ti.UI.createView({
        id: "__alloyId16040"
    });
    $.__views.__alloyId16039.add($.__views.__alloyId16040);
    $.__views.__alloyId16041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16041"
    });
    $.__views.__alloyId16040.add($.__views.__alloyId16041);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;