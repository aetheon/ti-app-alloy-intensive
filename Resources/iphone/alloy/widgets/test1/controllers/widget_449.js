function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_449";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_449 = Ti.UI.createView({
        id: "widget_449"
    });
    $.__views.widget_449 && $.addTopLevelView($.__views.widget_449);
    $.__views.__alloyId10140 = Ti.UI.createView({
        id: "__alloyId10140"
    });
    $.__views.widget_449.add($.__views.__alloyId10140);
    $.__views.__alloyId10141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10141"
    });
    $.__views.__alloyId10140.add($.__views.__alloyId10141);
    $.__views.__alloyId10142 = Ti.UI.createView({
        id: "__alloyId10142"
    });
    $.__views.__alloyId10142 && $.addTopLevelView($.__views.__alloyId10142);
    $.__views.__alloyId10143 = Ti.UI.createView({
        id: "__alloyId10143"
    });
    $.__views.__alloyId10142.add($.__views.__alloyId10143);
    $.__views.__alloyId10144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10144"
    });
    $.__views.__alloyId10143.add($.__views.__alloyId10144);
    $.__views.__alloyId10145 = Ti.UI.createView({
        id: "__alloyId10145"
    });
    $.__views.__alloyId10145 && $.addTopLevelView($.__views.__alloyId10145);
    $.__views.__alloyId10146 = Ti.UI.createView({
        id: "__alloyId10146"
    });
    $.__views.__alloyId10145.add($.__views.__alloyId10146);
    $.__views.__alloyId10147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10147"
    });
    $.__views.__alloyId10146.add($.__views.__alloyId10147);
    $.__views.__alloyId10148 = Ti.UI.createView({
        id: "__alloyId10148"
    });
    $.__views.__alloyId10148 && $.addTopLevelView($.__views.__alloyId10148);
    $.__views.__alloyId10149 = Ti.UI.createView({
        id: "__alloyId10149"
    });
    $.__views.__alloyId10148.add($.__views.__alloyId10149);
    $.__views.__alloyId10150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10150"
    });
    $.__views.__alloyId10149.add($.__views.__alloyId10150);
    $.__views.__alloyId10151 = Ti.UI.createView({
        id: "__alloyId10151"
    });
    $.__views.__alloyId10151 && $.addTopLevelView($.__views.__alloyId10151);
    $.__views.__alloyId10152 = Ti.UI.createView({
        id: "__alloyId10152"
    });
    $.__views.__alloyId10151.add($.__views.__alloyId10152);
    $.__views.__alloyId10153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10153"
    });
    $.__views.__alloyId10152.add($.__views.__alloyId10153);
    $.__views.__alloyId10154 = Ti.UI.createView({
        id: "__alloyId10154"
    });
    $.__views.__alloyId10154 && $.addTopLevelView($.__views.__alloyId10154);
    $.__views.__alloyId10155 = Ti.UI.createView({
        id: "__alloyId10155"
    });
    $.__views.__alloyId10154.add($.__views.__alloyId10155);
    $.__views.__alloyId10156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10156"
    });
    $.__views.__alloyId10155.add($.__views.__alloyId10156);
    $.__views.__alloyId10157 = Ti.UI.createView({
        id: "__alloyId10157"
    });
    $.__views.__alloyId10157 && $.addTopLevelView($.__views.__alloyId10157);
    $.__views.__alloyId10158 = Ti.UI.createView({
        id: "__alloyId10158"
    });
    $.__views.__alloyId10157.add($.__views.__alloyId10158);
    $.__views.__alloyId10159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10159"
    });
    $.__views.__alloyId10158.add($.__views.__alloyId10159);
    $.__views.__alloyId10160 = Ti.UI.createView({
        id: "__alloyId10160"
    });
    $.__views.__alloyId10160 && $.addTopLevelView($.__views.__alloyId10160);
    $.__views.__alloyId10161 = Ti.UI.createView({
        id: "__alloyId10161"
    });
    $.__views.__alloyId10160.add($.__views.__alloyId10161);
    $.__views.__alloyId10162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10162"
    });
    $.__views.__alloyId10161.add($.__views.__alloyId10162);
    $.__views.__alloyId10163 = Ti.UI.createView({
        id: "__alloyId10163"
    });
    $.__views.__alloyId10163 && $.addTopLevelView($.__views.__alloyId10163);
    $.__views.__alloyId10164 = Ti.UI.createView({
        id: "__alloyId10164"
    });
    $.__views.__alloyId10163.add($.__views.__alloyId10164);
    $.__views.__alloyId10165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10165"
    });
    $.__views.__alloyId10164.add($.__views.__alloyId10165);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;