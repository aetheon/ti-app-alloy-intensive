function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_849";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_849 = Ti.UI.createView({
        id: "widget_849"
    });
    $.__views.widget_849 && $.addTopLevelView($.__views.widget_849);
    $.__views.__alloyId21684 = Ti.UI.createView({
        id: "__alloyId21684"
    });
    $.__views.widget_849.add($.__views.__alloyId21684);
    $.__views.__alloyId21685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21685"
    });
    $.__views.__alloyId21684.add($.__views.__alloyId21685);
    $.__views.__alloyId21686 = Ti.UI.createView({
        id: "__alloyId21686"
    });
    $.__views.__alloyId21686 && $.addTopLevelView($.__views.__alloyId21686);
    $.__views.__alloyId21687 = Ti.UI.createView({
        id: "__alloyId21687"
    });
    $.__views.__alloyId21686.add($.__views.__alloyId21687);
    $.__views.__alloyId21688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21688"
    });
    $.__views.__alloyId21687.add($.__views.__alloyId21688);
    $.__views.__alloyId21689 = Ti.UI.createView({
        id: "__alloyId21689"
    });
    $.__views.__alloyId21689 && $.addTopLevelView($.__views.__alloyId21689);
    $.__views.__alloyId21690 = Ti.UI.createView({
        id: "__alloyId21690"
    });
    $.__views.__alloyId21689.add($.__views.__alloyId21690);
    $.__views.__alloyId21691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21691"
    });
    $.__views.__alloyId21690.add($.__views.__alloyId21691);
    $.__views.__alloyId21692 = Ti.UI.createView({
        id: "__alloyId21692"
    });
    $.__views.__alloyId21692 && $.addTopLevelView($.__views.__alloyId21692);
    $.__views.__alloyId21693 = Ti.UI.createView({
        id: "__alloyId21693"
    });
    $.__views.__alloyId21692.add($.__views.__alloyId21693);
    $.__views.__alloyId21694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21694"
    });
    $.__views.__alloyId21693.add($.__views.__alloyId21694);
    $.__views.__alloyId21695 = Ti.UI.createView({
        id: "__alloyId21695"
    });
    $.__views.__alloyId21695 && $.addTopLevelView($.__views.__alloyId21695);
    $.__views.__alloyId21696 = Ti.UI.createView({
        id: "__alloyId21696"
    });
    $.__views.__alloyId21695.add($.__views.__alloyId21696);
    $.__views.__alloyId21697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21697"
    });
    $.__views.__alloyId21696.add($.__views.__alloyId21697);
    $.__views.__alloyId21698 = Ti.UI.createView({
        id: "__alloyId21698"
    });
    $.__views.__alloyId21698 && $.addTopLevelView($.__views.__alloyId21698);
    $.__views.__alloyId21699 = Ti.UI.createView({
        id: "__alloyId21699"
    });
    $.__views.__alloyId21698.add($.__views.__alloyId21699);
    $.__views.__alloyId21700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21700"
    });
    $.__views.__alloyId21699.add($.__views.__alloyId21700);
    $.__views.__alloyId21701 = Ti.UI.createView({
        id: "__alloyId21701"
    });
    $.__views.__alloyId21701 && $.addTopLevelView($.__views.__alloyId21701);
    $.__views.__alloyId21702 = Ti.UI.createView({
        id: "__alloyId21702"
    });
    $.__views.__alloyId21701.add($.__views.__alloyId21702);
    $.__views.__alloyId21703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21703"
    });
    $.__views.__alloyId21702.add($.__views.__alloyId21703);
    $.__views.__alloyId21704 = Ti.UI.createView({
        id: "__alloyId21704"
    });
    $.__views.__alloyId21704 && $.addTopLevelView($.__views.__alloyId21704);
    $.__views.__alloyId21705 = Ti.UI.createView({
        id: "__alloyId21705"
    });
    $.__views.__alloyId21704.add($.__views.__alloyId21705);
    $.__views.__alloyId21706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21706"
    });
    $.__views.__alloyId21705.add($.__views.__alloyId21706);
    $.__views.__alloyId21707 = Ti.UI.createView({
        id: "__alloyId21707"
    });
    $.__views.__alloyId21707 && $.addTopLevelView($.__views.__alloyId21707);
    $.__views.__alloyId21708 = Ti.UI.createView({
        id: "__alloyId21708"
    });
    $.__views.__alloyId21707.add($.__views.__alloyId21708);
    $.__views.__alloyId21709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21709"
    });
    $.__views.__alloyId21708.add($.__views.__alloyId21709);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;