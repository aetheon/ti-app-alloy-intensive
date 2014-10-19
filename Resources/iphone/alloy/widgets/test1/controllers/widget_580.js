function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_580";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_580 = Ti.UI.createView({
        id: "widget_580"
    });
    $.__views.widget_580 && $.addTopLevelView($.__views.widget_580);
    $.__views.__alloyId13936 = Ti.UI.createView({
        id: "__alloyId13936"
    });
    $.__views.widget_580.add($.__views.__alloyId13936);
    $.__views.__alloyId13937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13937"
    });
    $.__views.__alloyId13936.add($.__views.__alloyId13937);
    $.__views.__alloyId13938 = Ti.UI.createView({
        id: "__alloyId13938"
    });
    $.__views.__alloyId13938 && $.addTopLevelView($.__views.__alloyId13938);
    $.__views.__alloyId13939 = Ti.UI.createView({
        id: "__alloyId13939"
    });
    $.__views.__alloyId13938.add($.__views.__alloyId13939);
    $.__views.__alloyId13940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13940"
    });
    $.__views.__alloyId13939.add($.__views.__alloyId13940);
    $.__views.__alloyId13941 = Ti.UI.createView({
        id: "__alloyId13941"
    });
    $.__views.__alloyId13941 && $.addTopLevelView($.__views.__alloyId13941);
    $.__views.__alloyId13942 = Ti.UI.createView({
        id: "__alloyId13942"
    });
    $.__views.__alloyId13941.add($.__views.__alloyId13942);
    $.__views.__alloyId13943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13943"
    });
    $.__views.__alloyId13942.add($.__views.__alloyId13943);
    $.__views.__alloyId13944 = Ti.UI.createView({
        id: "__alloyId13944"
    });
    $.__views.__alloyId13944 && $.addTopLevelView($.__views.__alloyId13944);
    $.__views.__alloyId13945 = Ti.UI.createView({
        id: "__alloyId13945"
    });
    $.__views.__alloyId13944.add($.__views.__alloyId13945);
    $.__views.__alloyId13946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13946"
    });
    $.__views.__alloyId13945.add($.__views.__alloyId13946);
    $.__views.__alloyId13947 = Ti.UI.createView({
        id: "__alloyId13947"
    });
    $.__views.__alloyId13947 && $.addTopLevelView($.__views.__alloyId13947);
    $.__views.__alloyId13948 = Ti.UI.createView({
        id: "__alloyId13948"
    });
    $.__views.__alloyId13947.add($.__views.__alloyId13948);
    $.__views.__alloyId13949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13949"
    });
    $.__views.__alloyId13948.add($.__views.__alloyId13949);
    $.__views.__alloyId13950 = Ti.UI.createView({
        id: "__alloyId13950"
    });
    $.__views.__alloyId13950 && $.addTopLevelView($.__views.__alloyId13950);
    $.__views.__alloyId13951 = Ti.UI.createView({
        id: "__alloyId13951"
    });
    $.__views.__alloyId13950.add($.__views.__alloyId13951);
    $.__views.__alloyId13952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13952"
    });
    $.__views.__alloyId13951.add($.__views.__alloyId13952);
    $.__views.__alloyId13953 = Ti.UI.createView({
        id: "__alloyId13953"
    });
    $.__views.__alloyId13953 && $.addTopLevelView($.__views.__alloyId13953);
    $.__views.__alloyId13954 = Ti.UI.createView({
        id: "__alloyId13954"
    });
    $.__views.__alloyId13953.add($.__views.__alloyId13954);
    $.__views.__alloyId13955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13955"
    });
    $.__views.__alloyId13954.add($.__views.__alloyId13955);
    $.__views.__alloyId13956 = Ti.UI.createView({
        id: "__alloyId13956"
    });
    $.__views.__alloyId13956 && $.addTopLevelView($.__views.__alloyId13956);
    $.__views.__alloyId13957 = Ti.UI.createView({
        id: "__alloyId13957"
    });
    $.__views.__alloyId13956.add($.__views.__alloyId13957);
    $.__views.__alloyId13958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13958"
    });
    $.__views.__alloyId13957.add($.__views.__alloyId13958);
    $.__views.__alloyId13959 = Ti.UI.createView({
        id: "__alloyId13959"
    });
    $.__views.__alloyId13959 && $.addTopLevelView($.__views.__alloyId13959);
    $.__views.__alloyId13960 = Ti.UI.createView({
        id: "__alloyId13960"
    });
    $.__views.__alloyId13959.add($.__views.__alloyId13960);
    $.__views.__alloyId13961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13961"
    });
    $.__views.__alloyId13960.add($.__views.__alloyId13961);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;