function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_894";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_894 = Ti.UI.createView({
        id: "widget_894"
    });
    $.__views.widget_894 && $.addTopLevelView($.__views.widget_894);
    $.__views.__alloyId22984 = Ti.UI.createView({
        id: "__alloyId22984"
    });
    $.__views.widget_894.add($.__views.__alloyId22984);
    $.__views.__alloyId22985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22985"
    });
    $.__views.__alloyId22984.add($.__views.__alloyId22985);
    $.__views.__alloyId22986 = Ti.UI.createView({
        id: "__alloyId22986"
    });
    $.__views.__alloyId22986 && $.addTopLevelView($.__views.__alloyId22986);
    $.__views.__alloyId22987 = Ti.UI.createView({
        id: "__alloyId22987"
    });
    $.__views.__alloyId22986.add($.__views.__alloyId22987);
    $.__views.__alloyId22988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22988"
    });
    $.__views.__alloyId22987.add($.__views.__alloyId22988);
    $.__views.__alloyId22989 = Ti.UI.createView({
        id: "__alloyId22989"
    });
    $.__views.__alloyId22989 && $.addTopLevelView($.__views.__alloyId22989);
    $.__views.__alloyId22990 = Ti.UI.createView({
        id: "__alloyId22990"
    });
    $.__views.__alloyId22989.add($.__views.__alloyId22990);
    $.__views.__alloyId22991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22991"
    });
    $.__views.__alloyId22990.add($.__views.__alloyId22991);
    $.__views.__alloyId22992 = Ti.UI.createView({
        id: "__alloyId22992"
    });
    $.__views.__alloyId22992 && $.addTopLevelView($.__views.__alloyId22992);
    $.__views.__alloyId22993 = Ti.UI.createView({
        id: "__alloyId22993"
    });
    $.__views.__alloyId22992.add($.__views.__alloyId22993);
    $.__views.__alloyId22994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22994"
    });
    $.__views.__alloyId22993.add($.__views.__alloyId22994);
    $.__views.__alloyId22995 = Ti.UI.createView({
        id: "__alloyId22995"
    });
    $.__views.__alloyId22995 && $.addTopLevelView($.__views.__alloyId22995);
    $.__views.__alloyId22996 = Ti.UI.createView({
        id: "__alloyId22996"
    });
    $.__views.__alloyId22995.add($.__views.__alloyId22996);
    $.__views.__alloyId22997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22997"
    });
    $.__views.__alloyId22996.add($.__views.__alloyId22997);
    $.__views.__alloyId22998 = Ti.UI.createView({
        id: "__alloyId22998"
    });
    $.__views.__alloyId22998 && $.addTopLevelView($.__views.__alloyId22998);
    $.__views.__alloyId22999 = Ti.UI.createView({
        id: "__alloyId22999"
    });
    $.__views.__alloyId22998.add($.__views.__alloyId22999);
    $.__views.__alloyId23000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23000"
    });
    $.__views.__alloyId22999.add($.__views.__alloyId23000);
    $.__views.__alloyId23001 = Ti.UI.createView({
        id: "__alloyId23001"
    });
    $.__views.__alloyId23001 && $.addTopLevelView($.__views.__alloyId23001);
    $.__views.__alloyId23002 = Ti.UI.createView({
        id: "__alloyId23002"
    });
    $.__views.__alloyId23001.add($.__views.__alloyId23002);
    $.__views.__alloyId23003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23003"
    });
    $.__views.__alloyId23002.add($.__views.__alloyId23003);
    $.__views.__alloyId23004 = Ti.UI.createView({
        id: "__alloyId23004"
    });
    $.__views.__alloyId23004 && $.addTopLevelView($.__views.__alloyId23004);
    $.__views.__alloyId23005 = Ti.UI.createView({
        id: "__alloyId23005"
    });
    $.__views.__alloyId23004.add($.__views.__alloyId23005);
    $.__views.__alloyId23006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23006"
    });
    $.__views.__alloyId23005.add($.__views.__alloyId23006);
    $.__views.__alloyId23007 = Ti.UI.createView({
        id: "__alloyId23007"
    });
    $.__views.__alloyId23007 && $.addTopLevelView($.__views.__alloyId23007);
    $.__views.__alloyId23008 = Ti.UI.createView({
        id: "__alloyId23008"
    });
    $.__views.__alloyId23007.add($.__views.__alloyId23008);
    $.__views.__alloyId23009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23009"
    });
    $.__views.__alloyId23008.add($.__views.__alloyId23009);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;