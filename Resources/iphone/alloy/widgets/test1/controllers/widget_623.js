function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_623";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_623 = Ti.UI.createView({
        id: "widget_623"
    });
    $.__views.widget_623 && $.addTopLevelView($.__views.widget_623);
    $.__views.__alloyId15184 = Ti.UI.createView({
        id: "__alloyId15184"
    });
    $.__views.widget_623.add($.__views.__alloyId15184);
    $.__views.__alloyId15185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15185"
    });
    $.__views.__alloyId15184.add($.__views.__alloyId15185);
    $.__views.__alloyId15186 = Ti.UI.createView({
        id: "__alloyId15186"
    });
    $.__views.__alloyId15186 && $.addTopLevelView($.__views.__alloyId15186);
    $.__views.__alloyId15187 = Ti.UI.createView({
        id: "__alloyId15187"
    });
    $.__views.__alloyId15186.add($.__views.__alloyId15187);
    $.__views.__alloyId15188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15188"
    });
    $.__views.__alloyId15187.add($.__views.__alloyId15188);
    $.__views.__alloyId15189 = Ti.UI.createView({
        id: "__alloyId15189"
    });
    $.__views.__alloyId15189 && $.addTopLevelView($.__views.__alloyId15189);
    $.__views.__alloyId15190 = Ti.UI.createView({
        id: "__alloyId15190"
    });
    $.__views.__alloyId15189.add($.__views.__alloyId15190);
    $.__views.__alloyId15191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15191"
    });
    $.__views.__alloyId15190.add($.__views.__alloyId15191);
    $.__views.__alloyId15192 = Ti.UI.createView({
        id: "__alloyId15192"
    });
    $.__views.__alloyId15192 && $.addTopLevelView($.__views.__alloyId15192);
    $.__views.__alloyId15193 = Ti.UI.createView({
        id: "__alloyId15193"
    });
    $.__views.__alloyId15192.add($.__views.__alloyId15193);
    $.__views.__alloyId15194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15194"
    });
    $.__views.__alloyId15193.add($.__views.__alloyId15194);
    $.__views.__alloyId15195 = Ti.UI.createView({
        id: "__alloyId15195"
    });
    $.__views.__alloyId15195 && $.addTopLevelView($.__views.__alloyId15195);
    $.__views.__alloyId15196 = Ti.UI.createView({
        id: "__alloyId15196"
    });
    $.__views.__alloyId15195.add($.__views.__alloyId15196);
    $.__views.__alloyId15197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15197"
    });
    $.__views.__alloyId15196.add($.__views.__alloyId15197);
    $.__views.__alloyId15198 = Ti.UI.createView({
        id: "__alloyId15198"
    });
    $.__views.__alloyId15198 && $.addTopLevelView($.__views.__alloyId15198);
    $.__views.__alloyId15199 = Ti.UI.createView({
        id: "__alloyId15199"
    });
    $.__views.__alloyId15198.add($.__views.__alloyId15199);
    $.__views.__alloyId15200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15200"
    });
    $.__views.__alloyId15199.add($.__views.__alloyId15200);
    $.__views.__alloyId15201 = Ti.UI.createView({
        id: "__alloyId15201"
    });
    $.__views.__alloyId15201 && $.addTopLevelView($.__views.__alloyId15201);
    $.__views.__alloyId15202 = Ti.UI.createView({
        id: "__alloyId15202"
    });
    $.__views.__alloyId15201.add($.__views.__alloyId15202);
    $.__views.__alloyId15203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15203"
    });
    $.__views.__alloyId15202.add($.__views.__alloyId15203);
    $.__views.__alloyId15204 = Ti.UI.createView({
        id: "__alloyId15204"
    });
    $.__views.__alloyId15204 && $.addTopLevelView($.__views.__alloyId15204);
    $.__views.__alloyId15205 = Ti.UI.createView({
        id: "__alloyId15205"
    });
    $.__views.__alloyId15204.add($.__views.__alloyId15205);
    $.__views.__alloyId15206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15206"
    });
    $.__views.__alloyId15205.add($.__views.__alloyId15206);
    $.__views.__alloyId15207 = Ti.UI.createView({
        id: "__alloyId15207"
    });
    $.__views.__alloyId15207 && $.addTopLevelView($.__views.__alloyId15207);
    $.__views.__alloyId15208 = Ti.UI.createView({
        id: "__alloyId15208"
    });
    $.__views.__alloyId15207.add($.__views.__alloyId15208);
    $.__views.__alloyId15209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15209"
    });
    $.__views.__alloyId15208.add($.__views.__alloyId15209);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;