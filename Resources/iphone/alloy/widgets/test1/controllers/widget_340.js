function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_340";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_340 = Ti.UI.createView({
        id: "widget_340"
    });
    $.__views.widget_340 && $.addTopLevelView($.__views.widget_340);
    $.__views.__alloyId7020 = Ti.UI.createView({
        id: "__alloyId7020"
    });
    $.__views.widget_340.add($.__views.__alloyId7020);
    $.__views.__alloyId7021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7021"
    });
    $.__views.__alloyId7020.add($.__views.__alloyId7021);
    $.__views.__alloyId7022 = Ti.UI.createView({
        id: "__alloyId7022"
    });
    $.__views.__alloyId7022 && $.addTopLevelView($.__views.__alloyId7022);
    $.__views.__alloyId7023 = Ti.UI.createView({
        id: "__alloyId7023"
    });
    $.__views.__alloyId7022.add($.__views.__alloyId7023);
    $.__views.__alloyId7024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7024"
    });
    $.__views.__alloyId7023.add($.__views.__alloyId7024);
    $.__views.__alloyId7025 = Ti.UI.createView({
        id: "__alloyId7025"
    });
    $.__views.__alloyId7025 && $.addTopLevelView($.__views.__alloyId7025);
    $.__views.__alloyId7026 = Ti.UI.createView({
        id: "__alloyId7026"
    });
    $.__views.__alloyId7025.add($.__views.__alloyId7026);
    $.__views.__alloyId7027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7027"
    });
    $.__views.__alloyId7026.add($.__views.__alloyId7027);
    $.__views.__alloyId7028 = Ti.UI.createView({
        id: "__alloyId7028"
    });
    $.__views.__alloyId7028 && $.addTopLevelView($.__views.__alloyId7028);
    $.__views.__alloyId7029 = Ti.UI.createView({
        id: "__alloyId7029"
    });
    $.__views.__alloyId7028.add($.__views.__alloyId7029);
    $.__views.__alloyId7030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7030"
    });
    $.__views.__alloyId7029.add($.__views.__alloyId7030);
    $.__views.__alloyId7031 = Ti.UI.createView({
        id: "__alloyId7031"
    });
    $.__views.__alloyId7031 && $.addTopLevelView($.__views.__alloyId7031);
    $.__views.__alloyId7032 = Ti.UI.createView({
        id: "__alloyId7032"
    });
    $.__views.__alloyId7031.add($.__views.__alloyId7032);
    $.__views.__alloyId7033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7033"
    });
    $.__views.__alloyId7032.add($.__views.__alloyId7033);
    $.__views.__alloyId7034 = Ti.UI.createView({
        id: "__alloyId7034"
    });
    $.__views.__alloyId7034 && $.addTopLevelView($.__views.__alloyId7034);
    $.__views.__alloyId7035 = Ti.UI.createView({
        id: "__alloyId7035"
    });
    $.__views.__alloyId7034.add($.__views.__alloyId7035);
    $.__views.__alloyId7036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7036"
    });
    $.__views.__alloyId7035.add($.__views.__alloyId7036);
    $.__views.__alloyId7037 = Ti.UI.createView({
        id: "__alloyId7037"
    });
    $.__views.__alloyId7037 && $.addTopLevelView($.__views.__alloyId7037);
    $.__views.__alloyId7038 = Ti.UI.createView({
        id: "__alloyId7038"
    });
    $.__views.__alloyId7037.add($.__views.__alloyId7038);
    $.__views.__alloyId7039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7039"
    });
    $.__views.__alloyId7038.add($.__views.__alloyId7039);
    $.__views.__alloyId7040 = Ti.UI.createView({
        id: "__alloyId7040"
    });
    $.__views.__alloyId7040 && $.addTopLevelView($.__views.__alloyId7040);
    $.__views.__alloyId7041 = Ti.UI.createView({
        id: "__alloyId7041"
    });
    $.__views.__alloyId7040.add($.__views.__alloyId7041);
    $.__views.__alloyId7042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7042"
    });
    $.__views.__alloyId7041.add($.__views.__alloyId7042);
    $.__views.__alloyId7043 = Ti.UI.createView({
        id: "__alloyId7043"
    });
    $.__views.__alloyId7043 && $.addTopLevelView($.__views.__alloyId7043);
    $.__views.__alloyId7044 = Ti.UI.createView({
        id: "__alloyId7044"
    });
    $.__views.__alloyId7043.add($.__views.__alloyId7044);
    $.__views.__alloyId7045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7045"
    });
    $.__views.__alloyId7044.add($.__views.__alloyId7045);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;