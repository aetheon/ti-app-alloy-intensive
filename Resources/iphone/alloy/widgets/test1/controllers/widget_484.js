function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_484";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_484 = Ti.UI.createView({
        id: "widget_484"
    });
    $.__views.widget_484 && $.addTopLevelView($.__views.widget_484);
    $.__views.__alloyId11154 = Ti.UI.createView({
        id: "__alloyId11154"
    });
    $.__views.widget_484.add($.__views.__alloyId11154);
    $.__views.__alloyId11155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11155"
    });
    $.__views.__alloyId11154.add($.__views.__alloyId11155);
    $.__views.__alloyId11156 = Ti.UI.createView({
        id: "__alloyId11156"
    });
    $.__views.__alloyId11156 && $.addTopLevelView($.__views.__alloyId11156);
    $.__views.__alloyId11157 = Ti.UI.createView({
        id: "__alloyId11157"
    });
    $.__views.__alloyId11156.add($.__views.__alloyId11157);
    $.__views.__alloyId11158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11158"
    });
    $.__views.__alloyId11157.add($.__views.__alloyId11158);
    $.__views.__alloyId11159 = Ti.UI.createView({
        id: "__alloyId11159"
    });
    $.__views.__alloyId11159 && $.addTopLevelView($.__views.__alloyId11159);
    $.__views.__alloyId11160 = Ti.UI.createView({
        id: "__alloyId11160"
    });
    $.__views.__alloyId11159.add($.__views.__alloyId11160);
    $.__views.__alloyId11161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11161"
    });
    $.__views.__alloyId11160.add($.__views.__alloyId11161);
    $.__views.__alloyId11162 = Ti.UI.createView({
        id: "__alloyId11162"
    });
    $.__views.__alloyId11162 && $.addTopLevelView($.__views.__alloyId11162);
    $.__views.__alloyId11163 = Ti.UI.createView({
        id: "__alloyId11163"
    });
    $.__views.__alloyId11162.add($.__views.__alloyId11163);
    $.__views.__alloyId11164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11164"
    });
    $.__views.__alloyId11163.add($.__views.__alloyId11164);
    $.__views.__alloyId11165 = Ti.UI.createView({
        id: "__alloyId11165"
    });
    $.__views.__alloyId11165 && $.addTopLevelView($.__views.__alloyId11165);
    $.__views.__alloyId11166 = Ti.UI.createView({
        id: "__alloyId11166"
    });
    $.__views.__alloyId11165.add($.__views.__alloyId11166);
    $.__views.__alloyId11167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11167"
    });
    $.__views.__alloyId11166.add($.__views.__alloyId11167);
    $.__views.__alloyId11168 = Ti.UI.createView({
        id: "__alloyId11168"
    });
    $.__views.__alloyId11168 && $.addTopLevelView($.__views.__alloyId11168);
    $.__views.__alloyId11169 = Ti.UI.createView({
        id: "__alloyId11169"
    });
    $.__views.__alloyId11168.add($.__views.__alloyId11169);
    $.__views.__alloyId11170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11170"
    });
    $.__views.__alloyId11169.add($.__views.__alloyId11170);
    $.__views.__alloyId11171 = Ti.UI.createView({
        id: "__alloyId11171"
    });
    $.__views.__alloyId11171 && $.addTopLevelView($.__views.__alloyId11171);
    $.__views.__alloyId11172 = Ti.UI.createView({
        id: "__alloyId11172"
    });
    $.__views.__alloyId11171.add($.__views.__alloyId11172);
    $.__views.__alloyId11173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11173"
    });
    $.__views.__alloyId11172.add($.__views.__alloyId11173);
    $.__views.__alloyId11174 = Ti.UI.createView({
        id: "__alloyId11174"
    });
    $.__views.__alloyId11174 && $.addTopLevelView($.__views.__alloyId11174);
    $.__views.__alloyId11175 = Ti.UI.createView({
        id: "__alloyId11175"
    });
    $.__views.__alloyId11174.add($.__views.__alloyId11175);
    $.__views.__alloyId11176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11176"
    });
    $.__views.__alloyId11175.add($.__views.__alloyId11176);
    $.__views.__alloyId11177 = Ti.UI.createView({
        id: "__alloyId11177"
    });
    $.__views.__alloyId11177 && $.addTopLevelView($.__views.__alloyId11177);
    $.__views.__alloyId11178 = Ti.UI.createView({
        id: "__alloyId11178"
    });
    $.__views.__alloyId11177.add($.__views.__alloyId11178);
    $.__views.__alloyId11179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11179"
    });
    $.__views.__alloyId11178.add($.__views.__alloyId11179);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;