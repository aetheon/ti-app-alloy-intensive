function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_763";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_763 = Ti.UI.createView({
        id: "widget_763"
    });
    $.__views.widget_763 && $.addTopLevelView($.__views.widget_763);
    $.__views.__alloyId19214 = Ti.UI.createView({
        id: "__alloyId19214"
    });
    $.__views.widget_763.add($.__views.__alloyId19214);
    $.__views.__alloyId19215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19215"
    });
    $.__views.__alloyId19214.add($.__views.__alloyId19215);
    $.__views.__alloyId19216 = Ti.UI.createView({
        id: "__alloyId19216"
    });
    $.__views.__alloyId19216 && $.addTopLevelView($.__views.__alloyId19216);
    $.__views.__alloyId19217 = Ti.UI.createView({
        id: "__alloyId19217"
    });
    $.__views.__alloyId19216.add($.__views.__alloyId19217);
    $.__views.__alloyId19218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19218"
    });
    $.__views.__alloyId19217.add($.__views.__alloyId19218);
    $.__views.__alloyId19219 = Ti.UI.createView({
        id: "__alloyId19219"
    });
    $.__views.__alloyId19219 && $.addTopLevelView($.__views.__alloyId19219);
    $.__views.__alloyId19220 = Ti.UI.createView({
        id: "__alloyId19220"
    });
    $.__views.__alloyId19219.add($.__views.__alloyId19220);
    $.__views.__alloyId19221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19221"
    });
    $.__views.__alloyId19220.add($.__views.__alloyId19221);
    $.__views.__alloyId19222 = Ti.UI.createView({
        id: "__alloyId19222"
    });
    $.__views.__alloyId19222 && $.addTopLevelView($.__views.__alloyId19222);
    $.__views.__alloyId19223 = Ti.UI.createView({
        id: "__alloyId19223"
    });
    $.__views.__alloyId19222.add($.__views.__alloyId19223);
    $.__views.__alloyId19224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19224"
    });
    $.__views.__alloyId19223.add($.__views.__alloyId19224);
    $.__views.__alloyId19225 = Ti.UI.createView({
        id: "__alloyId19225"
    });
    $.__views.__alloyId19225 && $.addTopLevelView($.__views.__alloyId19225);
    $.__views.__alloyId19226 = Ti.UI.createView({
        id: "__alloyId19226"
    });
    $.__views.__alloyId19225.add($.__views.__alloyId19226);
    $.__views.__alloyId19227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19227"
    });
    $.__views.__alloyId19226.add($.__views.__alloyId19227);
    $.__views.__alloyId19228 = Ti.UI.createView({
        id: "__alloyId19228"
    });
    $.__views.__alloyId19228 && $.addTopLevelView($.__views.__alloyId19228);
    $.__views.__alloyId19229 = Ti.UI.createView({
        id: "__alloyId19229"
    });
    $.__views.__alloyId19228.add($.__views.__alloyId19229);
    $.__views.__alloyId19230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19230"
    });
    $.__views.__alloyId19229.add($.__views.__alloyId19230);
    $.__views.__alloyId19231 = Ti.UI.createView({
        id: "__alloyId19231"
    });
    $.__views.__alloyId19231 && $.addTopLevelView($.__views.__alloyId19231);
    $.__views.__alloyId19232 = Ti.UI.createView({
        id: "__alloyId19232"
    });
    $.__views.__alloyId19231.add($.__views.__alloyId19232);
    $.__views.__alloyId19233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19233"
    });
    $.__views.__alloyId19232.add($.__views.__alloyId19233);
    $.__views.__alloyId19234 = Ti.UI.createView({
        id: "__alloyId19234"
    });
    $.__views.__alloyId19234 && $.addTopLevelView($.__views.__alloyId19234);
    $.__views.__alloyId19235 = Ti.UI.createView({
        id: "__alloyId19235"
    });
    $.__views.__alloyId19234.add($.__views.__alloyId19235);
    $.__views.__alloyId19236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19236"
    });
    $.__views.__alloyId19235.add($.__views.__alloyId19236);
    $.__views.__alloyId19237 = Ti.UI.createView({
        id: "__alloyId19237"
    });
    $.__views.__alloyId19237 && $.addTopLevelView($.__views.__alloyId19237);
    $.__views.__alloyId19238 = Ti.UI.createView({
        id: "__alloyId19238"
    });
    $.__views.__alloyId19237.add($.__views.__alloyId19238);
    $.__views.__alloyId19239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19239"
    });
    $.__views.__alloyId19238.add($.__views.__alloyId19239);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;