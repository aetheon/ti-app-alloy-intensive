function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_897";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_897 = Ti.UI.createView({
        id: "widget_897"
    });
    $.__views.widget_897 && $.addTopLevelView($.__views.widget_897);
    $.__views.__alloyId23062 = Ti.UI.createView({
        id: "__alloyId23062"
    });
    $.__views.widget_897.add($.__views.__alloyId23062);
    $.__views.__alloyId23063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23063"
    });
    $.__views.__alloyId23062.add($.__views.__alloyId23063);
    $.__views.__alloyId23064 = Ti.UI.createView({
        id: "__alloyId23064"
    });
    $.__views.__alloyId23064 && $.addTopLevelView($.__views.__alloyId23064);
    $.__views.__alloyId23065 = Ti.UI.createView({
        id: "__alloyId23065"
    });
    $.__views.__alloyId23064.add($.__views.__alloyId23065);
    $.__views.__alloyId23066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23066"
    });
    $.__views.__alloyId23065.add($.__views.__alloyId23066);
    $.__views.__alloyId23067 = Ti.UI.createView({
        id: "__alloyId23067"
    });
    $.__views.__alloyId23067 && $.addTopLevelView($.__views.__alloyId23067);
    $.__views.__alloyId23068 = Ti.UI.createView({
        id: "__alloyId23068"
    });
    $.__views.__alloyId23067.add($.__views.__alloyId23068);
    $.__views.__alloyId23069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23069"
    });
    $.__views.__alloyId23068.add($.__views.__alloyId23069);
    $.__views.__alloyId23070 = Ti.UI.createView({
        id: "__alloyId23070"
    });
    $.__views.__alloyId23070 && $.addTopLevelView($.__views.__alloyId23070);
    $.__views.__alloyId23071 = Ti.UI.createView({
        id: "__alloyId23071"
    });
    $.__views.__alloyId23070.add($.__views.__alloyId23071);
    $.__views.__alloyId23072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23072"
    });
    $.__views.__alloyId23071.add($.__views.__alloyId23072);
    $.__views.__alloyId23073 = Ti.UI.createView({
        id: "__alloyId23073"
    });
    $.__views.__alloyId23073 && $.addTopLevelView($.__views.__alloyId23073);
    $.__views.__alloyId23074 = Ti.UI.createView({
        id: "__alloyId23074"
    });
    $.__views.__alloyId23073.add($.__views.__alloyId23074);
    $.__views.__alloyId23075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23075"
    });
    $.__views.__alloyId23074.add($.__views.__alloyId23075);
    $.__views.__alloyId23076 = Ti.UI.createView({
        id: "__alloyId23076"
    });
    $.__views.__alloyId23076 && $.addTopLevelView($.__views.__alloyId23076);
    $.__views.__alloyId23077 = Ti.UI.createView({
        id: "__alloyId23077"
    });
    $.__views.__alloyId23076.add($.__views.__alloyId23077);
    $.__views.__alloyId23078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23078"
    });
    $.__views.__alloyId23077.add($.__views.__alloyId23078);
    $.__views.__alloyId23079 = Ti.UI.createView({
        id: "__alloyId23079"
    });
    $.__views.__alloyId23079 && $.addTopLevelView($.__views.__alloyId23079);
    $.__views.__alloyId23080 = Ti.UI.createView({
        id: "__alloyId23080"
    });
    $.__views.__alloyId23079.add($.__views.__alloyId23080);
    $.__views.__alloyId23081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23081"
    });
    $.__views.__alloyId23080.add($.__views.__alloyId23081);
    $.__views.__alloyId23082 = Ti.UI.createView({
        id: "__alloyId23082"
    });
    $.__views.__alloyId23082 && $.addTopLevelView($.__views.__alloyId23082);
    $.__views.__alloyId23083 = Ti.UI.createView({
        id: "__alloyId23083"
    });
    $.__views.__alloyId23082.add($.__views.__alloyId23083);
    $.__views.__alloyId23084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23084"
    });
    $.__views.__alloyId23083.add($.__views.__alloyId23084);
    $.__views.__alloyId23085 = Ti.UI.createView({
        id: "__alloyId23085"
    });
    $.__views.__alloyId23085 && $.addTopLevelView($.__views.__alloyId23085);
    $.__views.__alloyId23086 = Ti.UI.createView({
        id: "__alloyId23086"
    });
    $.__views.__alloyId23085.add($.__views.__alloyId23086);
    $.__views.__alloyId23087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23087"
    });
    $.__views.__alloyId23086.add($.__views.__alloyId23087);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;