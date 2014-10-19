function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_728";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_728 = Ti.UI.createView({
        id: "widget_728"
    });
    $.__views.widget_728 && $.addTopLevelView($.__views.widget_728);
    $.__views.__alloyId18200 = Ti.UI.createView({
        id: "__alloyId18200"
    });
    $.__views.widget_728.add($.__views.__alloyId18200);
    $.__views.__alloyId18201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18201"
    });
    $.__views.__alloyId18200.add($.__views.__alloyId18201);
    $.__views.__alloyId18202 = Ti.UI.createView({
        id: "__alloyId18202"
    });
    $.__views.__alloyId18202 && $.addTopLevelView($.__views.__alloyId18202);
    $.__views.__alloyId18203 = Ti.UI.createView({
        id: "__alloyId18203"
    });
    $.__views.__alloyId18202.add($.__views.__alloyId18203);
    $.__views.__alloyId18204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18204"
    });
    $.__views.__alloyId18203.add($.__views.__alloyId18204);
    $.__views.__alloyId18205 = Ti.UI.createView({
        id: "__alloyId18205"
    });
    $.__views.__alloyId18205 && $.addTopLevelView($.__views.__alloyId18205);
    $.__views.__alloyId18206 = Ti.UI.createView({
        id: "__alloyId18206"
    });
    $.__views.__alloyId18205.add($.__views.__alloyId18206);
    $.__views.__alloyId18207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18207"
    });
    $.__views.__alloyId18206.add($.__views.__alloyId18207);
    $.__views.__alloyId18208 = Ti.UI.createView({
        id: "__alloyId18208"
    });
    $.__views.__alloyId18208 && $.addTopLevelView($.__views.__alloyId18208);
    $.__views.__alloyId18209 = Ti.UI.createView({
        id: "__alloyId18209"
    });
    $.__views.__alloyId18208.add($.__views.__alloyId18209);
    $.__views.__alloyId18210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18210"
    });
    $.__views.__alloyId18209.add($.__views.__alloyId18210);
    $.__views.__alloyId18211 = Ti.UI.createView({
        id: "__alloyId18211"
    });
    $.__views.__alloyId18211 && $.addTopLevelView($.__views.__alloyId18211);
    $.__views.__alloyId18212 = Ti.UI.createView({
        id: "__alloyId18212"
    });
    $.__views.__alloyId18211.add($.__views.__alloyId18212);
    $.__views.__alloyId18213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18213"
    });
    $.__views.__alloyId18212.add($.__views.__alloyId18213);
    $.__views.__alloyId18214 = Ti.UI.createView({
        id: "__alloyId18214"
    });
    $.__views.__alloyId18214 && $.addTopLevelView($.__views.__alloyId18214);
    $.__views.__alloyId18215 = Ti.UI.createView({
        id: "__alloyId18215"
    });
    $.__views.__alloyId18214.add($.__views.__alloyId18215);
    $.__views.__alloyId18216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18216"
    });
    $.__views.__alloyId18215.add($.__views.__alloyId18216);
    $.__views.__alloyId18217 = Ti.UI.createView({
        id: "__alloyId18217"
    });
    $.__views.__alloyId18217 && $.addTopLevelView($.__views.__alloyId18217);
    $.__views.__alloyId18218 = Ti.UI.createView({
        id: "__alloyId18218"
    });
    $.__views.__alloyId18217.add($.__views.__alloyId18218);
    $.__views.__alloyId18219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18219"
    });
    $.__views.__alloyId18218.add($.__views.__alloyId18219);
    $.__views.__alloyId18220 = Ti.UI.createView({
        id: "__alloyId18220"
    });
    $.__views.__alloyId18220 && $.addTopLevelView($.__views.__alloyId18220);
    $.__views.__alloyId18221 = Ti.UI.createView({
        id: "__alloyId18221"
    });
    $.__views.__alloyId18220.add($.__views.__alloyId18221);
    $.__views.__alloyId18222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18222"
    });
    $.__views.__alloyId18221.add($.__views.__alloyId18222);
    $.__views.__alloyId18223 = Ti.UI.createView({
        id: "__alloyId18223"
    });
    $.__views.__alloyId18223 && $.addTopLevelView($.__views.__alloyId18223);
    $.__views.__alloyId18224 = Ti.UI.createView({
        id: "__alloyId18224"
    });
    $.__views.__alloyId18223.add($.__views.__alloyId18224);
    $.__views.__alloyId18225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18225"
    });
    $.__views.__alloyId18224.add($.__views.__alloyId18225);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;