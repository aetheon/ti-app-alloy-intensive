function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_448";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_448 = Ti.UI.createView({
        id: "widget_448"
    });
    $.__views.widget_448 && $.addTopLevelView($.__views.widget_448);
    $.__views.__alloyId10114 = Ti.UI.createView({
        id: "__alloyId10114"
    });
    $.__views.widget_448.add($.__views.__alloyId10114);
    $.__views.__alloyId10115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10115"
    });
    $.__views.__alloyId10114.add($.__views.__alloyId10115);
    $.__views.__alloyId10116 = Ti.UI.createView({
        id: "__alloyId10116"
    });
    $.__views.__alloyId10116 && $.addTopLevelView($.__views.__alloyId10116);
    $.__views.__alloyId10117 = Ti.UI.createView({
        id: "__alloyId10117"
    });
    $.__views.__alloyId10116.add($.__views.__alloyId10117);
    $.__views.__alloyId10118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10118"
    });
    $.__views.__alloyId10117.add($.__views.__alloyId10118);
    $.__views.__alloyId10119 = Ti.UI.createView({
        id: "__alloyId10119"
    });
    $.__views.__alloyId10119 && $.addTopLevelView($.__views.__alloyId10119);
    $.__views.__alloyId10120 = Ti.UI.createView({
        id: "__alloyId10120"
    });
    $.__views.__alloyId10119.add($.__views.__alloyId10120);
    $.__views.__alloyId10121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10121"
    });
    $.__views.__alloyId10120.add($.__views.__alloyId10121);
    $.__views.__alloyId10122 = Ti.UI.createView({
        id: "__alloyId10122"
    });
    $.__views.__alloyId10122 && $.addTopLevelView($.__views.__alloyId10122);
    $.__views.__alloyId10123 = Ti.UI.createView({
        id: "__alloyId10123"
    });
    $.__views.__alloyId10122.add($.__views.__alloyId10123);
    $.__views.__alloyId10124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10124"
    });
    $.__views.__alloyId10123.add($.__views.__alloyId10124);
    $.__views.__alloyId10125 = Ti.UI.createView({
        id: "__alloyId10125"
    });
    $.__views.__alloyId10125 && $.addTopLevelView($.__views.__alloyId10125);
    $.__views.__alloyId10126 = Ti.UI.createView({
        id: "__alloyId10126"
    });
    $.__views.__alloyId10125.add($.__views.__alloyId10126);
    $.__views.__alloyId10127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10127"
    });
    $.__views.__alloyId10126.add($.__views.__alloyId10127);
    $.__views.__alloyId10128 = Ti.UI.createView({
        id: "__alloyId10128"
    });
    $.__views.__alloyId10128 && $.addTopLevelView($.__views.__alloyId10128);
    $.__views.__alloyId10129 = Ti.UI.createView({
        id: "__alloyId10129"
    });
    $.__views.__alloyId10128.add($.__views.__alloyId10129);
    $.__views.__alloyId10130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10130"
    });
    $.__views.__alloyId10129.add($.__views.__alloyId10130);
    $.__views.__alloyId10131 = Ti.UI.createView({
        id: "__alloyId10131"
    });
    $.__views.__alloyId10131 && $.addTopLevelView($.__views.__alloyId10131);
    $.__views.__alloyId10132 = Ti.UI.createView({
        id: "__alloyId10132"
    });
    $.__views.__alloyId10131.add($.__views.__alloyId10132);
    $.__views.__alloyId10133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10133"
    });
    $.__views.__alloyId10132.add($.__views.__alloyId10133);
    $.__views.__alloyId10134 = Ti.UI.createView({
        id: "__alloyId10134"
    });
    $.__views.__alloyId10134 && $.addTopLevelView($.__views.__alloyId10134);
    $.__views.__alloyId10135 = Ti.UI.createView({
        id: "__alloyId10135"
    });
    $.__views.__alloyId10134.add($.__views.__alloyId10135);
    $.__views.__alloyId10136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10136"
    });
    $.__views.__alloyId10135.add($.__views.__alloyId10136);
    $.__views.__alloyId10137 = Ti.UI.createView({
        id: "__alloyId10137"
    });
    $.__views.__alloyId10137 && $.addTopLevelView($.__views.__alloyId10137);
    $.__views.__alloyId10138 = Ti.UI.createView({
        id: "__alloyId10138"
    });
    $.__views.__alloyId10137.add($.__views.__alloyId10138);
    $.__views.__alloyId10139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10139"
    });
    $.__views.__alloyId10138.add($.__views.__alloyId10139);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;