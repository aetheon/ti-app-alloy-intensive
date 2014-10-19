function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_970";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_970 = Ti.UI.createView({
        id: "widget_970"
    });
    $.__views.widget_970 && $.addTopLevelView($.__views.widget_970);
    $.__views.__alloyId25194 = Ti.UI.createView({
        id: "__alloyId25194"
    });
    $.__views.widget_970.add($.__views.__alloyId25194);
    $.__views.__alloyId25195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25195"
    });
    $.__views.__alloyId25194.add($.__views.__alloyId25195);
    $.__views.__alloyId25196 = Ti.UI.createView({
        id: "__alloyId25196"
    });
    $.__views.__alloyId25196 && $.addTopLevelView($.__views.__alloyId25196);
    $.__views.__alloyId25197 = Ti.UI.createView({
        id: "__alloyId25197"
    });
    $.__views.__alloyId25196.add($.__views.__alloyId25197);
    $.__views.__alloyId25198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25198"
    });
    $.__views.__alloyId25197.add($.__views.__alloyId25198);
    $.__views.__alloyId25199 = Ti.UI.createView({
        id: "__alloyId25199"
    });
    $.__views.__alloyId25199 && $.addTopLevelView($.__views.__alloyId25199);
    $.__views.__alloyId25200 = Ti.UI.createView({
        id: "__alloyId25200"
    });
    $.__views.__alloyId25199.add($.__views.__alloyId25200);
    $.__views.__alloyId25201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25201"
    });
    $.__views.__alloyId25200.add($.__views.__alloyId25201);
    $.__views.__alloyId25202 = Ti.UI.createView({
        id: "__alloyId25202"
    });
    $.__views.__alloyId25202 && $.addTopLevelView($.__views.__alloyId25202);
    $.__views.__alloyId25203 = Ti.UI.createView({
        id: "__alloyId25203"
    });
    $.__views.__alloyId25202.add($.__views.__alloyId25203);
    $.__views.__alloyId25204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25204"
    });
    $.__views.__alloyId25203.add($.__views.__alloyId25204);
    $.__views.__alloyId25205 = Ti.UI.createView({
        id: "__alloyId25205"
    });
    $.__views.__alloyId25205 && $.addTopLevelView($.__views.__alloyId25205);
    $.__views.__alloyId25206 = Ti.UI.createView({
        id: "__alloyId25206"
    });
    $.__views.__alloyId25205.add($.__views.__alloyId25206);
    $.__views.__alloyId25207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25207"
    });
    $.__views.__alloyId25206.add($.__views.__alloyId25207);
    $.__views.__alloyId25208 = Ti.UI.createView({
        id: "__alloyId25208"
    });
    $.__views.__alloyId25208 && $.addTopLevelView($.__views.__alloyId25208);
    $.__views.__alloyId25209 = Ti.UI.createView({
        id: "__alloyId25209"
    });
    $.__views.__alloyId25208.add($.__views.__alloyId25209);
    $.__views.__alloyId25210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25210"
    });
    $.__views.__alloyId25209.add($.__views.__alloyId25210);
    $.__views.__alloyId25211 = Ti.UI.createView({
        id: "__alloyId25211"
    });
    $.__views.__alloyId25211 && $.addTopLevelView($.__views.__alloyId25211);
    $.__views.__alloyId25212 = Ti.UI.createView({
        id: "__alloyId25212"
    });
    $.__views.__alloyId25211.add($.__views.__alloyId25212);
    $.__views.__alloyId25213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25213"
    });
    $.__views.__alloyId25212.add($.__views.__alloyId25213);
    $.__views.__alloyId25214 = Ti.UI.createView({
        id: "__alloyId25214"
    });
    $.__views.__alloyId25214 && $.addTopLevelView($.__views.__alloyId25214);
    $.__views.__alloyId25215 = Ti.UI.createView({
        id: "__alloyId25215"
    });
    $.__views.__alloyId25214.add($.__views.__alloyId25215);
    $.__views.__alloyId25216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25216"
    });
    $.__views.__alloyId25215.add($.__views.__alloyId25216);
    $.__views.__alloyId25217 = Ti.UI.createView({
        id: "__alloyId25217"
    });
    $.__views.__alloyId25217 && $.addTopLevelView($.__views.__alloyId25217);
    $.__views.__alloyId25218 = Ti.UI.createView({
        id: "__alloyId25218"
    });
    $.__views.__alloyId25217.add($.__views.__alloyId25218);
    $.__views.__alloyId25219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25219"
    });
    $.__views.__alloyId25218.add($.__views.__alloyId25219);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;