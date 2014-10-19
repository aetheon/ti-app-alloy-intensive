function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_654";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_654 = Ti.UI.createView({
        id: "widget_654"
    });
    $.__views.widget_654 && $.addTopLevelView($.__views.widget_654);
    $.__views.__alloyId16068 = Ti.UI.createView({
        id: "__alloyId16068"
    });
    $.__views.widget_654.add($.__views.__alloyId16068);
    $.__views.__alloyId16069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16069"
    });
    $.__views.__alloyId16068.add($.__views.__alloyId16069);
    $.__views.__alloyId16070 = Ti.UI.createView({
        id: "__alloyId16070"
    });
    $.__views.__alloyId16070 && $.addTopLevelView($.__views.__alloyId16070);
    $.__views.__alloyId16071 = Ti.UI.createView({
        id: "__alloyId16071"
    });
    $.__views.__alloyId16070.add($.__views.__alloyId16071);
    $.__views.__alloyId16072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16072"
    });
    $.__views.__alloyId16071.add($.__views.__alloyId16072);
    $.__views.__alloyId16073 = Ti.UI.createView({
        id: "__alloyId16073"
    });
    $.__views.__alloyId16073 && $.addTopLevelView($.__views.__alloyId16073);
    $.__views.__alloyId16074 = Ti.UI.createView({
        id: "__alloyId16074"
    });
    $.__views.__alloyId16073.add($.__views.__alloyId16074);
    $.__views.__alloyId16075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16075"
    });
    $.__views.__alloyId16074.add($.__views.__alloyId16075);
    $.__views.__alloyId16076 = Ti.UI.createView({
        id: "__alloyId16076"
    });
    $.__views.__alloyId16076 && $.addTopLevelView($.__views.__alloyId16076);
    $.__views.__alloyId16077 = Ti.UI.createView({
        id: "__alloyId16077"
    });
    $.__views.__alloyId16076.add($.__views.__alloyId16077);
    $.__views.__alloyId16078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16078"
    });
    $.__views.__alloyId16077.add($.__views.__alloyId16078);
    $.__views.__alloyId16079 = Ti.UI.createView({
        id: "__alloyId16079"
    });
    $.__views.__alloyId16079 && $.addTopLevelView($.__views.__alloyId16079);
    $.__views.__alloyId16080 = Ti.UI.createView({
        id: "__alloyId16080"
    });
    $.__views.__alloyId16079.add($.__views.__alloyId16080);
    $.__views.__alloyId16081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16081"
    });
    $.__views.__alloyId16080.add($.__views.__alloyId16081);
    $.__views.__alloyId16082 = Ti.UI.createView({
        id: "__alloyId16082"
    });
    $.__views.__alloyId16082 && $.addTopLevelView($.__views.__alloyId16082);
    $.__views.__alloyId16083 = Ti.UI.createView({
        id: "__alloyId16083"
    });
    $.__views.__alloyId16082.add($.__views.__alloyId16083);
    $.__views.__alloyId16084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16084"
    });
    $.__views.__alloyId16083.add($.__views.__alloyId16084);
    $.__views.__alloyId16085 = Ti.UI.createView({
        id: "__alloyId16085"
    });
    $.__views.__alloyId16085 && $.addTopLevelView($.__views.__alloyId16085);
    $.__views.__alloyId16086 = Ti.UI.createView({
        id: "__alloyId16086"
    });
    $.__views.__alloyId16085.add($.__views.__alloyId16086);
    $.__views.__alloyId16087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16087"
    });
    $.__views.__alloyId16086.add($.__views.__alloyId16087);
    $.__views.__alloyId16088 = Ti.UI.createView({
        id: "__alloyId16088"
    });
    $.__views.__alloyId16088 && $.addTopLevelView($.__views.__alloyId16088);
    $.__views.__alloyId16089 = Ti.UI.createView({
        id: "__alloyId16089"
    });
    $.__views.__alloyId16088.add($.__views.__alloyId16089);
    $.__views.__alloyId16090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16090"
    });
    $.__views.__alloyId16089.add($.__views.__alloyId16090);
    $.__views.__alloyId16091 = Ti.UI.createView({
        id: "__alloyId16091"
    });
    $.__views.__alloyId16091 && $.addTopLevelView($.__views.__alloyId16091);
    $.__views.__alloyId16092 = Ti.UI.createView({
        id: "__alloyId16092"
    });
    $.__views.__alloyId16091.add($.__views.__alloyId16092);
    $.__views.__alloyId16093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16093"
    });
    $.__views.__alloyId16092.add($.__views.__alloyId16093);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;