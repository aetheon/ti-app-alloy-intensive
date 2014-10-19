function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_823";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_823 = Ti.UI.createView({
        id: "widget_823"
    });
    $.__views.widget_823 && $.addTopLevelView($.__views.widget_823);
    $.__views.__alloyId20956 = Ti.UI.createView({
        id: "__alloyId20956"
    });
    $.__views.widget_823.add($.__views.__alloyId20956);
    $.__views.__alloyId20957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20957"
    });
    $.__views.__alloyId20956.add($.__views.__alloyId20957);
    $.__views.__alloyId20958 = Ti.UI.createView({
        id: "__alloyId20958"
    });
    $.__views.__alloyId20958 && $.addTopLevelView($.__views.__alloyId20958);
    $.__views.__alloyId20959 = Ti.UI.createView({
        id: "__alloyId20959"
    });
    $.__views.__alloyId20958.add($.__views.__alloyId20959);
    $.__views.__alloyId20960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20960"
    });
    $.__views.__alloyId20959.add($.__views.__alloyId20960);
    $.__views.__alloyId20961 = Ti.UI.createView({
        id: "__alloyId20961"
    });
    $.__views.__alloyId20961 && $.addTopLevelView($.__views.__alloyId20961);
    $.__views.__alloyId20962 = Ti.UI.createView({
        id: "__alloyId20962"
    });
    $.__views.__alloyId20961.add($.__views.__alloyId20962);
    $.__views.__alloyId20963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20963"
    });
    $.__views.__alloyId20962.add($.__views.__alloyId20963);
    $.__views.__alloyId20964 = Ti.UI.createView({
        id: "__alloyId20964"
    });
    $.__views.__alloyId20964 && $.addTopLevelView($.__views.__alloyId20964);
    $.__views.__alloyId20965 = Ti.UI.createView({
        id: "__alloyId20965"
    });
    $.__views.__alloyId20964.add($.__views.__alloyId20965);
    $.__views.__alloyId20966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20966"
    });
    $.__views.__alloyId20965.add($.__views.__alloyId20966);
    $.__views.__alloyId20967 = Ti.UI.createView({
        id: "__alloyId20967"
    });
    $.__views.__alloyId20967 && $.addTopLevelView($.__views.__alloyId20967);
    $.__views.__alloyId20968 = Ti.UI.createView({
        id: "__alloyId20968"
    });
    $.__views.__alloyId20967.add($.__views.__alloyId20968);
    $.__views.__alloyId20969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20969"
    });
    $.__views.__alloyId20968.add($.__views.__alloyId20969);
    $.__views.__alloyId20970 = Ti.UI.createView({
        id: "__alloyId20970"
    });
    $.__views.__alloyId20970 && $.addTopLevelView($.__views.__alloyId20970);
    $.__views.__alloyId20971 = Ti.UI.createView({
        id: "__alloyId20971"
    });
    $.__views.__alloyId20970.add($.__views.__alloyId20971);
    $.__views.__alloyId20972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20972"
    });
    $.__views.__alloyId20971.add($.__views.__alloyId20972);
    $.__views.__alloyId20973 = Ti.UI.createView({
        id: "__alloyId20973"
    });
    $.__views.__alloyId20973 && $.addTopLevelView($.__views.__alloyId20973);
    $.__views.__alloyId20974 = Ti.UI.createView({
        id: "__alloyId20974"
    });
    $.__views.__alloyId20973.add($.__views.__alloyId20974);
    $.__views.__alloyId20975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20975"
    });
    $.__views.__alloyId20974.add($.__views.__alloyId20975);
    $.__views.__alloyId20976 = Ti.UI.createView({
        id: "__alloyId20976"
    });
    $.__views.__alloyId20976 && $.addTopLevelView($.__views.__alloyId20976);
    $.__views.__alloyId20977 = Ti.UI.createView({
        id: "__alloyId20977"
    });
    $.__views.__alloyId20976.add($.__views.__alloyId20977);
    $.__views.__alloyId20978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20978"
    });
    $.__views.__alloyId20977.add($.__views.__alloyId20978);
    $.__views.__alloyId20979 = Ti.UI.createView({
        id: "__alloyId20979"
    });
    $.__views.__alloyId20979 && $.addTopLevelView($.__views.__alloyId20979);
    $.__views.__alloyId20980 = Ti.UI.createView({
        id: "__alloyId20980"
    });
    $.__views.__alloyId20979.add($.__views.__alloyId20980);
    $.__views.__alloyId20981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20981"
    });
    $.__views.__alloyId20980.add($.__views.__alloyId20981);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;