function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_929";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_929 = Ti.UI.createView({
        id: "widget_929"
    });
    $.__views.widget_929 && $.addTopLevelView($.__views.widget_929);
    $.__views.__alloyId23998 = Ti.UI.createView({
        id: "__alloyId23998"
    });
    $.__views.widget_929.add($.__views.__alloyId23998);
    $.__views.__alloyId23999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23999"
    });
    $.__views.__alloyId23998.add($.__views.__alloyId23999);
    $.__views.__alloyId24000 = Ti.UI.createView({
        id: "__alloyId24000"
    });
    $.__views.__alloyId24000 && $.addTopLevelView($.__views.__alloyId24000);
    $.__views.__alloyId24001 = Ti.UI.createView({
        id: "__alloyId24001"
    });
    $.__views.__alloyId24000.add($.__views.__alloyId24001);
    $.__views.__alloyId24002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24002"
    });
    $.__views.__alloyId24001.add($.__views.__alloyId24002);
    $.__views.__alloyId24003 = Ti.UI.createView({
        id: "__alloyId24003"
    });
    $.__views.__alloyId24003 && $.addTopLevelView($.__views.__alloyId24003);
    $.__views.__alloyId24004 = Ti.UI.createView({
        id: "__alloyId24004"
    });
    $.__views.__alloyId24003.add($.__views.__alloyId24004);
    $.__views.__alloyId24005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24005"
    });
    $.__views.__alloyId24004.add($.__views.__alloyId24005);
    $.__views.__alloyId24006 = Ti.UI.createView({
        id: "__alloyId24006"
    });
    $.__views.__alloyId24006 && $.addTopLevelView($.__views.__alloyId24006);
    $.__views.__alloyId24007 = Ti.UI.createView({
        id: "__alloyId24007"
    });
    $.__views.__alloyId24006.add($.__views.__alloyId24007);
    $.__views.__alloyId24008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24008"
    });
    $.__views.__alloyId24007.add($.__views.__alloyId24008);
    $.__views.__alloyId24009 = Ti.UI.createView({
        id: "__alloyId24009"
    });
    $.__views.__alloyId24009 && $.addTopLevelView($.__views.__alloyId24009);
    $.__views.__alloyId24010 = Ti.UI.createView({
        id: "__alloyId24010"
    });
    $.__views.__alloyId24009.add($.__views.__alloyId24010);
    $.__views.__alloyId24011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24011"
    });
    $.__views.__alloyId24010.add($.__views.__alloyId24011);
    $.__views.__alloyId24012 = Ti.UI.createView({
        id: "__alloyId24012"
    });
    $.__views.__alloyId24012 && $.addTopLevelView($.__views.__alloyId24012);
    $.__views.__alloyId24013 = Ti.UI.createView({
        id: "__alloyId24013"
    });
    $.__views.__alloyId24012.add($.__views.__alloyId24013);
    $.__views.__alloyId24014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24014"
    });
    $.__views.__alloyId24013.add($.__views.__alloyId24014);
    $.__views.__alloyId24015 = Ti.UI.createView({
        id: "__alloyId24015"
    });
    $.__views.__alloyId24015 && $.addTopLevelView($.__views.__alloyId24015);
    $.__views.__alloyId24016 = Ti.UI.createView({
        id: "__alloyId24016"
    });
    $.__views.__alloyId24015.add($.__views.__alloyId24016);
    $.__views.__alloyId24017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24017"
    });
    $.__views.__alloyId24016.add($.__views.__alloyId24017);
    $.__views.__alloyId24018 = Ti.UI.createView({
        id: "__alloyId24018"
    });
    $.__views.__alloyId24018 && $.addTopLevelView($.__views.__alloyId24018);
    $.__views.__alloyId24019 = Ti.UI.createView({
        id: "__alloyId24019"
    });
    $.__views.__alloyId24018.add($.__views.__alloyId24019);
    $.__views.__alloyId24020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24020"
    });
    $.__views.__alloyId24019.add($.__views.__alloyId24020);
    $.__views.__alloyId24021 = Ti.UI.createView({
        id: "__alloyId24021"
    });
    $.__views.__alloyId24021 && $.addTopLevelView($.__views.__alloyId24021);
    $.__views.__alloyId24022 = Ti.UI.createView({
        id: "__alloyId24022"
    });
    $.__views.__alloyId24021.add($.__views.__alloyId24022);
    $.__views.__alloyId24023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24023"
    });
    $.__views.__alloyId24022.add($.__views.__alloyId24023);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;