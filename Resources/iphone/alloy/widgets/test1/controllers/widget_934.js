function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_934";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_934 = Ti.UI.createView({
        id: "widget_934"
    });
    $.__views.widget_934 && $.addTopLevelView($.__views.widget_934);
    $.__views.__alloyId24154 = Ti.UI.createView({
        id: "__alloyId24154"
    });
    $.__views.widget_934.add($.__views.__alloyId24154);
    $.__views.__alloyId24155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24155"
    });
    $.__views.__alloyId24154.add($.__views.__alloyId24155);
    $.__views.__alloyId24156 = Ti.UI.createView({
        id: "__alloyId24156"
    });
    $.__views.__alloyId24156 && $.addTopLevelView($.__views.__alloyId24156);
    $.__views.__alloyId24157 = Ti.UI.createView({
        id: "__alloyId24157"
    });
    $.__views.__alloyId24156.add($.__views.__alloyId24157);
    $.__views.__alloyId24158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24158"
    });
    $.__views.__alloyId24157.add($.__views.__alloyId24158);
    $.__views.__alloyId24159 = Ti.UI.createView({
        id: "__alloyId24159"
    });
    $.__views.__alloyId24159 && $.addTopLevelView($.__views.__alloyId24159);
    $.__views.__alloyId24160 = Ti.UI.createView({
        id: "__alloyId24160"
    });
    $.__views.__alloyId24159.add($.__views.__alloyId24160);
    $.__views.__alloyId24161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24161"
    });
    $.__views.__alloyId24160.add($.__views.__alloyId24161);
    $.__views.__alloyId24162 = Ti.UI.createView({
        id: "__alloyId24162"
    });
    $.__views.__alloyId24162 && $.addTopLevelView($.__views.__alloyId24162);
    $.__views.__alloyId24163 = Ti.UI.createView({
        id: "__alloyId24163"
    });
    $.__views.__alloyId24162.add($.__views.__alloyId24163);
    $.__views.__alloyId24164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24164"
    });
    $.__views.__alloyId24163.add($.__views.__alloyId24164);
    $.__views.__alloyId24165 = Ti.UI.createView({
        id: "__alloyId24165"
    });
    $.__views.__alloyId24165 && $.addTopLevelView($.__views.__alloyId24165);
    $.__views.__alloyId24166 = Ti.UI.createView({
        id: "__alloyId24166"
    });
    $.__views.__alloyId24165.add($.__views.__alloyId24166);
    $.__views.__alloyId24167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24167"
    });
    $.__views.__alloyId24166.add($.__views.__alloyId24167);
    $.__views.__alloyId24168 = Ti.UI.createView({
        id: "__alloyId24168"
    });
    $.__views.__alloyId24168 && $.addTopLevelView($.__views.__alloyId24168);
    $.__views.__alloyId24169 = Ti.UI.createView({
        id: "__alloyId24169"
    });
    $.__views.__alloyId24168.add($.__views.__alloyId24169);
    $.__views.__alloyId24170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24170"
    });
    $.__views.__alloyId24169.add($.__views.__alloyId24170);
    $.__views.__alloyId24171 = Ti.UI.createView({
        id: "__alloyId24171"
    });
    $.__views.__alloyId24171 && $.addTopLevelView($.__views.__alloyId24171);
    $.__views.__alloyId24172 = Ti.UI.createView({
        id: "__alloyId24172"
    });
    $.__views.__alloyId24171.add($.__views.__alloyId24172);
    $.__views.__alloyId24173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24173"
    });
    $.__views.__alloyId24172.add($.__views.__alloyId24173);
    $.__views.__alloyId24174 = Ti.UI.createView({
        id: "__alloyId24174"
    });
    $.__views.__alloyId24174 && $.addTopLevelView($.__views.__alloyId24174);
    $.__views.__alloyId24175 = Ti.UI.createView({
        id: "__alloyId24175"
    });
    $.__views.__alloyId24174.add($.__views.__alloyId24175);
    $.__views.__alloyId24176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24176"
    });
    $.__views.__alloyId24175.add($.__views.__alloyId24176);
    $.__views.__alloyId24177 = Ti.UI.createView({
        id: "__alloyId24177"
    });
    $.__views.__alloyId24177 && $.addTopLevelView($.__views.__alloyId24177);
    $.__views.__alloyId24178 = Ti.UI.createView({
        id: "__alloyId24178"
    });
    $.__views.__alloyId24177.add($.__views.__alloyId24178);
    $.__views.__alloyId24179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24179"
    });
    $.__views.__alloyId24178.add($.__views.__alloyId24179);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;