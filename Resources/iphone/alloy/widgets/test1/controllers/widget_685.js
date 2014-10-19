function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_685";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_685 = Ti.UI.createView({
        id: "widget_685"
    });
    $.__views.widget_685 && $.addTopLevelView($.__views.widget_685);
    $.__views.__alloyId16952 = Ti.UI.createView({
        id: "__alloyId16952"
    });
    $.__views.widget_685.add($.__views.__alloyId16952);
    $.__views.__alloyId16953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16953"
    });
    $.__views.__alloyId16952.add($.__views.__alloyId16953);
    $.__views.__alloyId16954 = Ti.UI.createView({
        id: "__alloyId16954"
    });
    $.__views.__alloyId16954 && $.addTopLevelView($.__views.__alloyId16954);
    $.__views.__alloyId16955 = Ti.UI.createView({
        id: "__alloyId16955"
    });
    $.__views.__alloyId16954.add($.__views.__alloyId16955);
    $.__views.__alloyId16956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16956"
    });
    $.__views.__alloyId16955.add($.__views.__alloyId16956);
    $.__views.__alloyId16957 = Ti.UI.createView({
        id: "__alloyId16957"
    });
    $.__views.__alloyId16957 && $.addTopLevelView($.__views.__alloyId16957);
    $.__views.__alloyId16958 = Ti.UI.createView({
        id: "__alloyId16958"
    });
    $.__views.__alloyId16957.add($.__views.__alloyId16958);
    $.__views.__alloyId16959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16959"
    });
    $.__views.__alloyId16958.add($.__views.__alloyId16959);
    $.__views.__alloyId16960 = Ti.UI.createView({
        id: "__alloyId16960"
    });
    $.__views.__alloyId16960 && $.addTopLevelView($.__views.__alloyId16960);
    $.__views.__alloyId16961 = Ti.UI.createView({
        id: "__alloyId16961"
    });
    $.__views.__alloyId16960.add($.__views.__alloyId16961);
    $.__views.__alloyId16962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16962"
    });
    $.__views.__alloyId16961.add($.__views.__alloyId16962);
    $.__views.__alloyId16963 = Ti.UI.createView({
        id: "__alloyId16963"
    });
    $.__views.__alloyId16963 && $.addTopLevelView($.__views.__alloyId16963);
    $.__views.__alloyId16964 = Ti.UI.createView({
        id: "__alloyId16964"
    });
    $.__views.__alloyId16963.add($.__views.__alloyId16964);
    $.__views.__alloyId16965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16965"
    });
    $.__views.__alloyId16964.add($.__views.__alloyId16965);
    $.__views.__alloyId16966 = Ti.UI.createView({
        id: "__alloyId16966"
    });
    $.__views.__alloyId16966 && $.addTopLevelView($.__views.__alloyId16966);
    $.__views.__alloyId16967 = Ti.UI.createView({
        id: "__alloyId16967"
    });
    $.__views.__alloyId16966.add($.__views.__alloyId16967);
    $.__views.__alloyId16968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16968"
    });
    $.__views.__alloyId16967.add($.__views.__alloyId16968);
    $.__views.__alloyId16969 = Ti.UI.createView({
        id: "__alloyId16969"
    });
    $.__views.__alloyId16969 && $.addTopLevelView($.__views.__alloyId16969);
    $.__views.__alloyId16970 = Ti.UI.createView({
        id: "__alloyId16970"
    });
    $.__views.__alloyId16969.add($.__views.__alloyId16970);
    $.__views.__alloyId16971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16971"
    });
    $.__views.__alloyId16970.add($.__views.__alloyId16971);
    $.__views.__alloyId16972 = Ti.UI.createView({
        id: "__alloyId16972"
    });
    $.__views.__alloyId16972 && $.addTopLevelView($.__views.__alloyId16972);
    $.__views.__alloyId16973 = Ti.UI.createView({
        id: "__alloyId16973"
    });
    $.__views.__alloyId16972.add($.__views.__alloyId16973);
    $.__views.__alloyId16974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16974"
    });
    $.__views.__alloyId16973.add($.__views.__alloyId16974);
    $.__views.__alloyId16975 = Ti.UI.createView({
        id: "__alloyId16975"
    });
    $.__views.__alloyId16975 && $.addTopLevelView($.__views.__alloyId16975);
    $.__views.__alloyId16976 = Ti.UI.createView({
        id: "__alloyId16976"
    });
    $.__views.__alloyId16975.add($.__views.__alloyId16976);
    $.__views.__alloyId16977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16977"
    });
    $.__views.__alloyId16976.add($.__views.__alloyId16977);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;