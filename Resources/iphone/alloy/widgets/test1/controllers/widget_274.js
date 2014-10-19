function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_274";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_274 = Ti.UI.createView({
        id: "widget_274"
    });
    $.__views.widget_274 && $.addTopLevelView($.__views.widget_274);
    $.__views.__alloyId5096 = Ti.UI.createView({
        id: "__alloyId5096"
    });
    $.__views.widget_274.add($.__views.__alloyId5096);
    $.__views.__alloyId5097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5097"
    });
    $.__views.__alloyId5096.add($.__views.__alloyId5097);
    $.__views.__alloyId5098 = Ti.UI.createView({
        id: "__alloyId5098"
    });
    $.__views.__alloyId5098 && $.addTopLevelView($.__views.__alloyId5098);
    $.__views.__alloyId5099 = Ti.UI.createView({
        id: "__alloyId5099"
    });
    $.__views.__alloyId5098.add($.__views.__alloyId5099);
    $.__views.__alloyId5100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5100"
    });
    $.__views.__alloyId5099.add($.__views.__alloyId5100);
    $.__views.__alloyId5101 = Ti.UI.createView({
        id: "__alloyId5101"
    });
    $.__views.__alloyId5101 && $.addTopLevelView($.__views.__alloyId5101);
    $.__views.__alloyId5102 = Ti.UI.createView({
        id: "__alloyId5102"
    });
    $.__views.__alloyId5101.add($.__views.__alloyId5102);
    $.__views.__alloyId5103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5103"
    });
    $.__views.__alloyId5102.add($.__views.__alloyId5103);
    $.__views.__alloyId5104 = Ti.UI.createView({
        id: "__alloyId5104"
    });
    $.__views.__alloyId5104 && $.addTopLevelView($.__views.__alloyId5104);
    $.__views.__alloyId5105 = Ti.UI.createView({
        id: "__alloyId5105"
    });
    $.__views.__alloyId5104.add($.__views.__alloyId5105);
    $.__views.__alloyId5106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5106"
    });
    $.__views.__alloyId5105.add($.__views.__alloyId5106);
    $.__views.__alloyId5107 = Ti.UI.createView({
        id: "__alloyId5107"
    });
    $.__views.__alloyId5107 && $.addTopLevelView($.__views.__alloyId5107);
    $.__views.__alloyId5108 = Ti.UI.createView({
        id: "__alloyId5108"
    });
    $.__views.__alloyId5107.add($.__views.__alloyId5108);
    $.__views.__alloyId5109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5109"
    });
    $.__views.__alloyId5108.add($.__views.__alloyId5109);
    $.__views.__alloyId5110 = Ti.UI.createView({
        id: "__alloyId5110"
    });
    $.__views.__alloyId5110 && $.addTopLevelView($.__views.__alloyId5110);
    $.__views.__alloyId5111 = Ti.UI.createView({
        id: "__alloyId5111"
    });
    $.__views.__alloyId5110.add($.__views.__alloyId5111);
    $.__views.__alloyId5112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5112"
    });
    $.__views.__alloyId5111.add($.__views.__alloyId5112);
    $.__views.__alloyId5113 = Ti.UI.createView({
        id: "__alloyId5113"
    });
    $.__views.__alloyId5113 && $.addTopLevelView($.__views.__alloyId5113);
    $.__views.__alloyId5114 = Ti.UI.createView({
        id: "__alloyId5114"
    });
    $.__views.__alloyId5113.add($.__views.__alloyId5114);
    $.__views.__alloyId5115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5115"
    });
    $.__views.__alloyId5114.add($.__views.__alloyId5115);
    $.__views.__alloyId5116 = Ti.UI.createView({
        id: "__alloyId5116"
    });
    $.__views.__alloyId5116 && $.addTopLevelView($.__views.__alloyId5116);
    $.__views.__alloyId5117 = Ti.UI.createView({
        id: "__alloyId5117"
    });
    $.__views.__alloyId5116.add($.__views.__alloyId5117);
    $.__views.__alloyId5118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5118"
    });
    $.__views.__alloyId5117.add($.__views.__alloyId5118);
    $.__views.__alloyId5119 = Ti.UI.createView({
        id: "__alloyId5119"
    });
    $.__views.__alloyId5119 && $.addTopLevelView($.__views.__alloyId5119);
    $.__views.__alloyId5120 = Ti.UI.createView({
        id: "__alloyId5120"
    });
    $.__views.__alloyId5119.add($.__views.__alloyId5120);
    $.__views.__alloyId5121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5121"
    });
    $.__views.__alloyId5120.add($.__views.__alloyId5121);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;