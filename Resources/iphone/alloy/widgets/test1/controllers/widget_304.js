function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_304";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_304 = Ti.UI.createView({
        id: "widget_304"
    });
    $.__views.widget_304 && $.addTopLevelView($.__views.widget_304);
    $.__views.__alloyId5980 = Ti.UI.createView({
        id: "__alloyId5980"
    });
    $.__views.widget_304.add($.__views.__alloyId5980);
    $.__views.__alloyId5981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5981"
    });
    $.__views.__alloyId5980.add($.__views.__alloyId5981);
    $.__views.__alloyId5982 = Ti.UI.createView({
        id: "__alloyId5982"
    });
    $.__views.__alloyId5982 && $.addTopLevelView($.__views.__alloyId5982);
    $.__views.__alloyId5983 = Ti.UI.createView({
        id: "__alloyId5983"
    });
    $.__views.__alloyId5982.add($.__views.__alloyId5983);
    $.__views.__alloyId5984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5984"
    });
    $.__views.__alloyId5983.add($.__views.__alloyId5984);
    $.__views.__alloyId5985 = Ti.UI.createView({
        id: "__alloyId5985"
    });
    $.__views.__alloyId5985 && $.addTopLevelView($.__views.__alloyId5985);
    $.__views.__alloyId5986 = Ti.UI.createView({
        id: "__alloyId5986"
    });
    $.__views.__alloyId5985.add($.__views.__alloyId5986);
    $.__views.__alloyId5987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5987"
    });
    $.__views.__alloyId5986.add($.__views.__alloyId5987);
    $.__views.__alloyId5988 = Ti.UI.createView({
        id: "__alloyId5988"
    });
    $.__views.__alloyId5988 && $.addTopLevelView($.__views.__alloyId5988);
    $.__views.__alloyId5989 = Ti.UI.createView({
        id: "__alloyId5989"
    });
    $.__views.__alloyId5988.add($.__views.__alloyId5989);
    $.__views.__alloyId5990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5990"
    });
    $.__views.__alloyId5989.add($.__views.__alloyId5990);
    $.__views.__alloyId5991 = Ti.UI.createView({
        id: "__alloyId5991"
    });
    $.__views.__alloyId5991 && $.addTopLevelView($.__views.__alloyId5991);
    $.__views.__alloyId5992 = Ti.UI.createView({
        id: "__alloyId5992"
    });
    $.__views.__alloyId5991.add($.__views.__alloyId5992);
    $.__views.__alloyId5993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5993"
    });
    $.__views.__alloyId5992.add($.__views.__alloyId5993);
    $.__views.__alloyId5994 = Ti.UI.createView({
        id: "__alloyId5994"
    });
    $.__views.__alloyId5994 && $.addTopLevelView($.__views.__alloyId5994);
    $.__views.__alloyId5995 = Ti.UI.createView({
        id: "__alloyId5995"
    });
    $.__views.__alloyId5994.add($.__views.__alloyId5995);
    $.__views.__alloyId5996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5996"
    });
    $.__views.__alloyId5995.add($.__views.__alloyId5996);
    $.__views.__alloyId5997 = Ti.UI.createView({
        id: "__alloyId5997"
    });
    $.__views.__alloyId5997 && $.addTopLevelView($.__views.__alloyId5997);
    $.__views.__alloyId5998 = Ti.UI.createView({
        id: "__alloyId5998"
    });
    $.__views.__alloyId5997.add($.__views.__alloyId5998);
    $.__views.__alloyId5999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5999"
    });
    $.__views.__alloyId5998.add($.__views.__alloyId5999);
    $.__views.__alloyId6000 = Ti.UI.createView({
        id: "__alloyId6000"
    });
    $.__views.__alloyId6000 && $.addTopLevelView($.__views.__alloyId6000);
    $.__views.__alloyId6001 = Ti.UI.createView({
        id: "__alloyId6001"
    });
    $.__views.__alloyId6000.add($.__views.__alloyId6001);
    $.__views.__alloyId6002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6002"
    });
    $.__views.__alloyId6001.add($.__views.__alloyId6002);
    $.__views.__alloyId6003 = Ti.UI.createView({
        id: "__alloyId6003"
    });
    $.__views.__alloyId6003 && $.addTopLevelView($.__views.__alloyId6003);
    $.__views.__alloyId6004 = Ti.UI.createView({
        id: "__alloyId6004"
    });
    $.__views.__alloyId6003.add($.__views.__alloyId6004);
    $.__views.__alloyId6005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6005"
    });
    $.__views.__alloyId6004.add($.__views.__alloyId6005);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;