function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_442";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_442 = Ti.UI.createView({
        id: "widget_442"
    });
    $.__views.widget_442 && $.addTopLevelView($.__views.widget_442);
    $.__views.__alloyId9958 = Ti.UI.createView({
        id: "__alloyId9958"
    });
    $.__views.widget_442.add($.__views.__alloyId9958);
    $.__views.__alloyId9959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9959"
    });
    $.__views.__alloyId9958.add($.__views.__alloyId9959);
    $.__views.__alloyId9960 = Ti.UI.createView({
        id: "__alloyId9960"
    });
    $.__views.__alloyId9960 && $.addTopLevelView($.__views.__alloyId9960);
    $.__views.__alloyId9961 = Ti.UI.createView({
        id: "__alloyId9961"
    });
    $.__views.__alloyId9960.add($.__views.__alloyId9961);
    $.__views.__alloyId9962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9962"
    });
    $.__views.__alloyId9961.add($.__views.__alloyId9962);
    $.__views.__alloyId9963 = Ti.UI.createView({
        id: "__alloyId9963"
    });
    $.__views.__alloyId9963 && $.addTopLevelView($.__views.__alloyId9963);
    $.__views.__alloyId9964 = Ti.UI.createView({
        id: "__alloyId9964"
    });
    $.__views.__alloyId9963.add($.__views.__alloyId9964);
    $.__views.__alloyId9965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9965"
    });
    $.__views.__alloyId9964.add($.__views.__alloyId9965);
    $.__views.__alloyId9966 = Ti.UI.createView({
        id: "__alloyId9966"
    });
    $.__views.__alloyId9966 && $.addTopLevelView($.__views.__alloyId9966);
    $.__views.__alloyId9967 = Ti.UI.createView({
        id: "__alloyId9967"
    });
    $.__views.__alloyId9966.add($.__views.__alloyId9967);
    $.__views.__alloyId9968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9968"
    });
    $.__views.__alloyId9967.add($.__views.__alloyId9968);
    $.__views.__alloyId9969 = Ti.UI.createView({
        id: "__alloyId9969"
    });
    $.__views.__alloyId9969 && $.addTopLevelView($.__views.__alloyId9969);
    $.__views.__alloyId9970 = Ti.UI.createView({
        id: "__alloyId9970"
    });
    $.__views.__alloyId9969.add($.__views.__alloyId9970);
    $.__views.__alloyId9971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9971"
    });
    $.__views.__alloyId9970.add($.__views.__alloyId9971);
    $.__views.__alloyId9972 = Ti.UI.createView({
        id: "__alloyId9972"
    });
    $.__views.__alloyId9972 && $.addTopLevelView($.__views.__alloyId9972);
    $.__views.__alloyId9973 = Ti.UI.createView({
        id: "__alloyId9973"
    });
    $.__views.__alloyId9972.add($.__views.__alloyId9973);
    $.__views.__alloyId9974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9974"
    });
    $.__views.__alloyId9973.add($.__views.__alloyId9974);
    $.__views.__alloyId9975 = Ti.UI.createView({
        id: "__alloyId9975"
    });
    $.__views.__alloyId9975 && $.addTopLevelView($.__views.__alloyId9975);
    $.__views.__alloyId9976 = Ti.UI.createView({
        id: "__alloyId9976"
    });
    $.__views.__alloyId9975.add($.__views.__alloyId9976);
    $.__views.__alloyId9977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9977"
    });
    $.__views.__alloyId9976.add($.__views.__alloyId9977);
    $.__views.__alloyId9978 = Ti.UI.createView({
        id: "__alloyId9978"
    });
    $.__views.__alloyId9978 && $.addTopLevelView($.__views.__alloyId9978);
    $.__views.__alloyId9979 = Ti.UI.createView({
        id: "__alloyId9979"
    });
    $.__views.__alloyId9978.add($.__views.__alloyId9979);
    $.__views.__alloyId9980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9980"
    });
    $.__views.__alloyId9979.add($.__views.__alloyId9980);
    $.__views.__alloyId9981 = Ti.UI.createView({
        id: "__alloyId9981"
    });
    $.__views.__alloyId9981 && $.addTopLevelView($.__views.__alloyId9981);
    $.__views.__alloyId9982 = Ti.UI.createView({
        id: "__alloyId9982"
    });
    $.__views.__alloyId9981.add($.__views.__alloyId9982);
    $.__views.__alloyId9983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9983"
    });
    $.__views.__alloyId9982.add($.__views.__alloyId9983);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;