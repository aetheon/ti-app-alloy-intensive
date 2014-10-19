function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_408";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_408 = Ti.UI.createView({
        id: "widget_408"
    });
    $.__views.widget_408 && $.addTopLevelView($.__views.widget_408);
    $.__views.__alloyId8970 = Ti.UI.createView({
        id: "__alloyId8970"
    });
    $.__views.widget_408.add($.__views.__alloyId8970);
    $.__views.__alloyId8971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8971"
    });
    $.__views.__alloyId8970.add($.__views.__alloyId8971);
    $.__views.__alloyId8972 = Ti.UI.createView({
        id: "__alloyId8972"
    });
    $.__views.__alloyId8972 && $.addTopLevelView($.__views.__alloyId8972);
    $.__views.__alloyId8973 = Ti.UI.createView({
        id: "__alloyId8973"
    });
    $.__views.__alloyId8972.add($.__views.__alloyId8973);
    $.__views.__alloyId8974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8974"
    });
    $.__views.__alloyId8973.add($.__views.__alloyId8974);
    $.__views.__alloyId8975 = Ti.UI.createView({
        id: "__alloyId8975"
    });
    $.__views.__alloyId8975 && $.addTopLevelView($.__views.__alloyId8975);
    $.__views.__alloyId8976 = Ti.UI.createView({
        id: "__alloyId8976"
    });
    $.__views.__alloyId8975.add($.__views.__alloyId8976);
    $.__views.__alloyId8977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8977"
    });
    $.__views.__alloyId8976.add($.__views.__alloyId8977);
    $.__views.__alloyId8978 = Ti.UI.createView({
        id: "__alloyId8978"
    });
    $.__views.__alloyId8978 && $.addTopLevelView($.__views.__alloyId8978);
    $.__views.__alloyId8979 = Ti.UI.createView({
        id: "__alloyId8979"
    });
    $.__views.__alloyId8978.add($.__views.__alloyId8979);
    $.__views.__alloyId8980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8980"
    });
    $.__views.__alloyId8979.add($.__views.__alloyId8980);
    $.__views.__alloyId8981 = Ti.UI.createView({
        id: "__alloyId8981"
    });
    $.__views.__alloyId8981 && $.addTopLevelView($.__views.__alloyId8981);
    $.__views.__alloyId8982 = Ti.UI.createView({
        id: "__alloyId8982"
    });
    $.__views.__alloyId8981.add($.__views.__alloyId8982);
    $.__views.__alloyId8983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8983"
    });
    $.__views.__alloyId8982.add($.__views.__alloyId8983);
    $.__views.__alloyId8984 = Ti.UI.createView({
        id: "__alloyId8984"
    });
    $.__views.__alloyId8984 && $.addTopLevelView($.__views.__alloyId8984);
    $.__views.__alloyId8985 = Ti.UI.createView({
        id: "__alloyId8985"
    });
    $.__views.__alloyId8984.add($.__views.__alloyId8985);
    $.__views.__alloyId8986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8986"
    });
    $.__views.__alloyId8985.add($.__views.__alloyId8986);
    $.__views.__alloyId8987 = Ti.UI.createView({
        id: "__alloyId8987"
    });
    $.__views.__alloyId8987 && $.addTopLevelView($.__views.__alloyId8987);
    $.__views.__alloyId8988 = Ti.UI.createView({
        id: "__alloyId8988"
    });
    $.__views.__alloyId8987.add($.__views.__alloyId8988);
    $.__views.__alloyId8989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8989"
    });
    $.__views.__alloyId8988.add($.__views.__alloyId8989);
    $.__views.__alloyId8990 = Ti.UI.createView({
        id: "__alloyId8990"
    });
    $.__views.__alloyId8990 && $.addTopLevelView($.__views.__alloyId8990);
    $.__views.__alloyId8991 = Ti.UI.createView({
        id: "__alloyId8991"
    });
    $.__views.__alloyId8990.add($.__views.__alloyId8991);
    $.__views.__alloyId8992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8992"
    });
    $.__views.__alloyId8991.add($.__views.__alloyId8992);
    $.__views.__alloyId8993 = Ti.UI.createView({
        id: "__alloyId8993"
    });
    $.__views.__alloyId8993 && $.addTopLevelView($.__views.__alloyId8993);
    $.__views.__alloyId8994 = Ti.UI.createView({
        id: "__alloyId8994"
    });
    $.__views.__alloyId8993.add($.__views.__alloyId8994);
    $.__views.__alloyId8995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8995"
    });
    $.__views.__alloyId8994.add($.__views.__alloyId8995);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;