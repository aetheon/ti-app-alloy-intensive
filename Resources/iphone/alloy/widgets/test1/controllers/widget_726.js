function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_726";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_726 = Ti.UI.createView({
        id: "widget_726"
    });
    $.__views.widget_726 && $.addTopLevelView($.__views.widget_726);
    $.__views.__alloyId18148 = Ti.UI.createView({
        id: "__alloyId18148"
    });
    $.__views.widget_726.add($.__views.__alloyId18148);
    $.__views.__alloyId18149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18149"
    });
    $.__views.__alloyId18148.add($.__views.__alloyId18149);
    $.__views.__alloyId18150 = Ti.UI.createView({
        id: "__alloyId18150"
    });
    $.__views.__alloyId18150 && $.addTopLevelView($.__views.__alloyId18150);
    $.__views.__alloyId18151 = Ti.UI.createView({
        id: "__alloyId18151"
    });
    $.__views.__alloyId18150.add($.__views.__alloyId18151);
    $.__views.__alloyId18152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18152"
    });
    $.__views.__alloyId18151.add($.__views.__alloyId18152);
    $.__views.__alloyId18153 = Ti.UI.createView({
        id: "__alloyId18153"
    });
    $.__views.__alloyId18153 && $.addTopLevelView($.__views.__alloyId18153);
    $.__views.__alloyId18154 = Ti.UI.createView({
        id: "__alloyId18154"
    });
    $.__views.__alloyId18153.add($.__views.__alloyId18154);
    $.__views.__alloyId18155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18155"
    });
    $.__views.__alloyId18154.add($.__views.__alloyId18155);
    $.__views.__alloyId18156 = Ti.UI.createView({
        id: "__alloyId18156"
    });
    $.__views.__alloyId18156 && $.addTopLevelView($.__views.__alloyId18156);
    $.__views.__alloyId18157 = Ti.UI.createView({
        id: "__alloyId18157"
    });
    $.__views.__alloyId18156.add($.__views.__alloyId18157);
    $.__views.__alloyId18158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18158"
    });
    $.__views.__alloyId18157.add($.__views.__alloyId18158);
    $.__views.__alloyId18159 = Ti.UI.createView({
        id: "__alloyId18159"
    });
    $.__views.__alloyId18159 && $.addTopLevelView($.__views.__alloyId18159);
    $.__views.__alloyId18160 = Ti.UI.createView({
        id: "__alloyId18160"
    });
    $.__views.__alloyId18159.add($.__views.__alloyId18160);
    $.__views.__alloyId18161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18161"
    });
    $.__views.__alloyId18160.add($.__views.__alloyId18161);
    $.__views.__alloyId18162 = Ti.UI.createView({
        id: "__alloyId18162"
    });
    $.__views.__alloyId18162 && $.addTopLevelView($.__views.__alloyId18162);
    $.__views.__alloyId18163 = Ti.UI.createView({
        id: "__alloyId18163"
    });
    $.__views.__alloyId18162.add($.__views.__alloyId18163);
    $.__views.__alloyId18164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18164"
    });
    $.__views.__alloyId18163.add($.__views.__alloyId18164);
    $.__views.__alloyId18165 = Ti.UI.createView({
        id: "__alloyId18165"
    });
    $.__views.__alloyId18165 && $.addTopLevelView($.__views.__alloyId18165);
    $.__views.__alloyId18166 = Ti.UI.createView({
        id: "__alloyId18166"
    });
    $.__views.__alloyId18165.add($.__views.__alloyId18166);
    $.__views.__alloyId18167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18167"
    });
    $.__views.__alloyId18166.add($.__views.__alloyId18167);
    $.__views.__alloyId18168 = Ti.UI.createView({
        id: "__alloyId18168"
    });
    $.__views.__alloyId18168 && $.addTopLevelView($.__views.__alloyId18168);
    $.__views.__alloyId18169 = Ti.UI.createView({
        id: "__alloyId18169"
    });
    $.__views.__alloyId18168.add($.__views.__alloyId18169);
    $.__views.__alloyId18170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18170"
    });
    $.__views.__alloyId18169.add($.__views.__alloyId18170);
    $.__views.__alloyId18171 = Ti.UI.createView({
        id: "__alloyId18171"
    });
    $.__views.__alloyId18171 && $.addTopLevelView($.__views.__alloyId18171);
    $.__views.__alloyId18172 = Ti.UI.createView({
        id: "__alloyId18172"
    });
    $.__views.__alloyId18171.add($.__views.__alloyId18172);
    $.__views.__alloyId18173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18173"
    });
    $.__views.__alloyId18172.add($.__views.__alloyId18173);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;