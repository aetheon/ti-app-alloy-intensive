function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_414";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_414 = Ti.UI.createView({
        id: "widget_414"
    });
    $.__views.widget_414 && $.addTopLevelView($.__views.widget_414);
    $.__views.__alloyId9152 = Ti.UI.createView({
        id: "__alloyId9152"
    });
    $.__views.widget_414.add($.__views.__alloyId9152);
    $.__views.__alloyId9153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9153"
    });
    $.__views.__alloyId9152.add($.__views.__alloyId9153);
    $.__views.__alloyId9154 = Ti.UI.createView({
        id: "__alloyId9154"
    });
    $.__views.__alloyId9154 && $.addTopLevelView($.__views.__alloyId9154);
    $.__views.__alloyId9155 = Ti.UI.createView({
        id: "__alloyId9155"
    });
    $.__views.__alloyId9154.add($.__views.__alloyId9155);
    $.__views.__alloyId9156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9156"
    });
    $.__views.__alloyId9155.add($.__views.__alloyId9156);
    $.__views.__alloyId9157 = Ti.UI.createView({
        id: "__alloyId9157"
    });
    $.__views.__alloyId9157 && $.addTopLevelView($.__views.__alloyId9157);
    $.__views.__alloyId9158 = Ti.UI.createView({
        id: "__alloyId9158"
    });
    $.__views.__alloyId9157.add($.__views.__alloyId9158);
    $.__views.__alloyId9159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9159"
    });
    $.__views.__alloyId9158.add($.__views.__alloyId9159);
    $.__views.__alloyId9160 = Ti.UI.createView({
        id: "__alloyId9160"
    });
    $.__views.__alloyId9160 && $.addTopLevelView($.__views.__alloyId9160);
    $.__views.__alloyId9161 = Ti.UI.createView({
        id: "__alloyId9161"
    });
    $.__views.__alloyId9160.add($.__views.__alloyId9161);
    $.__views.__alloyId9162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9162"
    });
    $.__views.__alloyId9161.add($.__views.__alloyId9162);
    $.__views.__alloyId9163 = Ti.UI.createView({
        id: "__alloyId9163"
    });
    $.__views.__alloyId9163 && $.addTopLevelView($.__views.__alloyId9163);
    $.__views.__alloyId9164 = Ti.UI.createView({
        id: "__alloyId9164"
    });
    $.__views.__alloyId9163.add($.__views.__alloyId9164);
    $.__views.__alloyId9165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9165"
    });
    $.__views.__alloyId9164.add($.__views.__alloyId9165);
    $.__views.__alloyId9166 = Ti.UI.createView({
        id: "__alloyId9166"
    });
    $.__views.__alloyId9166 && $.addTopLevelView($.__views.__alloyId9166);
    $.__views.__alloyId9167 = Ti.UI.createView({
        id: "__alloyId9167"
    });
    $.__views.__alloyId9166.add($.__views.__alloyId9167);
    $.__views.__alloyId9168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9168"
    });
    $.__views.__alloyId9167.add($.__views.__alloyId9168);
    $.__views.__alloyId9169 = Ti.UI.createView({
        id: "__alloyId9169"
    });
    $.__views.__alloyId9169 && $.addTopLevelView($.__views.__alloyId9169);
    $.__views.__alloyId9170 = Ti.UI.createView({
        id: "__alloyId9170"
    });
    $.__views.__alloyId9169.add($.__views.__alloyId9170);
    $.__views.__alloyId9171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9171"
    });
    $.__views.__alloyId9170.add($.__views.__alloyId9171);
    $.__views.__alloyId9172 = Ti.UI.createView({
        id: "__alloyId9172"
    });
    $.__views.__alloyId9172 && $.addTopLevelView($.__views.__alloyId9172);
    $.__views.__alloyId9173 = Ti.UI.createView({
        id: "__alloyId9173"
    });
    $.__views.__alloyId9172.add($.__views.__alloyId9173);
    $.__views.__alloyId9174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9174"
    });
    $.__views.__alloyId9173.add($.__views.__alloyId9174);
    $.__views.__alloyId9175 = Ti.UI.createView({
        id: "__alloyId9175"
    });
    $.__views.__alloyId9175 && $.addTopLevelView($.__views.__alloyId9175);
    $.__views.__alloyId9176 = Ti.UI.createView({
        id: "__alloyId9176"
    });
    $.__views.__alloyId9175.add($.__views.__alloyId9176);
    $.__views.__alloyId9177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9177"
    });
    $.__views.__alloyId9176.add($.__views.__alloyId9177);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;