function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_745";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_745 = Ti.UI.createView({
        id: "widget_745"
    });
    $.__views.widget_745 && $.addTopLevelView($.__views.widget_745);
    $.__views.__alloyId18694 = Ti.UI.createView({
        id: "__alloyId18694"
    });
    $.__views.widget_745.add($.__views.__alloyId18694);
    $.__views.__alloyId18695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18695"
    });
    $.__views.__alloyId18694.add($.__views.__alloyId18695);
    $.__views.__alloyId18696 = Ti.UI.createView({
        id: "__alloyId18696"
    });
    $.__views.__alloyId18696 && $.addTopLevelView($.__views.__alloyId18696);
    $.__views.__alloyId18697 = Ti.UI.createView({
        id: "__alloyId18697"
    });
    $.__views.__alloyId18696.add($.__views.__alloyId18697);
    $.__views.__alloyId18698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18698"
    });
    $.__views.__alloyId18697.add($.__views.__alloyId18698);
    $.__views.__alloyId18699 = Ti.UI.createView({
        id: "__alloyId18699"
    });
    $.__views.__alloyId18699 && $.addTopLevelView($.__views.__alloyId18699);
    $.__views.__alloyId18700 = Ti.UI.createView({
        id: "__alloyId18700"
    });
    $.__views.__alloyId18699.add($.__views.__alloyId18700);
    $.__views.__alloyId18701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18701"
    });
    $.__views.__alloyId18700.add($.__views.__alloyId18701);
    $.__views.__alloyId18702 = Ti.UI.createView({
        id: "__alloyId18702"
    });
    $.__views.__alloyId18702 && $.addTopLevelView($.__views.__alloyId18702);
    $.__views.__alloyId18703 = Ti.UI.createView({
        id: "__alloyId18703"
    });
    $.__views.__alloyId18702.add($.__views.__alloyId18703);
    $.__views.__alloyId18704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18704"
    });
    $.__views.__alloyId18703.add($.__views.__alloyId18704);
    $.__views.__alloyId18705 = Ti.UI.createView({
        id: "__alloyId18705"
    });
    $.__views.__alloyId18705 && $.addTopLevelView($.__views.__alloyId18705);
    $.__views.__alloyId18706 = Ti.UI.createView({
        id: "__alloyId18706"
    });
    $.__views.__alloyId18705.add($.__views.__alloyId18706);
    $.__views.__alloyId18707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18707"
    });
    $.__views.__alloyId18706.add($.__views.__alloyId18707);
    $.__views.__alloyId18708 = Ti.UI.createView({
        id: "__alloyId18708"
    });
    $.__views.__alloyId18708 && $.addTopLevelView($.__views.__alloyId18708);
    $.__views.__alloyId18709 = Ti.UI.createView({
        id: "__alloyId18709"
    });
    $.__views.__alloyId18708.add($.__views.__alloyId18709);
    $.__views.__alloyId18710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18710"
    });
    $.__views.__alloyId18709.add($.__views.__alloyId18710);
    $.__views.__alloyId18711 = Ti.UI.createView({
        id: "__alloyId18711"
    });
    $.__views.__alloyId18711 && $.addTopLevelView($.__views.__alloyId18711);
    $.__views.__alloyId18712 = Ti.UI.createView({
        id: "__alloyId18712"
    });
    $.__views.__alloyId18711.add($.__views.__alloyId18712);
    $.__views.__alloyId18713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18713"
    });
    $.__views.__alloyId18712.add($.__views.__alloyId18713);
    $.__views.__alloyId18714 = Ti.UI.createView({
        id: "__alloyId18714"
    });
    $.__views.__alloyId18714 && $.addTopLevelView($.__views.__alloyId18714);
    $.__views.__alloyId18715 = Ti.UI.createView({
        id: "__alloyId18715"
    });
    $.__views.__alloyId18714.add($.__views.__alloyId18715);
    $.__views.__alloyId18716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18716"
    });
    $.__views.__alloyId18715.add($.__views.__alloyId18716);
    $.__views.__alloyId18717 = Ti.UI.createView({
        id: "__alloyId18717"
    });
    $.__views.__alloyId18717 && $.addTopLevelView($.__views.__alloyId18717);
    $.__views.__alloyId18718 = Ti.UI.createView({
        id: "__alloyId18718"
    });
    $.__views.__alloyId18717.add($.__views.__alloyId18718);
    $.__views.__alloyId18719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18719"
    });
    $.__views.__alloyId18718.add($.__views.__alloyId18719);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;