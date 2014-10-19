function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_9";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_9 = Ti.UI.createView({
        id: "widget_9"
    });
    $.__views.widget_9 && $.addTopLevelView($.__views.widget_9);
    $.__views.__alloyId23140 = Ti.UI.createView({
        id: "__alloyId23140"
    });
    $.__views.widget_9.add($.__views.__alloyId23140);
    $.__views.__alloyId23141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23141"
    });
    $.__views.__alloyId23140.add($.__views.__alloyId23141);
    $.__views.__alloyId23142 = Ti.UI.createView({
        id: "__alloyId23142"
    });
    $.__views.__alloyId23142 && $.addTopLevelView($.__views.__alloyId23142);
    $.__views.__alloyId23143 = Ti.UI.createView({
        id: "__alloyId23143"
    });
    $.__views.__alloyId23142.add($.__views.__alloyId23143);
    $.__views.__alloyId23144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23144"
    });
    $.__views.__alloyId23143.add($.__views.__alloyId23144);
    $.__views.__alloyId23145 = Ti.UI.createView({
        id: "__alloyId23145"
    });
    $.__views.__alloyId23145 && $.addTopLevelView($.__views.__alloyId23145);
    $.__views.__alloyId23146 = Ti.UI.createView({
        id: "__alloyId23146"
    });
    $.__views.__alloyId23145.add($.__views.__alloyId23146);
    $.__views.__alloyId23147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23147"
    });
    $.__views.__alloyId23146.add($.__views.__alloyId23147);
    $.__views.__alloyId23148 = Ti.UI.createView({
        id: "__alloyId23148"
    });
    $.__views.__alloyId23148 && $.addTopLevelView($.__views.__alloyId23148);
    $.__views.__alloyId23149 = Ti.UI.createView({
        id: "__alloyId23149"
    });
    $.__views.__alloyId23148.add($.__views.__alloyId23149);
    $.__views.__alloyId23150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23150"
    });
    $.__views.__alloyId23149.add($.__views.__alloyId23150);
    $.__views.__alloyId23151 = Ti.UI.createView({
        id: "__alloyId23151"
    });
    $.__views.__alloyId23151 && $.addTopLevelView($.__views.__alloyId23151);
    $.__views.__alloyId23152 = Ti.UI.createView({
        id: "__alloyId23152"
    });
    $.__views.__alloyId23151.add($.__views.__alloyId23152);
    $.__views.__alloyId23153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23153"
    });
    $.__views.__alloyId23152.add($.__views.__alloyId23153);
    $.__views.__alloyId23154 = Ti.UI.createView({
        id: "__alloyId23154"
    });
    $.__views.__alloyId23154 && $.addTopLevelView($.__views.__alloyId23154);
    $.__views.__alloyId23155 = Ti.UI.createView({
        id: "__alloyId23155"
    });
    $.__views.__alloyId23154.add($.__views.__alloyId23155);
    $.__views.__alloyId23156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23156"
    });
    $.__views.__alloyId23155.add($.__views.__alloyId23156);
    $.__views.__alloyId23157 = Ti.UI.createView({
        id: "__alloyId23157"
    });
    $.__views.__alloyId23157 && $.addTopLevelView($.__views.__alloyId23157);
    $.__views.__alloyId23158 = Ti.UI.createView({
        id: "__alloyId23158"
    });
    $.__views.__alloyId23157.add($.__views.__alloyId23158);
    $.__views.__alloyId23159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23159"
    });
    $.__views.__alloyId23158.add($.__views.__alloyId23159);
    $.__views.__alloyId23160 = Ti.UI.createView({
        id: "__alloyId23160"
    });
    $.__views.__alloyId23160 && $.addTopLevelView($.__views.__alloyId23160);
    $.__views.__alloyId23161 = Ti.UI.createView({
        id: "__alloyId23161"
    });
    $.__views.__alloyId23160.add($.__views.__alloyId23161);
    $.__views.__alloyId23162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23162"
    });
    $.__views.__alloyId23161.add($.__views.__alloyId23162);
    $.__views.__alloyId23163 = Ti.UI.createView({
        id: "__alloyId23163"
    });
    $.__views.__alloyId23163 && $.addTopLevelView($.__views.__alloyId23163);
    $.__views.__alloyId23164 = Ti.UI.createView({
        id: "__alloyId23164"
    });
    $.__views.__alloyId23163.add($.__views.__alloyId23164);
    $.__views.__alloyId23165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23165"
    });
    $.__views.__alloyId23164.add($.__views.__alloyId23165);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;