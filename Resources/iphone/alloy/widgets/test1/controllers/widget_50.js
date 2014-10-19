function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_50";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_50 = Ti.UI.createView({
        id: "widget_50"
    });
    $.__views.widget_50 && $.addTopLevelView($.__views.widget_50);
    $.__views.__alloyId11622 = Ti.UI.createView({
        id: "__alloyId11622"
    });
    $.__views.widget_50.add($.__views.__alloyId11622);
    $.__views.__alloyId11623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11623"
    });
    $.__views.__alloyId11622.add($.__views.__alloyId11623);
    $.__views.__alloyId11624 = Ti.UI.createView({
        id: "__alloyId11624"
    });
    $.__views.__alloyId11624 && $.addTopLevelView($.__views.__alloyId11624);
    $.__views.__alloyId11625 = Ti.UI.createView({
        id: "__alloyId11625"
    });
    $.__views.__alloyId11624.add($.__views.__alloyId11625);
    $.__views.__alloyId11626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11626"
    });
    $.__views.__alloyId11625.add($.__views.__alloyId11626);
    $.__views.__alloyId11627 = Ti.UI.createView({
        id: "__alloyId11627"
    });
    $.__views.__alloyId11627 && $.addTopLevelView($.__views.__alloyId11627);
    $.__views.__alloyId11628 = Ti.UI.createView({
        id: "__alloyId11628"
    });
    $.__views.__alloyId11627.add($.__views.__alloyId11628);
    $.__views.__alloyId11629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11629"
    });
    $.__views.__alloyId11628.add($.__views.__alloyId11629);
    $.__views.__alloyId11630 = Ti.UI.createView({
        id: "__alloyId11630"
    });
    $.__views.__alloyId11630 && $.addTopLevelView($.__views.__alloyId11630);
    $.__views.__alloyId11631 = Ti.UI.createView({
        id: "__alloyId11631"
    });
    $.__views.__alloyId11630.add($.__views.__alloyId11631);
    $.__views.__alloyId11632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11632"
    });
    $.__views.__alloyId11631.add($.__views.__alloyId11632);
    $.__views.__alloyId11633 = Ti.UI.createView({
        id: "__alloyId11633"
    });
    $.__views.__alloyId11633 && $.addTopLevelView($.__views.__alloyId11633);
    $.__views.__alloyId11634 = Ti.UI.createView({
        id: "__alloyId11634"
    });
    $.__views.__alloyId11633.add($.__views.__alloyId11634);
    $.__views.__alloyId11635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11635"
    });
    $.__views.__alloyId11634.add($.__views.__alloyId11635);
    $.__views.__alloyId11636 = Ti.UI.createView({
        id: "__alloyId11636"
    });
    $.__views.__alloyId11636 && $.addTopLevelView($.__views.__alloyId11636);
    $.__views.__alloyId11637 = Ti.UI.createView({
        id: "__alloyId11637"
    });
    $.__views.__alloyId11636.add($.__views.__alloyId11637);
    $.__views.__alloyId11638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11638"
    });
    $.__views.__alloyId11637.add($.__views.__alloyId11638);
    $.__views.__alloyId11639 = Ti.UI.createView({
        id: "__alloyId11639"
    });
    $.__views.__alloyId11639 && $.addTopLevelView($.__views.__alloyId11639);
    $.__views.__alloyId11640 = Ti.UI.createView({
        id: "__alloyId11640"
    });
    $.__views.__alloyId11639.add($.__views.__alloyId11640);
    $.__views.__alloyId11641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11641"
    });
    $.__views.__alloyId11640.add($.__views.__alloyId11641);
    $.__views.__alloyId11642 = Ti.UI.createView({
        id: "__alloyId11642"
    });
    $.__views.__alloyId11642 && $.addTopLevelView($.__views.__alloyId11642);
    $.__views.__alloyId11643 = Ti.UI.createView({
        id: "__alloyId11643"
    });
    $.__views.__alloyId11642.add($.__views.__alloyId11643);
    $.__views.__alloyId11644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11644"
    });
    $.__views.__alloyId11643.add($.__views.__alloyId11644);
    $.__views.__alloyId11645 = Ti.UI.createView({
        id: "__alloyId11645"
    });
    $.__views.__alloyId11645 && $.addTopLevelView($.__views.__alloyId11645);
    $.__views.__alloyId11646 = Ti.UI.createView({
        id: "__alloyId11646"
    });
    $.__views.__alloyId11645.add($.__views.__alloyId11646);
    $.__views.__alloyId11647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11647"
    });
    $.__views.__alloyId11646.add($.__views.__alloyId11647);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;