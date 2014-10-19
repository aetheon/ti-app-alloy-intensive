function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_997";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_997 = Ti.UI.createView({
        id: "widget_997"
    });
    $.__views.widget_997 && $.addTopLevelView($.__views.widget_997);
    $.__views.__alloyId25948 = Ti.UI.createView({
        id: "__alloyId25948"
    });
    $.__views.widget_997.add($.__views.__alloyId25948);
    $.__views.__alloyId25949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25949"
    });
    $.__views.__alloyId25948.add($.__views.__alloyId25949);
    $.__views.__alloyId25950 = Ti.UI.createView({
        id: "__alloyId25950"
    });
    $.__views.__alloyId25950 && $.addTopLevelView($.__views.__alloyId25950);
    $.__views.__alloyId25951 = Ti.UI.createView({
        id: "__alloyId25951"
    });
    $.__views.__alloyId25950.add($.__views.__alloyId25951);
    $.__views.__alloyId25952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25952"
    });
    $.__views.__alloyId25951.add($.__views.__alloyId25952);
    $.__views.__alloyId25953 = Ti.UI.createView({
        id: "__alloyId25953"
    });
    $.__views.__alloyId25953 && $.addTopLevelView($.__views.__alloyId25953);
    $.__views.__alloyId25954 = Ti.UI.createView({
        id: "__alloyId25954"
    });
    $.__views.__alloyId25953.add($.__views.__alloyId25954);
    $.__views.__alloyId25955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25955"
    });
    $.__views.__alloyId25954.add($.__views.__alloyId25955);
    $.__views.__alloyId25956 = Ti.UI.createView({
        id: "__alloyId25956"
    });
    $.__views.__alloyId25956 && $.addTopLevelView($.__views.__alloyId25956);
    $.__views.__alloyId25957 = Ti.UI.createView({
        id: "__alloyId25957"
    });
    $.__views.__alloyId25956.add($.__views.__alloyId25957);
    $.__views.__alloyId25958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25958"
    });
    $.__views.__alloyId25957.add($.__views.__alloyId25958);
    $.__views.__alloyId25959 = Ti.UI.createView({
        id: "__alloyId25959"
    });
    $.__views.__alloyId25959 && $.addTopLevelView($.__views.__alloyId25959);
    $.__views.__alloyId25960 = Ti.UI.createView({
        id: "__alloyId25960"
    });
    $.__views.__alloyId25959.add($.__views.__alloyId25960);
    $.__views.__alloyId25961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25961"
    });
    $.__views.__alloyId25960.add($.__views.__alloyId25961);
    $.__views.__alloyId25962 = Ti.UI.createView({
        id: "__alloyId25962"
    });
    $.__views.__alloyId25962 && $.addTopLevelView($.__views.__alloyId25962);
    $.__views.__alloyId25963 = Ti.UI.createView({
        id: "__alloyId25963"
    });
    $.__views.__alloyId25962.add($.__views.__alloyId25963);
    $.__views.__alloyId25964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25964"
    });
    $.__views.__alloyId25963.add($.__views.__alloyId25964);
    $.__views.__alloyId25965 = Ti.UI.createView({
        id: "__alloyId25965"
    });
    $.__views.__alloyId25965 && $.addTopLevelView($.__views.__alloyId25965);
    $.__views.__alloyId25966 = Ti.UI.createView({
        id: "__alloyId25966"
    });
    $.__views.__alloyId25965.add($.__views.__alloyId25966);
    $.__views.__alloyId25967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25967"
    });
    $.__views.__alloyId25966.add($.__views.__alloyId25967);
    $.__views.__alloyId25968 = Ti.UI.createView({
        id: "__alloyId25968"
    });
    $.__views.__alloyId25968 && $.addTopLevelView($.__views.__alloyId25968);
    $.__views.__alloyId25969 = Ti.UI.createView({
        id: "__alloyId25969"
    });
    $.__views.__alloyId25968.add($.__views.__alloyId25969);
    $.__views.__alloyId25970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25970"
    });
    $.__views.__alloyId25969.add($.__views.__alloyId25970);
    $.__views.__alloyId25971 = Ti.UI.createView({
        id: "__alloyId25971"
    });
    $.__views.__alloyId25971 && $.addTopLevelView($.__views.__alloyId25971);
    $.__views.__alloyId25972 = Ti.UI.createView({
        id: "__alloyId25972"
    });
    $.__views.__alloyId25971.add($.__views.__alloyId25972);
    $.__views.__alloyId25973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25973"
    });
    $.__views.__alloyId25972.add($.__views.__alloyId25973);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;