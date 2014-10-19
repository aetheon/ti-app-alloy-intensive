function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_755";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_755 = Ti.UI.createView({
        id: "widget_755"
    });
    $.__views.widget_755 && $.addTopLevelView($.__views.widget_755);
    $.__views.__alloyId18980 = Ti.UI.createView({
        id: "__alloyId18980"
    });
    $.__views.widget_755.add($.__views.__alloyId18980);
    $.__views.__alloyId18981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18981"
    });
    $.__views.__alloyId18980.add($.__views.__alloyId18981);
    $.__views.__alloyId18982 = Ti.UI.createView({
        id: "__alloyId18982"
    });
    $.__views.__alloyId18982 && $.addTopLevelView($.__views.__alloyId18982);
    $.__views.__alloyId18983 = Ti.UI.createView({
        id: "__alloyId18983"
    });
    $.__views.__alloyId18982.add($.__views.__alloyId18983);
    $.__views.__alloyId18984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18984"
    });
    $.__views.__alloyId18983.add($.__views.__alloyId18984);
    $.__views.__alloyId18985 = Ti.UI.createView({
        id: "__alloyId18985"
    });
    $.__views.__alloyId18985 && $.addTopLevelView($.__views.__alloyId18985);
    $.__views.__alloyId18986 = Ti.UI.createView({
        id: "__alloyId18986"
    });
    $.__views.__alloyId18985.add($.__views.__alloyId18986);
    $.__views.__alloyId18987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18987"
    });
    $.__views.__alloyId18986.add($.__views.__alloyId18987);
    $.__views.__alloyId18988 = Ti.UI.createView({
        id: "__alloyId18988"
    });
    $.__views.__alloyId18988 && $.addTopLevelView($.__views.__alloyId18988);
    $.__views.__alloyId18989 = Ti.UI.createView({
        id: "__alloyId18989"
    });
    $.__views.__alloyId18988.add($.__views.__alloyId18989);
    $.__views.__alloyId18990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18990"
    });
    $.__views.__alloyId18989.add($.__views.__alloyId18990);
    $.__views.__alloyId18991 = Ti.UI.createView({
        id: "__alloyId18991"
    });
    $.__views.__alloyId18991 && $.addTopLevelView($.__views.__alloyId18991);
    $.__views.__alloyId18992 = Ti.UI.createView({
        id: "__alloyId18992"
    });
    $.__views.__alloyId18991.add($.__views.__alloyId18992);
    $.__views.__alloyId18993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18993"
    });
    $.__views.__alloyId18992.add($.__views.__alloyId18993);
    $.__views.__alloyId18994 = Ti.UI.createView({
        id: "__alloyId18994"
    });
    $.__views.__alloyId18994 && $.addTopLevelView($.__views.__alloyId18994);
    $.__views.__alloyId18995 = Ti.UI.createView({
        id: "__alloyId18995"
    });
    $.__views.__alloyId18994.add($.__views.__alloyId18995);
    $.__views.__alloyId18996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18996"
    });
    $.__views.__alloyId18995.add($.__views.__alloyId18996);
    $.__views.__alloyId18997 = Ti.UI.createView({
        id: "__alloyId18997"
    });
    $.__views.__alloyId18997 && $.addTopLevelView($.__views.__alloyId18997);
    $.__views.__alloyId18998 = Ti.UI.createView({
        id: "__alloyId18998"
    });
    $.__views.__alloyId18997.add($.__views.__alloyId18998);
    $.__views.__alloyId18999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18999"
    });
    $.__views.__alloyId18998.add($.__views.__alloyId18999);
    $.__views.__alloyId19000 = Ti.UI.createView({
        id: "__alloyId19000"
    });
    $.__views.__alloyId19000 && $.addTopLevelView($.__views.__alloyId19000);
    $.__views.__alloyId19001 = Ti.UI.createView({
        id: "__alloyId19001"
    });
    $.__views.__alloyId19000.add($.__views.__alloyId19001);
    $.__views.__alloyId19002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19002"
    });
    $.__views.__alloyId19001.add($.__views.__alloyId19002);
    $.__views.__alloyId19003 = Ti.UI.createView({
        id: "__alloyId19003"
    });
    $.__views.__alloyId19003 && $.addTopLevelView($.__views.__alloyId19003);
    $.__views.__alloyId19004 = Ti.UI.createView({
        id: "__alloyId19004"
    });
    $.__views.__alloyId19003.add($.__views.__alloyId19004);
    $.__views.__alloyId19005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19005"
    });
    $.__views.__alloyId19004.add($.__views.__alloyId19005);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;