function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_441";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_441 = Ti.UI.createView({
        id: "widget_441"
    });
    $.__views.widget_441 && $.addTopLevelView($.__views.widget_441);
    $.__views.__alloyId9932 = Ti.UI.createView({
        id: "__alloyId9932"
    });
    $.__views.widget_441.add($.__views.__alloyId9932);
    $.__views.__alloyId9933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9933"
    });
    $.__views.__alloyId9932.add($.__views.__alloyId9933);
    $.__views.__alloyId9934 = Ti.UI.createView({
        id: "__alloyId9934"
    });
    $.__views.__alloyId9934 && $.addTopLevelView($.__views.__alloyId9934);
    $.__views.__alloyId9935 = Ti.UI.createView({
        id: "__alloyId9935"
    });
    $.__views.__alloyId9934.add($.__views.__alloyId9935);
    $.__views.__alloyId9936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9936"
    });
    $.__views.__alloyId9935.add($.__views.__alloyId9936);
    $.__views.__alloyId9937 = Ti.UI.createView({
        id: "__alloyId9937"
    });
    $.__views.__alloyId9937 && $.addTopLevelView($.__views.__alloyId9937);
    $.__views.__alloyId9938 = Ti.UI.createView({
        id: "__alloyId9938"
    });
    $.__views.__alloyId9937.add($.__views.__alloyId9938);
    $.__views.__alloyId9939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9939"
    });
    $.__views.__alloyId9938.add($.__views.__alloyId9939);
    $.__views.__alloyId9940 = Ti.UI.createView({
        id: "__alloyId9940"
    });
    $.__views.__alloyId9940 && $.addTopLevelView($.__views.__alloyId9940);
    $.__views.__alloyId9941 = Ti.UI.createView({
        id: "__alloyId9941"
    });
    $.__views.__alloyId9940.add($.__views.__alloyId9941);
    $.__views.__alloyId9942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9942"
    });
    $.__views.__alloyId9941.add($.__views.__alloyId9942);
    $.__views.__alloyId9943 = Ti.UI.createView({
        id: "__alloyId9943"
    });
    $.__views.__alloyId9943 && $.addTopLevelView($.__views.__alloyId9943);
    $.__views.__alloyId9944 = Ti.UI.createView({
        id: "__alloyId9944"
    });
    $.__views.__alloyId9943.add($.__views.__alloyId9944);
    $.__views.__alloyId9945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9945"
    });
    $.__views.__alloyId9944.add($.__views.__alloyId9945);
    $.__views.__alloyId9946 = Ti.UI.createView({
        id: "__alloyId9946"
    });
    $.__views.__alloyId9946 && $.addTopLevelView($.__views.__alloyId9946);
    $.__views.__alloyId9947 = Ti.UI.createView({
        id: "__alloyId9947"
    });
    $.__views.__alloyId9946.add($.__views.__alloyId9947);
    $.__views.__alloyId9948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9948"
    });
    $.__views.__alloyId9947.add($.__views.__alloyId9948);
    $.__views.__alloyId9949 = Ti.UI.createView({
        id: "__alloyId9949"
    });
    $.__views.__alloyId9949 && $.addTopLevelView($.__views.__alloyId9949);
    $.__views.__alloyId9950 = Ti.UI.createView({
        id: "__alloyId9950"
    });
    $.__views.__alloyId9949.add($.__views.__alloyId9950);
    $.__views.__alloyId9951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9951"
    });
    $.__views.__alloyId9950.add($.__views.__alloyId9951);
    $.__views.__alloyId9952 = Ti.UI.createView({
        id: "__alloyId9952"
    });
    $.__views.__alloyId9952 && $.addTopLevelView($.__views.__alloyId9952);
    $.__views.__alloyId9953 = Ti.UI.createView({
        id: "__alloyId9953"
    });
    $.__views.__alloyId9952.add($.__views.__alloyId9953);
    $.__views.__alloyId9954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9954"
    });
    $.__views.__alloyId9953.add($.__views.__alloyId9954);
    $.__views.__alloyId9955 = Ti.UI.createView({
        id: "__alloyId9955"
    });
    $.__views.__alloyId9955 && $.addTopLevelView($.__views.__alloyId9955);
    $.__views.__alloyId9956 = Ti.UI.createView({
        id: "__alloyId9956"
    });
    $.__views.__alloyId9955.add($.__views.__alloyId9956);
    $.__views.__alloyId9957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9957"
    });
    $.__views.__alloyId9956.add($.__views.__alloyId9957);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;