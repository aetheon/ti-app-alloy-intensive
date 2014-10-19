function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_796";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_796 = Ti.UI.createView({
        id: "widget_796"
    });
    $.__views.widget_796 && $.addTopLevelView($.__views.widget_796);
    $.__views.__alloyId20150 = Ti.UI.createView({
        id: "__alloyId20150"
    });
    $.__views.widget_796.add($.__views.__alloyId20150);
    $.__views.__alloyId20151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20151"
    });
    $.__views.__alloyId20150.add($.__views.__alloyId20151);
    $.__views.__alloyId20152 = Ti.UI.createView({
        id: "__alloyId20152"
    });
    $.__views.__alloyId20152 && $.addTopLevelView($.__views.__alloyId20152);
    $.__views.__alloyId20153 = Ti.UI.createView({
        id: "__alloyId20153"
    });
    $.__views.__alloyId20152.add($.__views.__alloyId20153);
    $.__views.__alloyId20154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20154"
    });
    $.__views.__alloyId20153.add($.__views.__alloyId20154);
    $.__views.__alloyId20155 = Ti.UI.createView({
        id: "__alloyId20155"
    });
    $.__views.__alloyId20155 && $.addTopLevelView($.__views.__alloyId20155);
    $.__views.__alloyId20156 = Ti.UI.createView({
        id: "__alloyId20156"
    });
    $.__views.__alloyId20155.add($.__views.__alloyId20156);
    $.__views.__alloyId20157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20157"
    });
    $.__views.__alloyId20156.add($.__views.__alloyId20157);
    $.__views.__alloyId20158 = Ti.UI.createView({
        id: "__alloyId20158"
    });
    $.__views.__alloyId20158 && $.addTopLevelView($.__views.__alloyId20158);
    $.__views.__alloyId20159 = Ti.UI.createView({
        id: "__alloyId20159"
    });
    $.__views.__alloyId20158.add($.__views.__alloyId20159);
    $.__views.__alloyId20160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20160"
    });
    $.__views.__alloyId20159.add($.__views.__alloyId20160);
    $.__views.__alloyId20161 = Ti.UI.createView({
        id: "__alloyId20161"
    });
    $.__views.__alloyId20161 && $.addTopLevelView($.__views.__alloyId20161);
    $.__views.__alloyId20162 = Ti.UI.createView({
        id: "__alloyId20162"
    });
    $.__views.__alloyId20161.add($.__views.__alloyId20162);
    $.__views.__alloyId20163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20163"
    });
    $.__views.__alloyId20162.add($.__views.__alloyId20163);
    $.__views.__alloyId20164 = Ti.UI.createView({
        id: "__alloyId20164"
    });
    $.__views.__alloyId20164 && $.addTopLevelView($.__views.__alloyId20164);
    $.__views.__alloyId20165 = Ti.UI.createView({
        id: "__alloyId20165"
    });
    $.__views.__alloyId20164.add($.__views.__alloyId20165);
    $.__views.__alloyId20166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20166"
    });
    $.__views.__alloyId20165.add($.__views.__alloyId20166);
    $.__views.__alloyId20167 = Ti.UI.createView({
        id: "__alloyId20167"
    });
    $.__views.__alloyId20167 && $.addTopLevelView($.__views.__alloyId20167);
    $.__views.__alloyId20168 = Ti.UI.createView({
        id: "__alloyId20168"
    });
    $.__views.__alloyId20167.add($.__views.__alloyId20168);
    $.__views.__alloyId20169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20169"
    });
    $.__views.__alloyId20168.add($.__views.__alloyId20169);
    $.__views.__alloyId20170 = Ti.UI.createView({
        id: "__alloyId20170"
    });
    $.__views.__alloyId20170 && $.addTopLevelView($.__views.__alloyId20170);
    $.__views.__alloyId20171 = Ti.UI.createView({
        id: "__alloyId20171"
    });
    $.__views.__alloyId20170.add($.__views.__alloyId20171);
    $.__views.__alloyId20172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20172"
    });
    $.__views.__alloyId20171.add($.__views.__alloyId20172);
    $.__views.__alloyId20173 = Ti.UI.createView({
        id: "__alloyId20173"
    });
    $.__views.__alloyId20173 && $.addTopLevelView($.__views.__alloyId20173);
    $.__views.__alloyId20174 = Ti.UI.createView({
        id: "__alloyId20174"
    });
    $.__views.__alloyId20173.add($.__views.__alloyId20174);
    $.__views.__alloyId20175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20175"
    });
    $.__views.__alloyId20174.add($.__views.__alloyId20175);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;