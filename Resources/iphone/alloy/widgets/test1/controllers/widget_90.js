function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_90";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_90 = Ti.UI.createView({
        id: "widget_90"
    });
    $.__views.widget_90 && $.addTopLevelView($.__views.widget_90);
    $.__views.__alloyId23166 = Ti.UI.createView({
        id: "__alloyId23166"
    });
    $.__views.widget_90.add($.__views.__alloyId23166);
    $.__views.__alloyId23167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23167"
    });
    $.__views.__alloyId23166.add($.__views.__alloyId23167);
    $.__views.__alloyId23168 = Ti.UI.createView({
        id: "__alloyId23168"
    });
    $.__views.__alloyId23168 && $.addTopLevelView($.__views.__alloyId23168);
    $.__views.__alloyId23169 = Ti.UI.createView({
        id: "__alloyId23169"
    });
    $.__views.__alloyId23168.add($.__views.__alloyId23169);
    $.__views.__alloyId23170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23170"
    });
    $.__views.__alloyId23169.add($.__views.__alloyId23170);
    $.__views.__alloyId23171 = Ti.UI.createView({
        id: "__alloyId23171"
    });
    $.__views.__alloyId23171 && $.addTopLevelView($.__views.__alloyId23171);
    $.__views.__alloyId23172 = Ti.UI.createView({
        id: "__alloyId23172"
    });
    $.__views.__alloyId23171.add($.__views.__alloyId23172);
    $.__views.__alloyId23173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23173"
    });
    $.__views.__alloyId23172.add($.__views.__alloyId23173);
    $.__views.__alloyId23174 = Ti.UI.createView({
        id: "__alloyId23174"
    });
    $.__views.__alloyId23174 && $.addTopLevelView($.__views.__alloyId23174);
    $.__views.__alloyId23175 = Ti.UI.createView({
        id: "__alloyId23175"
    });
    $.__views.__alloyId23174.add($.__views.__alloyId23175);
    $.__views.__alloyId23176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23176"
    });
    $.__views.__alloyId23175.add($.__views.__alloyId23176);
    $.__views.__alloyId23177 = Ti.UI.createView({
        id: "__alloyId23177"
    });
    $.__views.__alloyId23177 && $.addTopLevelView($.__views.__alloyId23177);
    $.__views.__alloyId23178 = Ti.UI.createView({
        id: "__alloyId23178"
    });
    $.__views.__alloyId23177.add($.__views.__alloyId23178);
    $.__views.__alloyId23179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23179"
    });
    $.__views.__alloyId23178.add($.__views.__alloyId23179);
    $.__views.__alloyId23180 = Ti.UI.createView({
        id: "__alloyId23180"
    });
    $.__views.__alloyId23180 && $.addTopLevelView($.__views.__alloyId23180);
    $.__views.__alloyId23181 = Ti.UI.createView({
        id: "__alloyId23181"
    });
    $.__views.__alloyId23180.add($.__views.__alloyId23181);
    $.__views.__alloyId23182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23182"
    });
    $.__views.__alloyId23181.add($.__views.__alloyId23182);
    $.__views.__alloyId23183 = Ti.UI.createView({
        id: "__alloyId23183"
    });
    $.__views.__alloyId23183 && $.addTopLevelView($.__views.__alloyId23183);
    $.__views.__alloyId23184 = Ti.UI.createView({
        id: "__alloyId23184"
    });
    $.__views.__alloyId23183.add($.__views.__alloyId23184);
    $.__views.__alloyId23185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23185"
    });
    $.__views.__alloyId23184.add($.__views.__alloyId23185);
    $.__views.__alloyId23186 = Ti.UI.createView({
        id: "__alloyId23186"
    });
    $.__views.__alloyId23186 && $.addTopLevelView($.__views.__alloyId23186);
    $.__views.__alloyId23187 = Ti.UI.createView({
        id: "__alloyId23187"
    });
    $.__views.__alloyId23186.add($.__views.__alloyId23187);
    $.__views.__alloyId23188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23188"
    });
    $.__views.__alloyId23187.add($.__views.__alloyId23188);
    $.__views.__alloyId23189 = Ti.UI.createView({
        id: "__alloyId23189"
    });
    $.__views.__alloyId23189 && $.addTopLevelView($.__views.__alloyId23189);
    $.__views.__alloyId23190 = Ti.UI.createView({
        id: "__alloyId23190"
    });
    $.__views.__alloyId23189.add($.__views.__alloyId23190);
    $.__views.__alloyId23191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23191"
    });
    $.__views.__alloyId23190.add($.__views.__alloyId23191);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;