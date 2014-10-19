function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_84";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_84 = Ti.UI.createView({
        id: "widget_84"
    });
    $.__views.widget_84 && $.addTopLevelView($.__views.widget_84);
    $.__views.__alloyId21424 = Ti.UI.createView({
        id: "__alloyId21424"
    });
    $.__views.widget_84.add($.__views.__alloyId21424);
    $.__views.__alloyId21425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21425"
    });
    $.__views.__alloyId21424.add($.__views.__alloyId21425);
    $.__views.__alloyId21426 = Ti.UI.createView({
        id: "__alloyId21426"
    });
    $.__views.__alloyId21426 && $.addTopLevelView($.__views.__alloyId21426);
    $.__views.__alloyId21427 = Ti.UI.createView({
        id: "__alloyId21427"
    });
    $.__views.__alloyId21426.add($.__views.__alloyId21427);
    $.__views.__alloyId21428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21428"
    });
    $.__views.__alloyId21427.add($.__views.__alloyId21428);
    $.__views.__alloyId21429 = Ti.UI.createView({
        id: "__alloyId21429"
    });
    $.__views.__alloyId21429 && $.addTopLevelView($.__views.__alloyId21429);
    $.__views.__alloyId21430 = Ti.UI.createView({
        id: "__alloyId21430"
    });
    $.__views.__alloyId21429.add($.__views.__alloyId21430);
    $.__views.__alloyId21431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21431"
    });
    $.__views.__alloyId21430.add($.__views.__alloyId21431);
    $.__views.__alloyId21432 = Ti.UI.createView({
        id: "__alloyId21432"
    });
    $.__views.__alloyId21432 && $.addTopLevelView($.__views.__alloyId21432);
    $.__views.__alloyId21433 = Ti.UI.createView({
        id: "__alloyId21433"
    });
    $.__views.__alloyId21432.add($.__views.__alloyId21433);
    $.__views.__alloyId21434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21434"
    });
    $.__views.__alloyId21433.add($.__views.__alloyId21434);
    $.__views.__alloyId21435 = Ti.UI.createView({
        id: "__alloyId21435"
    });
    $.__views.__alloyId21435 && $.addTopLevelView($.__views.__alloyId21435);
    $.__views.__alloyId21436 = Ti.UI.createView({
        id: "__alloyId21436"
    });
    $.__views.__alloyId21435.add($.__views.__alloyId21436);
    $.__views.__alloyId21437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21437"
    });
    $.__views.__alloyId21436.add($.__views.__alloyId21437);
    $.__views.__alloyId21438 = Ti.UI.createView({
        id: "__alloyId21438"
    });
    $.__views.__alloyId21438 && $.addTopLevelView($.__views.__alloyId21438);
    $.__views.__alloyId21439 = Ti.UI.createView({
        id: "__alloyId21439"
    });
    $.__views.__alloyId21438.add($.__views.__alloyId21439);
    $.__views.__alloyId21440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21440"
    });
    $.__views.__alloyId21439.add($.__views.__alloyId21440);
    $.__views.__alloyId21441 = Ti.UI.createView({
        id: "__alloyId21441"
    });
    $.__views.__alloyId21441 && $.addTopLevelView($.__views.__alloyId21441);
    $.__views.__alloyId21442 = Ti.UI.createView({
        id: "__alloyId21442"
    });
    $.__views.__alloyId21441.add($.__views.__alloyId21442);
    $.__views.__alloyId21443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21443"
    });
    $.__views.__alloyId21442.add($.__views.__alloyId21443);
    $.__views.__alloyId21444 = Ti.UI.createView({
        id: "__alloyId21444"
    });
    $.__views.__alloyId21444 && $.addTopLevelView($.__views.__alloyId21444);
    $.__views.__alloyId21445 = Ti.UI.createView({
        id: "__alloyId21445"
    });
    $.__views.__alloyId21444.add($.__views.__alloyId21445);
    $.__views.__alloyId21446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21446"
    });
    $.__views.__alloyId21445.add($.__views.__alloyId21446);
    $.__views.__alloyId21447 = Ti.UI.createView({
        id: "__alloyId21447"
    });
    $.__views.__alloyId21447 && $.addTopLevelView($.__views.__alloyId21447);
    $.__views.__alloyId21448 = Ti.UI.createView({
        id: "__alloyId21448"
    });
    $.__views.__alloyId21447.add($.__views.__alloyId21448);
    $.__views.__alloyId21449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21449"
    });
    $.__views.__alloyId21448.add($.__views.__alloyId21449);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;