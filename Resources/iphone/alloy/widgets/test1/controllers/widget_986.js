function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_986";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_986 = Ti.UI.createView({
        id: "widget_986"
    });
    $.__views.widget_986 && $.addTopLevelView($.__views.widget_986);
    $.__views.__alloyId25636 = Ti.UI.createView({
        id: "__alloyId25636"
    });
    $.__views.widget_986.add($.__views.__alloyId25636);
    $.__views.__alloyId25637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25637"
    });
    $.__views.__alloyId25636.add($.__views.__alloyId25637);
    $.__views.__alloyId25638 = Ti.UI.createView({
        id: "__alloyId25638"
    });
    $.__views.__alloyId25638 && $.addTopLevelView($.__views.__alloyId25638);
    $.__views.__alloyId25639 = Ti.UI.createView({
        id: "__alloyId25639"
    });
    $.__views.__alloyId25638.add($.__views.__alloyId25639);
    $.__views.__alloyId25640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25640"
    });
    $.__views.__alloyId25639.add($.__views.__alloyId25640);
    $.__views.__alloyId25641 = Ti.UI.createView({
        id: "__alloyId25641"
    });
    $.__views.__alloyId25641 && $.addTopLevelView($.__views.__alloyId25641);
    $.__views.__alloyId25642 = Ti.UI.createView({
        id: "__alloyId25642"
    });
    $.__views.__alloyId25641.add($.__views.__alloyId25642);
    $.__views.__alloyId25643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25643"
    });
    $.__views.__alloyId25642.add($.__views.__alloyId25643);
    $.__views.__alloyId25644 = Ti.UI.createView({
        id: "__alloyId25644"
    });
    $.__views.__alloyId25644 && $.addTopLevelView($.__views.__alloyId25644);
    $.__views.__alloyId25645 = Ti.UI.createView({
        id: "__alloyId25645"
    });
    $.__views.__alloyId25644.add($.__views.__alloyId25645);
    $.__views.__alloyId25646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25646"
    });
    $.__views.__alloyId25645.add($.__views.__alloyId25646);
    $.__views.__alloyId25647 = Ti.UI.createView({
        id: "__alloyId25647"
    });
    $.__views.__alloyId25647 && $.addTopLevelView($.__views.__alloyId25647);
    $.__views.__alloyId25648 = Ti.UI.createView({
        id: "__alloyId25648"
    });
    $.__views.__alloyId25647.add($.__views.__alloyId25648);
    $.__views.__alloyId25649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25649"
    });
    $.__views.__alloyId25648.add($.__views.__alloyId25649);
    $.__views.__alloyId25650 = Ti.UI.createView({
        id: "__alloyId25650"
    });
    $.__views.__alloyId25650 && $.addTopLevelView($.__views.__alloyId25650);
    $.__views.__alloyId25651 = Ti.UI.createView({
        id: "__alloyId25651"
    });
    $.__views.__alloyId25650.add($.__views.__alloyId25651);
    $.__views.__alloyId25652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25652"
    });
    $.__views.__alloyId25651.add($.__views.__alloyId25652);
    $.__views.__alloyId25653 = Ti.UI.createView({
        id: "__alloyId25653"
    });
    $.__views.__alloyId25653 && $.addTopLevelView($.__views.__alloyId25653);
    $.__views.__alloyId25654 = Ti.UI.createView({
        id: "__alloyId25654"
    });
    $.__views.__alloyId25653.add($.__views.__alloyId25654);
    $.__views.__alloyId25655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25655"
    });
    $.__views.__alloyId25654.add($.__views.__alloyId25655);
    $.__views.__alloyId25656 = Ti.UI.createView({
        id: "__alloyId25656"
    });
    $.__views.__alloyId25656 && $.addTopLevelView($.__views.__alloyId25656);
    $.__views.__alloyId25657 = Ti.UI.createView({
        id: "__alloyId25657"
    });
    $.__views.__alloyId25656.add($.__views.__alloyId25657);
    $.__views.__alloyId25658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25658"
    });
    $.__views.__alloyId25657.add($.__views.__alloyId25658);
    $.__views.__alloyId25659 = Ti.UI.createView({
        id: "__alloyId25659"
    });
    $.__views.__alloyId25659 && $.addTopLevelView($.__views.__alloyId25659);
    $.__views.__alloyId25660 = Ti.UI.createView({
        id: "__alloyId25660"
    });
    $.__views.__alloyId25659.add($.__views.__alloyId25660);
    $.__views.__alloyId25661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25661"
    });
    $.__views.__alloyId25660.add($.__views.__alloyId25661);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;