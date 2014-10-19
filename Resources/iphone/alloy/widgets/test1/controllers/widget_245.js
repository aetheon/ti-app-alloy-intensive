function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_245";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_245 = Ti.UI.createView({
        id: "widget_245"
    });
    $.__views.widget_245 && $.addTopLevelView($.__views.widget_245);
    $.__views.__alloyId4264 = Ti.UI.createView({
        id: "__alloyId4264"
    });
    $.__views.widget_245.add($.__views.__alloyId4264);
    $.__views.__alloyId4265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4265"
    });
    $.__views.__alloyId4264.add($.__views.__alloyId4265);
    $.__views.__alloyId4266 = Ti.UI.createView({
        id: "__alloyId4266"
    });
    $.__views.__alloyId4266 && $.addTopLevelView($.__views.__alloyId4266);
    $.__views.__alloyId4267 = Ti.UI.createView({
        id: "__alloyId4267"
    });
    $.__views.__alloyId4266.add($.__views.__alloyId4267);
    $.__views.__alloyId4268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4268"
    });
    $.__views.__alloyId4267.add($.__views.__alloyId4268);
    $.__views.__alloyId4269 = Ti.UI.createView({
        id: "__alloyId4269"
    });
    $.__views.__alloyId4269 && $.addTopLevelView($.__views.__alloyId4269);
    $.__views.__alloyId4270 = Ti.UI.createView({
        id: "__alloyId4270"
    });
    $.__views.__alloyId4269.add($.__views.__alloyId4270);
    $.__views.__alloyId4271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4271"
    });
    $.__views.__alloyId4270.add($.__views.__alloyId4271);
    $.__views.__alloyId4272 = Ti.UI.createView({
        id: "__alloyId4272"
    });
    $.__views.__alloyId4272 && $.addTopLevelView($.__views.__alloyId4272);
    $.__views.__alloyId4273 = Ti.UI.createView({
        id: "__alloyId4273"
    });
    $.__views.__alloyId4272.add($.__views.__alloyId4273);
    $.__views.__alloyId4274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4274"
    });
    $.__views.__alloyId4273.add($.__views.__alloyId4274);
    $.__views.__alloyId4275 = Ti.UI.createView({
        id: "__alloyId4275"
    });
    $.__views.__alloyId4275 && $.addTopLevelView($.__views.__alloyId4275);
    $.__views.__alloyId4276 = Ti.UI.createView({
        id: "__alloyId4276"
    });
    $.__views.__alloyId4275.add($.__views.__alloyId4276);
    $.__views.__alloyId4277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4277"
    });
    $.__views.__alloyId4276.add($.__views.__alloyId4277);
    $.__views.__alloyId4278 = Ti.UI.createView({
        id: "__alloyId4278"
    });
    $.__views.__alloyId4278 && $.addTopLevelView($.__views.__alloyId4278);
    $.__views.__alloyId4279 = Ti.UI.createView({
        id: "__alloyId4279"
    });
    $.__views.__alloyId4278.add($.__views.__alloyId4279);
    $.__views.__alloyId4280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4280"
    });
    $.__views.__alloyId4279.add($.__views.__alloyId4280);
    $.__views.__alloyId4281 = Ti.UI.createView({
        id: "__alloyId4281"
    });
    $.__views.__alloyId4281 && $.addTopLevelView($.__views.__alloyId4281);
    $.__views.__alloyId4282 = Ti.UI.createView({
        id: "__alloyId4282"
    });
    $.__views.__alloyId4281.add($.__views.__alloyId4282);
    $.__views.__alloyId4283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4283"
    });
    $.__views.__alloyId4282.add($.__views.__alloyId4283);
    $.__views.__alloyId4284 = Ti.UI.createView({
        id: "__alloyId4284"
    });
    $.__views.__alloyId4284 && $.addTopLevelView($.__views.__alloyId4284);
    $.__views.__alloyId4285 = Ti.UI.createView({
        id: "__alloyId4285"
    });
    $.__views.__alloyId4284.add($.__views.__alloyId4285);
    $.__views.__alloyId4286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4286"
    });
    $.__views.__alloyId4285.add($.__views.__alloyId4286);
    $.__views.__alloyId4287 = Ti.UI.createView({
        id: "__alloyId4287"
    });
    $.__views.__alloyId4287 && $.addTopLevelView($.__views.__alloyId4287);
    $.__views.__alloyId4288 = Ti.UI.createView({
        id: "__alloyId4288"
    });
    $.__views.__alloyId4287.add($.__views.__alloyId4288);
    $.__views.__alloyId4289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4289"
    });
    $.__views.__alloyId4288.add($.__views.__alloyId4289);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;