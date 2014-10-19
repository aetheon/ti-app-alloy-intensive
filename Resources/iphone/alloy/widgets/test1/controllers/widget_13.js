function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_13";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_13 = Ti.UI.createView({
        id: "widget_13"
    });
    $.__views.widget_13 && $.addTopLevelView($.__views.widget_13);
    $.__views.__alloyId936 = Ti.UI.createView({
        id: "__alloyId936"
    });
    $.__views.widget_13.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId937"
    });
    $.__views.__alloyId936.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createView({
        id: "__alloyId938"
    });
    $.__views.__alloyId938 && $.addTopLevelView($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createView({
        id: "__alloyId939"
    });
    $.__views.__alloyId938.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId940"
    });
    $.__views.__alloyId939.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createView({
        id: "__alloyId941"
    });
    $.__views.__alloyId941 && $.addTopLevelView($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createView({
        id: "__alloyId942"
    });
    $.__views.__alloyId941.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createView({
        id: "__alloyId944"
    });
    $.__views.__alloyId944 && $.addTopLevelView($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createView({
        id: "__alloyId945"
    });
    $.__views.__alloyId944.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createView({
        id: "__alloyId947"
    });
    $.__views.__alloyId947 && $.addTopLevelView($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createView({
        id: "__alloyId948"
    });
    $.__views.__alloyId947.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId949"
    });
    $.__views.__alloyId948.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createView({
        id: "__alloyId950"
    });
    $.__views.__alloyId950 && $.addTopLevelView($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        id: "__alloyId951"
    });
    $.__views.__alloyId950.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId952"
    });
    $.__views.__alloyId951.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createView({
        id: "__alloyId953"
    });
    $.__views.__alloyId953 && $.addTopLevelView($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createView({
        id: "__alloyId954"
    });
    $.__views.__alloyId953.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createView({
        id: "__alloyId956"
    });
    $.__views.__alloyId956 && $.addTopLevelView($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createView({
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createView({
        id: "__alloyId959"
    });
    $.__views.__alloyId959 && $.addTopLevelView($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createView({
        id: "__alloyId960"
    });
    $.__views.__alloyId959.add($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;