function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_166";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_166 = Ti.UI.createView({
        id: "widget_166"
    });
    $.__views.widget_166 && $.addTopLevelView($.__views.widget_166);
    $.__views.__alloyId1976 = Ti.UI.createView({
        id: "__alloyId1976"
    });
    $.__views.widget_166.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1977"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createView({
        id: "__alloyId1978"
    });
    $.__views.__alloyId1978 && $.addTopLevelView($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createView({
        id: "__alloyId1979"
    });
    $.__views.__alloyId1978.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createView({
        id: "__alloyId1981"
    });
    $.__views.__alloyId1981 && $.addTopLevelView($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createView({
        id: "__alloyId1982"
    });
    $.__views.__alloyId1981.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1983"
    });
    $.__views.__alloyId1982.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createView({
        id: "__alloyId1984"
    });
    $.__views.__alloyId1984 && $.addTopLevelView($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createView({
        id: "__alloyId1985"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1986"
    });
    $.__views.__alloyId1985.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createView({
        id: "__alloyId1987"
    });
    $.__views.__alloyId1987 && $.addTopLevelView($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createView({
        id: "__alloyId1988"
    });
    $.__views.__alloyId1987.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createView({
        id: "__alloyId1990"
    });
    $.__views.__alloyId1990 && $.addTopLevelView($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        id: "__alloyId1991"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
        id: "__alloyId1993"
    });
    $.__views.__alloyId1993 && $.addTopLevelView($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createView({
        id: "__alloyId1996"
    });
    $.__views.__alloyId1996 && $.addTopLevelView($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createView({
        id: "__alloyId1997"
    });
    $.__views.__alloyId1996.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createView({
        id: "__alloyId1999"
    });
    $.__views.__alloyId1999 && $.addTopLevelView($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createView({
        id: "__alloyId2000"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2001"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2001);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;