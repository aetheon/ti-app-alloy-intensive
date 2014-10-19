function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_881";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_881 = Ti.UI.createView({
        id: "widget_881"
    });
    $.__views.widget_881 && $.addTopLevelView($.__views.widget_881);
    $.__views.__alloyId22620 = Ti.UI.createView({
        id: "__alloyId22620"
    });
    $.__views.widget_881.add($.__views.__alloyId22620);
    $.__views.__alloyId22621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22621"
    });
    $.__views.__alloyId22620.add($.__views.__alloyId22621);
    $.__views.__alloyId22622 = Ti.UI.createView({
        id: "__alloyId22622"
    });
    $.__views.__alloyId22622 && $.addTopLevelView($.__views.__alloyId22622);
    $.__views.__alloyId22623 = Ti.UI.createView({
        id: "__alloyId22623"
    });
    $.__views.__alloyId22622.add($.__views.__alloyId22623);
    $.__views.__alloyId22624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22624"
    });
    $.__views.__alloyId22623.add($.__views.__alloyId22624);
    $.__views.__alloyId22625 = Ti.UI.createView({
        id: "__alloyId22625"
    });
    $.__views.__alloyId22625 && $.addTopLevelView($.__views.__alloyId22625);
    $.__views.__alloyId22626 = Ti.UI.createView({
        id: "__alloyId22626"
    });
    $.__views.__alloyId22625.add($.__views.__alloyId22626);
    $.__views.__alloyId22627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22627"
    });
    $.__views.__alloyId22626.add($.__views.__alloyId22627);
    $.__views.__alloyId22628 = Ti.UI.createView({
        id: "__alloyId22628"
    });
    $.__views.__alloyId22628 && $.addTopLevelView($.__views.__alloyId22628);
    $.__views.__alloyId22629 = Ti.UI.createView({
        id: "__alloyId22629"
    });
    $.__views.__alloyId22628.add($.__views.__alloyId22629);
    $.__views.__alloyId22630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22630"
    });
    $.__views.__alloyId22629.add($.__views.__alloyId22630);
    $.__views.__alloyId22631 = Ti.UI.createView({
        id: "__alloyId22631"
    });
    $.__views.__alloyId22631 && $.addTopLevelView($.__views.__alloyId22631);
    $.__views.__alloyId22632 = Ti.UI.createView({
        id: "__alloyId22632"
    });
    $.__views.__alloyId22631.add($.__views.__alloyId22632);
    $.__views.__alloyId22633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22633"
    });
    $.__views.__alloyId22632.add($.__views.__alloyId22633);
    $.__views.__alloyId22634 = Ti.UI.createView({
        id: "__alloyId22634"
    });
    $.__views.__alloyId22634 && $.addTopLevelView($.__views.__alloyId22634);
    $.__views.__alloyId22635 = Ti.UI.createView({
        id: "__alloyId22635"
    });
    $.__views.__alloyId22634.add($.__views.__alloyId22635);
    $.__views.__alloyId22636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22636"
    });
    $.__views.__alloyId22635.add($.__views.__alloyId22636);
    $.__views.__alloyId22637 = Ti.UI.createView({
        id: "__alloyId22637"
    });
    $.__views.__alloyId22637 && $.addTopLevelView($.__views.__alloyId22637);
    $.__views.__alloyId22638 = Ti.UI.createView({
        id: "__alloyId22638"
    });
    $.__views.__alloyId22637.add($.__views.__alloyId22638);
    $.__views.__alloyId22639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22639"
    });
    $.__views.__alloyId22638.add($.__views.__alloyId22639);
    $.__views.__alloyId22640 = Ti.UI.createView({
        id: "__alloyId22640"
    });
    $.__views.__alloyId22640 && $.addTopLevelView($.__views.__alloyId22640);
    $.__views.__alloyId22641 = Ti.UI.createView({
        id: "__alloyId22641"
    });
    $.__views.__alloyId22640.add($.__views.__alloyId22641);
    $.__views.__alloyId22642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22642"
    });
    $.__views.__alloyId22641.add($.__views.__alloyId22642);
    $.__views.__alloyId22643 = Ti.UI.createView({
        id: "__alloyId22643"
    });
    $.__views.__alloyId22643 && $.addTopLevelView($.__views.__alloyId22643);
    $.__views.__alloyId22644 = Ti.UI.createView({
        id: "__alloyId22644"
    });
    $.__views.__alloyId22643.add($.__views.__alloyId22644);
    $.__views.__alloyId22645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22645"
    });
    $.__views.__alloyId22644.add($.__views.__alloyId22645);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;