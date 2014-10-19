function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_241";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_241 = Ti.UI.createView({
        id: "widget_241"
    });
    $.__views.widget_241 && $.addTopLevelView($.__views.widget_241);
    $.__views.__alloyId4160 = Ti.UI.createView({
        id: "__alloyId4160"
    });
    $.__views.widget_241.add($.__views.__alloyId4160);
    $.__views.__alloyId4161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4161"
    });
    $.__views.__alloyId4160.add($.__views.__alloyId4161);
    $.__views.__alloyId4162 = Ti.UI.createView({
        id: "__alloyId4162"
    });
    $.__views.__alloyId4162 && $.addTopLevelView($.__views.__alloyId4162);
    $.__views.__alloyId4163 = Ti.UI.createView({
        id: "__alloyId4163"
    });
    $.__views.__alloyId4162.add($.__views.__alloyId4163);
    $.__views.__alloyId4164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4164"
    });
    $.__views.__alloyId4163.add($.__views.__alloyId4164);
    $.__views.__alloyId4165 = Ti.UI.createView({
        id: "__alloyId4165"
    });
    $.__views.__alloyId4165 && $.addTopLevelView($.__views.__alloyId4165);
    $.__views.__alloyId4166 = Ti.UI.createView({
        id: "__alloyId4166"
    });
    $.__views.__alloyId4165.add($.__views.__alloyId4166);
    $.__views.__alloyId4167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4167"
    });
    $.__views.__alloyId4166.add($.__views.__alloyId4167);
    $.__views.__alloyId4168 = Ti.UI.createView({
        id: "__alloyId4168"
    });
    $.__views.__alloyId4168 && $.addTopLevelView($.__views.__alloyId4168);
    $.__views.__alloyId4169 = Ti.UI.createView({
        id: "__alloyId4169"
    });
    $.__views.__alloyId4168.add($.__views.__alloyId4169);
    $.__views.__alloyId4170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4170"
    });
    $.__views.__alloyId4169.add($.__views.__alloyId4170);
    $.__views.__alloyId4171 = Ti.UI.createView({
        id: "__alloyId4171"
    });
    $.__views.__alloyId4171 && $.addTopLevelView($.__views.__alloyId4171);
    $.__views.__alloyId4172 = Ti.UI.createView({
        id: "__alloyId4172"
    });
    $.__views.__alloyId4171.add($.__views.__alloyId4172);
    $.__views.__alloyId4173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4173"
    });
    $.__views.__alloyId4172.add($.__views.__alloyId4173);
    $.__views.__alloyId4174 = Ti.UI.createView({
        id: "__alloyId4174"
    });
    $.__views.__alloyId4174 && $.addTopLevelView($.__views.__alloyId4174);
    $.__views.__alloyId4175 = Ti.UI.createView({
        id: "__alloyId4175"
    });
    $.__views.__alloyId4174.add($.__views.__alloyId4175);
    $.__views.__alloyId4176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4176"
    });
    $.__views.__alloyId4175.add($.__views.__alloyId4176);
    $.__views.__alloyId4177 = Ti.UI.createView({
        id: "__alloyId4177"
    });
    $.__views.__alloyId4177 && $.addTopLevelView($.__views.__alloyId4177);
    $.__views.__alloyId4178 = Ti.UI.createView({
        id: "__alloyId4178"
    });
    $.__views.__alloyId4177.add($.__views.__alloyId4178);
    $.__views.__alloyId4179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4179"
    });
    $.__views.__alloyId4178.add($.__views.__alloyId4179);
    $.__views.__alloyId4180 = Ti.UI.createView({
        id: "__alloyId4180"
    });
    $.__views.__alloyId4180 && $.addTopLevelView($.__views.__alloyId4180);
    $.__views.__alloyId4181 = Ti.UI.createView({
        id: "__alloyId4181"
    });
    $.__views.__alloyId4180.add($.__views.__alloyId4181);
    $.__views.__alloyId4182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4182"
    });
    $.__views.__alloyId4181.add($.__views.__alloyId4182);
    $.__views.__alloyId4183 = Ti.UI.createView({
        id: "__alloyId4183"
    });
    $.__views.__alloyId4183 && $.addTopLevelView($.__views.__alloyId4183);
    $.__views.__alloyId4184 = Ti.UI.createView({
        id: "__alloyId4184"
    });
    $.__views.__alloyId4183.add($.__views.__alloyId4184);
    $.__views.__alloyId4185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4185"
    });
    $.__views.__alloyId4184.add($.__views.__alloyId4185);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;