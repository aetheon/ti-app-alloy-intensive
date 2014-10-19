function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_342";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_342 = Ti.UI.createView({
        id: "widget_342"
    });
    $.__views.widget_342 && $.addTopLevelView($.__views.widget_342);
    $.__views.__alloyId7072 = Ti.UI.createView({
        id: "__alloyId7072"
    });
    $.__views.widget_342.add($.__views.__alloyId7072);
    $.__views.__alloyId7073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7073"
    });
    $.__views.__alloyId7072.add($.__views.__alloyId7073);
    $.__views.__alloyId7074 = Ti.UI.createView({
        id: "__alloyId7074"
    });
    $.__views.__alloyId7074 && $.addTopLevelView($.__views.__alloyId7074);
    $.__views.__alloyId7075 = Ti.UI.createView({
        id: "__alloyId7075"
    });
    $.__views.__alloyId7074.add($.__views.__alloyId7075);
    $.__views.__alloyId7076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7076"
    });
    $.__views.__alloyId7075.add($.__views.__alloyId7076);
    $.__views.__alloyId7077 = Ti.UI.createView({
        id: "__alloyId7077"
    });
    $.__views.__alloyId7077 && $.addTopLevelView($.__views.__alloyId7077);
    $.__views.__alloyId7078 = Ti.UI.createView({
        id: "__alloyId7078"
    });
    $.__views.__alloyId7077.add($.__views.__alloyId7078);
    $.__views.__alloyId7079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7079"
    });
    $.__views.__alloyId7078.add($.__views.__alloyId7079);
    $.__views.__alloyId7080 = Ti.UI.createView({
        id: "__alloyId7080"
    });
    $.__views.__alloyId7080 && $.addTopLevelView($.__views.__alloyId7080);
    $.__views.__alloyId7081 = Ti.UI.createView({
        id: "__alloyId7081"
    });
    $.__views.__alloyId7080.add($.__views.__alloyId7081);
    $.__views.__alloyId7082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7082"
    });
    $.__views.__alloyId7081.add($.__views.__alloyId7082);
    $.__views.__alloyId7083 = Ti.UI.createView({
        id: "__alloyId7083"
    });
    $.__views.__alloyId7083 && $.addTopLevelView($.__views.__alloyId7083);
    $.__views.__alloyId7084 = Ti.UI.createView({
        id: "__alloyId7084"
    });
    $.__views.__alloyId7083.add($.__views.__alloyId7084);
    $.__views.__alloyId7085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7085"
    });
    $.__views.__alloyId7084.add($.__views.__alloyId7085);
    $.__views.__alloyId7086 = Ti.UI.createView({
        id: "__alloyId7086"
    });
    $.__views.__alloyId7086 && $.addTopLevelView($.__views.__alloyId7086);
    $.__views.__alloyId7087 = Ti.UI.createView({
        id: "__alloyId7087"
    });
    $.__views.__alloyId7086.add($.__views.__alloyId7087);
    $.__views.__alloyId7088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7088"
    });
    $.__views.__alloyId7087.add($.__views.__alloyId7088);
    $.__views.__alloyId7089 = Ti.UI.createView({
        id: "__alloyId7089"
    });
    $.__views.__alloyId7089 && $.addTopLevelView($.__views.__alloyId7089);
    $.__views.__alloyId7090 = Ti.UI.createView({
        id: "__alloyId7090"
    });
    $.__views.__alloyId7089.add($.__views.__alloyId7090);
    $.__views.__alloyId7091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7091"
    });
    $.__views.__alloyId7090.add($.__views.__alloyId7091);
    $.__views.__alloyId7092 = Ti.UI.createView({
        id: "__alloyId7092"
    });
    $.__views.__alloyId7092 && $.addTopLevelView($.__views.__alloyId7092);
    $.__views.__alloyId7093 = Ti.UI.createView({
        id: "__alloyId7093"
    });
    $.__views.__alloyId7092.add($.__views.__alloyId7093);
    $.__views.__alloyId7094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7094"
    });
    $.__views.__alloyId7093.add($.__views.__alloyId7094);
    $.__views.__alloyId7095 = Ti.UI.createView({
        id: "__alloyId7095"
    });
    $.__views.__alloyId7095 && $.addTopLevelView($.__views.__alloyId7095);
    $.__views.__alloyId7096 = Ti.UI.createView({
        id: "__alloyId7096"
    });
    $.__views.__alloyId7095.add($.__views.__alloyId7096);
    $.__views.__alloyId7097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7097"
    });
    $.__views.__alloyId7096.add($.__views.__alloyId7097);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;