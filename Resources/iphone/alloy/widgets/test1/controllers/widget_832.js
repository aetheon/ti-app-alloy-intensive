function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_832";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_832 = Ti.UI.createView({
        id: "widget_832"
    });
    $.__views.widget_832 && $.addTopLevelView($.__views.widget_832);
    $.__views.__alloyId21216 = Ti.UI.createView({
        id: "__alloyId21216"
    });
    $.__views.widget_832.add($.__views.__alloyId21216);
    $.__views.__alloyId21217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21217"
    });
    $.__views.__alloyId21216.add($.__views.__alloyId21217);
    $.__views.__alloyId21218 = Ti.UI.createView({
        id: "__alloyId21218"
    });
    $.__views.__alloyId21218 && $.addTopLevelView($.__views.__alloyId21218);
    $.__views.__alloyId21219 = Ti.UI.createView({
        id: "__alloyId21219"
    });
    $.__views.__alloyId21218.add($.__views.__alloyId21219);
    $.__views.__alloyId21220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21220"
    });
    $.__views.__alloyId21219.add($.__views.__alloyId21220);
    $.__views.__alloyId21221 = Ti.UI.createView({
        id: "__alloyId21221"
    });
    $.__views.__alloyId21221 && $.addTopLevelView($.__views.__alloyId21221);
    $.__views.__alloyId21222 = Ti.UI.createView({
        id: "__alloyId21222"
    });
    $.__views.__alloyId21221.add($.__views.__alloyId21222);
    $.__views.__alloyId21223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21223"
    });
    $.__views.__alloyId21222.add($.__views.__alloyId21223);
    $.__views.__alloyId21224 = Ti.UI.createView({
        id: "__alloyId21224"
    });
    $.__views.__alloyId21224 && $.addTopLevelView($.__views.__alloyId21224);
    $.__views.__alloyId21225 = Ti.UI.createView({
        id: "__alloyId21225"
    });
    $.__views.__alloyId21224.add($.__views.__alloyId21225);
    $.__views.__alloyId21226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21226"
    });
    $.__views.__alloyId21225.add($.__views.__alloyId21226);
    $.__views.__alloyId21227 = Ti.UI.createView({
        id: "__alloyId21227"
    });
    $.__views.__alloyId21227 && $.addTopLevelView($.__views.__alloyId21227);
    $.__views.__alloyId21228 = Ti.UI.createView({
        id: "__alloyId21228"
    });
    $.__views.__alloyId21227.add($.__views.__alloyId21228);
    $.__views.__alloyId21229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21229"
    });
    $.__views.__alloyId21228.add($.__views.__alloyId21229);
    $.__views.__alloyId21230 = Ti.UI.createView({
        id: "__alloyId21230"
    });
    $.__views.__alloyId21230 && $.addTopLevelView($.__views.__alloyId21230);
    $.__views.__alloyId21231 = Ti.UI.createView({
        id: "__alloyId21231"
    });
    $.__views.__alloyId21230.add($.__views.__alloyId21231);
    $.__views.__alloyId21232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21232"
    });
    $.__views.__alloyId21231.add($.__views.__alloyId21232);
    $.__views.__alloyId21233 = Ti.UI.createView({
        id: "__alloyId21233"
    });
    $.__views.__alloyId21233 && $.addTopLevelView($.__views.__alloyId21233);
    $.__views.__alloyId21234 = Ti.UI.createView({
        id: "__alloyId21234"
    });
    $.__views.__alloyId21233.add($.__views.__alloyId21234);
    $.__views.__alloyId21235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21235"
    });
    $.__views.__alloyId21234.add($.__views.__alloyId21235);
    $.__views.__alloyId21236 = Ti.UI.createView({
        id: "__alloyId21236"
    });
    $.__views.__alloyId21236 && $.addTopLevelView($.__views.__alloyId21236);
    $.__views.__alloyId21237 = Ti.UI.createView({
        id: "__alloyId21237"
    });
    $.__views.__alloyId21236.add($.__views.__alloyId21237);
    $.__views.__alloyId21238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21238"
    });
    $.__views.__alloyId21237.add($.__views.__alloyId21238);
    $.__views.__alloyId21239 = Ti.UI.createView({
        id: "__alloyId21239"
    });
    $.__views.__alloyId21239 && $.addTopLevelView($.__views.__alloyId21239);
    $.__views.__alloyId21240 = Ti.UI.createView({
        id: "__alloyId21240"
    });
    $.__views.__alloyId21239.add($.__views.__alloyId21240);
    $.__views.__alloyId21241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21241"
    });
    $.__views.__alloyId21240.add($.__views.__alloyId21241);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;