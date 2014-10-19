function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_616";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_616 = Ti.UI.createView({
        id: "widget_616"
    });
    $.__views.widget_616 && $.addTopLevelView($.__views.widget_616);
    $.__views.__alloyId14976 = Ti.UI.createView({
        id: "__alloyId14976"
    });
    $.__views.widget_616.add($.__views.__alloyId14976);
    $.__views.__alloyId14977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14977"
    });
    $.__views.__alloyId14976.add($.__views.__alloyId14977);
    $.__views.__alloyId14978 = Ti.UI.createView({
        id: "__alloyId14978"
    });
    $.__views.__alloyId14978 && $.addTopLevelView($.__views.__alloyId14978);
    $.__views.__alloyId14979 = Ti.UI.createView({
        id: "__alloyId14979"
    });
    $.__views.__alloyId14978.add($.__views.__alloyId14979);
    $.__views.__alloyId14980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14980"
    });
    $.__views.__alloyId14979.add($.__views.__alloyId14980);
    $.__views.__alloyId14981 = Ti.UI.createView({
        id: "__alloyId14981"
    });
    $.__views.__alloyId14981 && $.addTopLevelView($.__views.__alloyId14981);
    $.__views.__alloyId14982 = Ti.UI.createView({
        id: "__alloyId14982"
    });
    $.__views.__alloyId14981.add($.__views.__alloyId14982);
    $.__views.__alloyId14983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14983"
    });
    $.__views.__alloyId14982.add($.__views.__alloyId14983);
    $.__views.__alloyId14984 = Ti.UI.createView({
        id: "__alloyId14984"
    });
    $.__views.__alloyId14984 && $.addTopLevelView($.__views.__alloyId14984);
    $.__views.__alloyId14985 = Ti.UI.createView({
        id: "__alloyId14985"
    });
    $.__views.__alloyId14984.add($.__views.__alloyId14985);
    $.__views.__alloyId14986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14986"
    });
    $.__views.__alloyId14985.add($.__views.__alloyId14986);
    $.__views.__alloyId14987 = Ti.UI.createView({
        id: "__alloyId14987"
    });
    $.__views.__alloyId14987 && $.addTopLevelView($.__views.__alloyId14987);
    $.__views.__alloyId14988 = Ti.UI.createView({
        id: "__alloyId14988"
    });
    $.__views.__alloyId14987.add($.__views.__alloyId14988);
    $.__views.__alloyId14989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14989"
    });
    $.__views.__alloyId14988.add($.__views.__alloyId14989);
    $.__views.__alloyId14990 = Ti.UI.createView({
        id: "__alloyId14990"
    });
    $.__views.__alloyId14990 && $.addTopLevelView($.__views.__alloyId14990);
    $.__views.__alloyId14991 = Ti.UI.createView({
        id: "__alloyId14991"
    });
    $.__views.__alloyId14990.add($.__views.__alloyId14991);
    $.__views.__alloyId14992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14992"
    });
    $.__views.__alloyId14991.add($.__views.__alloyId14992);
    $.__views.__alloyId14993 = Ti.UI.createView({
        id: "__alloyId14993"
    });
    $.__views.__alloyId14993 && $.addTopLevelView($.__views.__alloyId14993);
    $.__views.__alloyId14994 = Ti.UI.createView({
        id: "__alloyId14994"
    });
    $.__views.__alloyId14993.add($.__views.__alloyId14994);
    $.__views.__alloyId14995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14995"
    });
    $.__views.__alloyId14994.add($.__views.__alloyId14995);
    $.__views.__alloyId14996 = Ti.UI.createView({
        id: "__alloyId14996"
    });
    $.__views.__alloyId14996 && $.addTopLevelView($.__views.__alloyId14996);
    $.__views.__alloyId14997 = Ti.UI.createView({
        id: "__alloyId14997"
    });
    $.__views.__alloyId14996.add($.__views.__alloyId14997);
    $.__views.__alloyId14998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14998"
    });
    $.__views.__alloyId14997.add($.__views.__alloyId14998);
    $.__views.__alloyId14999 = Ti.UI.createView({
        id: "__alloyId14999"
    });
    $.__views.__alloyId14999 && $.addTopLevelView($.__views.__alloyId14999);
    $.__views.__alloyId15000 = Ti.UI.createView({
        id: "__alloyId15000"
    });
    $.__views.__alloyId14999.add($.__views.__alloyId15000);
    $.__views.__alloyId15001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15001"
    });
    $.__views.__alloyId15000.add($.__views.__alloyId15001);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;