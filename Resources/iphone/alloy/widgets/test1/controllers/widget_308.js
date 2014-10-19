function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_308";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_308 = Ti.UI.createView({
        id: "widget_308"
    });
    $.__views.widget_308 && $.addTopLevelView($.__views.widget_308);
    $.__views.__alloyId6084 = Ti.UI.createView({
        id: "__alloyId6084"
    });
    $.__views.widget_308.add($.__views.__alloyId6084);
    $.__views.__alloyId6085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6085"
    });
    $.__views.__alloyId6084.add($.__views.__alloyId6085);
    $.__views.__alloyId6086 = Ti.UI.createView({
        id: "__alloyId6086"
    });
    $.__views.__alloyId6086 && $.addTopLevelView($.__views.__alloyId6086);
    $.__views.__alloyId6087 = Ti.UI.createView({
        id: "__alloyId6087"
    });
    $.__views.__alloyId6086.add($.__views.__alloyId6087);
    $.__views.__alloyId6088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6088"
    });
    $.__views.__alloyId6087.add($.__views.__alloyId6088);
    $.__views.__alloyId6089 = Ti.UI.createView({
        id: "__alloyId6089"
    });
    $.__views.__alloyId6089 && $.addTopLevelView($.__views.__alloyId6089);
    $.__views.__alloyId6090 = Ti.UI.createView({
        id: "__alloyId6090"
    });
    $.__views.__alloyId6089.add($.__views.__alloyId6090);
    $.__views.__alloyId6091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6091"
    });
    $.__views.__alloyId6090.add($.__views.__alloyId6091);
    $.__views.__alloyId6092 = Ti.UI.createView({
        id: "__alloyId6092"
    });
    $.__views.__alloyId6092 && $.addTopLevelView($.__views.__alloyId6092);
    $.__views.__alloyId6093 = Ti.UI.createView({
        id: "__alloyId6093"
    });
    $.__views.__alloyId6092.add($.__views.__alloyId6093);
    $.__views.__alloyId6094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6094"
    });
    $.__views.__alloyId6093.add($.__views.__alloyId6094);
    $.__views.__alloyId6095 = Ti.UI.createView({
        id: "__alloyId6095"
    });
    $.__views.__alloyId6095 && $.addTopLevelView($.__views.__alloyId6095);
    $.__views.__alloyId6096 = Ti.UI.createView({
        id: "__alloyId6096"
    });
    $.__views.__alloyId6095.add($.__views.__alloyId6096);
    $.__views.__alloyId6097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6097"
    });
    $.__views.__alloyId6096.add($.__views.__alloyId6097);
    $.__views.__alloyId6098 = Ti.UI.createView({
        id: "__alloyId6098"
    });
    $.__views.__alloyId6098 && $.addTopLevelView($.__views.__alloyId6098);
    $.__views.__alloyId6099 = Ti.UI.createView({
        id: "__alloyId6099"
    });
    $.__views.__alloyId6098.add($.__views.__alloyId6099);
    $.__views.__alloyId6100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6100"
    });
    $.__views.__alloyId6099.add($.__views.__alloyId6100);
    $.__views.__alloyId6101 = Ti.UI.createView({
        id: "__alloyId6101"
    });
    $.__views.__alloyId6101 && $.addTopLevelView($.__views.__alloyId6101);
    $.__views.__alloyId6102 = Ti.UI.createView({
        id: "__alloyId6102"
    });
    $.__views.__alloyId6101.add($.__views.__alloyId6102);
    $.__views.__alloyId6103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6103"
    });
    $.__views.__alloyId6102.add($.__views.__alloyId6103);
    $.__views.__alloyId6104 = Ti.UI.createView({
        id: "__alloyId6104"
    });
    $.__views.__alloyId6104 && $.addTopLevelView($.__views.__alloyId6104);
    $.__views.__alloyId6105 = Ti.UI.createView({
        id: "__alloyId6105"
    });
    $.__views.__alloyId6104.add($.__views.__alloyId6105);
    $.__views.__alloyId6106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6106"
    });
    $.__views.__alloyId6105.add($.__views.__alloyId6106);
    $.__views.__alloyId6107 = Ti.UI.createView({
        id: "__alloyId6107"
    });
    $.__views.__alloyId6107 && $.addTopLevelView($.__views.__alloyId6107);
    $.__views.__alloyId6108 = Ti.UI.createView({
        id: "__alloyId6108"
    });
    $.__views.__alloyId6107.add($.__views.__alloyId6108);
    $.__views.__alloyId6109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6109"
    });
    $.__views.__alloyId6108.add($.__views.__alloyId6109);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;