function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_70";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_70 = Ti.UI.createView({
        id: "widget_70"
    });
    $.__views.widget_70 && $.addTopLevelView($.__views.widget_70);
    $.__views.__alloyId17394 = Ti.UI.createView({
        id: "__alloyId17394"
    });
    $.__views.widget_70.add($.__views.__alloyId17394);
    $.__views.__alloyId17395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17395"
    });
    $.__views.__alloyId17394.add($.__views.__alloyId17395);
    $.__views.__alloyId17396 = Ti.UI.createView({
        id: "__alloyId17396"
    });
    $.__views.__alloyId17396 && $.addTopLevelView($.__views.__alloyId17396);
    $.__views.__alloyId17397 = Ti.UI.createView({
        id: "__alloyId17397"
    });
    $.__views.__alloyId17396.add($.__views.__alloyId17397);
    $.__views.__alloyId17398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17398"
    });
    $.__views.__alloyId17397.add($.__views.__alloyId17398);
    $.__views.__alloyId17399 = Ti.UI.createView({
        id: "__alloyId17399"
    });
    $.__views.__alloyId17399 && $.addTopLevelView($.__views.__alloyId17399);
    $.__views.__alloyId17400 = Ti.UI.createView({
        id: "__alloyId17400"
    });
    $.__views.__alloyId17399.add($.__views.__alloyId17400);
    $.__views.__alloyId17401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17401"
    });
    $.__views.__alloyId17400.add($.__views.__alloyId17401);
    $.__views.__alloyId17402 = Ti.UI.createView({
        id: "__alloyId17402"
    });
    $.__views.__alloyId17402 && $.addTopLevelView($.__views.__alloyId17402);
    $.__views.__alloyId17403 = Ti.UI.createView({
        id: "__alloyId17403"
    });
    $.__views.__alloyId17402.add($.__views.__alloyId17403);
    $.__views.__alloyId17404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17404"
    });
    $.__views.__alloyId17403.add($.__views.__alloyId17404);
    $.__views.__alloyId17405 = Ti.UI.createView({
        id: "__alloyId17405"
    });
    $.__views.__alloyId17405 && $.addTopLevelView($.__views.__alloyId17405);
    $.__views.__alloyId17406 = Ti.UI.createView({
        id: "__alloyId17406"
    });
    $.__views.__alloyId17405.add($.__views.__alloyId17406);
    $.__views.__alloyId17407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17407"
    });
    $.__views.__alloyId17406.add($.__views.__alloyId17407);
    $.__views.__alloyId17408 = Ti.UI.createView({
        id: "__alloyId17408"
    });
    $.__views.__alloyId17408 && $.addTopLevelView($.__views.__alloyId17408);
    $.__views.__alloyId17409 = Ti.UI.createView({
        id: "__alloyId17409"
    });
    $.__views.__alloyId17408.add($.__views.__alloyId17409);
    $.__views.__alloyId17410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17410"
    });
    $.__views.__alloyId17409.add($.__views.__alloyId17410);
    $.__views.__alloyId17411 = Ti.UI.createView({
        id: "__alloyId17411"
    });
    $.__views.__alloyId17411 && $.addTopLevelView($.__views.__alloyId17411);
    $.__views.__alloyId17412 = Ti.UI.createView({
        id: "__alloyId17412"
    });
    $.__views.__alloyId17411.add($.__views.__alloyId17412);
    $.__views.__alloyId17413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17413"
    });
    $.__views.__alloyId17412.add($.__views.__alloyId17413);
    $.__views.__alloyId17414 = Ti.UI.createView({
        id: "__alloyId17414"
    });
    $.__views.__alloyId17414 && $.addTopLevelView($.__views.__alloyId17414);
    $.__views.__alloyId17415 = Ti.UI.createView({
        id: "__alloyId17415"
    });
    $.__views.__alloyId17414.add($.__views.__alloyId17415);
    $.__views.__alloyId17416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17416"
    });
    $.__views.__alloyId17415.add($.__views.__alloyId17416);
    $.__views.__alloyId17417 = Ti.UI.createView({
        id: "__alloyId17417"
    });
    $.__views.__alloyId17417 && $.addTopLevelView($.__views.__alloyId17417);
    $.__views.__alloyId17418 = Ti.UI.createView({
        id: "__alloyId17418"
    });
    $.__views.__alloyId17417.add($.__views.__alloyId17418);
    $.__views.__alloyId17419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17419"
    });
    $.__views.__alloyId17418.add($.__views.__alloyId17419);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;