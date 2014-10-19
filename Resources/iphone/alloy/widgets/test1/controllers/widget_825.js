function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_825";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_825 = Ti.UI.createView({
        id: "widget_825"
    });
    $.__views.widget_825 && $.addTopLevelView($.__views.widget_825);
    $.__views.__alloyId21008 = Ti.UI.createView({
        id: "__alloyId21008"
    });
    $.__views.widget_825.add($.__views.__alloyId21008);
    $.__views.__alloyId21009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21009"
    });
    $.__views.__alloyId21008.add($.__views.__alloyId21009);
    $.__views.__alloyId21010 = Ti.UI.createView({
        id: "__alloyId21010"
    });
    $.__views.__alloyId21010 && $.addTopLevelView($.__views.__alloyId21010);
    $.__views.__alloyId21011 = Ti.UI.createView({
        id: "__alloyId21011"
    });
    $.__views.__alloyId21010.add($.__views.__alloyId21011);
    $.__views.__alloyId21012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21012"
    });
    $.__views.__alloyId21011.add($.__views.__alloyId21012);
    $.__views.__alloyId21013 = Ti.UI.createView({
        id: "__alloyId21013"
    });
    $.__views.__alloyId21013 && $.addTopLevelView($.__views.__alloyId21013);
    $.__views.__alloyId21014 = Ti.UI.createView({
        id: "__alloyId21014"
    });
    $.__views.__alloyId21013.add($.__views.__alloyId21014);
    $.__views.__alloyId21015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21015"
    });
    $.__views.__alloyId21014.add($.__views.__alloyId21015);
    $.__views.__alloyId21016 = Ti.UI.createView({
        id: "__alloyId21016"
    });
    $.__views.__alloyId21016 && $.addTopLevelView($.__views.__alloyId21016);
    $.__views.__alloyId21017 = Ti.UI.createView({
        id: "__alloyId21017"
    });
    $.__views.__alloyId21016.add($.__views.__alloyId21017);
    $.__views.__alloyId21018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21018"
    });
    $.__views.__alloyId21017.add($.__views.__alloyId21018);
    $.__views.__alloyId21019 = Ti.UI.createView({
        id: "__alloyId21019"
    });
    $.__views.__alloyId21019 && $.addTopLevelView($.__views.__alloyId21019);
    $.__views.__alloyId21020 = Ti.UI.createView({
        id: "__alloyId21020"
    });
    $.__views.__alloyId21019.add($.__views.__alloyId21020);
    $.__views.__alloyId21021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21021"
    });
    $.__views.__alloyId21020.add($.__views.__alloyId21021);
    $.__views.__alloyId21022 = Ti.UI.createView({
        id: "__alloyId21022"
    });
    $.__views.__alloyId21022 && $.addTopLevelView($.__views.__alloyId21022);
    $.__views.__alloyId21023 = Ti.UI.createView({
        id: "__alloyId21023"
    });
    $.__views.__alloyId21022.add($.__views.__alloyId21023);
    $.__views.__alloyId21024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21024"
    });
    $.__views.__alloyId21023.add($.__views.__alloyId21024);
    $.__views.__alloyId21025 = Ti.UI.createView({
        id: "__alloyId21025"
    });
    $.__views.__alloyId21025 && $.addTopLevelView($.__views.__alloyId21025);
    $.__views.__alloyId21026 = Ti.UI.createView({
        id: "__alloyId21026"
    });
    $.__views.__alloyId21025.add($.__views.__alloyId21026);
    $.__views.__alloyId21027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21027"
    });
    $.__views.__alloyId21026.add($.__views.__alloyId21027);
    $.__views.__alloyId21028 = Ti.UI.createView({
        id: "__alloyId21028"
    });
    $.__views.__alloyId21028 && $.addTopLevelView($.__views.__alloyId21028);
    $.__views.__alloyId21029 = Ti.UI.createView({
        id: "__alloyId21029"
    });
    $.__views.__alloyId21028.add($.__views.__alloyId21029);
    $.__views.__alloyId21030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21030"
    });
    $.__views.__alloyId21029.add($.__views.__alloyId21030);
    $.__views.__alloyId21031 = Ti.UI.createView({
        id: "__alloyId21031"
    });
    $.__views.__alloyId21031 && $.addTopLevelView($.__views.__alloyId21031);
    $.__views.__alloyId21032 = Ti.UI.createView({
        id: "__alloyId21032"
    });
    $.__views.__alloyId21031.add($.__views.__alloyId21032);
    $.__views.__alloyId21033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21033"
    });
    $.__views.__alloyId21032.add($.__views.__alloyId21033);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;