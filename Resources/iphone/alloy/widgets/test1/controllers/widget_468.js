function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_468";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_468 = Ti.UI.createView({
        id: "widget_468"
    });
    $.__views.widget_468 && $.addTopLevelView($.__views.widget_468);
    $.__views.__alloyId10686 = Ti.UI.createView({
        id: "__alloyId10686"
    });
    $.__views.widget_468.add($.__views.__alloyId10686);
    $.__views.__alloyId10687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10687"
    });
    $.__views.__alloyId10686.add($.__views.__alloyId10687);
    $.__views.__alloyId10688 = Ti.UI.createView({
        id: "__alloyId10688"
    });
    $.__views.__alloyId10688 && $.addTopLevelView($.__views.__alloyId10688);
    $.__views.__alloyId10689 = Ti.UI.createView({
        id: "__alloyId10689"
    });
    $.__views.__alloyId10688.add($.__views.__alloyId10689);
    $.__views.__alloyId10690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10690"
    });
    $.__views.__alloyId10689.add($.__views.__alloyId10690);
    $.__views.__alloyId10691 = Ti.UI.createView({
        id: "__alloyId10691"
    });
    $.__views.__alloyId10691 && $.addTopLevelView($.__views.__alloyId10691);
    $.__views.__alloyId10692 = Ti.UI.createView({
        id: "__alloyId10692"
    });
    $.__views.__alloyId10691.add($.__views.__alloyId10692);
    $.__views.__alloyId10693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10693"
    });
    $.__views.__alloyId10692.add($.__views.__alloyId10693);
    $.__views.__alloyId10694 = Ti.UI.createView({
        id: "__alloyId10694"
    });
    $.__views.__alloyId10694 && $.addTopLevelView($.__views.__alloyId10694);
    $.__views.__alloyId10695 = Ti.UI.createView({
        id: "__alloyId10695"
    });
    $.__views.__alloyId10694.add($.__views.__alloyId10695);
    $.__views.__alloyId10696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10696"
    });
    $.__views.__alloyId10695.add($.__views.__alloyId10696);
    $.__views.__alloyId10697 = Ti.UI.createView({
        id: "__alloyId10697"
    });
    $.__views.__alloyId10697 && $.addTopLevelView($.__views.__alloyId10697);
    $.__views.__alloyId10698 = Ti.UI.createView({
        id: "__alloyId10698"
    });
    $.__views.__alloyId10697.add($.__views.__alloyId10698);
    $.__views.__alloyId10699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10699"
    });
    $.__views.__alloyId10698.add($.__views.__alloyId10699);
    $.__views.__alloyId10700 = Ti.UI.createView({
        id: "__alloyId10700"
    });
    $.__views.__alloyId10700 && $.addTopLevelView($.__views.__alloyId10700);
    $.__views.__alloyId10701 = Ti.UI.createView({
        id: "__alloyId10701"
    });
    $.__views.__alloyId10700.add($.__views.__alloyId10701);
    $.__views.__alloyId10702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10702"
    });
    $.__views.__alloyId10701.add($.__views.__alloyId10702);
    $.__views.__alloyId10703 = Ti.UI.createView({
        id: "__alloyId10703"
    });
    $.__views.__alloyId10703 && $.addTopLevelView($.__views.__alloyId10703);
    $.__views.__alloyId10704 = Ti.UI.createView({
        id: "__alloyId10704"
    });
    $.__views.__alloyId10703.add($.__views.__alloyId10704);
    $.__views.__alloyId10705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10705"
    });
    $.__views.__alloyId10704.add($.__views.__alloyId10705);
    $.__views.__alloyId10706 = Ti.UI.createView({
        id: "__alloyId10706"
    });
    $.__views.__alloyId10706 && $.addTopLevelView($.__views.__alloyId10706);
    $.__views.__alloyId10707 = Ti.UI.createView({
        id: "__alloyId10707"
    });
    $.__views.__alloyId10706.add($.__views.__alloyId10707);
    $.__views.__alloyId10708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10708"
    });
    $.__views.__alloyId10707.add($.__views.__alloyId10708);
    $.__views.__alloyId10709 = Ti.UI.createView({
        id: "__alloyId10709"
    });
    $.__views.__alloyId10709 && $.addTopLevelView($.__views.__alloyId10709);
    $.__views.__alloyId10710 = Ti.UI.createView({
        id: "__alloyId10710"
    });
    $.__views.__alloyId10709.add($.__views.__alloyId10710);
    $.__views.__alloyId10711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10711"
    });
    $.__views.__alloyId10710.add($.__views.__alloyId10711);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;