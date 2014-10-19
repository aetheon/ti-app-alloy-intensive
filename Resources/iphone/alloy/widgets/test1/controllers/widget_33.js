function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_33";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_33 = Ti.UI.createView({
        id: "widget_33"
    });
    $.__views.widget_33 && $.addTopLevelView($.__views.widget_33);
    $.__views.__alloyId6708 = Ti.UI.createView({
        id: "__alloyId6708"
    });
    $.__views.widget_33.add($.__views.__alloyId6708);
    $.__views.__alloyId6709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6709"
    });
    $.__views.__alloyId6708.add($.__views.__alloyId6709);
    $.__views.__alloyId6710 = Ti.UI.createView({
        id: "__alloyId6710"
    });
    $.__views.__alloyId6710 && $.addTopLevelView($.__views.__alloyId6710);
    $.__views.__alloyId6711 = Ti.UI.createView({
        id: "__alloyId6711"
    });
    $.__views.__alloyId6710.add($.__views.__alloyId6711);
    $.__views.__alloyId6712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6712"
    });
    $.__views.__alloyId6711.add($.__views.__alloyId6712);
    $.__views.__alloyId6713 = Ti.UI.createView({
        id: "__alloyId6713"
    });
    $.__views.__alloyId6713 && $.addTopLevelView($.__views.__alloyId6713);
    $.__views.__alloyId6714 = Ti.UI.createView({
        id: "__alloyId6714"
    });
    $.__views.__alloyId6713.add($.__views.__alloyId6714);
    $.__views.__alloyId6715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6715"
    });
    $.__views.__alloyId6714.add($.__views.__alloyId6715);
    $.__views.__alloyId6716 = Ti.UI.createView({
        id: "__alloyId6716"
    });
    $.__views.__alloyId6716 && $.addTopLevelView($.__views.__alloyId6716);
    $.__views.__alloyId6717 = Ti.UI.createView({
        id: "__alloyId6717"
    });
    $.__views.__alloyId6716.add($.__views.__alloyId6717);
    $.__views.__alloyId6718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6718"
    });
    $.__views.__alloyId6717.add($.__views.__alloyId6718);
    $.__views.__alloyId6719 = Ti.UI.createView({
        id: "__alloyId6719"
    });
    $.__views.__alloyId6719 && $.addTopLevelView($.__views.__alloyId6719);
    $.__views.__alloyId6720 = Ti.UI.createView({
        id: "__alloyId6720"
    });
    $.__views.__alloyId6719.add($.__views.__alloyId6720);
    $.__views.__alloyId6721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6721"
    });
    $.__views.__alloyId6720.add($.__views.__alloyId6721);
    $.__views.__alloyId6722 = Ti.UI.createView({
        id: "__alloyId6722"
    });
    $.__views.__alloyId6722 && $.addTopLevelView($.__views.__alloyId6722);
    $.__views.__alloyId6723 = Ti.UI.createView({
        id: "__alloyId6723"
    });
    $.__views.__alloyId6722.add($.__views.__alloyId6723);
    $.__views.__alloyId6724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6724"
    });
    $.__views.__alloyId6723.add($.__views.__alloyId6724);
    $.__views.__alloyId6725 = Ti.UI.createView({
        id: "__alloyId6725"
    });
    $.__views.__alloyId6725 && $.addTopLevelView($.__views.__alloyId6725);
    $.__views.__alloyId6726 = Ti.UI.createView({
        id: "__alloyId6726"
    });
    $.__views.__alloyId6725.add($.__views.__alloyId6726);
    $.__views.__alloyId6727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6727"
    });
    $.__views.__alloyId6726.add($.__views.__alloyId6727);
    $.__views.__alloyId6728 = Ti.UI.createView({
        id: "__alloyId6728"
    });
    $.__views.__alloyId6728 && $.addTopLevelView($.__views.__alloyId6728);
    $.__views.__alloyId6729 = Ti.UI.createView({
        id: "__alloyId6729"
    });
    $.__views.__alloyId6728.add($.__views.__alloyId6729);
    $.__views.__alloyId6730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6730"
    });
    $.__views.__alloyId6729.add($.__views.__alloyId6730);
    $.__views.__alloyId6731 = Ti.UI.createView({
        id: "__alloyId6731"
    });
    $.__views.__alloyId6731 && $.addTopLevelView($.__views.__alloyId6731);
    $.__views.__alloyId6732 = Ti.UI.createView({
        id: "__alloyId6732"
    });
    $.__views.__alloyId6731.add($.__views.__alloyId6732);
    $.__views.__alloyId6733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6733"
    });
    $.__views.__alloyId6732.add($.__views.__alloyId6733);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;