function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_918";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_918 = Ti.UI.createView({
        id: "widget_918"
    });
    $.__views.widget_918 && $.addTopLevelView($.__views.widget_918);
    $.__views.__alloyId23686 = Ti.UI.createView({
        id: "__alloyId23686"
    });
    $.__views.widget_918.add($.__views.__alloyId23686);
    $.__views.__alloyId23687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23687"
    });
    $.__views.__alloyId23686.add($.__views.__alloyId23687);
    $.__views.__alloyId23688 = Ti.UI.createView({
        id: "__alloyId23688"
    });
    $.__views.__alloyId23688 && $.addTopLevelView($.__views.__alloyId23688);
    $.__views.__alloyId23689 = Ti.UI.createView({
        id: "__alloyId23689"
    });
    $.__views.__alloyId23688.add($.__views.__alloyId23689);
    $.__views.__alloyId23690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23690"
    });
    $.__views.__alloyId23689.add($.__views.__alloyId23690);
    $.__views.__alloyId23691 = Ti.UI.createView({
        id: "__alloyId23691"
    });
    $.__views.__alloyId23691 && $.addTopLevelView($.__views.__alloyId23691);
    $.__views.__alloyId23692 = Ti.UI.createView({
        id: "__alloyId23692"
    });
    $.__views.__alloyId23691.add($.__views.__alloyId23692);
    $.__views.__alloyId23693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23693"
    });
    $.__views.__alloyId23692.add($.__views.__alloyId23693);
    $.__views.__alloyId23694 = Ti.UI.createView({
        id: "__alloyId23694"
    });
    $.__views.__alloyId23694 && $.addTopLevelView($.__views.__alloyId23694);
    $.__views.__alloyId23695 = Ti.UI.createView({
        id: "__alloyId23695"
    });
    $.__views.__alloyId23694.add($.__views.__alloyId23695);
    $.__views.__alloyId23696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23696"
    });
    $.__views.__alloyId23695.add($.__views.__alloyId23696);
    $.__views.__alloyId23697 = Ti.UI.createView({
        id: "__alloyId23697"
    });
    $.__views.__alloyId23697 && $.addTopLevelView($.__views.__alloyId23697);
    $.__views.__alloyId23698 = Ti.UI.createView({
        id: "__alloyId23698"
    });
    $.__views.__alloyId23697.add($.__views.__alloyId23698);
    $.__views.__alloyId23699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23699"
    });
    $.__views.__alloyId23698.add($.__views.__alloyId23699);
    $.__views.__alloyId23700 = Ti.UI.createView({
        id: "__alloyId23700"
    });
    $.__views.__alloyId23700 && $.addTopLevelView($.__views.__alloyId23700);
    $.__views.__alloyId23701 = Ti.UI.createView({
        id: "__alloyId23701"
    });
    $.__views.__alloyId23700.add($.__views.__alloyId23701);
    $.__views.__alloyId23702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23702"
    });
    $.__views.__alloyId23701.add($.__views.__alloyId23702);
    $.__views.__alloyId23703 = Ti.UI.createView({
        id: "__alloyId23703"
    });
    $.__views.__alloyId23703 && $.addTopLevelView($.__views.__alloyId23703);
    $.__views.__alloyId23704 = Ti.UI.createView({
        id: "__alloyId23704"
    });
    $.__views.__alloyId23703.add($.__views.__alloyId23704);
    $.__views.__alloyId23705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23705"
    });
    $.__views.__alloyId23704.add($.__views.__alloyId23705);
    $.__views.__alloyId23706 = Ti.UI.createView({
        id: "__alloyId23706"
    });
    $.__views.__alloyId23706 && $.addTopLevelView($.__views.__alloyId23706);
    $.__views.__alloyId23707 = Ti.UI.createView({
        id: "__alloyId23707"
    });
    $.__views.__alloyId23706.add($.__views.__alloyId23707);
    $.__views.__alloyId23708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23708"
    });
    $.__views.__alloyId23707.add($.__views.__alloyId23708);
    $.__views.__alloyId23709 = Ti.UI.createView({
        id: "__alloyId23709"
    });
    $.__views.__alloyId23709 && $.addTopLevelView($.__views.__alloyId23709);
    $.__views.__alloyId23710 = Ti.UI.createView({
        id: "__alloyId23710"
    });
    $.__views.__alloyId23709.add($.__views.__alloyId23710);
    $.__views.__alloyId23711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23711"
    });
    $.__views.__alloyId23710.add($.__views.__alloyId23711);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;