function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_969";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_969 = Ti.UI.createView({
        id: "widget_969"
    });
    $.__views.widget_969 && $.addTopLevelView($.__views.widget_969);
    $.__views.__alloyId25142 = Ti.UI.createView({
        id: "__alloyId25142"
    });
    $.__views.widget_969.add($.__views.__alloyId25142);
    $.__views.__alloyId25143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25143"
    });
    $.__views.__alloyId25142.add($.__views.__alloyId25143);
    $.__views.__alloyId25144 = Ti.UI.createView({
        id: "__alloyId25144"
    });
    $.__views.__alloyId25144 && $.addTopLevelView($.__views.__alloyId25144);
    $.__views.__alloyId25145 = Ti.UI.createView({
        id: "__alloyId25145"
    });
    $.__views.__alloyId25144.add($.__views.__alloyId25145);
    $.__views.__alloyId25146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25146"
    });
    $.__views.__alloyId25145.add($.__views.__alloyId25146);
    $.__views.__alloyId25147 = Ti.UI.createView({
        id: "__alloyId25147"
    });
    $.__views.__alloyId25147 && $.addTopLevelView($.__views.__alloyId25147);
    $.__views.__alloyId25148 = Ti.UI.createView({
        id: "__alloyId25148"
    });
    $.__views.__alloyId25147.add($.__views.__alloyId25148);
    $.__views.__alloyId25149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25149"
    });
    $.__views.__alloyId25148.add($.__views.__alloyId25149);
    $.__views.__alloyId25150 = Ti.UI.createView({
        id: "__alloyId25150"
    });
    $.__views.__alloyId25150 && $.addTopLevelView($.__views.__alloyId25150);
    $.__views.__alloyId25151 = Ti.UI.createView({
        id: "__alloyId25151"
    });
    $.__views.__alloyId25150.add($.__views.__alloyId25151);
    $.__views.__alloyId25152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25152"
    });
    $.__views.__alloyId25151.add($.__views.__alloyId25152);
    $.__views.__alloyId25153 = Ti.UI.createView({
        id: "__alloyId25153"
    });
    $.__views.__alloyId25153 && $.addTopLevelView($.__views.__alloyId25153);
    $.__views.__alloyId25154 = Ti.UI.createView({
        id: "__alloyId25154"
    });
    $.__views.__alloyId25153.add($.__views.__alloyId25154);
    $.__views.__alloyId25155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25155"
    });
    $.__views.__alloyId25154.add($.__views.__alloyId25155);
    $.__views.__alloyId25156 = Ti.UI.createView({
        id: "__alloyId25156"
    });
    $.__views.__alloyId25156 && $.addTopLevelView($.__views.__alloyId25156);
    $.__views.__alloyId25157 = Ti.UI.createView({
        id: "__alloyId25157"
    });
    $.__views.__alloyId25156.add($.__views.__alloyId25157);
    $.__views.__alloyId25158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25158"
    });
    $.__views.__alloyId25157.add($.__views.__alloyId25158);
    $.__views.__alloyId25159 = Ti.UI.createView({
        id: "__alloyId25159"
    });
    $.__views.__alloyId25159 && $.addTopLevelView($.__views.__alloyId25159);
    $.__views.__alloyId25160 = Ti.UI.createView({
        id: "__alloyId25160"
    });
    $.__views.__alloyId25159.add($.__views.__alloyId25160);
    $.__views.__alloyId25161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25161"
    });
    $.__views.__alloyId25160.add($.__views.__alloyId25161);
    $.__views.__alloyId25162 = Ti.UI.createView({
        id: "__alloyId25162"
    });
    $.__views.__alloyId25162 && $.addTopLevelView($.__views.__alloyId25162);
    $.__views.__alloyId25163 = Ti.UI.createView({
        id: "__alloyId25163"
    });
    $.__views.__alloyId25162.add($.__views.__alloyId25163);
    $.__views.__alloyId25164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25164"
    });
    $.__views.__alloyId25163.add($.__views.__alloyId25164);
    $.__views.__alloyId25165 = Ti.UI.createView({
        id: "__alloyId25165"
    });
    $.__views.__alloyId25165 && $.addTopLevelView($.__views.__alloyId25165);
    $.__views.__alloyId25166 = Ti.UI.createView({
        id: "__alloyId25166"
    });
    $.__views.__alloyId25165.add($.__views.__alloyId25166);
    $.__views.__alloyId25167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25167"
    });
    $.__views.__alloyId25166.add($.__views.__alloyId25167);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;