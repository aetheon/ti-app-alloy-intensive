function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_242";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_242 = Ti.UI.createView({
        id: "widget_242"
    });
    $.__views.widget_242 && $.addTopLevelView($.__views.widget_242);
    $.__views.__alloyId4186 = Ti.UI.createView({
        id: "__alloyId4186"
    });
    $.__views.widget_242.add($.__views.__alloyId4186);
    $.__views.__alloyId4187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4187"
    });
    $.__views.__alloyId4186.add($.__views.__alloyId4187);
    $.__views.__alloyId4188 = Ti.UI.createView({
        id: "__alloyId4188"
    });
    $.__views.__alloyId4188 && $.addTopLevelView($.__views.__alloyId4188);
    $.__views.__alloyId4189 = Ti.UI.createView({
        id: "__alloyId4189"
    });
    $.__views.__alloyId4188.add($.__views.__alloyId4189);
    $.__views.__alloyId4190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4190"
    });
    $.__views.__alloyId4189.add($.__views.__alloyId4190);
    $.__views.__alloyId4191 = Ti.UI.createView({
        id: "__alloyId4191"
    });
    $.__views.__alloyId4191 && $.addTopLevelView($.__views.__alloyId4191);
    $.__views.__alloyId4192 = Ti.UI.createView({
        id: "__alloyId4192"
    });
    $.__views.__alloyId4191.add($.__views.__alloyId4192);
    $.__views.__alloyId4193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4193"
    });
    $.__views.__alloyId4192.add($.__views.__alloyId4193);
    $.__views.__alloyId4194 = Ti.UI.createView({
        id: "__alloyId4194"
    });
    $.__views.__alloyId4194 && $.addTopLevelView($.__views.__alloyId4194);
    $.__views.__alloyId4195 = Ti.UI.createView({
        id: "__alloyId4195"
    });
    $.__views.__alloyId4194.add($.__views.__alloyId4195);
    $.__views.__alloyId4196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4196"
    });
    $.__views.__alloyId4195.add($.__views.__alloyId4196);
    $.__views.__alloyId4197 = Ti.UI.createView({
        id: "__alloyId4197"
    });
    $.__views.__alloyId4197 && $.addTopLevelView($.__views.__alloyId4197);
    $.__views.__alloyId4198 = Ti.UI.createView({
        id: "__alloyId4198"
    });
    $.__views.__alloyId4197.add($.__views.__alloyId4198);
    $.__views.__alloyId4199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4199"
    });
    $.__views.__alloyId4198.add($.__views.__alloyId4199);
    $.__views.__alloyId4200 = Ti.UI.createView({
        id: "__alloyId4200"
    });
    $.__views.__alloyId4200 && $.addTopLevelView($.__views.__alloyId4200);
    $.__views.__alloyId4201 = Ti.UI.createView({
        id: "__alloyId4201"
    });
    $.__views.__alloyId4200.add($.__views.__alloyId4201);
    $.__views.__alloyId4202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4202"
    });
    $.__views.__alloyId4201.add($.__views.__alloyId4202);
    $.__views.__alloyId4203 = Ti.UI.createView({
        id: "__alloyId4203"
    });
    $.__views.__alloyId4203 && $.addTopLevelView($.__views.__alloyId4203);
    $.__views.__alloyId4204 = Ti.UI.createView({
        id: "__alloyId4204"
    });
    $.__views.__alloyId4203.add($.__views.__alloyId4204);
    $.__views.__alloyId4205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4205"
    });
    $.__views.__alloyId4204.add($.__views.__alloyId4205);
    $.__views.__alloyId4206 = Ti.UI.createView({
        id: "__alloyId4206"
    });
    $.__views.__alloyId4206 && $.addTopLevelView($.__views.__alloyId4206);
    $.__views.__alloyId4207 = Ti.UI.createView({
        id: "__alloyId4207"
    });
    $.__views.__alloyId4206.add($.__views.__alloyId4207);
    $.__views.__alloyId4208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4208"
    });
    $.__views.__alloyId4207.add($.__views.__alloyId4208);
    $.__views.__alloyId4209 = Ti.UI.createView({
        id: "__alloyId4209"
    });
    $.__views.__alloyId4209 && $.addTopLevelView($.__views.__alloyId4209);
    $.__views.__alloyId4210 = Ti.UI.createView({
        id: "__alloyId4210"
    });
    $.__views.__alloyId4209.add($.__views.__alloyId4210);
    $.__views.__alloyId4211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4211"
    });
    $.__views.__alloyId4210.add($.__views.__alloyId4211);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;