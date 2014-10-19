function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_582";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_582 = Ti.UI.createView({
        id: "widget_582"
    });
    $.__views.widget_582 && $.addTopLevelView($.__views.widget_582);
    $.__views.__alloyId13988 = Ti.UI.createView({
        id: "__alloyId13988"
    });
    $.__views.widget_582.add($.__views.__alloyId13988);
    $.__views.__alloyId13989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13989"
    });
    $.__views.__alloyId13988.add($.__views.__alloyId13989);
    $.__views.__alloyId13990 = Ti.UI.createView({
        id: "__alloyId13990"
    });
    $.__views.__alloyId13990 && $.addTopLevelView($.__views.__alloyId13990);
    $.__views.__alloyId13991 = Ti.UI.createView({
        id: "__alloyId13991"
    });
    $.__views.__alloyId13990.add($.__views.__alloyId13991);
    $.__views.__alloyId13992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13992"
    });
    $.__views.__alloyId13991.add($.__views.__alloyId13992);
    $.__views.__alloyId13993 = Ti.UI.createView({
        id: "__alloyId13993"
    });
    $.__views.__alloyId13993 && $.addTopLevelView($.__views.__alloyId13993);
    $.__views.__alloyId13994 = Ti.UI.createView({
        id: "__alloyId13994"
    });
    $.__views.__alloyId13993.add($.__views.__alloyId13994);
    $.__views.__alloyId13995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13995"
    });
    $.__views.__alloyId13994.add($.__views.__alloyId13995);
    $.__views.__alloyId13996 = Ti.UI.createView({
        id: "__alloyId13996"
    });
    $.__views.__alloyId13996 && $.addTopLevelView($.__views.__alloyId13996);
    $.__views.__alloyId13997 = Ti.UI.createView({
        id: "__alloyId13997"
    });
    $.__views.__alloyId13996.add($.__views.__alloyId13997);
    $.__views.__alloyId13998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13998"
    });
    $.__views.__alloyId13997.add($.__views.__alloyId13998);
    $.__views.__alloyId13999 = Ti.UI.createView({
        id: "__alloyId13999"
    });
    $.__views.__alloyId13999 && $.addTopLevelView($.__views.__alloyId13999);
    $.__views.__alloyId14000 = Ti.UI.createView({
        id: "__alloyId14000"
    });
    $.__views.__alloyId13999.add($.__views.__alloyId14000);
    $.__views.__alloyId14001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14001"
    });
    $.__views.__alloyId14000.add($.__views.__alloyId14001);
    $.__views.__alloyId14002 = Ti.UI.createView({
        id: "__alloyId14002"
    });
    $.__views.__alloyId14002 && $.addTopLevelView($.__views.__alloyId14002);
    $.__views.__alloyId14003 = Ti.UI.createView({
        id: "__alloyId14003"
    });
    $.__views.__alloyId14002.add($.__views.__alloyId14003);
    $.__views.__alloyId14004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14004"
    });
    $.__views.__alloyId14003.add($.__views.__alloyId14004);
    $.__views.__alloyId14005 = Ti.UI.createView({
        id: "__alloyId14005"
    });
    $.__views.__alloyId14005 && $.addTopLevelView($.__views.__alloyId14005);
    $.__views.__alloyId14006 = Ti.UI.createView({
        id: "__alloyId14006"
    });
    $.__views.__alloyId14005.add($.__views.__alloyId14006);
    $.__views.__alloyId14007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14007"
    });
    $.__views.__alloyId14006.add($.__views.__alloyId14007);
    $.__views.__alloyId14008 = Ti.UI.createView({
        id: "__alloyId14008"
    });
    $.__views.__alloyId14008 && $.addTopLevelView($.__views.__alloyId14008);
    $.__views.__alloyId14009 = Ti.UI.createView({
        id: "__alloyId14009"
    });
    $.__views.__alloyId14008.add($.__views.__alloyId14009);
    $.__views.__alloyId14010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14010"
    });
    $.__views.__alloyId14009.add($.__views.__alloyId14010);
    $.__views.__alloyId14011 = Ti.UI.createView({
        id: "__alloyId14011"
    });
    $.__views.__alloyId14011 && $.addTopLevelView($.__views.__alloyId14011);
    $.__views.__alloyId14012 = Ti.UI.createView({
        id: "__alloyId14012"
    });
    $.__views.__alloyId14011.add($.__views.__alloyId14012);
    $.__views.__alloyId14013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14013"
    });
    $.__views.__alloyId14012.add($.__views.__alloyId14013);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;