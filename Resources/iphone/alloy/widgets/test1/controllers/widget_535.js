function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_535";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_535 = Ti.UI.createView({
        id: "widget_535"
    });
    $.__views.widget_535 && $.addTopLevelView($.__views.widget_535);
    $.__views.__alloyId12636 = Ti.UI.createView({
        id: "__alloyId12636"
    });
    $.__views.widget_535.add($.__views.__alloyId12636);
    $.__views.__alloyId12637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12637"
    });
    $.__views.__alloyId12636.add($.__views.__alloyId12637);
    $.__views.__alloyId12638 = Ti.UI.createView({
        id: "__alloyId12638"
    });
    $.__views.__alloyId12638 && $.addTopLevelView($.__views.__alloyId12638);
    $.__views.__alloyId12639 = Ti.UI.createView({
        id: "__alloyId12639"
    });
    $.__views.__alloyId12638.add($.__views.__alloyId12639);
    $.__views.__alloyId12640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12640"
    });
    $.__views.__alloyId12639.add($.__views.__alloyId12640);
    $.__views.__alloyId12641 = Ti.UI.createView({
        id: "__alloyId12641"
    });
    $.__views.__alloyId12641 && $.addTopLevelView($.__views.__alloyId12641);
    $.__views.__alloyId12642 = Ti.UI.createView({
        id: "__alloyId12642"
    });
    $.__views.__alloyId12641.add($.__views.__alloyId12642);
    $.__views.__alloyId12643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12643"
    });
    $.__views.__alloyId12642.add($.__views.__alloyId12643);
    $.__views.__alloyId12644 = Ti.UI.createView({
        id: "__alloyId12644"
    });
    $.__views.__alloyId12644 && $.addTopLevelView($.__views.__alloyId12644);
    $.__views.__alloyId12645 = Ti.UI.createView({
        id: "__alloyId12645"
    });
    $.__views.__alloyId12644.add($.__views.__alloyId12645);
    $.__views.__alloyId12646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12646"
    });
    $.__views.__alloyId12645.add($.__views.__alloyId12646);
    $.__views.__alloyId12647 = Ti.UI.createView({
        id: "__alloyId12647"
    });
    $.__views.__alloyId12647 && $.addTopLevelView($.__views.__alloyId12647);
    $.__views.__alloyId12648 = Ti.UI.createView({
        id: "__alloyId12648"
    });
    $.__views.__alloyId12647.add($.__views.__alloyId12648);
    $.__views.__alloyId12649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12649"
    });
    $.__views.__alloyId12648.add($.__views.__alloyId12649);
    $.__views.__alloyId12650 = Ti.UI.createView({
        id: "__alloyId12650"
    });
    $.__views.__alloyId12650 && $.addTopLevelView($.__views.__alloyId12650);
    $.__views.__alloyId12651 = Ti.UI.createView({
        id: "__alloyId12651"
    });
    $.__views.__alloyId12650.add($.__views.__alloyId12651);
    $.__views.__alloyId12652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12652"
    });
    $.__views.__alloyId12651.add($.__views.__alloyId12652);
    $.__views.__alloyId12653 = Ti.UI.createView({
        id: "__alloyId12653"
    });
    $.__views.__alloyId12653 && $.addTopLevelView($.__views.__alloyId12653);
    $.__views.__alloyId12654 = Ti.UI.createView({
        id: "__alloyId12654"
    });
    $.__views.__alloyId12653.add($.__views.__alloyId12654);
    $.__views.__alloyId12655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12655"
    });
    $.__views.__alloyId12654.add($.__views.__alloyId12655);
    $.__views.__alloyId12656 = Ti.UI.createView({
        id: "__alloyId12656"
    });
    $.__views.__alloyId12656 && $.addTopLevelView($.__views.__alloyId12656);
    $.__views.__alloyId12657 = Ti.UI.createView({
        id: "__alloyId12657"
    });
    $.__views.__alloyId12656.add($.__views.__alloyId12657);
    $.__views.__alloyId12658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12658"
    });
    $.__views.__alloyId12657.add($.__views.__alloyId12658);
    $.__views.__alloyId12659 = Ti.UI.createView({
        id: "__alloyId12659"
    });
    $.__views.__alloyId12659 && $.addTopLevelView($.__views.__alloyId12659);
    $.__views.__alloyId12660 = Ti.UI.createView({
        id: "__alloyId12660"
    });
    $.__views.__alloyId12659.add($.__views.__alloyId12660);
    $.__views.__alloyId12661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12661"
    });
    $.__views.__alloyId12660.add($.__views.__alloyId12661);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;