function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_486";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_486 = Ti.UI.createView({
        id: "widget_486"
    });
    $.__views.widget_486 && $.addTopLevelView($.__views.widget_486);
    $.__views.__alloyId11206 = Ti.UI.createView({
        id: "__alloyId11206"
    });
    $.__views.widget_486.add($.__views.__alloyId11206);
    $.__views.__alloyId11207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11207"
    });
    $.__views.__alloyId11206.add($.__views.__alloyId11207);
    $.__views.__alloyId11208 = Ti.UI.createView({
        id: "__alloyId11208"
    });
    $.__views.__alloyId11208 && $.addTopLevelView($.__views.__alloyId11208);
    $.__views.__alloyId11209 = Ti.UI.createView({
        id: "__alloyId11209"
    });
    $.__views.__alloyId11208.add($.__views.__alloyId11209);
    $.__views.__alloyId11210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11210"
    });
    $.__views.__alloyId11209.add($.__views.__alloyId11210);
    $.__views.__alloyId11211 = Ti.UI.createView({
        id: "__alloyId11211"
    });
    $.__views.__alloyId11211 && $.addTopLevelView($.__views.__alloyId11211);
    $.__views.__alloyId11212 = Ti.UI.createView({
        id: "__alloyId11212"
    });
    $.__views.__alloyId11211.add($.__views.__alloyId11212);
    $.__views.__alloyId11213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11213"
    });
    $.__views.__alloyId11212.add($.__views.__alloyId11213);
    $.__views.__alloyId11214 = Ti.UI.createView({
        id: "__alloyId11214"
    });
    $.__views.__alloyId11214 && $.addTopLevelView($.__views.__alloyId11214);
    $.__views.__alloyId11215 = Ti.UI.createView({
        id: "__alloyId11215"
    });
    $.__views.__alloyId11214.add($.__views.__alloyId11215);
    $.__views.__alloyId11216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11216"
    });
    $.__views.__alloyId11215.add($.__views.__alloyId11216);
    $.__views.__alloyId11217 = Ti.UI.createView({
        id: "__alloyId11217"
    });
    $.__views.__alloyId11217 && $.addTopLevelView($.__views.__alloyId11217);
    $.__views.__alloyId11218 = Ti.UI.createView({
        id: "__alloyId11218"
    });
    $.__views.__alloyId11217.add($.__views.__alloyId11218);
    $.__views.__alloyId11219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11219"
    });
    $.__views.__alloyId11218.add($.__views.__alloyId11219);
    $.__views.__alloyId11220 = Ti.UI.createView({
        id: "__alloyId11220"
    });
    $.__views.__alloyId11220 && $.addTopLevelView($.__views.__alloyId11220);
    $.__views.__alloyId11221 = Ti.UI.createView({
        id: "__alloyId11221"
    });
    $.__views.__alloyId11220.add($.__views.__alloyId11221);
    $.__views.__alloyId11222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11222"
    });
    $.__views.__alloyId11221.add($.__views.__alloyId11222);
    $.__views.__alloyId11223 = Ti.UI.createView({
        id: "__alloyId11223"
    });
    $.__views.__alloyId11223 && $.addTopLevelView($.__views.__alloyId11223);
    $.__views.__alloyId11224 = Ti.UI.createView({
        id: "__alloyId11224"
    });
    $.__views.__alloyId11223.add($.__views.__alloyId11224);
    $.__views.__alloyId11225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11225"
    });
    $.__views.__alloyId11224.add($.__views.__alloyId11225);
    $.__views.__alloyId11226 = Ti.UI.createView({
        id: "__alloyId11226"
    });
    $.__views.__alloyId11226 && $.addTopLevelView($.__views.__alloyId11226);
    $.__views.__alloyId11227 = Ti.UI.createView({
        id: "__alloyId11227"
    });
    $.__views.__alloyId11226.add($.__views.__alloyId11227);
    $.__views.__alloyId11228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11228"
    });
    $.__views.__alloyId11227.add($.__views.__alloyId11228);
    $.__views.__alloyId11229 = Ti.UI.createView({
        id: "__alloyId11229"
    });
    $.__views.__alloyId11229 && $.addTopLevelView($.__views.__alloyId11229);
    $.__views.__alloyId11230 = Ti.UI.createView({
        id: "__alloyId11230"
    });
    $.__views.__alloyId11229.add($.__views.__alloyId11230);
    $.__views.__alloyId11231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11231"
    });
    $.__views.__alloyId11230.add($.__views.__alloyId11231);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;