function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_622";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_622 = Ti.UI.createView({
        id: "widget_622"
    });
    $.__views.widget_622 && $.addTopLevelView($.__views.widget_622);
    $.__views.__alloyId15158 = Ti.UI.createView({
        id: "__alloyId15158"
    });
    $.__views.widget_622.add($.__views.__alloyId15158);
    $.__views.__alloyId15159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15159"
    });
    $.__views.__alloyId15158.add($.__views.__alloyId15159);
    $.__views.__alloyId15160 = Ti.UI.createView({
        id: "__alloyId15160"
    });
    $.__views.__alloyId15160 && $.addTopLevelView($.__views.__alloyId15160);
    $.__views.__alloyId15161 = Ti.UI.createView({
        id: "__alloyId15161"
    });
    $.__views.__alloyId15160.add($.__views.__alloyId15161);
    $.__views.__alloyId15162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15162"
    });
    $.__views.__alloyId15161.add($.__views.__alloyId15162);
    $.__views.__alloyId15163 = Ti.UI.createView({
        id: "__alloyId15163"
    });
    $.__views.__alloyId15163 && $.addTopLevelView($.__views.__alloyId15163);
    $.__views.__alloyId15164 = Ti.UI.createView({
        id: "__alloyId15164"
    });
    $.__views.__alloyId15163.add($.__views.__alloyId15164);
    $.__views.__alloyId15165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15165"
    });
    $.__views.__alloyId15164.add($.__views.__alloyId15165);
    $.__views.__alloyId15166 = Ti.UI.createView({
        id: "__alloyId15166"
    });
    $.__views.__alloyId15166 && $.addTopLevelView($.__views.__alloyId15166);
    $.__views.__alloyId15167 = Ti.UI.createView({
        id: "__alloyId15167"
    });
    $.__views.__alloyId15166.add($.__views.__alloyId15167);
    $.__views.__alloyId15168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15168"
    });
    $.__views.__alloyId15167.add($.__views.__alloyId15168);
    $.__views.__alloyId15169 = Ti.UI.createView({
        id: "__alloyId15169"
    });
    $.__views.__alloyId15169 && $.addTopLevelView($.__views.__alloyId15169);
    $.__views.__alloyId15170 = Ti.UI.createView({
        id: "__alloyId15170"
    });
    $.__views.__alloyId15169.add($.__views.__alloyId15170);
    $.__views.__alloyId15171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15171"
    });
    $.__views.__alloyId15170.add($.__views.__alloyId15171);
    $.__views.__alloyId15172 = Ti.UI.createView({
        id: "__alloyId15172"
    });
    $.__views.__alloyId15172 && $.addTopLevelView($.__views.__alloyId15172);
    $.__views.__alloyId15173 = Ti.UI.createView({
        id: "__alloyId15173"
    });
    $.__views.__alloyId15172.add($.__views.__alloyId15173);
    $.__views.__alloyId15174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15174"
    });
    $.__views.__alloyId15173.add($.__views.__alloyId15174);
    $.__views.__alloyId15175 = Ti.UI.createView({
        id: "__alloyId15175"
    });
    $.__views.__alloyId15175 && $.addTopLevelView($.__views.__alloyId15175);
    $.__views.__alloyId15176 = Ti.UI.createView({
        id: "__alloyId15176"
    });
    $.__views.__alloyId15175.add($.__views.__alloyId15176);
    $.__views.__alloyId15177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15177"
    });
    $.__views.__alloyId15176.add($.__views.__alloyId15177);
    $.__views.__alloyId15178 = Ti.UI.createView({
        id: "__alloyId15178"
    });
    $.__views.__alloyId15178 && $.addTopLevelView($.__views.__alloyId15178);
    $.__views.__alloyId15179 = Ti.UI.createView({
        id: "__alloyId15179"
    });
    $.__views.__alloyId15178.add($.__views.__alloyId15179);
    $.__views.__alloyId15180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15180"
    });
    $.__views.__alloyId15179.add($.__views.__alloyId15180);
    $.__views.__alloyId15181 = Ti.UI.createView({
        id: "__alloyId15181"
    });
    $.__views.__alloyId15181 && $.addTopLevelView($.__views.__alloyId15181);
    $.__views.__alloyId15182 = Ti.UI.createView({
        id: "__alloyId15182"
    });
    $.__views.__alloyId15181.add($.__views.__alloyId15182);
    $.__views.__alloyId15183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15183"
    });
    $.__views.__alloyId15182.add($.__views.__alloyId15183);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;