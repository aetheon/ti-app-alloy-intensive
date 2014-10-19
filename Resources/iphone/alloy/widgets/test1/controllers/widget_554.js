function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_554";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_554 = Ti.UI.createView({
        id: "widget_554"
    });
    $.__views.widget_554 && $.addTopLevelView($.__views.widget_554);
    $.__views.__alloyId13182 = Ti.UI.createView({
        id: "__alloyId13182"
    });
    $.__views.widget_554.add($.__views.__alloyId13182);
    $.__views.__alloyId13183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13183"
    });
    $.__views.__alloyId13182.add($.__views.__alloyId13183);
    $.__views.__alloyId13184 = Ti.UI.createView({
        id: "__alloyId13184"
    });
    $.__views.__alloyId13184 && $.addTopLevelView($.__views.__alloyId13184);
    $.__views.__alloyId13185 = Ti.UI.createView({
        id: "__alloyId13185"
    });
    $.__views.__alloyId13184.add($.__views.__alloyId13185);
    $.__views.__alloyId13186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13186"
    });
    $.__views.__alloyId13185.add($.__views.__alloyId13186);
    $.__views.__alloyId13187 = Ti.UI.createView({
        id: "__alloyId13187"
    });
    $.__views.__alloyId13187 && $.addTopLevelView($.__views.__alloyId13187);
    $.__views.__alloyId13188 = Ti.UI.createView({
        id: "__alloyId13188"
    });
    $.__views.__alloyId13187.add($.__views.__alloyId13188);
    $.__views.__alloyId13189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13189"
    });
    $.__views.__alloyId13188.add($.__views.__alloyId13189);
    $.__views.__alloyId13190 = Ti.UI.createView({
        id: "__alloyId13190"
    });
    $.__views.__alloyId13190 && $.addTopLevelView($.__views.__alloyId13190);
    $.__views.__alloyId13191 = Ti.UI.createView({
        id: "__alloyId13191"
    });
    $.__views.__alloyId13190.add($.__views.__alloyId13191);
    $.__views.__alloyId13192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13192"
    });
    $.__views.__alloyId13191.add($.__views.__alloyId13192);
    $.__views.__alloyId13193 = Ti.UI.createView({
        id: "__alloyId13193"
    });
    $.__views.__alloyId13193 && $.addTopLevelView($.__views.__alloyId13193);
    $.__views.__alloyId13194 = Ti.UI.createView({
        id: "__alloyId13194"
    });
    $.__views.__alloyId13193.add($.__views.__alloyId13194);
    $.__views.__alloyId13195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13195"
    });
    $.__views.__alloyId13194.add($.__views.__alloyId13195);
    $.__views.__alloyId13196 = Ti.UI.createView({
        id: "__alloyId13196"
    });
    $.__views.__alloyId13196 && $.addTopLevelView($.__views.__alloyId13196);
    $.__views.__alloyId13197 = Ti.UI.createView({
        id: "__alloyId13197"
    });
    $.__views.__alloyId13196.add($.__views.__alloyId13197);
    $.__views.__alloyId13198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13198"
    });
    $.__views.__alloyId13197.add($.__views.__alloyId13198);
    $.__views.__alloyId13199 = Ti.UI.createView({
        id: "__alloyId13199"
    });
    $.__views.__alloyId13199 && $.addTopLevelView($.__views.__alloyId13199);
    $.__views.__alloyId13200 = Ti.UI.createView({
        id: "__alloyId13200"
    });
    $.__views.__alloyId13199.add($.__views.__alloyId13200);
    $.__views.__alloyId13201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13201"
    });
    $.__views.__alloyId13200.add($.__views.__alloyId13201);
    $.__views.__alloyId13202 = Ti.UI.createView({
        id: "__alloyId13202"
    });
    $.__views.__alloyId13202 && $.addTopLevelView($.__views.__alloyId13202);
    $.__views.__alloyId13203 = Ti.UI.createView({
        id: "__alloyId13203"
    });
    $.__views.__alloyId13202.add($.__views.__alloyId13203);
    $.__views.__alloyId13204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13204"
    });
    $.__views.__alloyId13203.add($.__views.__alloyId13204);
    $.__views.__alloyId13205 = Ti.UI.createView({
        id: "__alloyId13205"
    });
    $.__views.__alloyId13205 && $.addTopLevelView($.__views.__alloyId13205);
    $.__views.__alloyId13206 = Ti.UI.createView({
        id: "__alloyId13206"
    });
    $.__views.__alloyId13205.add($.__views.__alloyId13206);
    $.__views.__alloyId13207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13207"
    });
    $.__views.__alloyId13206.add($.__views.__alloyId13207);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;