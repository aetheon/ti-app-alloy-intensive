function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_215";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_215 = Ti.UI.createView({
        id: "widget_215"
    });
    $.__views.widget_215 && $.addTopLevelView($.__views.widget_215);
    $.__views.__alloyId3406 = Ti.UI.createView({
        id: "__alloyId3406"
    });
    $.__views.widget_215.add($.__views.__alloyId3406);
    $.__views.__alloyId3407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3407"
    });
    $.__views.__alloyId3406.add($.__views.__alloyId3407);
    $.__views.__alloyId3408 = Ti.UI.createView({
        id: "__alloyId3408"
    });
    $.__views.__alloyId3408 && $.addTopLevelView($.__views.__alloyId3408);
    $.__views.__alloyId3409 = Ti.UI.createView({
        id: "__alloyId3409"
    });
    $.__views.__alloyId3408.add($.__views.__alloyId3409);
    $.__views.__alloyId3410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3410"
    });
    $.__views.__alloyId3409.add($.__views.__alloyId3410);
    $.__views.__alloyId3411 = Ti.UI.createView({
        id: "__alloyId3411"
    });
    $.__views.__alloyId3411 && $.addTopLevelView($.__views.__alloyId3411);
    $.__views.__alloyId3412 = Ti.UI.createView({
        id: "__alloyId3412"
    });
    $.__views.__alloyId3411.add($.__views.__alloyId3412);
    $.__views.__alloyId3413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3413"
    });
    $.__views.__alloyId3412.add($.__views.__alloyId3413);
    $.__views.__alloyId3414 = Ti.UI.createView({
        id: "__alloyId3414"
    });
    $.__views.__alloyId3414 && $.addTopLevelView($.__views.__alloyId3414);
    $.__views.__alloyId3415 = Ti.UI.createView({
        id: "__alloyId3415"
    });
    $.__views.__alloyId3414.add($.__views.__alloyId3415);
    $.__views.__alloyId3416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3416"
    });
    $.__views.__alloyId3415.add($.__views.__alloyId3416);
    $.__views.__alloyId3417 = Ti.UI.createView({
        id: "__alloyId3417"
    });
    $.__views.__alloyId3417 && $.addTopLevelView($.__views.__alloyId3417);
    $.__views.__alloyId3418 = Ti.UI.createView({
        id: "__alloyId3418"
    });
    $.__views.__alloyId3417.add($.__views.__alloyId3418);
    $.__views.__alloyId3419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3419"
    });
    $.__views.__alloyId3418.add($.__views.__alloyId3419);
    $.__views.__alloyId3420 = Ti.UI.createView({
        id: "__alloyId3420"
    });
    $.__views.__alloyId3420 && $.addTopLevelView($.__views.__alloyId3420);
    $.__views.__alloyId3421 = Ti.UI.createView({
        id: "__alloyId3421"
    });
    $.__views.__alloyId3420.add($.__views.__alloyId3421);
    $.__views.__alloyId3422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3422"
    });
    $.__views.__alloyId3421.add($.__views.__alloyId3422);
    $.__views.__alloyId3423 = Ti.UI.createView({
        id: "__alloyId3423"
    });
    $.__views.__alloyId3423 && $.addTopLevelView($.__views.__alloyId3423);
    $.__views.__alloyId3424 = Ti.UI.createView({
        id: "__alloyId3424"
    });
    $.__views.__alloyId3423.add($.__views.__alloyId3424);
    $.__views.__alloyId3425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3425"
    });
    $.__views.__alloyId3424.add($.__views.__alloyId3425);
    $.__views.__alloyId3426 = Ti.UI.createView({
        id: "__alloyId3426"
    });
    $.__views.__alloyId3426 && $.addTopLevelView($.__views.__alloyId3426);
    $.__views.__alloyId3427 = Ti.UI.createView({
        id: "__alloyId3427"
    });
    $.__views.__alloyId3426.add($.__views.__alloyId3427);
    $.__views.__alloyId3428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3428"
    });
    $.__views.__alloyId3427.add($.__views.__alloyId3428);
    $.__views.__alloyId3429 = Ti.UI.createView({
        id: "__alloyId3429"
    });
    $.__views.__alloyId3429 && $.addTopLevelView($.__views.__alloyId3429);
    $.__views.__alloyId3430 = Ti.UI.createView({
        id: "__alloyId3430"
    });
    $.__views.__alloyId3429.add($.__views.__alloyId3430);
    $.__views.__alloyId3431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3431"
    });
    $.__views.__alloyId3430.add($.__views.__alloyId3431);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;