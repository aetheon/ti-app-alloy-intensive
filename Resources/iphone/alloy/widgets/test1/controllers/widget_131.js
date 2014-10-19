function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_131";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_131 = Ti.UI.createView({
        id: "widget_131"
    });
    $.__views.widget_131 && $.addTopLevelView($.__views.widget_131);
    $.__views.__alloyId988 = Ti.UI.createView({
        id: "__alloyId988"
    });
    $.__views.widget_131.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createView({
        id: "__alloyId990"
    });
    $.__views.__alloyId990 && $.addTopLevelView($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createView({
        id: "__alloyId991"
    });
    $.__views.__alloyId990.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId992"
    });
    $.__views.__alloyId991.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        id: "__alloyId993"
    });
    $.__views.__alloyId993 && $.addTopLevelView($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createView({
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId995"
    });
    $.__views.__alloyId994.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        id: "__alloyId996"
    });
    $.__views.__alloyId996 && $.addTopLevelView($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createView({
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId998"
    });
    $.__views.__alloyId997.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createView({
        id: "__alloyId999"
    });
    $.__views.__alloyId999 && $.addTopLevelView($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createView({
        id: "__alloyId1000"
    });
    $.__views.__alloyId999.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1001"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        id: "__alloyId1002"
    });
    $.__views.__alloyId1002 && $.addTopLevelView($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createView({
        id: "__alloyId1003"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1003.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createView({
        id: "__alloyId1005"
    });
    $.__views.__alloyId1005 && $.addTopLevelView($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createView({
        id: "__alloyId1006"
    });
    $.__views.__alloyId1005.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1007"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createView({
        id: "__alloyId1008"
    });
    $.__views.__alloyId1008 && $.addTopLevelView($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createView({
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createView({
        id: "__alloyId1011"
    });
    $.__views.__alloyId1011 && $.addTopLevelView($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createView({
        id: "__alloyId1012"
    });
    $.__views.__alloyId1011.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1012.add($.__views.__alloyId1013);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;