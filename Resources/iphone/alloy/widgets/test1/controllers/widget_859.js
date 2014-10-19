function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_859";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_859 = Ti.UI.createView({
        id: "widget_859"
    });
    $.__views.widget_859 && $.addTopLevelView($.__views.widget_859);
    $.__views.__alloyId21970 = Ti.UI.createView({
        id: "__alloyId21970"
    });
    $.__views.widget_859.add($.__views.__alloyId21970);
    $.__views.__alloyId21971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21971"
    });
    $.__views.__alloyId21970.add($.__views.__alloyId21971);
    $.__views.__alloyId21972 = Ti.UI.createView({
        id: "__alloyId21972"
    });
    $.__views.__alloyId21972 && $.addTopLevelView($.__views.__alloyId21972);
    $.__views.__alloyId21973 = Ti.UI.createView({
        id: "__alloyId21973"
    });
    $.__views.__alloyId21972.add($.__views.__alloyId21973);
    $.__views.__alloyId21974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21974"
    });
    $.__views.__alloyId21973.add($.__views.__alloyId21974);
    $.__views.__alloyId21975 = Ti.UI.createView({
        id: "__alloyId21975"
    });
    $.__views.__alloyId21975 && $.addTopLevelView($.__views.__alloyId21975);
    $.__views.__alloyId21976 = Ti.UI.createView({
        id: "__alloyId21976"
    });
    $.__views.__alloyId21975.add($.__views.__alloyId21976);
    $.__views.__alloyId21977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21977"
    });
    $.__views.__alloyId21976.add($.__views.__alloyId21977);
    $.__views.__alloyId21978 = Ti.UI.createView({
        id: "__alloyId21978"
    });
    $.__views.__alloyId21978 && $.addTopLevelView($.__views.__alloyId21978);
    $.__views.__alloyId21979 = Ti.UI.createView({
        id: "__alloyId21979"
    });
    $.__views.__alloyId21978.add($.__views.__alloyId21979);
    $.__views.__alloyId21980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21980"
    });
    $.__views.__alloyId21979.add($.__views.__alloyId21980);
    $.__views.__alloyId21981 = Ti.UI.createView({
        id: "__alloyId21981"
    });
    $.__views.__alloyId21981 && $.addTopLevelView($.__views.__alloyId21981);
    $.__views.__alloyId21982 = Ti.UI.createView({
        id: "__alloyId21982"
    });
    $.__views.__alloyId21981.add($.__views.__alloyId21982);
    $.__views.__alloyId21983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21983"
    });
    $.__views.__alloyId21982.add($.__views.__alloyId21983);
    $.__views.__alloyId21984 = Ti.UI.createView({
        id: "__alloyId21984"
    });
    $.__views.__alloyId21984 && $.addTopLevelView($.__views.__alloyId21984);
    $.__views.__alloyId21985 = Ti.UI.createView({
        id: "__alloyId21985"
    });
    $.__views.__alloyId21984.add($.__views.__alloyId21985);
    $.__views.__alloyId21986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21986"
    });
    $.__views.__alloyId21985.add($.__views.__alloyId21986);
    $.__views.__alloyId21987 = Ti.UI.createView({
        id: "__alloyId21987"
    });
    $.__views.__alloyId21987 && $.addTopLevelView($.__views.__alloyId21987);
    $.__views.__alloyId21988 = Ti.UI.createView({
        id: "__alloyId21988"
    });
    $.__views.__alloyId21987.add($.__views.__alloyId21988);
    $.__views.__alloyId21989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21989"
    });
    $.__views.__alloyId21988.add($.__views.__alloyId21989);
    $.__views.__alloyId21990 = Ti.UI.createView({
        id: "__alloyId21990"
    });
    $.__views.__alloyId21990 && $.addTopLevelView($.__views.__alloyId21990);
    $.__views.__alloyId21991 = Ti.UI.createView({
        id: "__alloyId21991"
    });
    $.__views.__alloyId21990.add($.__views.__alloyId21991);
    $.__views.__alloyId21992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21992"
    });
    $.__views.__alloyId21991.add($.__views.__alloyId21992);
    $.__views.__alloyId21993 = Ti.UI.createView({
        id: "__alloyId21993"
    });
    $.__views.__alloyId21993 && $.addTopLevelView($.__views.__alloyId21993);
    $.__views.__alloyId21994 = Ti.UI.createView({
        id: "__alloyId21994"
    });
    $.__views.__alloyId21993.add($.__views.__alloyId21994);
    $.__views.__alloyId21995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21995"
    });
    $.__views.__alloyId21994.add($.__views.__alloyId21995);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;