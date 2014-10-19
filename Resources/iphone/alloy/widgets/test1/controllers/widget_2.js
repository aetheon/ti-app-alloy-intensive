function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_2 = Ti.UI.createView({
        id: "widget_2"
    });
    $.__views.widget_2 && $.addTopLevelView($.__views.widget_2);
    $.__views.__alloyId2938 = Ti.UI.createView({
        id: "__alloyId2938"
    });
    $.__views.widget_2.add($.__views.__alloyId2938);
    $.__views.__alloyId2939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2939"
    });
    $.__views.__alloyId2938.add($.__views.__alloyId2939);
    $.__views.__alloyId2940 = Ti.UI.createView({
        id: "__alloyId2940"
    });
    $.__views.__alloyId2940 && $.addTopLevelView($.__views.__alloyId2940);
    $.__views.__alloyId2941 = Ti.UI.createView({
        id: "__alloyId2941"
    });
    $.__views.__alloyId2940.add($.__views.__alloyId2941);
    $.__views.__alloyId2942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2942"
    });
    $.__views.__alloyId2941.add($.__views.__alloyId2942);
    $.__views.__alloyId2943 = Ti.UI.createView({
        id: "__alloyId2943"
    });
    $.__views.__alloyId2943 && $.addTopLevelView($.__views.__alloyId2943);
    $.__views.__alloyId2944 = Ti.UI.createView({
        id: "__alloyId2944"
    });
    $.__views.__alloyId2943.add($.__views.__alloyId2944);
    $.__views.__alloyId2945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2945"
    });
    $.__views.__alloyId2944.add($.__views.__alloyId2945);
    $.__views.__alloyId2946 = Ti.UI.createView({
        id: "__alloyId2946"
    });
    $.__views.__alloyId2946 && $.addTopLevelView($.__views.__alloyId2946);
    $.__views.__alloyId2947 = Ti.UI.createView({
        id: "__alloyId2947"
    });
    $.__views.__alloyId2946.add($.__views.__alloyId2947);
    $.__views.__alloyId2948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2948"
    });
    $.__views.__alloyId2947.add($.__views.__alloyId2948);
    $.__views.__alloyId2949 = Ti.UI.createView({
        id: "__alloyId2949"
    });
    $.__views.__alloyId2949 && $.addTopLevelView($.__views.__alloyId2949);
    $.__views.__alloyId2950 = Ti.UI.createView({
        id: "__alloyId2950"
    });
    $.__views.__alloyId2949.add($.__views.__alloyId2950);
    $.__views.__alloyId2951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2951"
    });
    $.__views.__alloyId2950.add($.__views.__alloyId2951);
    $.__views.__alloyId2952 = Ti.UI.createView({
        id: "__alloyId2952"
    });
    $.__views.__alloyId2952 && $.addTopLevelView($.__views.__alloyId2952);
    $.__views.__alloyId2953 = Ti.UI.createView({
        id: "__alloyId2953"
    });
    $.__views.__alloyId2952.add($.__views.__alloyId2953);
    $.__views.__alloyId2954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2954"
    });
    $.__views.__alloyId2953.add($.__views.__alloyId2954);
    $.__views.__alloyId2955 = Ti.UI.createView({
        id: "__alloyId2955"
    });
    $.__views.__alloyId2955 && $.addTopLevelView($.__views.__alloyId2955);
    $.__views.__alloyId2956 = Ti.UI.createView({
        id: "__alloyId2956"
    });
    $.__views.__alloyId2955.add($.__views.__alloyId2956);
    $.__views.__alloyId2957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2957"
    });
    $.__views.__alloyId2956.add($.__views.__alloyId2957);
    $.__views.__alloyId2958 = Ti.UI.createView({
        id: "__alloyId2958"
    });
    $.__views.__alloyId2958 && $.addTopLevelView($.__views.__alloyId2958);
    $.__views.__alloyId2959 = Ti.UI.createView({
        id: "__alloyId2959"
    });
    $.__views.__alloyId2958.add($.__views.__alloyId2959);
    $.__views.__alloyId2960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2960"
    });
    $.__views.__alloyId2959.add($.__views.__alloyId2960);
    $.__views.__alloyId2961 = Ti.UI.createView({
        id: "__alloyId2961"
    });
    $.__views.__alloyId2961 && $.addTopLevelView($.__views.__alloyId2961);
    $.__views.__alloyId2962 = Ti.UI.createView({
        id: "__alloyId2962"
    });
    $.__views.__alloyId2961.add($.__views.__alloyId2962);
    $.__views.__alloyId2963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2963"
    });
    $.__views.__alloyId2962.add($.__views.__alloyId2963);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;