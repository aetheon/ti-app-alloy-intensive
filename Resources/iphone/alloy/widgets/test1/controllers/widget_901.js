function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_901";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_901 = Ti.UI.createView({
        id: "widget_901"
    });
    $.__views.widget_901 && $.addTopLevelView($.__views.widget_901);
    $.__views.__alloyId23218 = Ti.UI.createView({
        id: "__alloyId23218"
    });
    $.__views.widget_901.add($.__views.__alloyId23218);
    $.__views.__alloyId23219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23219"
    });
    $.__views.__alloyId23218.add($.__views.__alloyId23219);
    $.__views.__alloyId23220 = Ti.UI.createView({
        id: "__alloyId23220"
    });
    $.__views.__alloyId23220 && $.addTopLevelView($.__views.__alloyId23220);
    $.__views.__alloyId23221 = Ti.UI.createView({
        id: "__alloyId23221"
    });
    $.__views.__alloyId23220.add($.__views.__alloyId23221);
    $.__views.__alloyId23222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23222"
    });
    $.__views.__alloyId23221.add($.__views.__alloyId23222);
    $.__views.__alloyId23223 = Ti.UI.createView({
        id: "__alloyId23223"
    });
    $.__views.__alloyId23223 && $.addTopLevelView($.__views.__alloyId23223);
    $.__views.__alloyId23224 = Ti.UI.createView({
        id: "__alloyId23224"
    });
    $.__views.__alloyId23223.add($.__views.__alloyId23224);
    $.__views.__alloyId23225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23225"
    });
    $.__views.__alloyId23224.add($.__views.__alloyId23225);
    $.__views.__alloyId23226 = Ti.UI.createView({
        id: "__alloyId23226"
    });
    $.__views.__alloyId23226 && $.addTopLevelView($.__views.__alloyId23226);
    $.__views.__alloyId23227 = Ti.UI.createView({
        id: "__alloyId23227"
    });
    $.__views.__alloyId23226.add($.__views.__alloyId23227);
    $.__views.__alloyId23228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23228"
    });
    $.__views.__alloyId23227.add($.__views.__alloyId23228);
    $.__views.__alloyId23229 = Ti.UI.createView({
        id: "__alloyId23229"
    });
    $.__views.__alloyId23229 && $.addTopLevelView($.__views.__alloyId23229);
    $.__views.__alloyId23230 = Ti.UI.createView({
        id: "__alloyId23230"
    });
    $.__views.__alloyId23229.add($.__views.__alloyId23230);
    $.__views.__alloyId23231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23231"
    });
    $.__views.__alloyId23230.add($.__views.__alloyId23231);
    $.__views.__alloyId23232 = Ti.UI.createView({
        id: "__alloyId23232"
    });
    $.__views.__alloyId23232 && $.addTopLevelView($.__views.__alloyId23232);
    $.__views.__alloyId23233 = Ti.UI.createView({
        id: "__alloyId23233"
    });
    $.__views.__alloyId23232.add($.__views.__alloyId23233);
    $.__views.__alloyId23234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23234"
    });
    $.__views.__alloyId23233.add($.__views.__alloyId23234);
    $.__views.__alloyId23235 = Ti.UI.createView({
        id: "__alloyId23235"
    });
    $.__views.__alloyId23235 && $.addTopLevelView($.__views.__alloyId23235);
    $.__views.__alloyId23236 = Ti.UI.createView({
        id: "__alloyId23236"
    });
    $.__views.__alloyId23235.add($.__views.__alloyId23236);
    $.__views.__alloyId23237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23237"
    });
    $.__views.__alloyId23236.add($.__views.__alloyId23237);
    $.__views.__alloyId23238 = Ti.UI.createView({
        id: "__alloyId23238"
    });
    $.__views.__alloyId23238 && $.addTopLevelView($.__views.__alloyId23238);
    $.__views.__alloyId23239 = Ti.UI.createView({
        id: "__alloyId23239"
    });
    $.__views.__alloyId23238.add($.__views.__alloyId23239);
    $.__views.__alloyId23240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23240"
    });
    $.__views.__alloyId23239.add($.__views.__alloyId23240);
    $.__views.__alloyId23241 = Ti.UI.createView({
        id: "__alloyId23241"
    });
    $.__views.__alloyId23241 && $.addTopLevelView($.__views.__alloyId23241);
    $.__views.__alloyId23242 = Ti.UI.createView({
        id: "__alloyId23242"
    });
    $.__views.__alloyId23241.add($.__views.__alloyId23242);
    $.__views.__alloyId23243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23243"
    });
    $.__views.__alloyId23242.add($.__views.__alloyId23243);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;