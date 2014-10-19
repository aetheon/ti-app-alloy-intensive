function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_234";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_234 = Ti.UI.createView({
        id: "widget_234"
    });
    $.__views.widget_234 && $.addTopLevelView($.__views.widget_234);
    $.__views.__alloyId3952 = Ti.UI.createView({
        id: "__alloyId3952"
    });
    $.__views.widget_234.add($.__views.__alloyId3952);
    $.__views.__alloyId3953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3953"
    });
    $.__views.__alloyId3952.add($.__views.__alloyId3953);
    $.__views.__alloyId3954 = Ti.UI.createView({
        id: "__alloyId3954"
    });
    $.__views.__alloyId3954 && $.addTopLevelView($.__views.__alloyId3954);
    $.__views.__alloyId3955 = Ti.UI.createView({
        id: "__alloyId3955"
    });
    $.__views.__alloyId3954.add($.__views.__alloyId3955);
    $.__views.__alloyId3956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3956"
    });
    $.__views.__alloyId3955.add($.__views.__alloyId3956);
    $.__views.__alloyId3957 = Ti.UI.createView({
        id: "__alloyId3957"
    });
    $.__views.__alloyId3957 && $.addTopLevelView($.__views.__alloyId3957);
    $.__views.__alloyId3958 = Ti.UI.createView({
        id: "__alloyId3958"
    });
    $.__views.__alloyId3957.add($.__views.__alloyId3958);
    $.__views.__alloyId3959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3959"
    });
    $.__views.__alloyId3958.add($.__views.__alloyId3959);
    $.__views.__alloyId3960 = Ti.UI.createView({
        id: "__alloyId3960"
    });
    $.__views.__alloyId3960 && $.addTopLevelView($.__views.__alloyId3960);
    $.__views.__alloyId3961 = Ti.UI.createView({
        id: "__alloyId3961"
    });
    $.__views.__alloyId3960.add($.__views.__alloyId3961);
    $.__views.__alloyId3962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3962"
    });
    $.__views.__alloyId3961.add($.__views.__alloyId3962);
    $.__views.__alloyId3963 = Ti.UI.createView({
        id: "__alloyId3963"
    });
    $.__views.__alloyId3963 && $.addTopLevelView($.__views.__alloyId3963);
    $.__views.__alloyId3964 = Ti.UI.createView({
        id: "__alloyId3964"
    });
    $.__views.__alloyId3963.add($.__views.__alloyId3964);
    $.__views.__alloyId3965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3965"
    });
    $.__views.__alloyId3964.add($.__views.__alloyId3965);
    $.__views.__alloyId3966 = Ti.UI.createView({
        id: "__alloyId3966"
    });
    $.__views.__alloyId3966 && $.addTopLevelView($.__views.__alloyId3966);
    $.__views.__alloyId3967 = Ti.UI.createView({
        id: "__alloyId3967"
    });
    $.__views.__alloyId3966.add($.__views.__alloyId3967);
    $.__views.__alloyId3968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3968"
    });
    $.__views.__alloyId3967.add($.__views.__alloyId3968);
    $.__views.__alloyId3969 = Ti.UI.createView({
        id: "__alloyId3969"
    });
    $.__views.__alloyId3969 && $.addTopLevelView($.__views.__alloyId3969);
    $.__views.__alloyId3970 = Ti.UI.createView({
        id: "__alloyId3970"
    });
    $.__views.__alloyId3969.add($.__views.__alloyId3970);
    $.__views.__alloyId3971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3971"
    });
    $.__views.__alloyId3970.add($.__views.__alloyId3971);
    $.__views.__alloyId3972 = Ti.UI.createView({
        id: "__alloyId3972"
    });
    $.__views.__alloyId3972 && $.addTopLevelView($.__views.__alloyId3972);
    $.__views.__alloyId3973 = Ti.UI.createView({
        id: "__alloyId3973"
    });
    $.__views.__alloyId3972.add($.__views.__alloyId3973);
    $.__views.__alloyId3974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3974"
    });
    $.__views.__alloyId3973.add($.__views.__alloyId3974);
    $.__views.__alloyId3975 = Ti.UI.createView({
        id: "__alloyId3975"
    });
    $.__views.__alloyId3975 && $.addTopLevelView($.__views.__alloyId3975);
    $.__views.__alloyId3976 = Ti.UI.createView({
        id: "__alloyId3976"
    });
    $.__views.__alloyId3975.add($.__views.__alloyId3976);
    $.__views.__alloyId3977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3977"
    });
    $.__views.__alloyId3976.add($.__views.__alloyId3977);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;