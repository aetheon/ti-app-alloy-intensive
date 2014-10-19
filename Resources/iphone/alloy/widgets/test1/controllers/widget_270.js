function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_270";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_270 = Ti.UI.createView({
        id: "widget_270"
    });
    $.__views.widget_270 && $.addTopLevelView($.__views.widget_270);
    $.__views.__alloyId4992 = Ti.UI.createView({
        id: "__alloyId4992"
    });
    $.__views.widget_270.add($.__views.__alloyId4992);
    $.__views.__alloyId4993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4993"
    });
    $.__views.__alloyId4992.add($.__views.__alloyId4993);
    $.__views.__alloyId4994 = Ti.UI.createView({
        id: "__alloyId4994"
    });
    $.__views.__alloyId4994 && $.addTopLevelView($.__views.__alloyId4994);
    $.__views.__alloyId4995 = Ti.UI.createView({
        id: "__alloyId4995"
    });
    $.__views.__alloyId4994.add($.__views.__alloyId4995);
    $.__views.__alloyId4996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4996"
    });
    $.__views.__alloyId4995.add($.__views.__alloyId4996);
    $.__views.__alloyId4997 = Ti.UI.createView({
        id: "__alloyId4997"
    });
    $.__views.__alloyId4997 && $.addTopLevelView($.__views.__alloyId4997);
    $.__views.__alloyId4998 = Ti.UI.createView({
        id: "__alloyId4998"
    });
    $.__views.__alloyId4997.add($.__views.__alloyId4998);
    $.__views.__alloyId4999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4999"
    });
    $.__views.__alloyId4998.add($.__views.__alloyId4999);
    $.__views.__alloyId5000 = Ti.UI.createView({
        id: "__alloyId5000"
    });
    $.__views.__alloyId5000 && $.addTopLevelView($.__views.__alloyId5000);
    $.__views.__alloyId5001 = Ti.UI.createView({
        id: "__alloyId5001"
    });
    $.__views.__alloyId5000.add($.__views.__alloyId5001);
    $.__views.__alloyId5002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5002"
    });
    $.__views.__alloyId5001.add($.__views.__alloyId5002);
    $.__views.__alloyId5003 = Ti.UI.createView({
        id: "__alloyId5003"
    });
    $.__views.__alloyId5003 && $.addTopLevelView($.__views.__alloyId5003);
    $.__views.__alloyId5004 = Ti.UI.createView({
        id: "__alloyId5004"
    });
    $.__views.__alloyId5003.add($.__views.__alloyId5004);
    $.__views.__alloyId5005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5005"
    });
    $.__views.__alloyId5004.add($.__views.__alloyId5005);
    $.__views.__alloyId5006 = Ti.UI.createView({
        id: "__alloyId5006"
    });
    $.__views.__alloyId5006 && $.addTopLevelView($.__views.__alloyId5006);
    $.__views.__alloyId5007 = Ti.UI.createView({
        id: "__alloyId5007"
    });
    $.__views.__alloyId5006.add($.__views.__alloyId5007);
    $.__views.__alloyId5008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5008"
    });
    $.__views.__alloyId5007.add($.__views.__alloyId5008);
    $.__views.__alloyId5009 = Ti.UI.createView({
        id: "__alloyId5009"
    });
    $.__views.__alloyId5009 && $.addTopLevelView($.__views.__alloyId5009);
    $.__views.__alloyId5010 = Ti.UI.createView({
        id: "__alloyId5010"
    });
    $.__views.__alloyId5009.add($.__views.__alloyId5010);
    $.__views.__alloyId5011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5011"
    });
    $.__views.__alloyId5010.add($.__views.__alloyId5011);
    $.__views.__alloyId5012 = Ti.UI.createView({
        id: "__alloyId5012"
    });
    $.__views.__alloyId5012 && $.addTopLevelView($.__views.__alloyId5012);
    $.__views.__alloyId5013 = Ti.UI.createView({
        id: "__alloyId5013"
    });
    $.__views.__alloyId5012.add($.__views.__alloyId5013);
    $.__views.__alloyId5014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5014"
    });
    $.__views.__alloyId5013.add($.__views.__alloyId5014);
    $.__views.__alloyId5015 = Ti.UI.createView({
        id: "__alloyId5015"
    });
    $.__views.__alloyId5015 && $.addTopLevelView($.__views.__alloyId5015);
    $.__views.__alloyId5016 = Ti.UI.createView({
        id: "__alloyId5016"
    });
    $.__views.__alloyId5015.add($.__views.__alloyId5016);
    $.__views.__alloyId5017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5017"
    });
    $.__views.__alloyId5016.add($.__views.__alloyId5017);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;