function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_278";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_278 = Ti.UI.createView({
        id: "widget_278"
    });
    $.__views.widget_278 && $.addTopLevelView($.__views.widget_278);
    $.__views.__alloyId5200 = Ti.UI.createView({
        id: "__alloyId5200"
    });
    $.__views.widget_278.add($.__views.__alloyId5200);
    $.__views.__alloyId5201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5201"
    });
    $.__views.__alloyId5200.add($.__views.__alloyId5201);
    $.__views.__alloyId5202 = Ti.UI.createView({
        id: "__alloyId5202"
    });
    $.__views.__alloyId5202 && $.addTopLevelView($.__views.__alloyId5202);
    $.__views.__alloyId5203 = Ti.UI.createView({
        id: "__alloyId5203"
    });
    $.__views.__alloyId5202.add($.__views.__alloyId5203);
    $.__views.__alloyId5204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5204"
    });
    $.__views.__alloyId5203.add($.__views.__alloyId5204);
    $.__views.__alloyId5205 = Ti.UI.createView({
        id: "__alloyId5205"
    });
    $.__views.__alloyId5205 && $.addTopLevelView($.__views.__alloyId5205);
    $.__views.__alloyId5206 = Ti.UI.createView({
        id: "__alloyId5206"
    });
    $.__views.__alloyId5205.add($.__views.__alloyId5206);
    $.__views.__alloyId5207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5207"
    });
    $.__views.__alloyId5206.add($.__views.__alloyId5207);
    $.__views.__alloyId5208 = Ti.UI.createView({
        id: "__alloyId5208"
    });
    $.__views.__alloyId5208 && $.addTopLevelView($.__views.__alloyId5208);
    $.__views.__alloyId5209 = Ti.UI.createView({
        id: "__alloyId5209"
    });
    $.__views.__alloyId5208.add($.__views.__alloyId5209);
    $.__views.__alloyId5210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5210"
    });
    $.__views.__alloyId5209.add($.__views.__alloyId5210);
    $.__views.__alloyId5211 = Ti.UI.createView({
        id: "__alloyId5211"
    });
    $.__views.__alloyId5211 && $.addTopLevelView($.__views.__alloyId5211);
    $.__views.__alloyId5212 = Ti.UI.createView({
        id: "__alloyId5212"
    });
    $.__views.__alloyId5211.add($.__views.__alloyId5212);
    $.__views.__alloyId5213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5213"
    });
    $.__views.__alloyId5212.add($.__views.__alloyId5213);
    $.__views.__alloyId5214 = Ti.UI.createView({
        id: "__alloyId5214"
    });
    $.__views.__alloyId5214 && $.addTopLevelView($.__views.__alloyId5214);
    $.__views.__alloyId5215 = Ti.UI.createView({
        id: "__alloyId5215"
    });
    $.__views.__alloyId5214.add($.__views.__alloyId5215);
    $.__views.__alloyId5216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5216"
    });
    $.__views.__alloyId5215.add($.__views.__alloyId5216);
    $.__views.__alloyId5217 = Ti.UI.createView({
        id: "__alloyId5217"
    });
    $.__views.__alloyId5217 && $.addTopLevelView($.__views.__alloyId5217);
    $.__views.__alloyId5218 = Ti.UI.createView({
        id: "__alloyId5218"
    });
    $.__views.__alloyId5217.add($.__views.__alloyId5218);
    $.__views.__alloyId5219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5219"
    });
    $.__views.__alloyId5218.add($.__views.__alloyId5219);
    $.__views.__alloyId5220 = Ti.UI.createView({
        id: "__alloyId5220"
    });
    $.__views.__alloyId5220 && $.addTopLevelView($.__views.__alloyId5220);
    $.__views.__alloyId5221 = Ti.UI.createView({
        id: "__alloyId5221"
    });
    $.__views.__alloyId5220.add($.__views.__alloyId5221);
    $.__views.__alloyId5222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5222"
    });
    $.__views.__alloyId5221.add($.__views.__alloyId5222);
    $.__views.__alloyId5223 = Ti.UI.createView({
        id: "__alloyId5223"
    });
    $.__views.__alloyId5223 && $.addTopLevelView($.__views.__alloyId5223);
    $.__views.__alloyId5224 = Ti.UI.createView({
        id: "__alloyId5224"
    });
    $.__views.__alloyId5223.add($.__views.__alloyId5224);
    $.__views.__alloyId5225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5225"
    });
    $.__views.__alloyId5224.add($.__views.__alloyId5225);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;