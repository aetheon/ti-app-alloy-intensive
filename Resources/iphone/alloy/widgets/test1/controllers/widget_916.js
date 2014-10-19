function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_916";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_916 = Ti.UI.createView({
        id: "widget_916"
    });
    $.__views.widget_916 && $.addTopLevelView($.__views.widget_916);
    $.__views.__alloyId23634 = Ti.UI.createView({
        id: "__alloyId23634"
    });
    $.__views.widget_916.add($.__views.__alloyId23634);
    $.__views.__alloyId23635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23635"
    });
    $.__views.__alloyId23634.add($.__views.__alloyId23635);
    $.__views.__alloyId23636 = Ti.UI.createView({
        id: "__alloyId23636"
    });
    $.__views.__alloyId23636 && $.addTopLevelView($.__views.__alloyId23636);
    $.__views.__alloyId23637 = Ti.UI.createView({
        id: "__alloyId23637"
    });
    $.__views.__alloyId23636.add($.__views.__alloyId23637);
    $.__views.__alloyId23638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23638"
    });
    $.__views.__alloyId23637.add($.__views.__alloyId23638);
    $.__views.__alloyId23639 = Ti.UI.createView({
        id: "__alloyId23639"
    });
    $.__views.__alloyId23639 && $.addTopLevelView($.__views.__alloyId23639);
    $.__views.__alloyId23640 = Ti.UI.createView({
        id: "__alloyId23640"
    });
    $.__views.__alloyId23639.add($.__views.__alloyId23640);
    $.__views.__alloyId23641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23641"
    });
    $.__views.__alloyId23640.add($.__views.__alloyId23641);
    $.__views.__alloyId23642 = Ti.UI.createView({
        id: "__alloyId23642"
    });
    $.__views.__alloyId23642 && $.addTopLevelView($.__views.__alloyId23642);
    $.__views.__alloyId23643 = Ti.UI.createView({
        id: "__alloyId23643"
    });
    $.__views.__alloyId23642.add($.__views.__alloyId23643);
    $.__views.__alloyId23644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23644"
    });
    $.__views.__alloyId23643.add($.__views.__alloyId23644);
    $.__views.__alloyId23645 = Ti.UI.createView({
        id: "__alloyId23645"
    });
    $.__views.__alloyId23645 && $.addTopLevelView($.__views.__alloyId23645);
    $.__views.__alloyId23646 = Ti.UI.createView({
        id: "__alloyId23646"
    });
    $.__views.__alloyId23645.add($.__views.__alloyId23646);
    $.__views.__alloyId23647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23647"
    });
    $.__views.__alloyId23646.add($.__views.__alloyId23647);
    $.__views.__alloyId23648 = Ti.UI.createView({
        id: "__alloyId23648"
    });
    $.__views.__alloyId23648 && $.addTopLevelView($.__views.__alloyId23648);
    $.__views.__alloyId23649 = Ti.UI.createView({
        id: "__alloyId23649"
    });
    $.__views.__alloyId23648.add($.__views.__alloyId23649);
    $.__views.__alloyId23650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23650"
    });
    $.__views.__alloyId23649.add($.__views.__alloyId23650);
    $.__views.__alloyId23651 = Ti.UI.createView({
        id: "__alloyId23651"
    });
    $.__views.__alloyId23651 && $.addTopLevelView($.__views.__alloyId23651);
    $.__views.__alloyId23652 = Ti.UI.createView({
        id: "__alloyId23652"
    });
    $.__views.__alloyId23651.add($.__views.__alloyId23652);
    $.__views.__alloyId23653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23653"
    });
    $.__views.__alloyId23652.add($.__views.__alloyId23653);
    $.__views.__alloyId23654 = Ti.UI.createView({
        id: "__alloyId23654"
    });
    $.__views.__alloyId23654 && $.addTopLevelView($.__views.__alloyId23654);
    $.__views.__alloyId23655 = Ti.UI.createView({
        id: "__alloyId23655"
    });
    $.__views.__alloyId23654.add($.__views.__alloyId23655);
    $.__views.__alloyId23656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23656"
    });
    $.__views.__alloyId23655.add($.__views.__alloyId23656);
    $.__views.__alloyId23657 = Ti.UI.createView({
        id: "__alloyId23657"
    });
    $.__views.__alloyId23657 && $.addTopLevelView($.__views.__alloyId23657);
    $.__views.__alloyId23658 = Ti.UI.createView({
        id: "__alloyId23658"
    });
    $.__views.__alloyId23657.add($.__views.__alloyId23658);
    $.__views.__alloyId23659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23659"
    });
    $.__views.__alloyId23658.add($.__views.__alloyId23659);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;