function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_302";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_302 = Ti.UI.createView({
        id: "widget_302"
    });
    $.__views.widget_302 && $.addTopLevelView($.__views.widget_302);
    $.__views.__alloyId5928 = Ti.UI.createView({
        id: "__alloyId5928"
    });
    $.__views.widget_302.add($.__views.__alloyId5928);
    $.__views.__alloyId5929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5929"
    });
    $.__views.__alloyId5928.add($.__views.__alloyId5929);
    $.__views.__alloyId5930 = Ti.UI.createView({
        id: "__alloyId5930"
    });
    $.__views.__alloyId5930 && $.addTopLevelView($.__views.__alloyId5930);
    $.__views.__alloyId5931 = Ti.UI.createView({
        id: "__alloyId5931"
    });
    $.__views.__alloyId5930.add($.__views.__alloyId5931);
    $.__views.__alloyId5932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5932"
    });
    $.__views.__alloyId5931.add($.__views.__alloyId5932);
    $.__views.__alloyId5933 = Ti.UI.createView({
        id: "__alloyId5933"
    });
    $.__views.__alloyId5933 && $.addTopLevelView($.__views.__alloyId5933);
    $.__views.__alloyId5934 = Ti.UI.createView({
        id: "__alloyId5934"
    });
    $.__views.__alloyId5933.add($.__views.__alloyId5934);
    $.__views.__alloyId5935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5935"
    });
    $.__views.__alloyId5934.add($.__views.__alloyId5935);
    $.__views.__alloyId5936 = Ti.UI.createView({
        id: "__alloyId5936"
    });
    $.__views.__alloyId5936 && $.addTopLevelView($.__views.__alloyId5936);
    $.__views.__alloyId5937 = Ti.UI.createView({
        id: "__alloyId5937"
    });
    $.__views.__alloyId5936.add($.__views.__alloyId5937);
    $.__views.__alloyId5938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5938"
    });
    $.__views.__alloyId5937.add($.__views.__alloyId5938);
    $.__views.__alloyId5939 = Ti.UI.createView({
        id: "__alloyId5939"
    });
    $.__views.__alloyId5939 && $.addTopLevelView($.__views.__alloyId5939);
    $.__views.__alloyId5940 = Ti.UI.createView({
        id: "__alloyId5940"
    });
    $.__views.__alloyId5939.add($.__views.__alloyId5940);
    $.__views.__alloyId5941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5941"
    });
    $.__views.__alloyId5940.add($.__views.__alloyId5941);
    $.__views.__alloyId5942 = Ti.UI.createView({
        id: "__alloyId5942"
    });
    $.__views.__alloyId5942 && $.addTopLevelView($.__views.__alloyId5942);
    $.__views.__alloyId5943 = Ti.UI.createView({
        id: "__alloyId5943"
    });
    $.__views.__alloyId5942.add($.__views.__alloyId5943);
    $.__views.__alloyId5944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5944"
    });
    $.__views.__alloyId5943.add($.__views.__alloyId5944);
    $.__views.__alloyId5945 = Ti.UI.createView({
        id: "__alloyId5945"
    });
    $.__views.__alloyId5945 && $.addTopLevelView($.__views.__alloyId5945);
    $.__views.__alloyId5946 = Ti.UI.createView({
        id: "__alloyId5946"
    });
    $.__views.__alloyId5945.add($.__views.__alloyId5946);
    $.__views.__alloyId5947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5947"
    });
    $.__views.__alloyId5946.add($.__views.__alloyId5947);
    $.__views.__alloyId5948 = Ti.UI.createView({
        id: "__alloyId5948"
    });
    $.__views.__alloyId5948 && $.addTopLevelView($.__views.__alloyId5948);
    $.__views.__alloyId5949 = Ti.UI.createView({
        id: "__alloyId5949"
    });
    $.__views.__alloyId5948.add($.__views.__alloyId5949);
    $.__views.__alloyId5950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5950"
    });
    $.__views.__alloyId5949.add($.__views.__alloyId5950);
    $.__views.__alloyId5951 = Ti.UI.createView({
        id: "__alloyId5951"
    });
    $.__views.__alloyId5951 && $.addTopLevelView($.__views.__alloyId5951);
    $.__views.__alloyId5952 = Ti.UI.createView({
        id: "__alloyId5952"
    });
    $.__views.__alloyId5951.add($.__views.__alloyId5952);
    $.__views.__alloyId5953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5953"
    });
    $.__views.__alloyId5952.add($.__views.__alloyId5953);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;