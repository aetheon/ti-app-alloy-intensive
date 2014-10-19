function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_539";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_539 = Ti.UI.createView({
        id: "widget_539"
    });
    $.__views.widget_539 && $.addTopLevelView($.__views.widget_539);
    $.__views.__alloyId12740 = Ti.UI.createView({
        id: "__alloyId12740"
    });
    $.__views.widget_539.add($.__views.__alloyId12740);
    $.__views.__alloyId12741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12741"
    });
    $.__views.__alloyId12740.add($.__views.__alloyId12741);
    $.__views.__alloyId12742 = Ti.UI.createView({
        id: "__alloyId12742"
    });
    $.__views.__alloyId12742 && $.addTopLevelView($.__views.__alloyId12742);
    $.__views.__alloyId12743 = Ti.UI.createView({
        id: "__alloyId12743"
    });
    $.__views.__alloyId12742.add($.__views.__alloyId12743);
    $.__views.__alloyId12744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12744"
    });
    $.__views.__alloyId12743.add($.__views.__alloyId12744);
    $.__views.__alloyId12745 = Ti.UI.createView({
        id: "__alloyId12745"
    });
    $.__views.__alloyId12745 && $.addTopLevelView($.__views.__alloyId12745);
    $.__views.__alloyId12746 = Ti.UI.createView({
        id: "__alloyId12746"
    });
    $.__views.__alloyId12745.add($.__views.__alloyId12746);
    $.__views.__alloyId12747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12747"
    });
    $.__views.__alloyId12746.add($.__views.__alloyId12747);
    $.__views.__alloyId12748 = Ti.UI.createView({
        id: "__alloyId12748"
    });
    $.__views.__alloyId12748 && $.addTopLevelView($.__views.__alloyId12748);
    $.__views.__alloyId12749 = Ti.UI.createView({
        id: "__alloyId12749"
    });
    $.__views.__alloyId12748.add($.__views.__alloyId12749);
    $.__views.__alloyId12750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12750"
    });
    $.__views.__alloyId12749.add($.__views.__alloyId12750);
    $.__views.__alloyId12751 = Ti.UI.createView({
        id: "__alloyId12751"
    });
    $.__views.__alloyId12751 && $.addTopLevelView($.__views.__alloyId12751);
    $.__views.__alloyId12752 = Ti.UI.createView({
        id: "__alloyId12752"
    });
    $.__views.__alloyId12751.add($.__views.__alloyId12752);
    $.__views.__alloyId12753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12753"
    });
    $.__views.__alloyId12752.add($.__views.__alloyId12753);
    $.__views.__alloyId12754 = Ti.UI.createView({
        id: "__alloyId12754"
    });
    $.__views.__alloyId12754 && $.addTopLevelView($.__views.__alloyId12754);
    $.__views.__alloyId12755 = Ti.UI.createView({
        id: "__alloyId12755"
    });
    $.__views.__alloyId12754.add($.__views.__alloyId12755);
    $.__views.__alloyId12756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12756"
    });
    $.__views.__alloyId12755.add($.__views.__alloyId12756);
    $.__views.__alloyId12757 = Ti.UI.createView({
        id: "__alloyId12757"
    });
    $.__views.__alloyId12757 && $.addTopLevelView($.__views.__alloyId12757);
    $.__views.__alloyId12758 = Ti.UI.createView({
        id: "__alloyId12758"
    });
    $.__views.__alloyId12757.add($.__views.__alloyId12758);
    $.__views.__alloyId12759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12759"
    });
    $.__views.__alloyId12758.add($.__views.__alloyId12759);
    $.__views.__alloyId12760 = Ti.UI.createView({
        id: "__alloyId12760"
    });
    $.__views.__alloyId12760 && $.addTopLevelView($.__views.__alloyId12760);
    $.__views.__alloyId12761 = Ti.UI.createView({
        id: "__alloyId12761"
    });
    $.__views.__alloyId12760.add($.__views.__alloyId12761);
    $.__views.__alloyId12762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12762"
    });
    $.__views.__alloyId12761.add($.__views.__alloyId12762);
    $.__views.__alloyId12763 = Ti.UI.createView({
        id: "__alloyId12763"
    });
    $.__views.__alloyId12763 && $.addTopLevelView($.__views.__alloyId12763);
    $.__views.__alloyId12764 = Ti.UI.createView({
        id: "__alloyId12764"
    });
    $.__views.__alloyId12763.add($.__views.__alloyId12764);
    $.__views.__alloyId12765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12765"
    });
    $.__views.__alloyId12764.add($.__views.__alloyId12765);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;