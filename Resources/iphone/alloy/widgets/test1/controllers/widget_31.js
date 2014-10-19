function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_31";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_31 = Ti.UI.createView({
        id: "widget_31"
    });
    $.__views.widget_31 && $.addTopLevelView($.__views.widget_31);
    $.__views.__alloyId6136 = Ti.UI.createView({
        id: "__alloyId6136"
    });
    $.__views.widget_31.add($.__views.__alloyId6136);
    $.__views.__alloyId6137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6137"
    });
    $.__views.__alloyId6136.add($.__views.__alloyId6137);
    $.__views.__alloyId6138 = Ti.UI.createView({
        id: "__alloyId6138"
    });
    $.__views.__alloyId6138 && $.addTopLevelView($.__views.__alloyId6138);
    $.__views.__alloyId6139 = Ti.UI.createView({
        id: "__alloyId6139"
    });
    $.__views.__alloyId6138.add($.__views.__alloyId6139);
    $.__views.__alloyId6140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6140"
    });
    $.__views.__alloyId6139.add($.__views.__alloyId6140);
    $.__views.__alloyId6141 = Ti.UI.createView({
        id: "__alloyId6141"
    });
    $.__views.__alloyId6141 && $.addTopLevelView($.__views.__alloyId6141);
    $.__views.__alloyId6142 = Ti.UI.createView({
        id: "__alloyId6142"
    });
    $.__views.__alloyId6141.add($.__views.__alloyId6142);
    $.__views.__alloyId6143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6143"
    });
    $.__views.__alloyId6142.add($.__views.__alloyId6143);
    $.__views.__alloyId6144 = Ti.UI.createView({
        id: "__alloyId6144"
    });
    $.__views.__alloyId6144 && $.addTopLevelView($.__views.__alloyId6144);
    $.__views.__alloyId6145 = Ti.UI.createView({
        id: "__alloyId6145"
    });
    $.__views.__alloyId6144.add($.__views.__alloyId6145);
    $.__views.__alloyId6146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6146"
    });
    $.__views.__alloyId6145.add($.__views.__alloyId6146);
    $.__views.__alloyId6147 = Ti.UI.createView({
        id: "__alloyId6147"
    });
    $.__views.__alloyId6147 && $.addTopLevelView($.__views.__alloyId6147);
    $.__views.__alloyId6148 = Ti.UI.createView({
        id: "__alloyId6148"
    });
    $.__views.__alloyId6147.add($.__views.__alloyId6148);
    $.__views.__alloyId6149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6149"
    });
    $.__views.__alloyId6148.add($.__views.__alloyId6149);
    $.__views.__alloyId6150 = Ti.UI.createView({
        id: "__alloyId6150"
    });
    $.__views.__alloyId6150 && $.addTopLevelView($.__views.__alloyId6150);
    $.__views.__alloyId6151 = Ti.UI.createView({
        id: "__alloyId6151"
    });
    $.__views.__alloyId6150.add($.__views.__alloyId6151);
    $.__views.__alloyId6152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6152"
    });
    $.__views.__alloyId6151.add($.__views.__alloyId6152);
    $.__views.__alloyId6153 = Ti.UI.createView({
        id: "__alloyId6153"
    });
    $.__views.__alloyId6153 && $.addTopLevelView($.__views.__alloyId6153);
    $.__views.__alloyId6154 = Ti.UI.createView({
        id: "__alloyId6154"
    });
    $.__views.__alloyId6153.add($.__views.__alloyId6154);
    $.__views.__alloyId6155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6155"
    });
    $.__views.__alloyId6154.add($.__views.__alloyId6155);
    $.__views.__alloyId6156 = Ti.UI.createView({
        id: "__alloyId6156"
    });
    $.__views.__alloyId6156 && $.addTopLevelView($.__views.__alloyId6156);
    $.__views.__alloyId6157 = Ti.UI.createView({
        id: "__alloyId6157"
    });
    $.__views.__alloyId6156.add($.__views.__alloyId6157);
    $.__views.__alloyId6158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6158"
    });
    $.__views.__alloyId6157.add($.__views.__alloyId6158);
    $.__views.__alloyId6159 = Ti.UI.createView({
        id: "__alloyId6159"
    });
    $.__views.__alloyId6159 && $.addTopLevelView($.__views.__alloyId6159);
    $.__views.__alloyId6160 = Ti.UI.createView({
        id: "__alloyId6160"
    });
    $.__views.__alloyId6159.add($.__views.__alloyId6160);
    $.__views.__alloyId6161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6161"
    });
    $.__views.__alloyId6160.add($.__views.__alloyId6161);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;