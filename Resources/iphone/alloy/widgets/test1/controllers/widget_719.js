function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_719";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_719 = Ti.UI.createView({
        id: "widget_719"
    });
    $.__views.widget_719 && $.addTopLevelView($.__views.widget_719);
    $.__views.__alloyId17940 = Ti.UI.createView({
        id: "__alloyId17940"
    });
    $.__views.widget_719.add($.__views.__alloyId17940);
    $.__views.__alloyId17941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17941"
    });
    $.__views.__alloyId17940.add($.__views.__alloyId17941);
    $.__views.__alloyId17942 = Ti.UI.createView({
        id: "__alloyId17942"
    });
    $.__views.__alloyId17942 && $.addTopLevelView($.__views.__alloyId17942);
    $.__views.__alloyId17943 = Ti.UI.createView({
        id: "__alloyId17943"
    });
    $.__views.__alloyId17942.add($.__views.__alloyId17943);
    $.__views.__alloyId17944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17944"
    });
    $.__views.__alloyId17943.add($.__views.__alloyId17944);
    $.__views.__alloyId17945 = Ti.UI.createView({
        id: "__alloyId17945"
    });
    $.__views.__alloyId17945 && $.addTopLevelView($.__views.__alloyId17945);
    $.__views.__alloyId17946 = Ti.UI.createView({
        id: "__alloyId17946"
    });
    $.__views.__alloyId17945.add($.__views.__alloyId17946);
    $.__views.__alloyId17947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17947"
    });
    $.__views.__alloyId17946.add($.__views.__alloyId17947);
    $.__views.__alloyId17948 = Ti.UI.createView({
        id: "__alloyId17948"
    });
    $.__views.__alloyId17948 && $.addTopLevelView($.__views.__alloyId17948);
    $.__views.__alloyId17949 = Ti.UI.createView({
        id: "__alloyId17949"
    });
    $.__views.__alloyId17948.add($.__views.__alloyId17949);
    $.__views.__alloyId17950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17950"
    });
    $.__views.__alloyId17949.add($.__views.__alloyId17950);
    $.__views.__alloyId17951 = Ti.UI.createView({
        id: "__alloyId17951"
    });
    $.__views.__alloyId17951 && $.addTopLevelView($.__views.__alloyId17951);
    $.__views.__alloyId17952 = Ti.UI.createView({
        id: "__alloyId17952"
    });
    $.__views.__alloyId17951.add($.__views.__alloyId17952);
    $.__views.__alloyId17953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17953"
    });
    $.__views.__alloyId17952.add($.__views.__alloyId17953);
    $.__views.__alloyId17954 = Ti.UI.createView({
        id: "__alloyId17954"
    });
    $.__views.__alloyId17954 && $.addTopLevelView($.__views.__alloyId17954);
    $.__views.__alloyId17955 = Ti.UI.createView({
        id: "__alloyId17955"
    });
    $.__views.__alloyId17954.add($.__views.__alloyId17955);
    $.__views.__alloyId17956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17956"
    });
    $.__views.__alloyId17955.add($.__views.__alloyId17956);
    $.__views.__alloyId17957 = Ti.UI.createView({
        id: "__alloyId17957"
    });
    $.__views.__alloyId17957 && $.addTopLevelView($.__views.__alloyId17957);
    $.__views.__alloyId17958 = Ti.UI.createView({
        id: "__alloyId17958"
    });
    $.__views.__alloyId17957.add($.__views.__alloyId17958);
    $.__views.__alloyId17959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17959"
    });
    $.__views.__alloyId17958.add($.__views.__alloyId17959);
    $.__views.__alloyId17960 = Ti.UI.createView({
        id: "__alloyId17960"
    });
    $.__views.__alloyId17960 && $.addTopLevelView($.__views.__alloyId17960);
    $.__views.__alloyId17961 = Ti.UI.createView({
        id: "__alloyId17961"
    });
    $.__views.__alloyId17960.add($.__views.__alloyId17961);
    $.__views.__alloyId17962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17962"
    });
    $.__views.__alloyId17961.add($.__views.__alloyId17962);
    $.__views.__alloyId17963 = Ti.UI.createView({
        id: "__alloyId17963"
    });
    $.__views.__alloyId17963 && $.addTopLevelView($.__views.__alloyId17963);
    $.__views.__alloyId17964 = Ti.UI.createView({
        id: "__alloyId17964"
    });
    $.__views.__alloyId17963.add($.__views.__alloyId17964);
    $.__views.__alloyId17965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17965"
    });
    $.__views.__alloyId17964.add($.__views.__alloyId17965);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;