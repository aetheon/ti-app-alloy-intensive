function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_207";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_207 = Ti.UI.createView({
        id: "widget_207"
    });
    $.__views.widget_207 && $.addTopLevelView($.__views.widget_207);
    $.__views.__alloyId3172 = Ti.UI.createView({
        id: "__alloyId3172"
    });
    $.__views.widget_207.add($.__views.__alloyId3172);
    $.__views.__alloyId3173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3173"
    });
    $.__views.__alloyId3172.add($.__views.__alloyId3173);
    $.__views.__alloyId3174 = Ti.UI.createView({
        id: "__alloyId3174"
    });
    $.__views.__alloyId3174 && $.addTopLevelView($.__views.__alloyId3174);
    $.__views.__alloyId3175 = Ti.UI.createView({
        id: "__alloyId3175"
    });
    $.__views.__alloyId3174.add($.__views.__alloyId3175);
    $.__views.__alloyId3176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3176"
    });
    $.__views.__alloyId3175.add($.__views.__alloyId3176);
    $.__views.__alloyId3177 = Ti.UI.createView({
        id: "__alloyId3177"
    });
    $.__views.__alloyId3177 && $.addTopLevelView($.__views.__alloyId3177);
    $.__views.__alloyId3178 = Ti.UI.createView({
        id: "__alloyId3178"
    });
    $.__views.__alloyId3177.add($.__views.__alloyId3178);
    $.__views.__alloyId3179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3179"
    });
    $.__views.__alloyId3178.add($.__views.__alloyId3179);
    $.__views.__alloyId3180 = Ti.UI.createView({
        id: "__alloyId3180"
    });
    $.__views.__alloyId3180 && $.addTopLevelView($.__views.__alloyId3180);
    $.__views.__alloyId3181 = Ti.UI.createView({
        id: "__alloyId3181"
    });
    $.__views.__alloyId3180.add($.__views.__alloyId3181);
    $.__views.__alloyId3182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3182"
    });
    $.__views.__alloyId3181.add($.__views.__alloyId3182);
    $.__views.__alloyId3183 = Ti.UI.createView({
        id: "__alloyId3183"
    });
    $.__views.__alloyId3183 && $.addTopLevelView($.__views.__alloyId3183);
    $.__views.__alloyId3184 = Ti.UI.createView({
        id: "__alloyId3184"
    });
    $.__views.__alloyId3183.add($.__views.__alloyId3184);
    $.__views.__alloyId3185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3185"
    });
    $.__views.__alloyId3184.add($.__views.__alloyId3185);
    $.__views.__alloyId3186 = Ti.UI.createView({
        id: "__alloyId3186"
    });
    $.__views.__alloyId3186 && $.addTopLevelView($.__views.__alloyId3186);
    $.__views.__alloyId3187 = Ti.UI.createView({
        id: "__alloyId3187"
    });
    $.__views.__alloyId3186.add($.__views.__alloyId3187);
    $.__views.__alloyId3188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3188"
    });
    $.__views.__alloyId3187.add($.__views.__alloyId3188);
    $.__views.__alloyId3189 = Ti.UI.createView({
        id: "__alloyId3189"
    });
    $.__views.__alloyId3189 && $.addTopLevelView($.__views.__alloyId3189);
    $.__views.__alloyId3190 = Ti.UI.createView({
        id: "__alloyId3190"
    });
    $.__views.__alloyId3189.add($.__views.__alloyId3190);
    $.__views.__alloyId3191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3191"
    });
    $.__views.__alloyId3190.add($.__views.__alloyId3191);
    $.__views.__alloyId3192 = Ti.UI.createView({
        id: "__alloyId3192"
    });
    $.__views.__alloyId3192 && $.addTopLevelView($.__views.__alloyId3192);
    $.__views.__alloyId3193 = Ti.UI.createView({
        id: "__alloyId3193"
    });
    $.__views.__alloyId3192.add($.__views.__alloyId3193);
    $.__views.__alloyId3194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3194"
    });
    $.__views.__alloyId3193.add($.__views.__alloyId3194);
    $.__views.__alloyId3195 = Ti.UI.createView({
        id: "__alloyId3195"
    });
    $.__views.__alloyId3195 && $.addTopLevelView($.__views.__alloyId3195);
    $.__views.__alloyId3196 = Ti.UI.createView({
        id: "__alloyId3196"
    });
    $.__views.__alloyId3195.add($.__views.__alloyId3196);
    $.__views.__alloyId3197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3197"
    });
    $.__views.__alloyId3196.add($.__views.__alloyId3197);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;