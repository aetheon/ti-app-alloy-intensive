function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_639";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_639 = Ti.UI.createView({
        id: "widget_639"
    });
    $.__views.widget_639 && $.addTopLevelView($.__views.widget_639);
    $.__views.__alloyId15626 = Ti.UI.createView({
        id: "__alloyId15626"
    });
    $.__views.widget_639.add($.__views.__alloyId15626);
    $.__views.__alloyId15627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15627"
    });
    $.__views.__alloyId15626.add($.__views.__alloyId15627);
    $.__views.__alloyId15628 = Ti.UI.createView({
        id: "__alloyId15628"
    });
    $.__views.__alloyId15628 && $.addTopLevelView($.__views.__alloyId15628);
    $.__views.__alloyId15629 = Ti.UI.createView({
        id: "__alloyId15629"
    });
    $.__views.__alloyId15628.add($.__views.__alloyId15629);
    $.__views.__alloyId15630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15630"
    });
    $.__views.__alloyId15629.add($.__views.__alloyId15630);
    $.__views.__alloyId15631 = Ti.UI.createView({
        id: "__alloyId15631"
    });
    $.__views.__alloyId15631 && $.addTopLevelView($.__views.__alloyId15631);
    $.__views.__alloyId15632 = Ti.UI.createView({
        id: "__alloyId15632"
    });
    $.__views.__alloyId15631.add($.__views.__alloyId15632);
    $.__views.__alloyId15633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15633"
    });
    $.__views.__alloyId15632.add($.__views.__alloyId15633);
    $.__views.__alloyId15634 = Ti.UI.createView({
        id: "__alloyId15634"
    });
    $.__views.__alloyId15634 && $.addTopLevelView($.__views.__alloyId15634);
    $.__views.__alloyId15635 = Ti.UI.createView({
        id: "__alloyId15635"
    });
    $.__views.__alloyId15634.add($.__views.__alloyId15635);
    $.__views.__alloyId15636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15636"
    });
    $.__views.__alloyId15635.add($.__views.__alloyId15636);
    $.__views.__alloyId15637 = Ti.UI.createView({
        id: "__alloyId15637"
    });
    $.__views.__alloyId15637 && $.addTopLevelView($.__views.__alloyId15637);
    $.__views.__alloyId15638 = Ti.UI.createView({
        id: "__alloyId15638"
    });
    $.__views.__alloyId15637.add($.__views.__alloyId15638);
    $.__views.__alloyId15639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15639"
    });
    $.__views.__alloyId15638.add($.__views.__alloyId15639);
    $.__views.__alloyId15640 = Ti.UI.createView({
        id: "__alloyId15640"
    });
    $.__views.__alloyId15640 && $.addTopLevelView($.__views.__alloyId15640);
    $.__views.__alloyId15641 = Ti.UI.createView({
        id: "__alloyId15641"
    });
    $.__views.__alloyId15640.add($.__views.__alloyId15641);
    $.__views.__alloyId15642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15642"
    });
    $.__views.__alloyId15641.add($.__views.__alloyId15642);
    $.__views.__alloyId15643 = Ti.UI.createView({
        id: "__alloyId15643"
    });
    $.__views.__alloyId15643 && $.addTopLevelView($.__views.__alloyId15643);
    $.__views.__alloyId15644 = Ti.UI.createView({
        id: "__alloyId15644"
    });
    $.__views.__alloyId15643.add($.__views.__alloyId15644);
    $.__views.__alloyId15645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15645"
    });
    $.__views.__alloyId15644.add($.__views.__alloyId15645);
    $.__views.__alloyId15646 = Ti.UI.createView({
        id: "__alloyId15646"
    });
    $.__views.__alloyId15646 && $.addTopLevelView($.__views.__alloyId15646);
    $.__views.__alloyId15647 = Ti.UI.createView({
        id: "__alloyId15647"
    });
    $.__views.__alloyId15646.add($.__views.__alloyId15647);
    $.__views.__alloyId15648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15648"
    });
    $.__views.__alloyId15647.add($.__views.__alloyId15648);
    $.__views.__alloyId15649 = Ti.UI.createView({
        id: "__alloyId15649"
    });
    $.__views.__alloyId15649 && $.addTopLevelView($.__views.__alloyId15649);
    $.__views.__alloyId15650 = Ti.UI.createView({
        id: "__alloyId15650"
    });
    $.__views.__alloyId15649.add($.__views.__alloyId15650);
    $.__views.__alloyId15651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15651"
    });
    $.__views.__alloyId15650.add($.__views.__alloyId15651);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;