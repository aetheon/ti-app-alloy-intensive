function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_130";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_130 = Ti.UI.createView({
        id: "widget_130"
    });
    $.__views.widget_130 && $.addTopLevelView($.__views.widget_130);
    $.__views.__alloyId962 = Ti.UI.createView({
        id: "__alloyId962"
    });
    $.__views.widget_130.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId963"
    });
    $.__views.__alloyId962.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createView({
        id: "__alloyId964"
    });
    $.__views.__alloyId964 && $.addTopLevelView($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createView({
        id: "__alloyId965"
    });
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createView({
        id: "__alloyId967"
    });
    $.__views.__alloyId967 && $.addTopLevelView($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        id: "__alloyId968"
    });
    $.__views.__alloyId967.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createView({
        id: "__alloyId970"
    });
    $.__views.__alloyId970 && $.addTopLevelView($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
        id: "__alloyId971"
    });
    $.__views.__alloyId970.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId972"
    });
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createView({
        id: "__alloyId973"
    });
    $.__views.__alloyId973 && $.addTopLevelView($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createView({
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createView({
        id: "__alloyId976"
    });
    $.__views.__alloyId976 && $.addTopLevelView($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createView({
        id: "__alloyId977"
    });
    $.__views.__alloyId976.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId978"
    });
    $.__views.__alloyId977.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createView({
        id: "__alloyId979"
    });
    $.__views.__alloyId979 && $.addTopLevelView($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createView({
        id: "__alloyId980"
    });
    $.__views.__alloyId979.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createView({
        id: "__alloyId982"
    });
    $.__views.__alloyId982 && $.addTopLevelView($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        id: "__alloyId983"
    });
    $.__views.__alloyId982.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createView({
        id: "__alloyId985"
    });
    $.__views.__alloyId985 && $.addTopLevelView($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId987"
    });
    $.__views.__alloyId986.add($.__views.__alloyId987);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;