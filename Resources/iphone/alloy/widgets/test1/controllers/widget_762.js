function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_762";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_762 = Ti.UI.createView({
        id: "widget_762"
    });
    $.__views.widget_762 && $.addTopLevelView($.__views.widget_762);
    $.__views.__alloyId19188 = Ti.UI.createView({
        id: "__alloyId19188"
    });
    $.__views.widget_762.add($.__views.__alloyId19188);
    $.__views.__alloyId19189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19189"
    });
    $.__views.__alloyId19188.add($.__views.__alloyId19189);
    $.__views.__alloyId19190 = Ti.UI.createView({
        id: "__alloyId19190"
    });
    $.__views.__alloyId19190 && $.addTopLevelView($.__views.__alloyId19190);
    $.__views.__alloyId19191 = Ti.UI.createView({
        id: "__alloyId19191"
    });
    $.__views.__alloyId19190.add($.__views.__alloyId19191);
    $.__views.__alloyId19192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19192"
    });
    $.__views.__alloyId19191.add($.__views.__alloyId19192);
    $.__views.__alloyId19193 = Ti.UI.createView({
        id: "__alloyId19193"
    });
    $.__views.__alloyId19193 && $.addTopLevelView($.__views.__alloyId19193);
    $.__views.__alloyId19194 = Ti.UI.createView({
        id: "__alloyId19194"
    });
    $.__views.__alloyId19193.add($.__views.__alloyId19194);
    $.__views.__alloyId19195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19195"
    });
    $.__views.__alloyId19194.add($.__views.__alloyId19195);
    $.__views.__alloyId19196 = Ti.UI.createView({
        id: "__alloyId19196"
    });
    $.__views.__alloyId19196 && $.addTopLevelView($.__views.__alloyId19196);
    $.__views.__alloyId19197 = Ti.UI.createView({
        id: "__alloyId19197"
    });
    $.__views.__alloyId19196.add($.__views.__alloyId19197);
    $.__views.__alloyId19198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19198"
    });
    $.__views.__alloyId19197.add($.__views.__alloyId19198);
    $.__views.__alloyId19199 = Ti.UI.createView({
        id: "__alloyId19199"
    });
    $.__views.__alloyId19199 && $.addTopLevelView($.__views.__alloyId19199);
    $.__views.__alloyId19200 = Ti.UI.createView({
        id: "__alloyId19200"
    });
    $.__views.__alloyId19199.add($.__views.__alloyId19200);
    $.__views.__alloyId19201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19201"
    });
    $.__views.__alloyId19200.add($.__views.__alloyId19201);
    $.__views.__alloyId19202 = Ti.UI.createView({
        id: "__alloyId19202"
    });
    $.__views.__alloyId19202 && $.addTopLevelView($.__views.__alloyId19202);
    $.__views.__alloyId19203 = Ti.UI.createView({
        id: "__alloyId19203"
    });
    $.__views.__alloyId19202.add($.__views.__alloyId19203);
    $.__views.__alloyId19204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19204"
    });
    $.__views.__alloyId19203.add($.__views.__alloyId19204);
    $.__views.__alloyId19205 = Ti.UI.createView({
        id: "__alloyId19205"
    });
    $.__views.__alloyId19205 && $.addTopLevelView($.__views.__alloyId19205);
    $.__views.__alloyId19206 = Ti.UI.createView({
        id: "__alloyId19206"
    });
    $.__views.__alloyId19205.add($.__views.__alloyId19206);
    $.__views.__alloyId19207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19207"
    });
    $.__views.__alloyId19206.add($.__views.__alloyId19207);
    $.__views.__alloyId19208 = Ti.UI.createView({
        id: "__alloyId19208"
    });
    $.__views.__alloyId19208 && $.addTopLevelView($.__views.__alloyId19208);
    $.__views.__alloyId19209 = Ti.UI.createView({
        id: "__alloyId19209"
    });
    $.__views.__alloyId19208.add($.__views.__alloyId19209);
    $.__views.__alloyId19210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19210"
    });
    $.__views.__alloyId19209.add($.__views.__alloyId19210);
    $.__views.__alloyId19211 = Ti.UI.createView({
        id: "__alloyId19211"
    });
    $.__views.__alloyId19211 && $.addTopLevelView($.__views.__alloyId19211);
    $.__views.__alloyId19212 = Ti.UI.createView({
        id: "__alloyId19212"
    });
    $.__views.__alloyId19211.add($.__views.__alloyId19212);
    $.__views.__alloyId19213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19213"
    });
    $.__views.__alloyId19212.add($.__views.__alloyId19213);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;