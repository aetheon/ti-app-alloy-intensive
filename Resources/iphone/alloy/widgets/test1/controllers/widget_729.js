function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_729";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_729 = Ti.UI.createView({
        id: "widget_729"
    });
    $.__views.widget_729 && $.addTopLevelView($.__views.widget_729);
    $.__views.__alloyId18226 = Ti.UI.createView({
        id: "__alloyId18226"
    });
    $.__views.widget_729.add($.__views.__alloyId18226);
    $.__views.__alloyId18227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18227"
    });
    $.__views.__alloyId18226.add($.__views.__alloyId18227);
    $.__views.__alloyId18228 = Ti.UI.createView({
        id: "__alloyId18228"
    });
    $.__views.__alloyId18228 && $.addTopLevelView($.__views.__alloyId18228);
    $.__views.__alloyId18229 = Ti.UI.createView({
        id: "__alloyId18229"
    });
    $.__views.__alloyId18228.add($.__views.__alloyId18229);
    $.__views.__alloyId18230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18230"
    });
    $.__views.__alloyId18229.add($.__views.__alloyId18230);
    $.__views.__alloyId18231 = Ti.UI.createView({
        id: "__alloyId18231"
    });
    $.__views.__alloyId18231 && $.addTopLevelView($.__views.__alloyId18231);
    $.__views.__alloyId18232 = Ti.UI.createView({
        id: "__alloyId18232"
    });
    $.__views.__alloyId18231.add($.__views.__alloyId18232);
    $.__views.__alloyId18233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18233"
    });
    $.__views.__alloyId18232.add($.__views.__alloyId18233);
    $.__views.__alloyId18234 = Ti.UI.createView({
        id: "__alloyId18234"
    });
    $.__views.__alloyId18234 && $.addTopLevelView($.__views.__alloyId18234);
    $.__views.__alloyId18235 = Ti.UI.createView({
        id: "__alloyId18235"
    });
    $.__views.__alloyId18234.add($.__views.__alloyId18235);
    $.__views.__alloyId18236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18236"
    });
    $.__views.__alloyId18235.add($.__views.__alloyId18236);
    $.__views.__alloyId18237 = Ti.UI.createView({
        id: "__alloyId18237"
    });
    $.__views.__alloyId18237 && $.addTopLevelView($.__views.__alloyId18237);
    $.__views.__alloyId18238 = Ti.UI.createView({
        id: "__alloyId18238"
    });
    $.__views.__alloyId18237.add($.__views.__alloyId18238);
    $.__views.__alloyId18239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18239"
    });
    $.__views.__alloyId18238.add($.__views.__alloyId18239);
    $.__views.__alloyId18240 = Ti.UI.createView({
        id: "__alloyId18240"
    });
    $.__views.__alloyId18240 && $.addTopLevelView($.__views.__alloyId18240);
    $.__views.__alloyId18241 = Ti.UI.createView({
        id: "__alloyId18241"
    });
    $.__views.__alloyId18240.add($.__views.__alloyId18241);
    $.__views.__alloyId18242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18242"
    });
    $.__views.__alloyId18241.add($.__views.__alloyId18242);
    $.__views.__alloyId18243 = Ti.UI.createView({
        id: "__alloyId18243"
    });
    $.__views.__alloyId18243 && $.addTopLevelView($.__views.__alloyId18243);
    $.__views.__alloyId18244 = Ti.UI.createView({
        id: "__alloyId18244"
    });
    $.__views.__alloyId18243.add($.__views.__alloyId18244);
    $.__views.__alloyId18245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18245"
    });
    $.__views.__alloyId18244.add($.__views.__alloyId18245);
    $.__views.__alloyId18246 = Ti.UI.createView({
        id: "__alloyId18246"
    });
    $.__views.__alloyId18246 && $.addTopLevelView($.__views.__alloyId18246);
    $.__views.__alloyId18247 = Ti.UI.createView({
        id: "__alloyId18247"
    });
    $.__views.__alloyId18246.add($.__views.__alloyId18247);
    $.__views.__alloyId18248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18248"
    });
    $.__views.__alloyId18247.add($.__views.__alloyId18248);
    $.__views.__alloyId18249 = Ti.UI.createView({
        id: "__alloyId18249"
    });
    $.__views.__alloyId18249 && $.addTopLevelView($.__views.__alloyId18249);
    $.__views.__alloyId18250 = Ti.UI.createView({
        id: "__alloyId18250"
    });
    $.__views.__alloyId18249.add($.__views.__alloyId18250);
    $.__views.__alloyId18251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18251"
    });
    $.__views.__alloyId18250.add($.__views.__alloyId18251);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;