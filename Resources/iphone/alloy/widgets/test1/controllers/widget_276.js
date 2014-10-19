function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_276";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_276 = Ti.UI.createView({
        id: "widget_276"
    });
    $.__views.widget_276 && $.addTopLevelView($.__views.widget_276);
    $.__views.__alloyId5148 = Ti.UI.createView({
        id: "__alloyId5148"
    });
    $.__views.widget_276.add($.__views.__alloyId5148);
    $.__views.__alloyId5149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5149"
    });
    $.__views.__alloyId5148.add($.__views.__alloyId5149);
    $.__views.__alloyId5150 = Ti.UI.createView({
        id: "__alloyId5150"
    });
    $.__views.__alloyId5150 && $.addTopLevelView($.__views.__alloyId5150);
    $.__views.__alloyId5151 = Ti.UI.createView({
        id: "__alloyId5151"
    });
    $.__views.__alloyId5150.add($.__views.__alloyId5151);
    $.__views.__alloyId5152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5152"
    });
    $.__views.__alloyId5151.add($.__views.__alloyId5152);
    $.__views.__alloyId5153 = Ti.UI.createView({
        id: "__alloyId5153"
    });
    $.__views.__alloyId5153 && $.addTopLevelView($.__views.__alloyId5153);
    $.__views.__alloyId5154 = Ti.UI.createView({
        id: "__alloyId5154"
    });
    $.__views.__alloyId5153.add($.__views.__alloyId5154);
    $.__views.__alloyId5155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5155"
    });
    $.__views.__alloyId5154.add($.__views.__alloyId5155);
    $.__views.__alloyId5156 = Ti.UI.createView({
        id: "__alloyId5156"
    });
    $.__views.__alloyId5156 && $.addTopLevelView($.__views.__alloyId5156);
    $.__views.__alloyId5157 = Ti.UI.createView({
        id: "__alloyId5157"
    });
    $.__views.__alloyId5156.add($.__views.__alloyId5157);
    $.__views.__alloyId5158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5158"
    });
    $.__views.__alloyId5157.add($.__views.__alloyId5158);
    $.__views.__alloyId5159 = Ti.UI.createView({
        id: "__alloyId5159"
    });
    $.__views.__alloyId5159 && $.addTopLevelView($.__views.__alloyId5159);
    $.__views.__alloyId5160 = Ti.UI.createView({
        id: "__alloyId5160"
    });
    $.__views.__alloyId5159.add($.__views.__alloyId5160);
    $.__views.__alloyId5161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5161"
    });
    $.__views.__alloyId5160.add($.__views.__alloyId5161);
    $.__views.__alloyId5162 = Ti.UI.createView({
        id: "__alloyId5162"
    });
    $.__views.__alloyId5162 && $.addTopLevelView($.__views.__alloyId5162);
    $.__views.__alloyId5163 = Ti.UI.createView({
        id: "__alloyId5163"
    });
    $.__views.__alloyId5162.add($.__views.__alloyId5163);
    $.__views.__alloyId5164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5164"
    });
    $.__views.__alloyId5163.add($.__views.__alloyId5164);
    $.__views.__alloyId5165 = Ti.UI.createView({
        id: "__alloyId5165"
    });
    $.__views.__alloyId5165 && $.addTopLevelView($.__views.__alloyId5165);
    $.__views.__alloyId5166 = Ti.UI.createView({
        id: "__alloyId5166"
    });
    $.__views.__alloyId5165.add($.__views.__alloyId5166);
    $.__views.__alloyId5167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5167"
    });
    $.__views.__alloyId5166.add($.__views.__alloyId5167);
    $.__views.__alloyId5168 = Ti.UI.createView({
        id: "__alloyId5168"
    });
    $.__views.__alloyId5168 && $.addTopLevelView($.__views.__alloyId5168);
    $.__views.__alloyId5169 = Ti.UI.createView({
        id: "__alloyId5169"
    });
    $.__views.__alloyId5168.add($.__views.__alloyId5169);
    $.__views.__alloyId5170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5170"
    });
    $.__views.__alloyId5169.add($.__views.__alloyId5170);
    $.__views.__alloyId5171 = Ti.UI.createView({
        id: "__alloyId5171"
    });
    $.__views.__alloyId5171 && $.addTopLevelView($.__views.__alloyId5171);
    $.__views.__alloyId5172 = Ti.UI.createView({
        id: "__alloyId5172"
    });
    $.__views.__alloyId5171.add($.__views.__alloyId5172);
    $.__views.__alloyId5173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5173"
    });
    $.__views.__alloyId5172.add($.__views.__alloyId5173);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;