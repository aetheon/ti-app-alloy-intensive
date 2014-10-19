function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_658";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_658 = Ti.UI.createView({
        id: "widget_658"
    });
    $.__views.widget_658 && $.addTopLevelView($.__views.widget_658);
    $.__views.__alloyId16172 = Ti.UI.createView({
        id: "__alloyId16172"
    });
    $.__views.widget_658.add($.__views.__alloyId16172);
    $.__views.__alloyId16173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16173"
    });
    $.__views.__alloyId16172.add($.__views.__alloyId16173);
    $.__views.__alloyId16174 = Ti.UI.createView({
        id: "__alloyId16174"
    });
    $.__views.__alloyId16174 && $.addTopLevelView($.__views.__alloyId16174);
    $.__views.__alloyId16175 = Ti.UI.createView({
        id: "__alloyId16175"
    });
    $.__views.__alloyId16174.add($.__views.__alloyId16175);
    $.__views.__alloyId16176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16176"
    });
    $.__views.__alloyId16175.add($.__views.__alloyId16176);
    $.__views.__alloyId16177 = Ti.UI.createView({
        id: "__alloyId16177"
    });
    $.__views.__alloyId16177 && $.addTopLevelView($.__views.__alloyId16177);
    $.__views.__alloyId16178 = Ti.UI.createView({
        id: "__alloyId16178"
    });
    $.__views.__alloyId16177.add($.__views.__alloyId16178);
    $.__views.__alloyId16179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16179"
    });
    $.__views.__alloyId16178.add($.__views.__alloyId16179);
    $.__views.__alloyId16180 = Ti.UI.createView({
        id: "__alloyId16180"
    });
    $.__views.__alloyId16180 && $.addTopLevelView($.__views.__alloyId16180);
    $.__views.__alloyId16181 = Ti.UI.createView({
        id: "__alloyId16181"
    });
    $.__views.__alloyId16180.add($.__views.__alloyId16181);
    $.__views.__alloyId16182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16182"
    });
    $.__views.__alloyId16181.add($.__views.__alloyId16182);
    $.__views.__alloyId16183 = Ti.UI.createView({
        id: "__alloyId16183"
    });
    $.__views.__alloyId16183 && $.addTopLevelView($.__views.__alloyId16183);
    $.__views.__alloyId16184 = Ti.UI.createView({
        id: "__alloyId16184"
    });
    $.__views.__alloyId16183.add($.__views.__alloyId16184);
    $.__views.__alloyId16185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16185"
    });
    $.__views.__alloyId16184.add($.__views.__alloyId16185);
    $.__views.__alloyId16186 = Ti.UI.createView({
        id: "__alloyId16186"
    });
    $.__views.__alloyId16186 && $.addTopLevelView($.__views.__alloyId16186);
    $.__views.__alloyId16187 = Ti.UI.createView({
        id: "__alloyId16187"
    });
    $.__views.__alloyId16186.add($.__views.__alloyId16187);
    $.__views.__alloyId16188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16188"
    });
    $.__views.__alloyId16187.add($.__views.__alloyId16188);
    $.__views.__alloyId16189 = Ti.UI.createView({
        id: "__alloyId16189"
    });
    $.__views.__alloyId16189 && $.addTopLevelView($.__views.__alloyId16189);
    $.__views.__alloyId16190 = Ti.UI.createView({
        id: "__alloyId16190"
    });
    $.__views.__alloyId16189.add($.__views.__alloyId16190);
    $.__views.__alloyId16191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16191"
    });
    $.__views.__alloyId16190.add($.__views.__alloyId16191);
    $.__views.__alloyId16192 = Ti.UI.createView({
        id: "__alloyId16192"
    });
    $.__views.__alloyId16192 && $.addTopLevelView($.__views.__alloyId16192);
    $.__views.__alloyId16193 = Ti.UI.createView({
        id: "__alloyId16193"
    });
    $.__views.__alloyId16192.add($.__views.__alloyId16193);
    $.__views.__alloyId16194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16194"
    });
    $.__views.__alloyId16193.add($.__views.__alloyId16194);
    $.__views.__alloyId16195 = Ti.UI.createView({
        id: "__alloyId16195"
    });
    $.__views.__alloyId16195 && $.addTopLevelView($.__views.__alloyId16195);
    $.__views.__alloyId16196 = Ti.UI.createView({
        id: "__alloyId16196"
    });
    $.__views.__alloyId16195.add($.__views.__alloyId16196);
    $.__views.__alloyId16197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16197"
    });
    $.__views.__alloyId16196.add($.__views.__alloyId16197);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;