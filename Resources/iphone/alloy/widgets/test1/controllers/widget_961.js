function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_961";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_961 = Ti.UI.createView({
        id: "widget_961"
    });
    $.__views.widget_961 && $.addTopLevelView($.__views.widget_961);
    $.__views.__alloyId24934 = Ti.UI.createView({
        id: "__alloyId24934"
    });
    $.__views.widget_961.add($.__views.__alloyId24934);
    $.__views.__alloyId24935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24935"
    });
    $.__views.__alloyId24934.add($.__views.__alloyId24935);
    $.__views.__alloyId24936 = Ti.UI.createView({
        id: "__alloyId24936"
    });
    $.__views.__alloyId24936 && $.addTopLevelView($.__views.__alloyId24936);
    $.__views.__alloyId24937 = Ti.UI.createView({
        id: "__alloyId24937"
    });
    $.__views.__alloyId24936.add($.__views.__alloyId24937);
    $.__views.__alloyId24938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24938"
    });
    $.__views.__alloyId24937.add($.__views.__alloyId24938);
    $.__views.__alloyId24939 = Ti.UI.createView({
        id: "__alloyId24939"
    });
    $.__views.__alloyId24939 && $.addTopLevelView($.__views.__alloyId24939);
    $.__views.__alloyId24940 = Ti.UI.createView({
        id: "__alloyId24940"
    });
    $.__views.__alloyId24939.add($.__views.__alloyId24940);
    $.__views.__alloyId24941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24941"
    });
    $.__views.__alloyId24940.add($.__views.__alloyId24941);
    $.__views.__alloyId24942 = Ti.UI.createView({
        id: "__alloyId24942"
    });
    $.__views.__alloyId24942 && $.addTopLevelView($.__views.__alloyId24942);
    $.__views.__alloyId24943 = Ti.UI.createView({
        id: "__alloyId24943"
    });
    $.__views.__alloyId24942.add($.__views.__alloyId24943);
    $.__views.__alloyId24944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24944"
    });
    $.__views.__alloyId24943.add($.__views.__alloyId24944);
    $.__views.__alloyId24945 = Ti.UI.createView({
        id: "__alloyId24945"
    });
    $.__views.__alloyId24945 && $.addTopLevelView($.__views.__alloyId24945);
    $.__views.__alloyId24946 = Ti.UI.createView({
        id: "__alloyId24946"
    });
    $.__views.__alloyId24945.add($.__views.__alloyId24946);
    $.__views.__alloyId24947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24947"
    });
    $.__views.__alloyId24946.add($.__views.__alloyId24947);
    $.__views.__alloyId24948 = Ti.UI.createView({
        id: "__alloyId24948"
    });
    $.__views.__alloyId24948 && $.addTopLevelView($.__views.__alloyId24948);
    $.__views.__alloyId24949 = Ti.UI.createView({
        id: "__alloyId24949"
    });
    $.__views.__alloyId24948.add($.__views.__alloyId24949);
    $.__views.__alloyId24950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24950"
    });
    $.__views.__alloyId24949.add($.__views.__alloyId24950);
    $.__views.__alloyId24951 = Ti.UI.createView({
        id: "__alloyId24951"
    });
    $.__views.__alloyId24951 && $.addTopLevelView($.__views.__alloyId24951);
    $.__views.__alloyId24952 = Ti.UI.createView({
        id: "__alloyId24952"
    });
    $.__views.__alloyId24951.add($.__views.__alloyId24952);
    $.__views.__alloyId24953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24953"
    });
    $.__views.__alloyId24952.add($.__views.__alloyId24953);
    $.__views.__alloyId24954 = Ti.UI.createView({
        id: "__alloyId24954"
    });
    $.__views.__alloyId24954 && $.addTopLevelView($.__views.__alloyId24954);
    $.__views.__alloyId24955 = Ti.UI.createView({
        id: "__alloyId24955"
    });
    $.__views.__alloyId24954.add($.__views.__alloyId24955);
    $.__views.__alloyId24956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24956"
    });
    $.__views.__alloyId24955.add($.__views.__alloyId24956);
    $.__views.__alloyId24957 = Ti.UI.createView({
        id: "__alloyId24957"
    });
    $.__views.__alloyId24957 && $.addTopLevelView($.__views.__alloyId24957);
    $.__views.__alloyId24958 = Ti.UI.createView({
        id: "__alloyId24958"
    });
    $.__views.__alloyId24957.add($.__views.__alloyId24958);
    $.__views.__alloyId24959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24959"
    });
    $.__views.__alloyId24958.add($.__views.__alloyId24959);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;