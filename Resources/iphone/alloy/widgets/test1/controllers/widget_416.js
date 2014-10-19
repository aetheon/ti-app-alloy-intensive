function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_416";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_416 = Ti.UI.createView({
        id: "widget_416"
    });
    $.__views.widget_416 && $.addTopLevelView($.__views.widget_416);
    $.__views.__alloyId9204 = Ti.UI.createView({
        id: "__alloyId9204"
    });
    $.__views.widget_416.add($.__views.__alloyId9204);
    $.__views.__alloyId9205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9205"
    });
    $.__views.__alloyId9204.add($.__views.__alloyId9205);
    $.__views.__alloyId9206 = Ti.UI.createView({
        id: "__alloyId9206"
    });
    $.__views.__alloyId9206 && $.addTopLevelView($.__views.__alloyId9206);
    $.__views.__alloyId9207 = Ti.UI.createView({
        id: "__alloyId9207"
    });
    $.__views.__alloyId9206.add($.__views.__alloyId9207);
    $.__views.__alloyId9208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9208"
    });
    $.__views.__alloyId9207.add($.__views.__alloyId9208);
    $.__views.__alloyId9209 = Ti.UI.createView({
        id: "__alloyId9209"
    });
    $.__views.__alloyId9209 && $.addTopLevelView($.__views.__alloyId9209);
    $.__views.__alloyId9210 = Ti.UI.createView({
        id: "__alloyId9210"
    });
    $.__views.__alloyId9209.add($.__views.__alloyId9210);
    $.__views.__alloyId9211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9211"
    });
    $.__views.__alloyId9210.add($.__views.__alloyId9211);
    $.__views.__alloyId9212 = Ti.UI.createView({
        id: "__alloyId9212"
    });
    $.__views.__alloyId9212 && $.addTopLevelView($.__views.__alloyId9212);
    $.__views.__alloyId9213 = Ti.UI.createView({
        id: "__alloyId9213"
    });
    $.__views.__alloyId9212.add($.__views.__alloyId9213);
    $.__views.__alloyId9214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9214"
    });
    $.__views.__alloyId9213.add($.__views.__alloyId9214);
    $.__views.__alloyId9215 = Ti.UI.createView({
        id: "__alloyId9215"
    });
    $.__views.__alloyId9215 && $.addTopLevelView($.__views.__alloyId9215);
    $.__views.__alloyId9216 = Ti.UI.createView({
        id: "__alloyId9216"
    });
    $.__views.__alloyId9215.add($.__views.__alloyId9216);
    $.__views.__alloyId9217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9217"
    });
    $.__views.__alloyId9216.add($.__views.__alloyId9217);
    $.__views.__alloyId9218 = Ti.UI.createView({
        id: "__alloyId9218"
    });
    $.__views.__alloyId9218 && $.addTopLevelView($.__views.__alloyId9218);
    $.__views.__alloyId9219 = Ti.UI.createView({
        id: "__alloyId9219"
    });
    $.__views.__alloyId9218.add($.__views.__alloyId9219);
    $.__views.__alloyId9220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9220"
    });
    $.__views.__alloyId9219.add($.__views.__alloyId9220);
    $.__views.__alloyId9221 = Ti.UI.createView({
        id: "__alloyId9221"
    });
    $.__views.__alloyId9221 && $.addTopLevelView($.__views.__alloyId9221);
    $.__views.__alloyId9222 = Ti.UI.createView({
        id: "__alloyId9222"
    });
    $.__views.__alloyId9221.add($.__views.__alloyId9222);
    $.__views.__alloyId9223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9223"
    });
    $.__views.__alloyId9222.add($.__views.__alloyId9223);
    $.__views.__alloyId9224 = Ti.UI.createView({
        id: "__alloyId9224"
    });
    $.__views.__alloyId9224 && $.addTopLevelView($.__views.__alloyId9224);
    $.__views.__alloyId9225 = Ti.UI.createView({
        id: "__alloyId9225"
    });
    $.__views.__alloyId9224.add($.__views.__alloyId9225);
    $.__views.__alloyId9226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9226"
    });
    $.__views.__alloyId9225.add($.__views.__alloyId9226);
    $.__views.__alloyId9227 = Ti.UI.createView({
        id: "__alloyId9227"
    });
    $.__views.__alloyId9227 && $.addTopLevelView($.__views.__alloyId9227);
    $.__views.__alloyId9228 = Ti.UI.createView({
        id: "__alloyId9228"
    });
    $.__views.__alloyId9227.add($.__views.__alloyId9228);
    $.__views.__alloyId9229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9229"
    });
    $.__views.__alloyId9228.add($.__views.__alloyId9229);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;