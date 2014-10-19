function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_45";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_45 = Ti.UI.createView({
        id: "widget_45"
    });
    $.__views.widget_45 && $.addTopLevelView($.__views.widget_45);
    $.__views.__alloyId10166 = Ti.UI.createView({
        id: "__alloyId10166"
    });
    $.__views.widget_45.add($.__views.__alloyId10166);
    $.__views.__alloyId10167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10167"
    });
    $.__views.__alloyId10166.add($.__views.__alloyId10167);
    $.__views.__alloyId10168 = Ti.UI.createView({
        id: "__alloyId10168"
    });
    $.__views.__alloyId10168 && $.addTopLevelView($.__views.__alloyId10168);
    $.__views.__alloyId10169 = Ti.UI.createView({
        id: "__alloyId10169"
    });
    $.__views.__alloyId10168.add($.__views.__alloyId10169);
    $.__views.__alloyId10170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10170"
    });
    $.__views.__alloyId10169.add($.__views.__alloyId10170);
    $.__views.__alloyId10171 = Ti.UI.createView({
        id: "__alloyId10171"
    });
    $.__views.__alloyId10171 && $.addTopLevelView($.__views.__alloyId10171);
    $.__views.__alloyId10172 = Ti.UI.createView({
        id: "__alloyId10172"
    });
    $.__views.__alloyId10171.add($.__views.__alloyId10172);
    $.__views.__alloyId10173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10173"
    });
    $.__views.__alloyId10172.add($.__views.__alloyId10173);
    $.__views.__alloyId10174 = Ti.UI.createView({
        id: "__alloyId10174"
    });
    $.__views.__alloyId10174 && $.addTopLevelView($.__views.__alloyId10174);
    $.__views.__alloyId10175 = Ti.UI.createView({
        id: "__alloyId10175"
    });
    $.__views.__alloyId10174.add($.__views.__alloyId10175);
    $.__views.__alloyId10176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10176"
    });
    $.__views.__alloyId10175.add($.__views.__alloyId10176);
    $.__views.__alloyId10177 = Ti.UI.createView({
        id: "__alloyId10177"
    });
    $.__views.__alloyId10177 && $.addTopLevelView($.__views.__alloyId10177);
    $.__views.__alloyId10178 = Ti.UI.createView({
        id: "__alloyId10178"
    });
    $.__views.__alloyId10177.add($.__views.__alloyId10178);
    $.__views.__alloyId10179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10179"
    });
    $.__views.__alloyId10178.add($.__views.__alloyId10179);
    $.__views.__alloyId10180 = Ti.UI.createView({
        id: "__alloyId10180"
    });
    $.__views.__alloyId10180 && $.addTopLevelView($.__views.__alloyId10180);
    $.__views.__alloyId10181 = Ti.UI.createView({
        id: "__alloyId10181"
    });
    $.__views.__alloyId10180.add($.__views.__alloyId10181);
    $.__views.__alloyId10182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10182"
    });
    $.__views.__alloyId10181.add($.__views.__alloyId10182);
    $.__views.__alloyId10183 = Ti.UI.createView({
        id: "__alloyId10183"
    });
    $.__views.__alloyId10183 && $.addTopLevelView($.__views.__alloyId10183);
    $.__views.__alloyId10184 = Ti.UI.createView({
        id: "__alloyId10184"
    });
    $.__views.__alloyId10183.add($.__views.__alloyId10184);
    $.__views.__alloyId10185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10185"
    });
    $.__views.__alloyId10184.add($.__views.__alloyId10185);
    $.__views.__alloyId10186 = Ti.UI.createView({
        id: "__alloyId10186"
    });
    $.__views.__alloyId10186 && $.addTopLevelView($.__views.__alloyId10186);
    $.__views.__alloyId10187 = Ti.UI.createView({
        id: "__alloyId10187"
    });
    $.__views.__alloyId10186.add($.__views.__alloyId10187);
    $.__views.__alloyId10188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10188"
    });
    $.__views.__alloyId10187.add($.__views.__alloyId10188);
    $.__views.__alloyId10189 = Ti.UI.createView({
        id: "__alloyId10189"
    });
    $.__views.__alloyId10189 && $.addTopLevelView($.__views.__alloyId10189);
    $.__views.__alloyId10190 = Ti.UI.createView({
        id: "__alloyId10190"
    });
    $.__views.__alloyId10189.add($.__views.__alloyId10190);
    $.__views.__alloyId10191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10191"
    });
    $.__views.__alloyId10190.add($.__views.__alloyId10191);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;