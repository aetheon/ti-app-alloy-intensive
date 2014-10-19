function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_606";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_606 = Ti.UI.createView({
        id: "widget_606"
    });
    $.__views.widget_606 && $.addTopLevelView($.__views.widget_606);
    $.__views.__alloyId14690 = Ti.UI.createView({
        id: "__alloyId14690"
    });
    $.__views.widget_606.add($.__views.__alloyId14690);
    $.__views.__alloyId14691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14691"
    });
    $.__views.__alloyId14690.add($.__views.__alloyId14691);
    $.__views.__alloyId14692 = Ti.UI.createView({
        id: "__alloyId14692"
    });
    $.__views.__alloyId14692 && $.addTopLevelView($.__views.__alloyId14692);
    $.__views.__alloyId14693 = Ti.UI.createView({
        id: "__alloyId14693"
    });
    $.__views.__alloyId14692.add($.__views.__alloyId14693);
    $.__views.__alloyId14694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14694"
    });
    $.__views.__alloyId14693.add($.__views.__alloyId14694);
    $.__views.__alloyId14695 = Ti.UI.createView({
        id: "__alloyId14695"
    });
    $.__views.__alloyId14695 && $.addTopLevelView($.__views.__alloyId14695);
    $.__views.__alloyId14696 = Ti.UI.createView({
        id: "__alloyId14696"
    });
    $.__views.__alloyId14695.add($.__views.__alloyId14696);
    $.__views.__alloyId14697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14697"
    });
    $.__views.__alloyId14696.add($.__views.__alloyId14697);
    $.__views.__alloyId14698 = Ti.UI.createView({
        id: "__alloyId14698"
    });
    $.__views.__alloyId14698 && $.addTopLevelView($.__views.__alloyId14698);
    $.__views.__alloyId14699 = Ti.UI.createView({
        id: "__alloyId14699"
    });
    $.__views.__alloyId14698.add($.__views.__alloyId14699);
    $.__views.__alloyId14700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14700"
    });
    $.__views.__alloyId14699.add($.__views.__alloyId14700);
    $.__views.__alloyId14701 = Ti.UI.createView({
        id: "__alloyId14701"
    });
    $.__views.__alloyId14701 && $.addTopLevelView($.__views.__alloyId14701);
    $.__views.__alloyId14702 = Ti.UI.createView({
        id: "__alloyId14702"
    });
    $.__views.__alloyId14701.add($.__views.__alloyId14702);
    $.__views.__alloyId14703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14703"
    });
    $.__views.__alloyId14702.add($.__views.__alloyId14703);
    $.__views.__alloyId14704 = Ti.UI.createView({
        id: "__alloyId14704"
    });
    $.__views.__alloyId14704 && $.addTopLevelView($.__views.__alloyId14704);
    $.__views.__alloyId14705 = Ti.UI.createView({
        id: "__alloyId14705"
    });
    $.__views.__alloyId14704.add($.__views.__alloyId14705);
    $.__views.__alloyId14706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14706"
    });
    $.__views.__alloyId14705.add($.__views.__alloyId14706);
    $.__views.__alloyId14707 = Ti.UI.createView({
        id: "__alloyId14707"
    });
    $.__views.__alloyId14707 && $.addTopLevelView($.__views.__alloyId14707);
    $.__views.__alloyId14708 = Ti.UI.createView({
        id: "__alloyId14708"
    });
    $.__views.__alloyId14707.add($.__views.__alloyId14708);
    $.__views.__alloyId14709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14709"
    });
    $.__views.__alloyId14708.add($.__views.__alloyId14709);
    $.__views.__alloyId14710 = Ti.UI.createView({
        id: "__alloyId14710"
    });
    $.__views.__alloyId14710 && $.addTopLevelView($.__views.__alloyId14710);
    $.__views.__alloyId14711 = Ti.UI.createView({
        id: "__alloyId14711"
    });
    $.__views.__alloyId14710.add($.__views.__alloyId14711);
    $.__views.__alloyId14712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14712"
    });
    $.__views.__alloyId14711.add($.__views.__alloyId14712);
    $.__views.__alloyId14713 = Ti.UI.createView({
        id: "__alloyId14713"
    });
    $.__views.__alloyId14713 && $.addTopLevelView($.__views.__alloyId14713);
    $.__views.__alloyId14714 = Ti.UI.createView({
        id: "__alloyId14714"
    });
    $.__views.__alloyId14713.add($.__views.__alloyId14714);
    $.__views.__alloyId14715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14715"
    });
    $.__views.__alloyId14714.add($.__views.__alloyId14715);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;