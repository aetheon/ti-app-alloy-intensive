function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_822";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_822 = Ti.UI.createView({
        id: "widget_822"
    });
    $.__views.widget_822 && $.addTopLevelView($.__views.widget_822);
    $.__views.__alloyId20930 = Ti.UI.createView({
        id: "__alloyId20930"
    });
    $.__views.widget_822.add($.__views.__alloyId20930);
    $.__views.__alloyId20931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20931"
    });
    $.__views.__alloyId20930.add($.__views.__alloyId20931);
    $.__views.__alloyId20932 = Ti.UI.createView({
        id: "__alloyId20932"
    });
    $.__views.__alloyId20932 && $.addTopLevelView($.__views.__alloyId20932);
    $.__views.__alloyId20933 = Ti.UI.createView({
        id: "__alloyId20933"
    });
    $.__views.__alloyId20932.add($.__views.__alloyId20933);
    $.__views.__alloyId20934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20934"
    });
    $.__views.__alloyId20933.add($.__views.__alloyId20934);
    $.__views.__alloyId20935 = Ti.UI.createView({
        id: "__alloyId20935"
    });
    $.__views.__alloyId20935 && $.addTopLevelView($.__views.__alloyId20935);
    $.__views.__alloyId20936 = Ti.UI.createView({
        id: "__alloyId20936"
    });
    $.__views.__alloyId20935.add($.__views.__alloyId20936);
    $.__views.__alloyId20937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20937"
    });
    $.__views.__alloyId20936.add($.__views.__alloyId20937);
    $.__views.__alloyId20938 = Ti.UI.createView({
        id: "__alloyId20938"
    });
    $.__views.__alloyId20938 && $.addTopLevelView($.__views.__alloyId20938);
    $.__views.__alloyId20939 = Ti.UI.createView({
        id: "__alloyId20939"
    });
    $.__views.__alloyId20938.add($.__views.__alloyId20939);
    $.__views.__alloyId20940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20940"
    });
    $.__views.__alloyId20939.add($.__views.__alloyId20940);
    $.__views.__alloyId20941 = Ti.UI.createView({
        id: "__alloyId20941"
    });
    $.__views.__alloyId20941 && $.addTopLevelView($.__views.__alloyId20941);
    $.__views.__alloyId20942 = Ti.UI.createView({
        id: "__alloyId20942"
    });
    $.__views.__alloyId20941.add($.__views.__alloyId20942);
    $.__views.__alloyId20943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20943"
    });
    $.__views.__alloyId20942.add($.__views.__alloyId20943);
    $.__views.__alloyId20944 = Ti.UI.createView({
        id: "__alloyId20944"
    });
    $.__views.__alloyId20944 && $.addTopLevelView($.__views.__alloyId20944);
    $.__views.__alloyId20945 = Ti.UI.createView({
        id: "__alloyId20945"
    });
    $.__views.__alloyId20944.add($.__views.__alloyId20945);
    $.__views.__alloyId20946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20946"
    });
    $.__views.__alloyId20945.add($.__views.__alloyId20946);
    $.__views.__alloyId20947 = Ti.UI.createView({
        id: "__alloyId20947"
    });
    $.__views.__alloyId20947 && $.addTopLevelView($.__views.__alloyId20947);
    $.__views.__alloyId20948 = Ti.UI.createView({
        id: "__alloyId20948"
    });
    $.__views.__alloyId20947.add($.__views.__alloyId20948);
    $.__views.__alloyId20949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20949"
    });
    $.__views.__alloyId20948.add($.__views.__alloyId20949);
    $.__views.__alloyId20950 = Ti.UI.createView({
        id: "__alloyId20950"
    });
    $.__views.__alloyId20950 && $.addTopLevelView($.__views.__alloyId20950);
    $.__views.__alloyId20951 = Ti.UI.createView({
        id: "__alloyId20951"
    });
    $.__views.__alloyId20950.add($.__views.__alloyId20951);
    $.__views.__alloyId20952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20952"
    });
    $.__views.__alloyId20951.add($.__views.__alloyId20952);
    $.__views.__alloyId20953 = Ti.UI.createView({
        id: "__alloyId20953"
    });
    $.__views.__alloyId20953 && $.addTopLevelView($.__views.__alloyId20953);
    $.__views.__alloyId20954 = Ti.UI.createView({
        id: "__alloyId20954"
    });
    $.__views.__alloyId20953.add($.__views.__alloyId20954);
    $.__views.__alloyId20955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20955"
    });
    $.__views.__alloyId20954.add($.__views.__alloyId20955);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;