function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_201";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_201 = Ti.UI.createView({
        id: "widget_201"
    });
    $.__views.widget_201 && $.addTopLevelView($.__views.widget_201);
    $.__views.__alloyId3016 = Ti.UI.createView({
        id: "__alloyId3016"
    });
    $.__views.widget_201.add($.__views.__alloyId3016);
    $.__views.__alloyId3017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3017"
    });
    $.__views.__alloyId3016.add($.__views.__alloyId3017);
    $.__views.__alloyId3018 = Ti.UI.createView({
        id: "__alloyId3018"
    });
    $.__views.__alloyId3018 && $.addTopLevelView($.__views.__alloyId3018);
    $.__views.__alloyId3019 = Ti.UI.createView({
        id: "__alloyId3019"
    });
    $.__views.__alloyId3018.add($.__views.__alloyId3019);
    $.__views.__alloyId3020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3020"
    });
    $.__views.__alloyId3019.add($.__views.__alloyId3020);
    $.__views.__alloyId3021 = Ti.UI.createView({
        id: "__alloyId3021"
    });
    $.__views.__alloyId3021 && $.addTopLevelView($.__views.__alloyId3021);
    $.__views.__alloyId3022 = Ti.UI.createView({
        id: "__alloyId3022"
    });
    $.__views.__alloyId3021.add($.__views.__alloyId3022);
    $.__views.__alloyId3023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3023"
    });
    $.__views.__alloyId3022.add($.__views.__alloyId3023);
    $.__views.__alloyId3024 = Ti.UI.createView({
        id: "__alloyId3024"
    });
    $.__views.__alloyId3024 && $.addTopLevelView($.__views.__alloyId3024);
    $.__views.__alloyId3025 = Ti.UI.createView({
        id: "__alloyId3025"
    });
    $.__views.__alloyId3024.add($.__views.__alloyId3025);
    $.__views.__alloyId3026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3026"
    });
    $.__views.__alloyId3025.add($.__views.__alloyId3026);
    $.__views.__alloyId3027 = Ti.UI.createView({
        id: "__alloyId3027"
    });
    $.__views.__alloyId3027 && $.addTopLevelView($.__views.__alloyId3027);
    $.__views.__alloyId3028 = Ti.UI.createView({
        id: "__alloyId3028"
    });
    $.__views.__alloyId3027.add($.__views.__alloyId3028);
    $.__views.__alloyId3029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3029"
    });
    $.__views.__alloyId3028.add($.__views.__alloyId3029);
    $.__views.__alloyId3030 = Ti.UI.createView({
        id: "__alloyId3030"
    });
    $.__views.__alloyId3030 && $.addTopLevelView($.__views.__alloyId3030);
    $.__views.__alloyId3031 = Ti.UI.createView({
        id: "__alloyId3031"
    });
    $.__views.__alloyId3030.add($.__views.__alloyId3031);
    $.__views.__alloyId3032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3032"
    });
    $.__views.__alloyId3031.add($.__views.__alloyId3032);
    $.__views.__alloyId3033 = Ti.UI.createView({
        id: "__alloyId3033"
    });
    $.__views.__alloyId3033 && $.addTopLevelView($.__views.__alloyId3033);
    $.__views.__alloyId3034 = Ti.UI.createView({
        id: "__alloyId3034"
    });
    $.__views.__alloyId3033.add($.__views.__alloyId3034);
    $.__views.__alloyId3035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3035"
    });
    $.__views.__alloyId3034.add($.__views.__alloyId3035);
    $.__views.__alloyId3036 = Ti.UI.createView({
        id: "__alloyId3036"
    });
    $.__views.__alloyId3036 && $.addTopLevelView($.__views.__alloyId3036);
    $.__views.__alloyId3037 = Ti.UI.createView({
        id: "__alloyId3037"
    });
    $.__views.__alloyId3036.add($.__views.__alloyId3037);
    $.__views.__alloyId3038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3038"
    });
    $.__views.__alloyId3037.add($.__views.__alloyId3038);
    $.__views.__alloyId3039 = Ti.UI.createView({
        id: "__alloyId3039"
    });
    $.__views.__alloyId3039 && $.addTopLevelView($.__views.__alloyId3039);
    $.__views.__alloyId3040 = Ti.UI.createView({
        id: "__alloyId3040"
    });
    $.__views.__alloyId3039.add($.__views.__alloyId3040);
    $.__views.__alloyId3041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3041"
    });
    $.__views.__alloyId3040.add($.__views.__alloyId3041);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;