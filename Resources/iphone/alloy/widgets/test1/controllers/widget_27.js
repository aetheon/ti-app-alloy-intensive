function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_27";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_27 = Ti.UI.createView({
        id: "widget_27"
    });
    $.__views.widget_27 && $.addTopLevelView($.__views.widget_27);
    $.__views.__alloyId4966 = Ti.UI.createView({
        id: "__alloyId4966"
    });
    $.__views.widget_27.add($.__views.__alloyId4966);
    $.__views.__alloyId4967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4967"
    });
    $.__views.__alloyId4966.add($.__views.__alloyId4967);
    $.__views.__alloyId4968 = Ti.UI.createView({
        id: "__alloyId4968"
    });
    $.__views.__alloyId4968 && $.addTopLevelView($.__views.__alloyId4968);
    $.__views.__alloyId4969 = Ti.UI.createView({
        id: "__alloyId4969"
    });
    $.__views.__alloyId4968.add($.__views.__alloyId4969);
    $.__views.__alloyId4970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4970"
    });
    $.__views.__alloyId4969.add($.__views.__alloyId4970);
    $.__views.__alloyId4971 = Ti.UI.createView({
        id: "__alloyId4971"
    });
    $.__views.__alloyId4971 && $.addTopLevelView($.__views.__alloyId4971);
    $.__views.__alloyId4972 = Ti.UI.createView({
        id: "__alloyId4972"
    });
    $.__views.__alloyId4971.add($.__views.__alloyId4972);
    $.__views.__alloyId4973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4973"
    });
    $.__views.__alloyId4972.add($.__views.__alloyId4973);
    $.__views.__alloyId4974 = Ti.UI.createView({
        id: "__alloyId4974"
    });
    $.__views.__alloyId4974 && $.addTopLevelView($.__views.__alloyId4974);
    $.__views.__alloyId4975 = Ti.UI.createView({
        id: "__alloyId4975"
    });
    $.__views.__alloyId4974.add($.__views.__alloyId4975);
    $.__views.__alloyId4976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4976"
    });
    $.__views.__alloyId4975.add($.__views.__alloyId4976);
    $.__views.__alloyId4977 = Ti.UI.createView({
        id: "__alloyId4977"
    });
    $.__views.__alloyId4977 && $.addTopLevelView($.__views.__alloyId4977);
    $.__views.__alloyId4978 = Ti.UI.createView({
        id: "__alloyId4978"
    });
    $.__views.__alloyId4977.add($.__views.__alloyId4978);
    $.__views.__alloyId4979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4979"
    });
    $.__views.__alloyId4978.add($.__views.__alloyId4979);
    $.__views.__alloyId4980 = Ti.UI.createView({
        id: "__alloyId4980"
    });
    $.__views.__alloyId4980 && $.addTopLevelView($.__views.__alloyId4980);
    $.__views.__alloyId4981 = Ti.UI.createView({
        id: "__alloyId4981"
    });
    $.__views.__alloyId4980.add($.__views.__alloyId4981);
    $.__views.__alloyId4982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4982"
    });
    $.__views.__alloyId4981.add($.__views.__alloyId4982);
    $.__views.__alloyId4983 = Ti.UI.createView({
        id: "__alloyId4983"
    });
    $.__views.__alloyId4983 && $.addTopLevelView($.__views.__alloyId4983);
    $.__views.__alloyId4984 = Ti.UI.createView({
        id: "__alloyId4984"
    });
    $.__views.__alloyId4983.add($.__views.__alloyId4984);
    $.__views.__alloyId4985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4985"
    });
    $.__views.__alloyId4984.add($.__views.__alloyId4985);
    $.__views.__alloyId4986 = Ti.UI.createView({
        id: "__alloyId4986"
    });
    $.__views.__alloyId4986 && $.addTopLevelView($.__views.__alloyId4986);
    $.__views.__alloyId4987 = Ti.UI.createView({
        id: "__alloyId4987"
    });
    $.__views.__alloyId4986.add($.__views.__alloyId4987);
    $.__views.__alloyId4988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4988"
    });
    $.__views.__alloyId4987.add($.__views.__alloyId4988);
    $.__views.__alloyId4989 = Ti.UI.createView({
        id: "__alloyId4989"
    });
    $.__views.__alloyId4989 && $.addTopLevelView($.__views.__alloyId4989);
    $.__views.__alloyId4990 = Ti.UI.createView({
        id: "__alloyId4990"
    });
    $.__views.__alloyId4989.add($.__views.__alloyId4990);
    $.__views.__alloyId4991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4991"
    });
    $.__views.__alloyId4990.add($.__views.__alloyId4991);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;