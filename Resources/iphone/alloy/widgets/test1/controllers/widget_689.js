function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_689";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_689 = Ti.UI.createView({
        id: "widget_689"
    });
    $.__views.widget_689 && $.addTopLevelView($.__views.widget_689);
    $.__views.__alloyId17056 = Ti.UI.createView({
        id: "__alloyId17056"
    });
    $.__views.widget_689.add($.__views.__alloyId17056);
    $.__views.__alloyId17057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17057"
    });
    $.__views.__alloyId17056.add($.__views.__alloyId17057);
    $.__views.__alloyId17058 = Ti.UI.createView({
        id: "__alloyId17058"
    });
    $.__views.__alloyId17058 && $.addTopLevelView($.__views.__alloyId17058);
    $.__views.__alloyId17059 = Ti.UI.createView({
        id: "__alloyId17059"
    });
    $.__views.__alloyId17058.add($.__views.__alloyId17059);
    $.__views.__alloyId17060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17060"
    });
    $.__views.__alloyId17059.add($.__views.__alloyId17060);
    $.__views.__alloyId17061 = Ti.UI.createView({
        id: "__alloyId17061"
    });
    $.__views.__alloyId17061 && $.addTopLevelView($.__views.__alloyId17061);
    $.__views.__alloyId17062 = Ti.UI.createView({
        id: "__alloyId17062"
    });
    $.__views.__alloyId17061.add($.__views.__alloyId17062);
    $.__views.__alloyId17063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17063"
    });
    $.__views.__alloyId17062.add($.__views.__alloyId17063);
    $.__views.__alloyId17064 = Ti.UI.createView({
        id: "__alloyId17064"
    });
    $.__views.__alloyId17064 && $.addTopLevelView($.__views.__alloyId17064);
    $.__views.__alloyId17065 = Ti.UI.createView({
        id: "__alloyId17065"
    });
    $.__views.__alloyId17064.add($.__views.__alloyId17065);
    $.__views.__alloyId17066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17066"
    });
    $.__views.__alloyId17065.add($.__views.__alloyId17066);
    $.__views.__alloyId17067 = Ti.UI.createView({
        id: "__alloyId17067"
    });
    $.__views.__alloyId17067 && $.addTopLevelView($.__views.__alloyId17067);
    $.__views.__alloyId17068 = Ti.UI.createView({
        id: "__alloyId17068"
    });
    $.__views.__alloyId17067.add($.__views.__alloyId17068);
    $.__views.__alloyId17069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17069"
    });
    $.__views.__alloyId17068.add($.__views.__alloyId17069);
    $.__views.__alloyId17070 = Ti.UI.createView({
        id: "__alloyId17070"
    });
    $.__views.__alloyId17070 && $.addTopLevelView($.__views.__alloyId17070);
    $.__views.__alloyId17071 = Ti.UI.createView({
        id: "__alloyId17071"
    });
    $.__views.__alloyId17070.add($.__views.__alloyId17071);
    $.__views.__alloyId17072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17072"
    });
    $.__views.__alloyId17071.add($.__views.__alloyId17072);
    $.__views.__alloyId17073 = Ti.UI.createView({
        id: "__alloyId17073"
    });
    $.__views.__alloyId17073 && $.addTopLevelView($.__views.__alloyId17073);
    $.__views.__alloyId17074 = Ti.UI.createView({
        id: "__alloyId17074"
    });
    $.__views.__alloyId17073.add($.__views.__alloyId17074);
    $.__views.__alloyId17075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17075"
    });
    $.__views.__alloyId17074.add($.__views.__alloyId17075);
    $.__views.__alloyId17076 = Ti.UI.createView({
        id: "__alloyId17076"
    });
    $.__views.__alloyId17076 && $.addTopLevelView($.__views.__alloyId17076);
    $.__views.__alloyId17077 = Ti.UI.createView({
        id: "__alloyId17077"
    });
    $.__views.__alloyId17076.add($.__views.__alloyId17077);
    $.__views.__alloyId17078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17078"
    });
    $.__views.__alloyId17077.add($.__views.__alloyId17078);
    $.__views.__alloyId17079 = Ti.UI.createView({
        id: "__alloyId17079"
    });
    $.__views.__alloyId17079 && $.addTopLevelView($.__views.__alloyId17079);
    $.__views.__alloyId17080 = Ti.UI.createView({
        id: "__alloyId17080"
    });
    $.__views.__alloyId17079.add($.__views.__alloyId17080);
    $.__views.__alloyId17081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17081"
    });
    $.__views.__alloyId17080.add($.__views.__alloyId17081);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;