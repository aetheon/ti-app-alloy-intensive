function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_899";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_899 = Ti.UI.createView({
        id: "widget_899"
    });
    $.__views.widget_899 && $.addTopLevelView($.__views.widget_899);
    $.__views.__alloyId23114 = Ti.UI.createView({
        id: "__alloyId23114"
    });
    $.__views.widget_899.add($.__views.__alloyId23114);
    $.__views.__alloyId23115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23115"
    });
    $.__views.__alloyId23114.add($.__views.__alloyId23115);
    $.__views.__alloyId23116 = Ti.UI.createView({
        id: "__alloyId23116"
    });
    $.__views.__alloyId23116 && $.addTopLevelView($.__views.__alloyId23116);
    $.__views.__alloyId23117 = Ti.UI.createView({
        id: "__alloyId23117"
    });
    $.__views.__alloyId23116.add($.__views.__alloyId23117);
    $.__views.__alloyId23118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23118"
    });
    $.__views.__alloyId23117.add($.__views.__alloyId23118);
    $.__views.__alloyId23119 = Ti.UI.createView({
        id: "__alloyId23119"
    });
    $.__views.__alloyId23119 && $.addTopLevelView($.__views.__alloyId23119);
    $.__views.__alloyId23120 = Ti.UI.createView({
        id: "__alloyId23120"
    });
    $.__views.__alloyId23119.add($.__views.__alloyId23120);
    $.__views.__alloyId23121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23121"
    });
    $.__views.__alloyId23120.add($.__views.__alloyId23121);
    $.__views.__alloyId23122 = Ti.UI.createView({
        id: "__alloyId23122"
    });
    $.__views.__alloyId23122 && $.addTopLevelView($.__views.__alloyId23122);
    $.__views.__alloyId23123 = Ti.UI.createView({
        id: "__alloyId23123"
    });
    $.__views.__alloyId23122.add($.__views.__alloyId23123);
    $.__views.__alloyId23124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23124"
    });
    $.__views.__alloyId23123.add($.__views.__alloyId23124);
    $.__views.__alloyId23125 = Ti.UI.createView({
        id: "__alloyId23125"
    });
    $.__views.__alloyId23125 && $.addTopLevelView($.__views.__alloyId23125);
    $.__views.__alloyId23126 = Ti.UI.createView({
        id: "__alloyId23126"
    });
    $.__views.__alloyId23125.add($.__views.__alloyId23126);
    $.__views.__alloyId23127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23127"
    });
    $.__views.__alloyId23126.add($.__views.__alloyId23127);
    $.__views.__alloyId23128 = Ti.UI.createView({
        id: "__alloyId23128"
    });
    $.__views.__alloyId23128 && $.addTopLevelView($.__views.__alloyId23128);
    $.__views.__alloyId23129 = Ti.UI.createView({
        id: "__alloyId23129"
    });
    $.__views.__alloyId23128.add($.__views.__alloyId23129);
    $.__views.__alloyId23130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23130"
    });
    $.__views.__alloyId23129.add($.__views.__alloyId23130);
    $.__views.__alloyId23131 = Ti.UI.createView({
        id: "__alloyId23131"
    });
    $.__views.__alloyId23131 && $.addTopLevelView($.__views.__alloyId23131);
    $.__views.__alloyId23132 = Ti.UI.createView({
        id: "__alloyId23132"
    });
    $.__views.__alloyId23131.add($.__views.__alloyId23132);
    $.__views.__alloyId23133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23133"
    });
    $.__views.__alloyId23132.add($.__views.__alloyId23133);
    $.__views.__alloyId23134 = Ti.UI.createView({
        id: "__alloyId23134"
    });
    $.__views.__alloyId23134 && $.addTopLevelView($.__views.__alloyId23134);
    $.__views.__alloyId23135 = Ti.UI.createView({
        id: "__alloyId23135"
    });
    $.__views.__alloyId23134.add($.__views.__alloyId23135);
    $.__views.__alloyId23136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23136"
    });
    $.__views.__alloyId23135.add($.__views.__alloyId23136);
    $.__views.__alloyId23137 = Ti.UI.createView({
        id: "__alloyId23137"
    });
    $.__views.__alloyId23137 && $.addTopLevelView($.__views.__alloyId23137);
    $.__views.__alloyId23138 = Ti.UI.createView({
        id: "__alloyId23138"
    });
    $.__views.__alloyId23137.add($.__views.__alloyId23138);
    $.__views.__alloyId23139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23139"
    });
    $.__views.__alloyId23138.add($.__views.__alloyId23139);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;