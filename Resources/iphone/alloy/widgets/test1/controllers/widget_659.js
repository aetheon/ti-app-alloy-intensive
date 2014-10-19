function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_659";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_659 = Ti.UI.createView({
        id: "widget_659"
    });
    $.__views.widget_659 && $.addTopLevelView($.__views.widget_659);
    $.__views.__alloyId16198 = Ti.UI.createView({
        id: "__alloyId16198"
    });
    $.__views.widget_659.add($.__views.__alloyId16198);
    $.__views.__alloyId16199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16199"
    });
    $.__views.__alloyId16198.add($.__views.__alloyId16199);
    $.__views.__alloyId16200 = Ti.UI.createView({
        id: "__alloyId16200"
    });
    $.__views.__alloyId16200 && $.addTopLevelView($.__views.__alloyId16200);
    $.__views.__alloyId16201 = Ti.UI.createView({
        id: "__alloyId16201"
    });
    $.__views.__alloyId16200.add($.__views.__alloyId16201);
    $.__views.__alloyId16202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16202"
    });
    $.__views.__alloyId16201.add($.__views.__alloyId16202);
    $.__views.__alloyId16203 = Ti.UI.createView({
        id: "__alloyId16203"
    });
    $.__views.__alloyId16203 && $.addTopLevelView($.__views.__alloyId16203);
    $.__views.__alloyId16204 = Ti.UI.createView({
        id: "__alloyId16204"
    });
    $.__views.__alloyId16203.add($.__views.__alloyId16204);
    $.__views.__alloyId16205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16205"
    });
    $.__views.__alloyId16204.add($.__views.__alloyId16205);
    $.__views.__alloyId16206 = Ti.UI.createView({
        id: "__alloyId16206"
    });
    $.__views.__alloyId16206 && $.addTopLevelView($.__views.__alloyId16206);
    $.__views.__alloyId16207 = Ti.UI.createView({
        id: "__alloyId16207"
    });
    $.__views.__alloyId16206.add($.__views.__alloyId16207);
    $.__views.__alloyId16208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16208"
    });
    $.__views.__alloyId16207.add($.__views.__alloyId16208);
    $.__views.__alloyId16209 = Ti.UI.createView({
        id: "__alloyId16209"
    });
    $.__views.__alloyId16209 && $.addTopLevelView($.__views.__alloyId16209);
    $.__views.__alloyId16210 = Ti.UI.createView({
        id: "__alloyId16210"
    });
    $.__views.__alloyId16209.add($.__views.__alloyId16210);
    $.__views.__alloyId16211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16211"
    });
    $.__views.__alloyId16210.add($.__views.__alloyId16211);
    $.__views.__alloyId16212 = Ti.UI.createView({
        id: "__alloyId16212"
    });
    $.__views.__alloyId16212 && $.addTopLevelView($.__views.__alloyId16212);
    $.__views.__alloyId16213 = Ti.UI.createView({
        id: "__alloyId16213"
    });
    $.__views.__alloyId16212.add($.__views.__alloyId16213);
    $.__views.__alloyId16214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16214"
    });
    $.__views.__alloyId16213.add($.__views.__alloyId16214);
    $.__views.__alloyId16215 = Ti.UI.createView({
        id: "__alloyId16215"
    });
    $.__views.__alloyId16215 && $.addTopLevelView($.__views.__alloyId16215);
    $.__views.__alloyId16216 = Ti.UI.createView({
        id: "__alloyId16216"
    });
    $.__views.__alloyId16215.add($.__views.__alloyId16216);
    $.__views.__alloyId16217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16217"
    });
    $.__views.__alloyId16216.add($.__views.__alloyId16217);
    $.__views.__alloyId16218 = Ti.UI.createView({
        id: "__alloyId16218"
    });
    $.__views.__alloyId16218 && $.addTopLevelView($.__views.__alloyId16218);
    $.__views.__alloyId16219 = Ti.UI.createView({
        id: "__alloyId16219"
    });
    $.__views.__alloyId16218.add($.__views.__alloyId16219);
    $.__views.__alloyId16220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16220"
    });
    $.__views.__alloyId16219.add($.__views.__alloyId16220);
    $.__views.__alloyId16221 = Ti.UI.createView({
        id: "__alloyId16221"
    });
    $.__views.__alloyId16221 && $.addTopLevelView($.__views.__alloyId16221);
    $.__views.__alloyId16222 = Ti.UI.createView({
        id: "__alloyId16222"
    });
    $.__views.__alloyId16221.add($.__views.__alloyId16222);
    $.__views.__alloyId16223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16223"
    });
    $.__views.__alloyId16222.add($.__views.__alloyId16223);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;