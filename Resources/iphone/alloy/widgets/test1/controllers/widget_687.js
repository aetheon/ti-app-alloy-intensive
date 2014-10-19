function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_687";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_687 = Ti.UI.createView({
        id: "widget_687"
    });
    $.__views.widget_687 && $.addTopLevelView($.__views.widget_687);
    $.__views.__alloyId17004 = Ti.UI.createView({
        id: "__alloyId17004"
    });
    $.__views.widget_687.add($.__views.__alloyId17004);
    $.__views.__alloyId17005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17005"
    });
    $.__views.__alloyId17004.add($.__views.__alloyId17005);
    $.__views.__alloyId17006 = Ti.UI.createView({
        id: "__alloyId17006"
    });
    $.__views.__alloyId17006 && $.addTopLevelView($.__views.__alloyId17006);
    $.__views.__alloyId17007 = Ti.UI.createView({
        id: "__alloyId17007"
    });
    $.__views.__alloyId17006.add($.__views.__alloyId17007);
    $.__views.__alloyId17008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17008"
    });
    $.__views.__alloyId17007.add($.__views.__alloyId17008);
    $.__views.__alloyId17009 = Ti.UI.createView({
        id: "__alloyId17009"
    });
    $.__views.__alloyId17009 && $.addTopLevelView($.__views.__alloyId17009);
    $.__views.__alloyId17010 = Ti.UI.createView({
        id: "__alloyId17010"
    });
    $.__views.__alloyId17009.add($.__views.__alloyId17010);
    $.__views.__alloyId17011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17011"
    });
    $.__views.__alloyId17010.add($.__views.__alloyId17011);
    $.__views.__alloyId17012 = Ti.UI.createView({
        id: "__alloyId17012"
    });
    $.__views.__alloyId17012 && $.addTopLevelView($.__views.__alloyId17012);
    $.__views.__alloyId17013 = Ti.UI.createView({
        id: "__alloyId17013"
    });
    $.__views.__alloyId17012.add($.__views.__alloyId17013);
    $.__views.__alloyId17014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17014"
    });
    $.__views.__alloyId17013.add($.__views.__alloyId17014);
    $.__views.__alloyId17015 = Ti.UI.createView({
        id: "__alloyId17015"
    });
    $.__views.__alloyId17015 && $.addTopLevelView($.__views.__alloyId17015);
    $.__views.__alloyId17016 = Ti.UI.createView({
        id: "__alloyId17016"
    });
    $.__views.__alloyId17015.add($.__views.__alloyId17016);
    $.__views.__alloyId17017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17017"
    });
    $.__views.__alloyId17016.add($.__views.__alloyId17017);
    $.__views.__alloyId17018 = Ti.UI.createView({
        id: "__alloyId17018"
    });
    $.__views.__alloyId17018 && $.addTopLevelView($.__views.__alloyId17018);
    $.__views.__alloyId17019 = Ti.UI.createView({
        id: "__alloyId17019"
    });
    $.__views.__alloyId17018.add($.__views.__alloyId17019);
    $.__views.__alloyId17020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17020"
    });
    $.__views.__alloyId17019.add($.__views.__alloyId17020);
    $.__views.__alloyId17021 = Ti.UI.createView({
        id: "__alloyId17021"
    });
    $.__views.__alloyId17021 && $.addTopLevelView($.__views.__alloyId17021);
    $.__views.__alloyId17022 = Ti.UI.createView({
        id: "__alloyId17022"
    });
    $.__views.__alloyId17021.add($.__views.__alloyId17022);
    $.__views.__alloyId17023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17023"
    });
    $.__views.__alloyId17022.add($.__views.__alloyId17023);
    $.__views.__alloyId17024 = Ti.UI.createView({
        id: "__alloyId17024"
    });
    $.__views.__alloyId17024 && $.addTopLevelView($.__views.__alloyId17024);
    $.__views.__alloyId17025 = Ti.UI.createView({
        id: "__alloyId17025"
    });
    $.__views.__alloyId17024.add($.__views.__alloyId17025);
    $.__views.__alloyId17026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17026"
    });
    $.__views.__alloyId17025.add($.__views.__alloyId17026);
    $.__views.__alloyId17027 = Ti.UI.createView({
        id: "__alloyId17027"
    });
    $.__views.__alloyId17027 && $.addTopLevelView($.__views.__alloyId17027);
    $.__views.__alloyId17028 = Ti.UI.createView({
        id: "__alloyId17028"
    });
    $.__views.__alloyId17027.add($.__views.__alloyId17028);
    $.__views.__alloyId17029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17029"
    });
    $.__views.__alloyId17028.add($.__views.__alloyId17029);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;