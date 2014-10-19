function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_451";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_451 = Ti.UI.createView({
        id: "widget_451"
    });
    $.__views.widget_451 && $.addTopLevelView($.__views.widget_451);
    $.__views.__alloyId10218 = Ti.UI.createView({
        id: "__alloyId10218"
    });
    $.__views.widget_451.add($.__views.__alloyId10218);
    $.__views.__alloyId10219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10219"
    });
    $.__views.__alloyId10218.add($.__views.__alloyId10219);
    $.__views.__alloyId10220 = Ti.UI.createView({
        id: "__alloyId10220"
    });
    $.__views.__alloyId10220 && $.addTopLevelView($.__views.__alloyId10220);
    $.__views.__alloyId10221 = Ti.UI.createView({
        id: "__alloyId10221"
    });
    $.__views.__alloyId10220.add($.__views.__alloyId10221);
    $.__views.__alloyId10222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10222"
    });
    $.__views.__alloyId10221.add($.__views.__alloyId10222);
    $.__views.__alloyId10223 = Ti.UI.createView({
        id: "__alloyId10223"
    });
    $.__views.__alloyId10223 && $.addTopLevelView($.__views.__alloyId10223);
    $.__views.__alloyId10224 = Ti.UI.createView({
        id: "__alloyId10224"
    });
    $.__views.__alloyId10223.add($.__views.__alloyId10224);
    $.__views.__alloyId10225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10225"
    });
    $.__views.__alloyId10224.add($.__views.__alloyId10225);
    $.__views.__alloyId10226 = Ti.UI.createView({
        id: "__alloyId10226"
    });
    $.__views.__alloyId10226 && $.addTopLevelView($.__views.__alloyId10226);
    $.__views.__alloyId10227 = Ti.UI.createView({
        id: "__alloyId10227"
    });
    $.__views.__alloyId10226.add($.__views.__alloyId10227);
    $.__views.__alloyId10228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10228"
    });
    $.__views.__alloyId10227.add($.__views.__alloyId10228);
    $.__views.__alloyId10229 = Ti.UI.createView({
        id: "__alloyId10229"
    });
    $.__views.__alloyId10229 && $.addTopLevelView($.__views.__alloyId10229);
    $.__views.__alloyId10230 = Ti.UI.createView({
        id: "__alloyId10230"
    });
    $.__views.__alloyId10229.add($.__views.__alloyId10230);
    $.__views.__alloyId10231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10231"
    });
    $.__views.__alloyId10230.add($.__views.__alloyId10231);
    $.__views.__alloyId10232 = Ti.UI.createView({
        id: "__alloyId10232"
    });
    $.__views.__alloyId10232 && $.addTopLevelView($.__views.__alloyId10232);
    $.__views.__alloyId10233 = Ti.UI.createView({
        id: "__alloyId10233"
    });
    $.__views.__alloyId10232.add($.__views.__alloyId10233);
    $.__views.__alloyId10234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10234"
    });
    $.__views.__alloyId10233.add($.__views.__alloyId10234);
    $.__views.__alloyId10235 = Ti.UI.createView({
        id: "__alloyId10235"
    });
    $.__views.__alloyId10235 && $.addTopLevelView($.__views.__alloyId10235);
    $.__views.__alloyId10236 = Ti.UI.createView({
        id: "__alloyId10236"
    });
    $.__views.__alloyId10235.add($.__views.__alloyId10236);
    $.__views.__alloyId10237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10237"
    });
    $.__views.__alloyId10236.add($.__views.__alloyId10237);
    $.__views.__alloyId10238 = Ti.UI.createView({
        id: "__alloyId10238"
    });
    $.__views.__alloyId10238 && $.addTopLevelView($.__views.__alloyId10238);
    $.__views.__alloyId10239 = Ti.UI.createView({
        id: "__alloyId10239"
    });
    $.__views.__alloyId10238.add($.__views.__alloyId10239);
    $.__views.__alloyId10240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10240"
    });
    $.__views.__alloyId10239.add($.__views.__alloyId10240);
    $.__views.__alloyId10241 = Ti.UI.createView({
        id: "__alloyId10241"
    });
    $.__views.__alloyId10241 && $.addTopLevelView($.__views.__alloyId10241);
    $.__views.__alloyId10242 = Ti.UI.createView({
        id: "__alloyId10242"
    });
    $.__views.__alloyId10241.add($.__views.__alloyId10242);
    $.__views.__alloyId10243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10243"
    });
    $.__views.__alloyId10242.add($.__views.__alloyId10243);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;