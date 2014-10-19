function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_244";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_244 = Ti.UI.createView({
        id: "widget_244"
    });
    $.__views.widget_244 && $.addTopLevelView($.__views.widget_244);
    $.__views.__alloyId4238 = Ti.UI.createView({
        id: "__alloyId4238"
    });
    $.__views.widget_244.add($.__views.__alloyId4238);
    $.__views.__alloyId4239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4239"
    });
    $.__views.__alloyId4238.add($.__views.__alloyId4239);
    $.__views.__alloyId4240 = Ti.UI.createView({
        id: "__alloyId4240"
    });
    $.__views.__alloyId4240 && $.addTopLevelView($.__views.__alloyId4240);
    $.__views.__alloyId4241 = Ti.UI.createView({
        id: "__alloyId4241"
    });
    $.__views.__alloyId4240.add($.__views.__alloyId4241);
    $.__views.__alloyId4242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4242"
    });
    $.__views.__alloyId4241.add($.__views.__alloyId4242);
    $.__views.__alloyId4243 = Ti.UI.createView({
        id: "__alloyId4243"
    });
    $.__views.__alloyId4243 && $.addTopLevelView($.__views.__alloyId4243);
    $.__views.__alloyId4244 = Ti.UI.createView({
        id: "__alloyId4244"
    });
    $.__views.__alloyId4243.add($.__views.__alloyId4244);
    $.__views.__alloyId4245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4245"
    });
    $.__views.__alloyId4244.add($.__views.__alloyId4245);
    $.__views.__alloyId4246 = Ti.UI.createView({
        id: "__alloyId4246"
    });
    $.__views.__alloyId4246 && $.addTopLevelView($.__views.__alloyId4246);
    $.__views.__alloyId4247 = Ti.UI.createView({
        id: "__alloyId4247"
    });
    $.__views.__alloyId4246.add($.__views.__alloyId4247);
    $.__views.__alloyId4248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4248"
    });
    $.__views.__alloyId4247.add($.__views.__alloyId4248);
    $.__views.__alloyId4249 = Ti.UI.createView({
        id: "__alloyId4249"
    });
    $.__views.__alloyId4249 && $.addTopLevelView($.__views.__alloyId4249);
    $.__views.__alloyId4250 = Ti.UI.createView({
        id: "__alloyId4250"
    });
    $.__views.__alloyId4249.add($.__views.__alloyId4250);
    $.__views.__alloyId4251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4251"
    });
    $.__views.__alloyId4250.add($.__views.__alloyId4251);
    $.__views.__alloyId4252 = Ti.UI.createView({
        id: "__alloyId4252"
    });
    $.__views.__alloyId4252 && $.addTopLevelView($.__views.__alloyId4252);
    $.__views.__alloyId4253 = Ti.UI.createView({
        id: "__alloyId4253"
    });
    $.__views.__alloyId4252.add($.__views.__alloyId4253);
    $.__views.__alloyId4254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4254"
    });
    $.__views.__alloyId4253.add($.__views.__alloyId4254);
    $.__views.__alloyId4255 = Ti.UI.createView({
        id: "__alloyId4255"
    });
    $.__views.__alloyId4255 && $.addTopLevelView($.__views.__alloyId4255);
    $.__views.__alloyId4256 = Ti.UI.createView({
        id: "__alloyId4256"
    });
    $.__views.__alloyId4255.add($.__views.__alloyId4256);
    $.__views.__alloyId4257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4257"
    });
    $.__views.__alloyId4256.add($.__views.__alloyId4257);
    $.__views.__alloyId4258 = Ti.UI.createView({
        id: "__alloyId4258"
    });
    $.__views.__alloyId4258 && $.addTopLevelView($.__views.__alloyId4258);
    $.__views.__alloyId4259 = Ti.UI.createView({
        id: "__alloyId4259"
    });
    $.__views.__alloyId4258.add($.__views.__alloyId4259);
    $.__views.__alloyId4260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4260"
    });
    $.__views.__alloyId4259.add($.__views.__alloyId4260);
    $.__views.__alloyId4261 = Ti.UI.createView({
        id: "__alloyId4261"
    });
    $.__views.__alloyId4261 && $.addTopLevelView($.__views.__alloyId4261);
    $.__views.__alloyId4262 = Ti.UI.createView({
        id: "__alloyId4262"
    });
    $.__views.__alloyId4261.add($.__views.__alloyId4262);
    $.__views.__alloyId4263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4263"
    });
    $.__views.__alloyId4262.add($.__views.__alloyId4263);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;