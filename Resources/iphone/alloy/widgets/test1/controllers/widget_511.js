function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_511";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_511 = Ti.UI.createView({
        id: "widget_511"
    });
    $.__views.widget_511 && $.addTopLevelView($.__views.widget_511);
    $.__views.__alloyId11960 = Ti.UI.createView({
        id: "__alloyId11960"
    });
    $.__views.widget_511.add($.__views.__alloyId11960);
    $.__views.__alloyId11961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11961"
    });
    $.__views.__alloyId11960.add($.__views.__alloyId11961);
    $.__views.__alloyId11962 = Ti.UI.createView({
        id: "__alloyId11962"
    });
    $.__views.__alloyId11962 && $.addTopLevelView($.__views.__alloyId11962);
    $.__views.__alloyId11963 = Ti.UI.createView({
        id: "__alloyId11963"
    });
    $.__views.__alloyId11962.add($.__views.__alloyId11963);
    $.__views.__alloyId11964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11964"
    });
    $.__views.__alloyId11963.add($.__views.__alloyId11964);
    $.__views.__alloyId11965 = Ti.UI.createView({
        id: "__alloyId11965"
    });
    $.__views.__alloyId11965 && $.addTopLevelView($.__views.__alloyId11965);
    $.__views.__alloyId11966 = Ti.UI.createView({
        id: "__alloyId11966"
    });
    $.__views.__alloyId11965.add($.__views.__alloyId11966);
    $.__views.__alloyId11967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11967"
    });
    $.__views.__alloyId11966.add($.__views.__alloyId11967);
    $.__views.__alloyId11968 = Ti.UI.createView({
        id: "__alloyId11968"
    });
    $.__views.__alloyId11968 && $.addTopLevelView($.__views.__alloyId11968);
    $.__views.__alloyId11969 = Ti.UI.createView({
        id: "__alloyId11969"
    });
    $.__views.__alloyId11968.add($.__views.__alloyId11969);
    $.__views.__alloyId11970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11970"
    });
    $.__views.__alloyId11969.add($.__views.__alloyId11970);
    $.__views.__alloyId11971 = Ti.UI.createView({
        id: "__alloyId11971"
    });
    $.__views.__alloyId11971 && $.addTopLevelView($.__views.__alloyId11971);
    $.__views.__alloyId11972 = Ti.UI.createView({
        id: "__alloyId11972"
    });
    $.__views.__alloyId11971.add($.__views.__alloyId11972);
    $.__views.__alloyId11973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11973"
    });
    $.__views.__alloyId11972.add($.__views.__alloyId11973);
    $.__views.__alloyId11974 = Ti.UI.createView({
        id: "__alloyId11974"
    });
    $.__views.__alloyId11974 && $.addTopLevelView($.__views.__alloyId11974);
    $.__views.__alloyId11975 = Ti.UI.createView({
        id: "__alloyId11975"
    });
    $.__views.__alloyId11974.add($.__views.__alloyId11975);
    $.__views.__alloyId11976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11976"
    });
    $.__views.__alloyId11975.add($.__views.__alloyId11976);
    $.__views.__alloyId11977 = Ti.UI.createView({
        id: "__alloyId11977"
    });
    $.__views.__alloyId11977 && $.addTopLevelView($.__views.__alloyId11977);
    $.__views.__alloyId11978 = Ti.UI.createView({
        id: "__alloyId11978"
    });
    $.__views.__alloyId11977.add($.__views.__alloyId11978);
    $.__views.__alloyId11979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11979"
    });
    $.__views.__alloyId11978.add($.__views.__alloyId11979);
    $.__views.__alloyId11980 = Ti.UI.createView({
        id: "__alloyId11980"
    });
    $.__views.__alloyId11980 && $.addTopLevelView($.__views.__alloyId11980);
    $.__views.__alloyId11981 = Ti.UI.createView({
        id: "__alloyId11981"
    });
    $.__views.__alloyId11980.add($.__views.__alloyId11981);
    $.__views.__alloyId11982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11982"
    });
    $.__views.__alloyId11981.add($.__views.__alloyId11982);
    $.__views.__alloyId11983 = Ti.UI.createView({
        id: "__alloyId11983"
    });
    $.__views.__alloyId11983 && $.addTopLevelView($.__views.__alloyId11983);
    $.__views.__alloyId11984 = Ti.UI.createView({
        id: "__alloyId11984"
    });
    $.__views.__alloyId11983.add($.__views.__alloyId11984);
    $.__views.__alloyId11985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11985"
    });
    $.__views.__alloyId11984.add($.__views.__alloyId11985);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;