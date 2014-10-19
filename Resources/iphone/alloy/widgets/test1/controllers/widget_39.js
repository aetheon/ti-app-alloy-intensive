function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_39";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_39 = Ti.UI.createView({
        id: "widget_39"
    });
    $.__views.widget_39 && $.addTopLevelView($.__views.widget_39);
    $.__views.__alloyId8424 = Ti.UI.createView({
        id: "__alloyId8424"
    });
    $.__views.widget_39.add($.__views.__alloyId8424);
    $.__views.__alloyId8425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8425"
    });
    $.__views.__alloyId8424.add($.__views.__alloyId8425);
    $.__views.__alloyId8426 = Ti.UI.createView({
        id: "__alloyId8426"
    });
    $.__views.__alloyId8426 && $.addTopLevelView($.__views.__alloyId8426);
    $.__views.__alloyId8427 = Ti.UI.createView({
        id: "__alloyId8427"
    });
    $.__views.__alloyId8426.add($.__views.__alloyId8427);
    $.__views.__alloyId8428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8428"
    });
    $.__views.__alloyId8427.add($.__views.__alloyId8428);
    $.__views.__alloyId8429 = Ti.UI.createView({
        id: "__alloyId8429"
    });
    $.__views.__alloyId8429 && $.addTopLevelView($.__views.__alloyId8429);
    $.__views.__alloyId8430 = Ti.UI.createView({
        id: "__alloyId8430"
    });
    $.__views.__alloyId8429.add($.__views.__alloyId8430);
    $.__views.__alloyId8431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8431"
    });
    $.__views.__alloyId8430.add($.__views.__alloyId8431);
    $.__views.__alloyId8432 = Ti.UI.createView({
        id: "__alloyId8432"
    });
    $.__views.__alloyId8432 && $.addTopLevelView($.__views.__alloyId8432);
    $.__views.__alloyId8433 = Ti.UI.createView({
        id: "__alloyId8433"
    });
    $.__views.__alloyId8432.add($.__views.__alloyId8433);
    $.__views.__alloyId8434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8434"
    });
    $.__views.__alloyId8433.add($.__views.__alloyId8434);
    $.__views.__alloyId8435 = Ti.UI.createView({
        id: "__alloyId8435"
    });
    $.__views.__alloyId8435 && $.addTopLevelView($.__views.__alloyId8435);
    $.__views.__alloyId8436 = Ti.UI.createView({
        id: "__alloyId8436"
    });
    $.__views.__alloyId8435.add($.__views.__alloyId8436);
    $.__views.__alloyId8437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8437"
    });
    $.__views.__alloyId8436.add($.__views.__alloyId8437);
    $.__views.__alloyId8438 = Ti.UI.createView({
        id: "__alloyId8438"
    });
    $.__views.__alloyId8438 && $.addTopLevelView($.__views.__alloyId8438);
    $.__views.__alloyId8439 = Ti.UI.createView({
        id: "__alloyId8439"
    });
    $.__views.__alloyId8438.add($.__views.__alloyId8439);
    $.__views.__alloyId8440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8440"
    });
    $.__views.__alloyId8439.add($.__views.__alloyId8440);
    $.__views.__alloyId8441 = Ti.UI.createView({
        id: "__alloyId8441"
    });
    $.__views.__alloyId8441 && $.addTopLevelView($.__views.__alloyId8441);
    $.__views.__alloyId8442 = Ti.UI.createView({
        id: "__alloyId8442"
    });
    $.__views.__alloyId8441.add($.__views.__alloyId8442);
    $.__views.__alloyId8443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8443"
    });
    $.__views.__alloyId8442.add($.__views.__alloyId8443);
    $.__views.__alloyId8444 = Ti.UI.createView({
        id: "__alloyId8444"
    });
    $.__views.__alloyId8444 && $.addTopLevelView($.__views.__alloyId8444);
    $.__views.__alloyId8445 = Ti.UI.createView({
        id: "__alloyId8445"
    });
    $.__views.__alloyId8444.add($.__views.__alloyId8445);
    $.__views.__alloyId8446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8446"
    });
    $.__views.__alloyId8445.add($.__views.__alloyId8446);
    $.__views.__alloyId8447 = Ti.UI.createView({
        id: "__alloyId8447"
    });
    $.__views.__alloyId8447 && $.addTopLevelView($.__views.__alloyId8447);
    $.__views.__alloyId8448 = Ti.UI.createView({
        id: "__alloyId8448"
    });
    $.__views.__alloyId8447.add($.__views.__alloyId8448);
    $.__views.__alloyId8449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8449"
    });
    $.__views.__alloyId8448.add($.__views.__alloyId8449);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;