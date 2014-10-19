function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_347";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_347 = Ti.UI.createView({
        id: "widget_347"
    });
    $.__views.widget_347 && $.addTopLevelView($.__views.widget_347);
    $.__views.__alloyId7202 = Ti.UI.createView({
        id: "__alloyId7202"
    });
    $.__views.widget_347.add($.__views.__alloyId7202);
    $.__views.__alloyId7203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7203"
    });
    $.__views.__alloyId7202.add($.__views.__alloyId7203);
    $.__views.__alloyId7204 = Ti.UI.createView({
        id: "__alloyId7204"
    });
    $.__views.__alloyId7204 && $.addTopLevelView($.__views.__alloyId7204);
    $.__views.__alloyId7205 = Ti.UI.createView({
        id: "__alloyId7205"
    });
    $.__views.__alloyId7204.add($.__views.__alloyId7205);
    $.__views.__alloyId7206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7206"
    });
    $.__views.__alloyId7205.add($.__views.__alloyId7206);
    $.__views.__alloyId7207 = Ti.UI.createView({
        id: "__alloyId7207"
    });
    $.__views.__alloyId7207 && $.addTopLevelView($.__views.__alloyId7207);
    $.__views.__alloyId7208 = Ti.UI.createView({
        id: "__alloyId7208"
    });
    $.__views.__alloyId7207.add($.__views.__alloyId7208);
    $.__views.__alloyId7209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7209"
    });
    $.__views.__alloyId7208.add($.__views.__alloyId7209);
    $.__views.__alloyId7210 = Ti.UI.createView({
        id: "__alloyId7210"
    });
    $.__views.__alloyId7210 && $.addTopLevelView($.__views.__alloyId7210);
    $.__views.__alloyId7211 = Ti.UI.createView({
        id: "__alloyId7211"
    });
    $.__views.__alloyId7210.add($.__views.__alloyId7211);
    $.__views.__alloyId7212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7212"
    });
    $.__views.__alloyId7211.add($.__views.__alloyId7212);
    $.__views.__alloyId7213 = Ti.UI.createView({
        id: "__alloyId7213"
    });
    $.__views.__alloyId7213 && $.addTopLevelView($.__views.__alloyId7213);
    $.__views.__alloyId7214 = Ti.UI.createView({
        id: "__alloyId7214"
    });
    $.__views.__alloyId7213.add($.__views.__alloyId7214);
    $.__views.__alloyId7215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7215"
    });
    $.__views.__alloyId7214.add($.__views.__alloyId7215);
    $.__views.__alloyId7216 = Ti.UI.createView({
        id: "__alloyId7216"
    });
    $.__views.__alloyId7216 && $.addTopLevelView($.__views.__alloyId7216);
    $.__views.__alloyId7217 = Ti.UI.createView({
        id: "__alloyId7217"
    });
    $.__views.__alloyId7216.add($.__views.__alloyId7217);
    $.__views.__alloyId7218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7218"
    });
    $.__views.__alloyId7217.add($.__views.__alloyId7218);
    $.__views.__alloyId7219 = Ti.UI.createView({
        id: "__alloyId7219"
    });
    $.__views.__alloyId7219 && $.addTopLevelView($.__views.__alloyId7219);
    $.__views.__alloyId7220 = Ti.UI.createView({
        id: "__alloyId7220"
    });
    $.__views.__alloyId7219.add($.__views.__alloyId7220);
    $.__views.__alloyId7221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7221"
    });
    $.__views.__alloyId7220.add($.__views.__alloyId7221);
    $.__views.__alloyId7222 = Ti.UI.createView({
        id: "__alloyId7222"
    });
    $.__views.__alloyId7222 && $.addTopLevelView($.__views.__alloyId7222);
    $.__views.__alloyId7223 = Ti.UI.createView({
        id: "__alloyId7223"
    });
    $.__views.__alloyId7222.add($.__views.__alloyId7223);
    $.__views.__alloyId7224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7224"
    });
    $.__views.__alloyId7223.add($.__views.__alloyId7224);
    $.__views.__alloyId7225 = Ti.UI.createView({
        id: "__alloyId7225"
    });
    $.__views.__alloyId7225 && $.addTopLevelView($.__views.__alloyId7225);
    $.__views.__alloyId7226 = Ti.UI.createView({
        id: "__alloyId7226"
    });
    $.__views.__alloyId7225.add($.__views.__alloyId7226);
    $.__views.__alloyId7227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7227"
    });
    $.__views.__alloyId7226.add($.__views.__alloyId7227);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;