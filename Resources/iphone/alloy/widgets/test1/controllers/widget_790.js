function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_790";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_790 = Ti.UI.createView({
        id: "widget_790"
    });
    $.__views.widget_790 && $.addTopLevelView($.__views.widget_790);
    $.__views.__alloyId19994 = Ti.UI.createView({
        id: "__alloyId19994"
    });
    $.__views.widget_790.add($.__views.__alloyId19994);
    $.__views.__alloyId19995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19995"
    });
    $.__views.__alloyId19994.add($.__views.__alloyId19995);
    $.__views.__alloyId19996 = Ti.UI.createView({
        id: "__alloyId19996"
    });
    $.__views.__alloyId19996 && $.addTopLevelView($.__views.__alloyId19996);
    $.__views.__alloyId19997 = Ti.UI.createView({
        id: "__alloyId19997"
    });
    $.__views.__alloyId19996.add($.__views.__alloyId19997);
    $.__views.__alloyId19998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19998"
    });
    $.__views.__alloyId19997.add($.__views.__alloyId19998);
    $.__views.__alloyId19999 = Ti.UI.createView({
        id: "__alloyId19999"
    });
    $.__views.__alloyId19999 && $.addTopLevelView($.__views.__alloyId19999);
    $.__views.__alloyId20000 = Ti.UI.createView({
        id: "__alloyId20000"
    });
    $.__views.__alloyId19999.add($.__views.__alloyId20000);
    $.__views.__alloyId20001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20001"
    });
    $.__views.__alloyId20000.add($.__views.__alloyId20001);
    $.__views.__alloyId20002 = Ti.UI.createView({
        id: "__alloyId20002"
    });
    $.__views.__alloyId20002 && $.addTopLevelView($.__views.__alloyId20002);
    $.__views.__alloyId20003 = Ti.UI.createView({
        id: "__alloyId20003"
    });
    $.__views.__alloyId20002.add($.__views.__alloyId20003);
    $.__views.__alloyId20004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20004"
    });
    $.__views.__alloyId20003.add($.__views.__alloyId20004);
    $.__views.__alloyId20005 = Ti.UI.createView({
        id: "__alloyId20005"
    });
    $.__views.__alloyId20005 && $.addTopLevelView($.__views.__alloyId20005);
    $.__views.__alloyId20006 = Ti.UI.createView({
        id: "__alloyId20006"
    });
    $.__views.__alloyId20005.add($.__views.__alloyId20006);
    $.__views.__alloyId20007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20007"
    });
    $.__views.__alloyId20006.add($.__views.__alloyId20007);
    $.__views.__alloyId20008 = Ti.UI.createView({
        id: "__alloyId20008"
    });
    $.__views.__alloyId20008 && $.addTopLevelView($.__views.__alloyId20008);
    $.__views.__alloyId20009 = Ti.UI.createView({
        id: "__alloyId20009"
    });
    $.__views.__alloyId20008.add($.__views.__alloyId20009);
    $.__views.__alloyId20010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20010"
    });
    $.__views.__alloyId20009.add($.__views.__alloyId20010);
    $.__views.__alloyId20011 = Ti.UI.createView({
        id: "__alloyId20011"
    });
    $.__views.__alloyId20011 && $.addTopLevelView($.__views.__alloyId20011);
    $.__views.__alloyId20012 = Ti.UI.createView({
        id: "__alloyId20012"
    });
    $.__views.__alloyId20011.add($.__views.__alloyId20012);
    $.__views.__alloyId20013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20013"
    });
    $.__views.__alloyId20012.add($.__views.__alloyId20013);
    $.__views.__alloyId20014 = Ti.UI.createView({
        id: "__alloyId20014"
    });
    $.__views.__alloyId20014 && $.addTopLevelView($.__views.__alloyId20014);
    $.__views.__alloyId20015 = Ti.UI.createView({
        id: "__alloyId20015"
    });
    $.__views.__alloyId20014.add($.__views.__alloyId20015);
    $.__views.__alloyId20016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20016"
    });
    $.__views.__alloyId20015.add($.__views.__alloyId20016);
    $.__views.__alloyId20017 = Ti.UI.createView({
        id: "__alloyId20017"
    });
    $.__views.__alloyId20017 && $.addTopLevelView($.__views.__alloyId20017);
    $.__views.__alloyId20018 = Ti.UI.createView({
        id: "__alloyId20018"
    });
    $.__views.__alloyId20017.add($.__views.__alloyId20018);
    $.__views.__alloyId20019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20019"
    });
    $.__views.__alloyId20018.add($.__views.__alloyId20019);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;