function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_372";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_372 = Ti.UI.createView({
        id: "widget_372"
    });
    $.__views.widget_372 && $.addTopLevelView($.__views.widget_372);
    $.__views.__alloyId7930 = Ti.UI.createView({
        id: "__alloyId7930"
    });
    $.__views.widget_372.add($.__views.__alloyId7930);
    $.__views.__alloyId7931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7931"
    });
    $.__views.__alloyId7930.add($.__views.__alloyId7931);
    $.__views.__alloyId7932 = Ti.UI.createView({
        id: "__alloyId7932"
    });
    $.__views.__alloyId7932 && $.addTopLevelView($.__views.__alloyId7932);
    $.__views.__alloyId7933 = Ti.UI.createView({
        id: "__alloyId7933"
    });
    $.__views.__alloyId7932.add($.__views.__alloyId7933);
    $.__views.__alloyId7934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7934"
    });
    $.__views.__alloyId7933.add($.__views.__alloyId7934);
    $.__views.__alloyId7935 = Ti.UI.createView({
        id: "__alloyId7935"
    });
    $.__views.__alloyId7935 && $.addTopLevelView($.__views.__alloyId7935);
    $.__views.__alloyId7936 = Ti.UI.createView({
        id: "__alloyId7936"
    });
    $.__views.__alloyId7935.add($.__views.__alloyId7936);
    $.__views.__alloyId7937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7937"
    });
    $.__views.__alloyId7936.add($.__views.__alloyId7937);
    $.__views.__alloyId7938 = Ti.UI.createView({
        id: "__alloyId7938"
    });
    $.__views.__alloyId7938 && $.addTopLevelView($.__views.__alloyId7938);
    $.__views.__alloyId7939 = Ti.UI.createView({
        id: "__alloyId7939"
    });
    $.__views.__alloyId7938.add($.__views.__alloyId7939);
    $.__views.__alloyId7940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7940"
    });
    $.__views.__alloyId7939.add($.__views.__alloyId7940);
    $.__views.__alloyId7941 = Ti.UI.createView({
        id: "__alloyId7941"
    });
    $.__views.__alloyId7941 && $.addTopLevelView($.__views.__alloyId7941);
    $.__views.__alloyId7942 = Ti.UI.createView({
        id: "__alloyId7942"
    });
    $.__views.__alloyId7941.add($.__views.__alloyId7942);
    $.__views.__alloyId7943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7943"
    });
    $.__views.__alloyId7942.add($.__views.__alloyId7943);
    $.__views.__alloyId7944 = Ti.UI.createView({
        id: "__alloyId7944"
    });
    $.__views.__alloyId7944 && $.addTopLevelView($.__views.__alloyId7944);
    $.__views.__alloyId7945 = Ti.UI.createView({
        id: "__alloyId7945"
    });
    $.__views.__alloyId7944.add($.__views.__alloyId7945);
    $.__views.__alloyId7946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7946"
    });
    $.__views.__alloyId7945.add($.__views.__alloyId7946);
    $.__views.__alloyId7947 = Ti.UI.createView({
        id: "__alloyId7947"
    });
    $.__views.__alloyId7947 && $.addTopLevelView($.__views.__alloyId7947);
    $.__views.__alloyId7948 = Ti.UI.createView({
        id: "__alloyId7948"
    });
    $.__views.__alloyId7947.add($.__views.__alloyId7948);
    $.__views.__alloyId7949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7949"
    });
    $.__views.__alloyId7948.add($.__views.__alloyId7949);
    $.__views.__alloyId7950 = Ti.UI.createView({
        id: "__alloyId7950"
    });
    $.__views.__alloyId7950 && $.addTopLevelView($.__views.__alloyId7950);
    $.__views.__alloyId7951 = Ti.UI.createView({
        id: "__alloyId7951"
    });
    $.__views.__alloyId7950.add($.__views.__alloyId7951);
    $.__views.__alloyId7952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7952"
    });
    $.__views.__alloyId7951.add($.__views.__alloyId7952);
    $.__views.__alloyId7953 = Ti.UI.createView({
        id: "__alloyId7953"
    });
    $.__views.__alloyId7953 && $.addTopLevelView($.__views.__alloyId7953);
    $.__views.__alloyId7954 = Ti.UI.createView({
        id: "__alloyId7954"
    });
    $.__views.__alloyId7953.add($.__views.__alloyId7954);
    $.__views.__alloyId7955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7955"
    });
    $.__views.__alloyId7954.add($.__views.__alloyId7955);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;