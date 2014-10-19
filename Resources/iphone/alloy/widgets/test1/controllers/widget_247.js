function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_247";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_247 = Ti.UI.createView({
        id: "widget_247"
    });
    $.__views.widget_247 && $.addTopLevelView($.__views.widget_247);
    $.__views.__alloyId4316 = Ti.UI.createView({
        id: "__alloyId4316"
    });
    $.__views.widget_247.add($.__views.__alloyId4316);
    $.__views.__alloyId4317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4317"
    });
    $.__views.__alloyId4316.add($.__views.__alloyId4317);
    $.__views.__alloyId4318 = Ti.UI.createView({
        id: "__alloyId4318"
    });
    $.__views.__alloyId4318 && $.addTopLevelView($.__views.__alloyId4318);
    $.__views.__alloyId4319 = Ti.UI.createView({
        id: "__alloyId4319"
    });
    $.__views.__alloyId4318.add($.__views.__alloyId4319);
    $.__views.__alloyId4320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4320"
    });
    $.__views.__alloyId4319.add($.__views.__alloyId4320);
    $.__views.__alloyId4321 = Ti.UI.createView({
        id: "__alloyId4321"
    });
    $.__views.__alloyId4321 && $.addTopLevelView($.__views.__alloyId4321);
    $.__views.__alloyId4322 = Ti.UI.createView({
        id: "__alloyId4322"
    });
    $.__views.__alloyId4321.add($.__views.__alloyId4322);
    $.__views.__alloyId4323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4323"
    });
    $.__views.__alloyId4322.add($.__views.__alloyId4323);
    $.__views.__alloyId4324 = Ti.UI.createView({
        id: "__alloyId4324"
    });
    $.__views.__alloyId4324 && $.addTopLevelView($.__views.__alloyId4324);
    $.__views.__alloyId4325 = Ti.UI.createView({
        id: "__alloyId4325"
    });
    $.__views.__alloyId4324.add($.__views.__alloyId4325);
    $.__views.__alloyId4326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4326"
    });
    $.__views.__alloyId4325.add($.__views.__alloyId4326);
    $.__views.__alloyId4327 = Ti.UI.createView({
        id: "__alloyId4327"
    });
    $.__views.__alloyId4327 && $.addTopLevelView($.__views.__alloyId4327);
    $.__views.__alloyId4328 = Ti.UI.createView({
        id: "__alloyId4328"
    });
    $.__views.__alloyId4327.add($.__views.__alloyId4328);
    $.__views.__alloyId4329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4329"
    });
    $.__views.__alloyId4328.add($.__views.__alloyId4329);
    $.__views.__alloyId4330 = Ti.UI.createView({
        id: "__alloyId4330"
    });
    $.__views.__alloyId4330 && $.addTopLevelView($.__views.__alloyId4330);
    $.__views.__alloyId4331 = Ti.UI.createView({
        id: "__alloyId4331"
    });
    $.__views.__alloyId4330.add($.__views.__alloyId4331);
    $.__views.__alloyId4332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4332"
    });
    $.__views.__alloyId4331.add($.__views.__alloyId4332);
    $.__views.__alloyId4333 = Ti.UI.createView({
        id: "__alloyId4333"
    });
    $.__views.__alloyId4333 && $.addTopLevelView($.__views.__alloyId4333);
    $.__views.__alloyId4334 = Ti.UI.createView({
        id: "__alloyId4334"
    });
    $.__views.__alloyId4333.add($.__views.__alloyId4334);
    $.__views.__alloyId4335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4335"
    });
    $.__views.__alloyId4334.add($.__views.__alloyId4335);
    $.__views.__alloyId4336 = Ti.UI.createView({
        id: "__alloyId4336"
    });
    $.__views.__alloyId4336 && $.addTopLevelView($.__views.__alloyId4336);
    $.__views.__alloyId4337 = Ti.UI.createView({
        id: "__alloyId4337"
    });
    $.__views.__alloyId4336.add($.__views.__alloyId4337);
    $.__views.__alloyId4338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4338"
    });
    $.__views.__alloyId4337.add($.__views.__alloyId4338);
    $.__views.__alloyId4339 = Ti.UI.createView({
        id: "__alloyId4339"
    });
    $.__views.__alloyId4339 && $.addTopLevelView($.__views.__alloyId4339);
    $.__views.__alloyId4340 = Ti.UI.createView({
        id: "__alloyId4340"
    });
    $.__views.__alloyId4339.add($.__views.__alloyId4340);
    $.__views.__alloyId4341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4341"
    });
    $.__views.__alloyId4340.add($.__views.__alloyId4341);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;