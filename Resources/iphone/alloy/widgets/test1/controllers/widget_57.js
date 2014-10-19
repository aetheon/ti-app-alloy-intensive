function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_57";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_57 = Ti.UI.createView({
        id: "widget_57"
    });
    $.__views.widget_57 && $.addTopLevelView($.__views.widget_57);
    $.__views.__alloyId13624 = Ti.UI.createView({
        id: "__alloyId13624"
    });
    $.__views.widget_57.add($.__views.__alloyId13624);
    $.__views.__alloyId13625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13625"
    });
    $.__views.__alloyId13624.add($.__views.__alloyId13625);
    $.__views.__alloyId13626 = Ti.UI.createView({
        id: "__alloyId13626"
    });
    $.__views.__alloyId13626 && $.addTopLevelView($.__views.__alloyId13626);
    $.__views.__alloyId13627 = Ti.UI.createView({
        id: "__alloyId13627"
    });
    $.__views.__alloyId13626.add($.__views.__alloyId13627);
    $.__views.__alloyId13628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13628"
    });
    $.__views.__alloyId13627.add($.__views.__alloyId13628);
    $.__views.__alloyId13629 = Ti.UI.createView({
        id: "__alloyId13629"
    });
    $.__views.__alloyId13629 && $.addTopLevelView($.__views.__alloyId13629);
    $.__views.__alloyId13630 = Ti.UI.createView({
        id: "__alloyId13630"
    });
    $.__views.__alloyId13629.add($.__views.__alloyId13630);
    $.__views.__alloyId13631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13631"
    });
    $.__views.__alloyId13630.add($.__views.__alloyId13631);
    $.__views.__alloyId13632 = Ti.UI.createView({
        id: "__alloyId13632"
    });
    $.__views.__alloyId13632 && $.addTopLevelView($.__views.__alloyId13632);
    $.__views.__alloyId13633 = Ti.UI.createView({
        id: "__alloyId13633"
    });
    $.__views.__alloyId13632.add($.__views.__alloyId13633);
    $.__views.__alloyId13634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13634"
    });
    $.__views.__alloyId13633.add($.__views.__alloyId13634);
    $.__views.__alloyId13635 = Ti.UI.createView({
        id: "__alloyId13635"
    });
    $.__views.__alloyId13635 && $.addTopLevelView($.__views.__alloyId13635);
    $.__views.__alloyId13636 = Ti.UI.createView({
        id: "__alloyId13636"
    });
    $.__views.__alloyId13635.add($.__views.__alloyId13636);
    $.__views.__alloyId13637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13637"
    });
    $.__views.__alloyId13636.add($.__views.__alloyId13637);
    $.__views.__alloyId13638 = Ti.UI.createView({
        id: "__alloyId13638"
    });
    $.__views.__alloyId13638 && $.addTopLevelView($.__views.__alloyId13638);
    $.__views.__alloyId13639 = Ti.UI.createView({
        id: "__alloyId13639"
    });
    $.__views.__alloyId13638.add($.__views.__alloyId13639);
    $.__views.__alloyId13640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13640"
    });
    $.__views.__alloyId13639.add($.__views.__alloyId13640);
    $.__views.__alloyId13641 = Ti.UI.createView({
        id: "__alloyId13641"
    });
    $.__views.__alloyId13641 && $.addTopLevelView($.__views.__alloyId13641);
    $.__views.__alloyId13642 = Ti.UI.createView({
        id: "__alloyId13642"
    });
    $.__views.__alloyId13641.add($.__views.__alloyId13642);
    $.__views.__alloyId13643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13643"
    });
    $.__views.__alloyId13642.add($.__views.__alloyId13643);
    $.__views.__alloyId13644 = Ti.UI.createView({
        id: "__alloyId13644"
    });
    $.__views.__alloyId13644 && $.addTopLevelView($.__views.__alloyId13644);
    $.__views.__alloyId13645 = Ti.UI.createView({
        id: "__alloyId13645"
    });
    $.__views.__alloyId13644.add($.__views.__alloyId13645);
    $.__views.__alloyId13646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13646"
    });
    $.__views.__alloyId13645.add($.__views.__alloyId13646);
    $.__views.__alloyId13647 = Ti.UI.createView({
        id: "__alloyId13647"
    });
    $.__views.__alloyId13647 && $.addTopLevelView($.__views.__alloyId13647);
    $.__views.__alloyId13648 = Ti.UI.createView({
        id: "__alloyId13648"
    });
    $.__views.__alloyId13647.add($.__views.__alloyId13648);
    $.__views.__alloyId13649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13649"
    });
    $.__views.__alloyId13648.add($.__views.__alloyId13649);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;