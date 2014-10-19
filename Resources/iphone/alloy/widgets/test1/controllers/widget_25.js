function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_25";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_25 = Ti.UI.createView({
        id: "widget_25"
    });
    $.__views.widget_25 && $.addTopLevelView($.__views.widget_25);
    $.__views.__alloyId4394 = Ti.UI.createView({
        id: "__alloyId4394"
    });
    $.__views.widget_25.add($.__views.__alloyId4394);
    $.__views.__alloyId4395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4395"
    });
    $.__views.__alloyId4394.add($.__views.__alloyId4395);
    $.__views.__alloyId4396 = Ti.UI.createView({
        id: "__alloyId4396"
    });
    $.__views.__alloyId4396 && $.addTopLevelView($.__views.__alloyId4396);
    $.__views.__alloyId4397 = Ti.UI.createView({
        id: "__alloyId4397"
    });
    $.__views.__alloyId4396.add($.__views.__alloyId4397);
    $.__views.__alloyId4398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4398"
    });
    $.__views.__alloyId4397.add($.__views.__alloyId4398);
    $.__views.__alloyId4399 = Ti.UI.createView({
        id: "__alloyId4399"
    });
    $.__views.__alloyId4399 && $.addTopLevelView($.__views.__alloyId4399);
    $.__views.__alloyId4400 = Ti.UI.createView({
        id: "__alloyId4400"
    });
    $.__views.__alloyId4399.add($.__views.__alloyId4400);
    $.__views.__alloyId4401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4401"
    });
    $.__views.__alloyId4400.add($.__views.__alloyId4401);
    $.__views.__alloyId4402 = Ti.UI.createView({
        id: "__alloyId4402"
    });
    $.__views.__alloyId4402 && $.addTopLevelView($.__views.__alloyId4402);
    $.__views.__alloyId4403 = Ti.UI.createView({
        id: "__alloyId4403"
    });
    $.__views.__alloyId4402.add($.__views.__alloyId4403);
    $.__views.__alloyId4404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4404"
    });
    $.__views.__alloyId4403.add($.__views.__alloyId4404);
    $.__views.__alloyId4405 = Ti.UI.createView({
        id: "__alloyId4405"
    });
    $.__views.__alloyId4405 && $.addTopLevelView($.__views.__alloyId4405);
    $.__views.__alloyId4406 = Ti.UI.createView({
        id: "__alloyId4406"
    });
    $.__views.__alloyId4405.add($.__views.__alloyId4406);
    $.__views.__alloyId4407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4407"
    });
    $.__views.__alloyId4406.add($.__views.__alloyId4407);
    $.__views.__alloyId4408 = Ti.UI.createView({
        id: "__alloyId4408"
    });
    $.__views.__alloyId4408 && $.addTopLevelView($.__views.__alloyId4408);
    $.__views.__alloyId4409 = Ti.UI.createView({
        id: "__alloyId4409"
    });
    $.__views.__alloyId4408.add($.__views.__alloyId4409);
    $.__views.__alloyId4410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4410"
    });
    $.__views.__alloyId4409.add($.__views.__alloyId4410);
    $.__views.__alloyId4411 = Ti.UI.createView({
        id: "__alloyId4411"
    });
    $.__views.__alloyId4411 && $.addTopLevelView($.__views.__alloyId4411);
    $.__views.__alloyId4412 = Ti.UI.createView({
        id: "__alloyId4412"
    });
    $.__views.__alloyId4411.add($.__views.__alloyId4412);
    $.__views.__alloyId4413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4413"
    });
    $.__views.__alloyId4412.add($.__views.__alloyId4413);
    $.__views.__alloyId4414 = Ti.UI.createView({
        id: "__alloyId4414"
    });
    $.__views.__alloyId4414 && $.addTopLevelView($.__views.__alloyId4414);
    $.__views.__alloyId4415 = Ti.UI.createView({
        id: "__alloyId4415"
    });
    $.__views.__alloyId4414.add($.__views.__alloyId4415);
    $.__views.__alloyId4416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4416"
    });
    $.__views.__alloyId4415.add($.__views.__alloyId4416);
    $.__views.__alloyId4417 = Ti.UI.createView({
        id: "__alloyId4417"
    });
    $.__views.__alloyId4417 && $.addTopLevelView($.__views.__alloyId4417);
    $.__views.__alloyId4418 = Ti.UI.createView({
        id: "__alloyId4418"
    });
    $.__views.__alloyId4417.add($.__views.__alloyId4418);
    $.__views.__alloyId4419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4419"
    });
    $.__views.__alloyId4418.add($.__views.__alloyId4419);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;