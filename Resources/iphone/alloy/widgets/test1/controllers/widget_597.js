function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_597";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_597 = Ti.UI.createView({
        id: "widget_597"
    });
    $.__views.widget_597 && $.addTopLevelView($.__views.widget_597);
    $.__views.__alloyId14404 = Ti.UI.createView({
        id: "__alloyId14404"
    });
    $.__views.widget_597.add($.__views.__alloyId14404);
    $.__views.__alloyId14405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14405"
    });
    $.__views.__alloyId14404.add($.__views.__alloyId14405);
    $.__views.__alloyId14406 = Ti.UI.createView({
        id: "__alloyId14406"
    });
    $.__views.__alloyId14406 && $.addTopLevelView($.__views.__alloyId14406);
    $.__views.__alloyId14407 = Ti.UI.createView({
        id: "__alloyId14407"
    });
    $.__views.__alloyId14406.add($.__views.__alloyId14407);
    $.__views.__alloyId14408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14408"
    });
    $.__views.__alloyId14407.add($.__views.__alloyId14408);
    $.__views.__alloyId14409 = Ti.UI.createView({
        id: "__alloyId14409"
    });
    $.__views.__alloyId14409 && $.addTopLevelView($.__views.__alloyId14409);
    $.__views.__alloyId14410 = Ti.UI.createView({
        id: "__alloyId14410"
    });
    $.__views.__alloyId14409.add($.__views.__alloyId14410);
    $.__views.__alloyId14411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14411"
    });
    $.__views.__alloyId14410.add($.__views.__alloyId14411);
    $.__views.__alloyId14412 = Ti.UI.createView({
        id: "__alloyId14412"
    });
    $.__views.__alloyId14412 && $.addTopLevelView($.__views.__alloyId14412);
    $.__views.__alloyId14413 = Ti.UI.createView({
        id: "__alloyId14413"
    });
    $.__views.__alloyId14412.add($.__views.__alloyId14413);
    $.__views.__alloyId14414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14414"
    });
    $.__views.__alloyId14413.add($.__views.__alloyId14414);
    $.__views.__alloyId14415 = Ti.UI.createView({
        id: "__alloyId14415"
    });
    $.__views.__alloyId14415 && $.addTopLevelView($.__views.__alloyId14415);
    $.__views.__alloyId14416 = Ti.UI.createView({
        id: "__alloyId14416"
    });
    $.__views.__alloyId14415.add($.__views.__alloyId14416);
    $.__views.__alloyId14417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14417"
    });
    $.__views.__alloyId14416.add($.__views.__alloyId14417);
    $.__views.__alloyId14418 = Ti.UI.createView({
        id: "__alloyId14418"
    });
    $.__views.__alloyId14418 && $.addTopLevelView($.__views.__alloyId14418);
    $.__views.__alloyId14419 = Ti.UI.createView({
        id: "__alloyId14419"
    });
    $.__views.__alloyId14418.add($.__views.__alloyId14419);
    $.__views.__alloyId14420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14420"
    });
    $.__views.__alloyId14419.add($.__views.__alloyId14420);
    $.__views.__alloyId14421 = Ti.UI.createView({
        id: "__alloyId14421"
    });
    $.__views.__alloyId14421 && $.addTopLevelView($.__views.__alloyId14421);
    $.__views.__alloyId14422 = Ti.UI.createView({
        id: "__alloyId14422"
    });
    $.__views.__alloyId14421.add($.__views.__alloyId14422);
    $.__views.__alloyId14423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14423"
    });
    $.__views.__alloyId14422.add($.__views.__alloyId14423);
    $.__views.__alloyId14424 = Ti.UI.createView({
        id: "__alloyId14424"
    });
    $.__views.__alloyId14424 && $.addTopLevelView($.__views.__alloyId14424);
    $.__views.__alloyId14425 = Ti.UI.createView({
        id: "__alloyId14425"
    });
    $.__views.__alloyId14424.add($.__views.__alloyId14425);
    $.__views.__alloyId14426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14426"
    });
    $.__views.__alloyId14425.add($.__views.__alloyId14426);
    $.__views.__alloyId14427 = Ti.UI.createView({
        id: "__alloyId14427"
    });
    $.__views.__alloyId14427 && $.addTopLevelView($.__views.__alloyId14427);
    $.__views.__alloyId14428 = Ti.UI.createView({
        id: "__alloyId14428"
    });
    $.__views.__alloyId14427.add($.__views.__alloyId14428);
    $.__views.__alloyId14429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14429"
    });
    $.__views.__alloyId14428.add($.__views.__alloyId14429);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;