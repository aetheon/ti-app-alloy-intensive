function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_826";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_826 = Ti.UI.createView({
        id: "widget_826"
    });
    $.__views.widget_826 && $.addTopLevelView($.__views.widget_826);
    $.__views.__alloyId21034 = Ti.UI.createView({
        id: "__alloyId21034"
    });
    $.__views.widget_826.add($.__views.__alloyId21034);
    $.__views.__alloyId21035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21035"
    });
    $.__views.__alloyId21034.add($.__views.__alloyId21035);
    $.__views.__alloyId21036 = Ti.UI.createView({
        id: "__alloyId21036"
    });
    $.__views.__alloyId21036 && $.addTopLevelView($.__views.__alloyId21036);
    $.__views.__alloyId21037 = Ti.UI.createView({
        id: "__alloyId21037"
    });
    $.__views.__alloyId21036.add($.__views.__alloyId21037);
    $.__views.__alloyId21038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21038"
    });
    $.__views.__alloyId21037.add($.__views.__alloyId21038);
    $.__views.__alloyId21039 = Ti.UI.createView({
        id: "__alloyId21039"
    });
    $.__views.__alloyId21039 && $.addTopLevelView($.__views.__alloyId21039);
    $.__views.__alloyId21040 = Ti.UI.createView({
        id: "__alloyId21040"
    });
    $.__views.__alloyId21039.add($.__views.__alloyId21040);
    $.__views.__alloyId21041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21041"
    });
    $.__views.__alloyId21040.add($.__views.__alloyId21041);
    $.__views.__alloyId21042 = Ti.UI.createView({
        id: "__alloyId21042"
    });
    $.__views.__alloyId21042 && $.addTopLevelView($.__views.__alloyId21042);
    $.__views.__alloyId21043 = Ti.UI.createView({
        id: "__alloyId21043"
    });
    $.__views.__alloyId21042.add($.__views.__alloyId21043);
    $.__views.__alloyId21044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21044"
    });
    $.__views.__alloyId21043.add($.__views.__alloyId21044);
    $.__views.__alloyId21045 = Ti.UI.createView({
        id: "__alloyId21045"
    });
    $.__views.__alloyId21045 && $.addTopLevelView($.__views.__alloyId21045);
    $.__views.__alloyId21046 = Ti.UI.createView({
        id: "__alloyId21046"
    });
    $.__views.__alloyId21045.add($.__views.__alloyId21046);
    $.__views.__alloyId21047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21047"
    });
    $.__views.__alloyId21046.add($.__views.__alloyId21047);
    $.__views.__alloyId21048 = Ti.UI.createView({
        id: "__alloyId21048"
    });
    $.__views.__alloyId21048 && $.addTopLevelView($.__views.__alloyId21048);
    $.__views.__alloyId21049 = Ti.UI.createView({
        id: "__alloyId21049"
    });
    $.__views.__alloyId21048.add($.__views.__alloyId21049);
    $.__views.__alloyId21050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21050"
    });
    $.__views.__alloyId21049.add($.__views.__alloyId21050);
    $.__views.__alloyId21051 = Ti.UI.createView({
        id: "__alloyId21051"
    });
    $.__views.__alloyId21051 && $.addTopLevelView($.__views.__alloyId21051);
    $.__views.__alloyId21052 = Ti.UI.createView({
        id: "__alloyId21052"
    });
    $.__views.__alloyId21051.add($.__views.__alloyId21052);
    $.__views.__alloyId21053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21053"
    });
    $.__views.__alloyId21052.add($.__views.__alloyId21053);
    $.__views.__alloyId21054 = Ti.UI.createView({
        id: "__alloyId21054"
    });
    $.__views.__alloyId21054 && $.addTopLevelView($.__views.__alloyId21054);
    $.__views.__alloyId21055 = Ti.UI.createView({
        id: "__alloyId21055"
    });
    $.__views.__alloyId21054.add($.__views.__alloyId21055);
    $.__views.__alloyId21056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21056"
    });
    $.__views.__alloyId21055.add($.__views.__alloyId21056);
    $.__views.__alloyId21057 = Ti.UI.createView({
        id: "__alloyId21057"
    });
    $.__views.__alloyId21057 && $.addTopLevelView($.__views.__alloyId21057);
    $.__views.__alloyId21058 = Ti.UI.createView({
        id: "__alloyId21058"
    });
    $.__views.__alloyId21057.add($.__views.__alloyId21058);
    $.__views.__alloyId21059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21059"
    });
    $.__views.__alloyId21058.add($.__views.__alloyId21059);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;