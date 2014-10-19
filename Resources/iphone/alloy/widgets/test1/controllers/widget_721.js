function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_721";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_721 = Ti.UI.createView({
        id: "widget_721"
    });
    $.__views.widget_721 && $.addTopLevelView($.__views.widget_721);
    $.__views.__alloyId18018 = Ti.UI.createView({
        id: "__alloyId18018"
    });
    $.__views.widget_721.add($.__views.__alloyId18018);
    $.__views.__alloyId18019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18019"
    });
    $.__views.__alloyId18018.add($.__views.__alloyId18019);
    $.__views.__alloyId18020 = Ti.UI.createView({
        id: "__alloyId18020"
    });
    $.__views.__alloyId18020 && $.addTopLevelView($.__views.__alloyId18020);
    $.__views.__alloyId18021 = Ti.UI.createView({
        id: "__alloyId18021"
    });
    $.__views.__alloyId18020.add($.__views.__alloyId18021);
    $.__views.__alloyId18022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18022"
    });
    $.__views.__alloyId18021.add($.__views.__alloyId18022);
    $.__views.__alloyId18023 = Ti.UI.createView({
        id: "__alloyId18023"
    });
    $.__views.__alloyId18023 && $.addTopLevelView($.__views.__alloyId18023);
    $.__views.__alloyId18024 = Ti.UI.createView({
        id: "__alloyId18024"
    });
    $.__views.__alloyId18023.add($.__views.__alloyId18024);
    $.__views.__alloyId18025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18025"
    });
    $.__views.__alloyId18024.add($.__views.__alloyId18025);
    $.__views.__alloyId18026 = Ti.UI.createView({
        id: "__alloyId18026"
    });
    $.__views.__alloyId18026 && $.addTopLevelView($.__views.__alloyId18026);
    $.__views.__alloyId18027 = Ti.UI.createView({
        id: "__alloyId18027"
    });
    $.__views.__alloyId18026.add($.__views.__alloyId18027);
    $.__views.__alloyId18028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18028"
    });
    $.__views.__alloyId18027.add($.__views.__alloyId18028);
    $.__views.__alloyId18029 = Ti.UI.createView({
        id: "__alloyId18029"
    });
    $.__views.__alloyId18029 && $.addTopLevelView($.__views.__alloyId18029);
    $.__views.__alloyId18030 = Ti.UI.createView({
        id: "__alloyId18030"
    });
    $.__views.__alloyId18029.add($.__views.__alloyId18030);
    $.__views.__alloyId18031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18031"
    });
    $.__views.__alloyId18030.add($.__views.__alloyId18031);
    $.__views.__alloyId18032 = Ti.UI.createView({
        id: "__alloyId18032"
    });
    $.__views.__alloyId18032 && $.addTopLevelView($.__views.__alloyId18032);
    $.__views.__alloyId18033 = Ti.UI.createView({
        id: "__alloyId18033"
    });
    $.__views.__alloyId18032.add($.__views.__alloyId18033);
    $.__views.__alloyId18034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18034"
    });
    $.__views.__alloyId18033.add($.__views.__alloyId18034);
    $.__views.__alloyId18035 = Ti.UI.createView({
        id: "__alloyId18035"
    });
    $.__views.__alloyId18035 && $.addTopLevelView($.__views.__alloyId18035);
    $.__views.__alloyId18036 = Ti.UI.createView({
        id: "__alloyId18036"
    });
    $.__views.__alloyId18035.add($.__views.__alloyId18036);
    $.__views.__alloyId18037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18037"
    });
    $.__views.__alloyId18036.add($.__views.__alloyId18037);
    $.__views.__alloyId18038 = Ti.UI.createView({
        id: "__alloyId18038"
    });
    $.__views.__alloyId18038 && $.addTopLevelView($.__views.__alloyId18038);
    $.__views.__alloyId18039 = Ti.UI.createView({
        id: "__alloyId18039"
    });
    $.__views.__alloyId18038.add($.__views.__alloyId18039);
    $.__views.__alloyId18040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18040"
    });
    $.__views.__alloyId18039.add($.__views.__alloyId18040);
    $.__views.__alloyId18041 = Ti.UI.createView({
        id: "__alloyId18041"
    });
    $.__views.__alloyId18041 && $.addTopLevelView($.__views.__alloyId18041);
    $.__views.__alloyId18042 = Ti.UI.createView({
        id: "__alloyId18042"
    });
    $.__views.__alloyId18041.add($.__views.__alloyId18042);
    $.__views.__alloyId18043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18043"
    });
    $.__views.__alloyId18042.add($.__views.__alloyId18043);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;