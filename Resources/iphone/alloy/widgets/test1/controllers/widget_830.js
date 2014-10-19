function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_830";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_830 = Ti.UI.createView({
        id: "widget_830"
    });
    $.__views.widget_830 && $.addTopLevelView($.__views.widget_830);
    $.__views.__alloyId21164 = Ti.UI.createView({
        id: "__alloyId21164"
    });
    $.__views.widget_830.add($.__views.__alloyId21164);
    $.__views.__alloyId21165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21165"
    });
    $.__views.__alloyId21164.add($.__views.__alloyId21165);
    $.__views.__alloyId21166 = Ti.UI.createView({
        id: "__alloyId21166"
    });
    $.__views.__alloyId21166 && $.addTopLevelView($.__views.__alloyId21166);
    $.__views.__alloyId21167 = Ti.UI.createView({
        id: "__alloyId21167"
    });
    $.__views.__alloyId21166.add($.__views.__alloyId21167);
    $.__views.__alloyId21168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21168"
    });
    $.__views.__alloyId21167.add($.__views.__alloyId21168);
    $.__views.__alloyId21169 = Ti.UI.createView({
        id: "__alloyId21169"
    });
    $.__views.__alloyId21169 && $.addTopLevelView($.__views.__alloyId21169);
    $.__views.__alloyId21170 = Ti.UI.createView({
        id: "__alloyId21170"
    });
    $.__views.__alloyId21169.add($.__views.__alloyId21170);
    $.__views.__alloyId21171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21171"
    });
    $.__views.__alloyId21170.add($.__views.__alloyId21171);
    $.__views.__alloyId21172 = Ti.UI.createView({
        id: "__alloyId21172"
    });
    $.__views.__alloyId21172 && $.addTopLevelView($.__views.__alloyId21172);
    $.__views.__alloyId21173 = Ti.UI.createView({
        id: "__alloyId21173"
    });
    $.__views.__alloyId21172.add($.__views.__alloyId21173);
    $.__views.__alloyId21174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21174"
    });
    $.__views.__alloyId21173.add($.__views.__alloyId21174);
    $.__views.__alloyId21175 = Ti.UI.createView({
        id: "__alloyId21175"
    });
    $.__views.__alloyId21175 && $.addTopLevelView($.__views.__alloyId21175);
    $.__views.__alloyId21176 = Ti.UI.createView({
        id: "__alloyId21176"
    });
    $.__views.__alloyId21175.add($.__views.__alloyId21176);
    $.__views.__alloyId21177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21177"
    });
    $.__views.__alloyId21176.add($.__views.__alloyId21177);
    $.__views.__alloyId21178 = Ti.UI.createView({
        id: "__alloyId21178"
    });
    $.__views.__alloyId21178 && $.addTopLevelView($.__views.__alloyId21178);
    $.__views.__alloyId21179 = Ti.UI.createView({
        id: "__alloyId21179"
    });
    $.__views.__alloyId21178.add($.__views.__alloyId21179);
    $.__views.__alloyId21180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21180"
    });
    $.__views.__alloyId21179.add($.__views.__alloyId21180);
    $.__views.__alloyId21181 = Ti.UI.createView({
        id: "__alloyId21181"
    });
    $.__views.__alloyId21181 && $.addTopLevelView($.__views.__alloyId21181);
    $.__views.__alloyId21182 = Ti.UI.createView({
        id: "__alloyId21182"
    });
    $.__views.__alloyId21181.add($.__views.__alloyId21182);
    $.__views.__alloyId21183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21183"
    });
    $.__views.__alloyId21182.add($.__views.__alloyId21183);
    $.__views.__alloyId21184 = Ti.UI.createView({
        id: "__alloyId21184"
    });
    $.__views.__alloyId21184 && $.addTopLevelView($.__views.__alloyId21184);
    $.__views.__alloyId21185 = Ti.UI.createView({
        id: "__alloyId21185"
    });
    $.__views.__alloyId21184.add($.__views.__alloyId21185);
    $.__views.__alloyId21186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21186"
    });
    $.__views.__alloyId21185.add($.__views.__alloyId21186);
    $.__views.__alloyId21187 = Ti.UI.createView({
        id: "__alloyId21187"
    });
    $.__views.__alloyId21187 && $.addTopLevelView($.__views.__alloyId21187);
    $.__views.__alloyId21188 = Ti.UI.createView({
        id: "__alloyId21188"
    });
    $.__views.__alloyId21187.add($.__views.__alloyId21188);
    $.__views.__alloyId21189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21189"
    });
    $.__views.__alloyId21188.add($.__views.__alloyId21189);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;