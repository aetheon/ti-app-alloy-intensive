function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_910";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_910 = Ti.UI.createView({
        id: "widget_910"
    });
    $.__views.widget_910 && $.addTopLevelView($.__views.widget_910);
    $.__views.__alloyId23478 = Ti.UI.createView({
        id: "__alloyId23478"
    });
    $.__views.widget_910.add($.__views.__alloyId23478);
    $.__views.__alloyId23479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23479"
    });
    $.__views.__alloyId23478.add($.__views.__alloyId23479);
    $.__views.__alloyId23480 = Ti.UI.createView({
        id: "__alloyId23480"
    });
    $.__views.__alloyId23480 && $.addTopLevelView($.__views.__alloyId23480);
    $.__views.__alloyId23481 = Ti.UI.createView({
        id: "__alloyId23481"
    });
    $.__views.__alloyId23480.add($.__views.__alloyId23481);
    $.__views.__alloyId23482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23482"
    });
    $.__views.__alloyId23481.add($.__views.__alloyId23482);
    $.__views.__alloyId23483 = Ti.UI.createView({
        id: "__alloyId23483"
    });
    $.__views.__alloyId23483 && $.addTopLevelView($.__views.__alloyId23483);
    $.__views.__alloyId23484 = Ti.UI.createView({
        id: "__alloyId23484"
    });
    $.__views.__alloyId23483.add($.__views.__alloyId23484);
    $.__views.__alloyId23485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23485"
    });
    $.__views.__alloyId23484.add($.__views.__alloyId23485);
    $.__views.__alloyId23486 = Ti.UI.createView({
        id: "__alloyId23486"
    });
    $.__views.__alloyId23486 && $.addTopLevelView($.__views.__alloyId23486);
    $.__views.__alloyId23487 = Ti.UI.createView({
        id: "__alloyId23487"
    });
    $.__views.__alloyId23486.add($.__views.__alloyId23487);
    $.__views.__alloyId23488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23488"
    });
    $.__views.__alloyId23487.add($.__views.__alloyId23488);
    $.__views.__alloyId23489 = Ti.UI.createView({
        id: "__alloyId23489"
    });
    $.__views.__alloyId23489 && $.addTopLevelView($.__views.__alloyId23489);
    $.__views.__alloyId23490 = Ti.UI.createView({
        id: "__alloyId23490"
    });
    $.__views.__alloyId23489.add($.__views.__alloyId23490);
    $.__views.__alloyId23491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23491"
    });
    $.__views.__alloyId23490.add($.__views.__alloyId23491);
    $.__views.__alloyId23492 = Ti.UI.createView({
        id: "__alloyId23492"
    });
    $.__views.__alloyId23492 && $.addTopLevelView($.__views.__alloyId23492);
    $.__views.__alloyId23493 = Ti.UI.createView({
        id: "__alloyId23493"
    });
    $.__views.__alloyId23492.add($.__views.__alloyId23493);
    $.__views.__alloyId23494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23494"
    });
    $.__views.__alloyId23493.add($.__views.__alloyId23494);
    $.__views.__alloyId23495 = Ti.UI.createView({
        id: "__alloyId23495"
    });
    $.__views.__alloyId23495 && $.addTopLevelView($.__views.__alloyId23495);
    $.__views.__alloyId23496 = Ti.UI.createView({
        id: "__alloyId23496"
    });
    $.__views.__alloyId23495.add($.__views.__alloyId23496);
    $.__views.__alloyId23497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23497"
    });
    $.__views.__alloyId23496.add($.__views.__alloyId23497);
    $.__views.__alloyId23498 = Ti.UI.createView({
        id: "__alloyId23498"
    });
    $.__views.__alloyId23498 && $.addTopLevelView($.__views.__alloyId23498);
    $.__views.__alloyId23499 = Ti.UI.createView({
        id: "__alloyId23499"
    });
    $.__views.__alloyId23498.add($.__views.__alloyId23499);
    $.__views.__alloyId23500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23500"
    });
    $.__views.__alloyId23499.add($.__views.__alloyId23500);
    $.__views.__alloyId23501 = Ti.UI.createView({
        id: "__alloyId23501"
    });
    $.__views.__alloyId23501 && $.addTopLevelView($.__views.__alloyId23501);
    $.__views.__alloyId23502 = Ti.UI.createView({
        id: "__alloyId23502"
    });
    $.__views.__alloyId23501.add($.__views.__alloyId23502);
    $.__views.__alloyId23503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23503"
    });
    $.__views.__alloyId23502.add($.__views.__alloyId23503);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;