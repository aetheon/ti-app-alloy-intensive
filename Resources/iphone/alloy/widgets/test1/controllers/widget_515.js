function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_515";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_515 = Ti.UI.createView({
        id: "widget_515"
    });
    $.__views.widget_515 && $.addTopLevelView($.__views.widget_515);
    $.__views.__alloyId12064 = Ti.UI.createView({
        id: "__alloyId12064"
    });
    $.__views.widget_515.add($.__views.__alloyId12064);
    $.__views.__alloyId12065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12065"
    });
    $.__views.__alloyId12064.add($.__views.__alloyId12065);
    $.__views.__alloyId12066 = Ti.UI.createView({
        id: "__alloyId12066"
    });
    $.__views.__alloyId12066 && $.addTopLevelView($.__views.__alloyId12066);
    $.__views.__alloyId12067 = Ti.UI.createView({
        id: "__alloyId12067"
    });
    $.__views.__alloyId12066.add($.__views.__alloyId12067);
    $.__views.__alloyId12068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12068"
    });
    $.__views.__alloyId12067.add($.__views.__alloyId12068);
    $.__views.__alloyId12069 = Ti.UI.createView({
        id: "__alloyId12069"
    });
    $.__views.__alloyId12069 && $.addTopLevelView($.__views.__alloyId12069);
    $.__views.__alloyId12070 = Ti.UI.createView({
        id: "__alloyId12070"
    });
    $.__views.__alloyId12069.add($.__views.__alloyId12070);
    $.__views.__alloyId12071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12071"
    });
    $.__views.__alloyId12070.add($.__views.__alloyId12071);
    $.__views.__alloyId12072 = Ti.UI.createView({
        id: "__alloyId12072"
    });
    $.__views.__alloyId12072 && $.addTopLevelView($.__views.__alloyId12072);
    $.__views.__alloyId12073 = Ti.UI.createView({
        id: "__alloyId12073"
    });
    $.__views.__alloyId12072.add($.__views.__alloyId12073);
    $.__views.__alloyId12074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12074"
    });
    $.__views.__alloyId12073.add($.__views.__alloyId12074);
    $.__views.__alloyId12075 = Ti.UI.createView({
        id: "__alloyId12075"
    });
    $.__views.__alloyId12075 && $.addTopLevelView($.__views.__alloyId12075);
    $.__views.__alloyId12076 = Ti.UI.createView({
        id: "__alloyId12076"
    });
    $.__views.__alloyId12075.add($.__views.__alloyId12076);
    $.__views.__alloyId12077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12077"
    });
    $.__views.__alloyId12076.add($.__views.__alloyId12077);
    $.__views.__alloyId12078 = Ti.UI.createView({
        id: "__alloyId12078"
    });
    $.__views.__alloyId12078 && $.addTopLevelView($.__views.__alloyId12078);
    $.__views.__alloyId12079 = Ti.UI.createView({
        id: "__alloyId12079"
    });
    $.__views.__alloyId12078.add($.__views.__alloyId12079);
    $.__views.__alloyId12080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12080"
    });
    $.__views.__alloyId12079.add($.__views.__alloyId12080);
    $.__views.__alloyId12081 = Ti.UI.createView({
        id: "__alloyId12081"
    });
    $.__views.__alloyId12081 && $.addTopLevelView($.__views.__alloyId12081);
    $.__views.__alloyId12082 = Ti.UI.createView({
        id: "__alloyId12082"
    });
    $.__views.__alloyId12081.add($.__views.__alloyId12082);
    $.__views.__alloyId12083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12083"
    });
    $.__views.__alloyId12082.add($.__views.__alloyId12083);
    $.__views.__alloyId12084 = Ti.UI.createView({
        id: "__alloyId12084"
    });
    $.__views.__alloyId12084 && $.addTopLevelView($.__views.__alloyId12084);
    $.__views.__alloyId12085 = Ti.UI.createView({
        id: "__alloyId12085"
    });
    $.__views.__alloyId12084.add($.__views.__alloyId12085);
    $.__views.__alloyId12086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12086"
    });
    $.__views.__alloyId12085.add($.__views.__alloyId12086);
    $.__views.__alloyId12087 = Ti.UI.createView({
        id: "__alloyId12087"
    });
    $.__views.__alloyId12087 && $.addTopLevelView($.__views.__alloyId12087);
    $.__views.__alloyId12088 = Ti.UI.createView({
        id: "__alloyId12088"
    });
    $.__views.__alloyId12087.add($.__views.__alloyId12088);
    $.__views.__alloyId12089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12089"
    });
    $.__views.__alloyId12088.add($.__views.__alloyId12089);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;