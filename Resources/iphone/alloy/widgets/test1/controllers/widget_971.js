function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_971";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_971 = Ti.UI.createView({
        id: "widget_971"
    });
    $.__views.widget_971 && $.addTopLevelView($.__views.widget_971);
    $.__views.__alloyId25220 = Ti.UI.createView({
        id: "__alloyId25220"
    });
    $.__views.widget_971.add($.__views.__alloyId25220);
    $.__views.__alloyId25221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25221"
    });
    $.__views.__alloyId25220.add($.__views.__alloyId25221);
    $.__views.__alloyId25222 = Ti.UI.createView({
        id: "__alloyId25222"
    });
    $.__views.__alloyId25222 && $.addTopLevelView($.__views.__alloyId25222);
    $.__views.__alloyId25223 = Ti.UI.createView({
        id: "__alloyId25223"
    });
    $.__views.__alloyId25222.add($.__views.__alloyId25223);
    $.__views.__alloyId25224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25224"
    });
    $.__views.__alloyId25223.add($.__views.__alloyId25224);
    $.__views.__alloyId25225 = Ti.UI.createView({
        id: "__alloyId25225"
    });
    $.__views.__alloyId25225 && $.addTopLevelView($.__views.__alloyId25225);
    $.__views.__alloyId25226 = Ti.UI.createView({
        id: "__alloyId25226"
    });
    $.__views.__alloyId25225.add($.__views.__alloyId25226);
    $.__views.__alloyId25227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25227"
    });
    $.__views.__alloyId25226.add($.__views.__alloyId25227);
    $.__views.__alloyId25228 = Ti.UI.createView({
        id: "__alloyId25228"
    });
    $.__views.__alloyId25228 && $.addTopLevelView($.__views.__alloyId25228);
    $.__views.__alloyId25229 = Ti.UI.createView({
        id: "__alloyId25229"
    });
    $.__views.__alloyId25228.add($.__views.__alloyId25229);
    $.__views.__alloyId25230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25230"
    });
    $.__views.__alloyId25229.add($.__views.__alloyId25230);
    $.__views.__alloyId25231 = Ti.UI.createView({
        id: "__alloyId25231"
    });
    $.__views.__alloyId25231 && $.addTopLevelView($.__views.__alloyId25231);
    $.__views.__alloyId25232 = Ti.UI.createView({
        id: "__alloyId25232"
    });
    $.__views.__alloyId25231.add($.__views.__alloyId25232);
    $.__views.__alloyId25233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25233"
    });
    $.__views.__alloyId25232.add($.__views.__alloyId25233);
    $.__views.__alloyId25234 = Ti.UI.createView({
        id: "__alloyId25234"
    });
    $.__views.__alloyId25234 && $.addTopLevelView($.__views.__alloyId25234);
    $.__views.__alloyId25235 = Ti.UI.createView({
        id: "__alloyId25235"
    });
    $.__views.__alloyId25234.add($.__views.__alloyId25235);
    $.__views.__alloyId25236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25236"
    });
    $.__views.__alloyId25235.add($.__views.__alloyId25236);
    $.__views.__alloyId25237 = Ti.UI.createView({
        id: "__alloyId25237"
    });
    $.__views.__alloyId25237 && $.addTopLevelView($.__views.__alloyId25237);
    $.__views.__alloyId25238 = Ti.UI.createView({
        id: "__alloyId25238"
    });
    $.__views.__alloyId25237.add($.__views.__alloyId25238);
    $.__views.__alloyId25239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25239"
    });
    $.__views.__alloyId25238.add($.__views.__alloyId25239);
    $.__views.__alloyId25240 = Ti.UI.createView({
        id: "__alloyId25240"
    });
    $.__views.__alloyId25240 && $.addTopLevelView($.__views.__alloyId25240);
    $.__views.__alloyId25241 = Ti.UI.createView({
        id: "__alloyId25241"
    });
    $.__views.__alloyId25240.add($.__views.__alloyId25241);
    $.__views.__alloyId25242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25242"
    });
    $.__views.__alloyId25241.add($.__views.__alloyId25242);
    $.__views.__alloyId25243 = Ti.UI.createView({
        id: "__alloyId25243"
    });
    $.__views.__alloyId25243 && $.addTopLevelView($.__views.__alloyId25243);
    $.__views.__alloyId25244 = Ti.UI.createView({
        id: "__alloyId25244"
    });
    $.__views.__alloyId25243.add($.__views.__alloyId25244);
    $.__views.__alloyId25245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25245"
    });
    $.__views.__alloyId25244.add($.__views.__alloyId25245);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;