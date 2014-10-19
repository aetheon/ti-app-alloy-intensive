function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_867";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_867 = Ti.UI.createView({
        id: "widget_867"
    });
    $.__views.widget_867 && $.addTopLevelView($.__views.widget_867);
    $.__views.__alloyId22204 = Ti.UI.createView({
        id: "__alloyId22204"
    });
    $.__views.widget_867.add($.__views.__alloyId22204);
    $.__views.__alloyId22205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22205"
    });
    $.__views.__alloyId22204.add($.__views.__alloyId22205);
    $.__views.__alloyId22206 = Ti.UI.createView({
        id: "__alloyId22206"
    });
    $.__views.__alloyId22206 && $.addTopLevelView($.__views.__alloyId22206);
    $.__views.__alloyId22207 = Ti.UI.createView({
        id: "__alloyId22207"
    });
    $.__views.__alloyId22206.add($.__views.__alloyId22207);
    $.__views.__alloyId22208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22208"
    });
    $.__views.__alloyId22207.add($.__views.__alloyId22208);
    $.__views.__alloyId22209 = Ti.UI.createView({
        id: "__alloyId22209"
    });
    $.__views.__alloyId22209 && $.addTopLevelView($.__views.__alloyId22209);
    $.__views.__alloyId22210 = Ti.UI.createView({
        id: "__alloyId22210"
    });
    $.__views.__alloyId22209.add($.__views.__alloyId22210);
    $.__views.__alloyId22211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22211"
    });
    $.__views.__alloyId22210.add($.__views.__alloyId22211);
    $.__views.__alloyId22212 = Ti.UI.createView({
        id: "__alloyId22212"
    });
    $.__views.__alloyId22212 && $.addTopLevelView($.__views.__alloyId22212);
    $.__views.__alloyId22213 = Ti.UI.createView({
        id: "__alloyId22213"
    });
    $.__views.__alloyId22212.add($.__views.__alloyId22213);
    $.__views.__alloyId22214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22214"
    });
    $.__views.__alloyId22213.add($.__views.__alloyId22214);
    $.__views.__alloyId22215 = Ti.UI.createView({
        id: "__alloyId22215"
    });
    $.__views.__alloyId22215 && $.addTopLevelView($.__views.__alloyId22215);
    $.__views.__alloyId22216 = Ti.UI.createView({
        id: "__alloyId22216"
    });
    $.__views.__alloyId22215.add($.__views.__alloyId22216);
    $.__views.__alloyId22217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22217"
    });
    $.__views.__alloyId22216.add($.__views.__alloyId22217);
    $.__views.__alloyId22218 = Ti.UI.createView({
        id: "__alloyId22218"
    });
    $.__views.__alloyId22218 && $.addTopLevelView($.__views.__alloyId22218);
    $.__views.__alloyId22219 = Ti.UI.createView({
        id: "__alloyId22219"
    });
    $.__views.__alloyId22218.add($.__views.__alloyId22219);
    $.__views.__alloyId22220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22220"
    });
    $.__views.__alloyId22219.add($.__views.__alloyId22220);
    $.__views.__alloyId22221 = Ti.UI.createView({
        id: "__alloyId22221"
    });
    $.__views.__alloyId22221 && $.addTopLevelView($.__views.__alloyId22221);
    $.__views.__alloyId22222 = Ti.UI.createView({
        id: "__alloyId22222"
    });
    $.__views.__alloyId22221.add($.__views.__alloyId22222);
    $.__views.__alloyId22223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22223"
    });
    $.__views.__alloyId22222.add($.__views.__alloyId22223);
    $.__views.__alloyId22224 = Ti.UI.createView({
        id: "__alloyId22224"
    });
    $.__views.__alloyId22224 && $.addTopLevelView($.__views.__alloyId22224);
    $.__views.__alloyId22225 = Ti.UI.createView({
        id: "__alloyId22225"
    });
    $.__views.__alloyId22224.add($.__views.__alloyId22225);
    $.__views.__alloyId22226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22226"
    });
    $.__views.__alloyId22225.add($.__views.__alloyId22226);
    $.__views.__alloyId22227 = Ti.UI.createView({
        id: "__alloyId22227"
    });
    $.__views.__alloyId22227 && $.addTopLevelView($.__views.__alloyId22227);
    $.__views.__alloyId22228 = Ti.UI.createView({
        id: "__alloyId22228"
    });
    $.__views.__alloyId22227.add($.__views.__alloyId22228);
    $.__views.__alloyId22229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22229"
    });
    $.__views.__alloyId22228.add($.__views.__alloyId22229);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;