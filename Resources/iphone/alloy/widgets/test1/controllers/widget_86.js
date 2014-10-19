function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_86";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_86 = Ti.UI.createView({
        id: "widget_86"
    });
    $.__views.widget_86 && $.addTopLevelView($.__views.widget_86);
    $.__views.__alloyId21996 = Ti.UI.createView({
        id: "__alloyId21996"
    });
    $.__views.widget_86.add($.__views.__alloyId21996);
    $.__views.__alloyId21997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21997"
    });
    $.__views.__alloyId21996.add($.__views.__alloyId21997);
    $.__views.__alloyId21998 = Ti.UI.createView({
        id: "__alloyId21998"
    });
    $.__views.__alloyId21998 && $.addTopLevelView($.__views.__alloyId21998);
    $.__views.__alloyId21999 = Ti.UI.createView({
        id: "__alloyId21999"
    });
    $.__views.__alloyId21998.add($.__views.__alloyId21999);
    $.__views.__alloyId22000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22000"
    });
    $.__views.__alloyId21999.add($.__views.__alloyId22000);
    $.__views.__alloyId22001 = Ti.UI.createView({
        id: "__alloyId22001"
    });
    $.__views.__alloyId22001 && $.addTopLevelView($.__views.__alloyId22001);
    $.__views.__alloyId22002 = Ti.UI.createView({
        id: "__alloyId22002"
    });
    $.__views.__alloyId22001.add($.__views.__alloyId22002);
    $.__views.__alloyId22003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22003"
    });
    $.__views.__alloyId22002.add($.__views.__alloyId22003);
    $.__views.__alloyId22004 = Ti.UI.createView({
        id: "__alloyId22004"
    });
    $.__views.__alloyId22004 && $.addTopLevelView($.__views.__alloyId22004);
    $.__views.__alloyId22005 = Ti.UI.createView({
        id: "__alloyId22005"
    });
    $.__views.__alloyId22004.add($.__views.__alloyId22005);
    $.__views.__alloyId22006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22006"
    });
    $.__views.__alloyId22005.add($.__views.__alloyId22006);
    $.__views.__alloyId22007 = Ti.UI.createView({
        id: "__alloyId22007"
    });
    $.__views.__alloyId22007 && $.addTopLevelView($.__views.__alloyId22007);
    $.__views.__alloyId22008 = Ti.UI.createView({
        id: "__alloyId22008"
    });
    $.__views.__alloyId22007.add($.__views.__alloyId22008);
    $.__views.__alloyId22009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22009"
    });
    $.__views.__alloyId22008.add($.__views.__alloyId22009);
    $.__views.__alloyId22010 = Ti.UI.createView({
        id: "__alloyId22010"
    });
    $.__views.__alloyId22010 && $.addTopLevelView($.__views.__alloyId22010);
    $.__views.__alloyId22011 = Ti.UI.createView({
        id: "__alloyId22011"
    });
    $.__views.__alloyId22010.add($.__views.__alloyId22011);
    $.__views.__alloyId22012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22012"
    });
    $.__views.__alloyId22011.add($.__views.__alloyId22012);
    $.__views.__alloyId22013 = Ti.UI.createView({
        id: "__alloyId22013"
    });
    $.__views.__alloyId22013 && $.addTopLevelView($.__views.__alloyId22013);
    $.__views.__alloyId22014 = Ti.UI.createView({
        id: "__alloyId22014"
    });
    $.__views.__alloyId22013.add($.__views.__alloyId22014);
    $.__views.__alloyId22015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22015"
    });
    $.__views.__alloyId22014.add($.__views.__alloyId22015);
    $.__views.__alloyId22016 = Ti.UI.createView({
        id: "__alloyId22016"
    });
    $.__views.__alloyId22016 && $.addTopLevelView($.__views.__alloyId22016);
    $.__views.__alloyId22017 = Ti.UI.createView({
        id: "__alloyId22017"
    });
    $.__views.__alloyId22016.add($.__views.__alloyId22017);
    $.__views.__alloyId22018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22018"
    });
    $.__views.__alloyId22017.add($.__views.__alloyId22018);
    $.__views.__alloyId22019 = Ti.UI.createView({
        id: "__alloyId22019"
    });
    $.__views.__alloyId22019 && $.addTopLevelView($.__views.__alloyId22019);
    $.__views.__alloyId22020 = Ti.UI.createView({
        id: "__alloyId22020"
    });
    $.__views.__alloyId22019.add($.__views.__alloyId22020);
    $.__views.__alloyId22021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22021"
    });
    $.__views.__alloyId22020.add($.__views.__alloyId22021);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;