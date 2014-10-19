function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_682";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_682 = Ti.UI.createView({
        id: "widget_682"
    });
    $.__views.widget_682 && $.addTopLevelView($.__views.widget_682);
    $.__views.__alloyId16874 = Ti.UI.createView({
        id: "__alloyId16874"
    });
    $.__views.widget_682.add($.__views.__alloyId16874);
    $.__views.__alloyId16875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16875"
    });
    $.__views.__alloyId16874.add($.__views.__alloyId16875);
    $.__views.__alloyId16876 = Ti.UI.createView({
        id: "__alloyId16876"
    });
    $.__views.__alloyId16876 && $.addTopLevelView($.__views.__alloyId16876);
    $.__views.__alloyId16877 = Ti.UI.createView({
        id: "__alloyId16877"
    });
    $.__views.__alloyId16876.add($.__views.__alloyId16877);
    $.__views.__alloyId16878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16878"
    });
    $.__views.__alloyId16877.add($.__views.__alloyId16878);
    $.__views.__alloyId16879 = Ti.UI.createView({
        id: "__alloyId16879"
    });
    $.__views.__alloyId16879 && $.addTopLevelView($.__views.__alloyId16879);
    $.__views.__alloyId16880 = Ti.UI.createView({
        id: "__alloyId16880"
    });
    $.__views.__alloyId16879.add($.__views.__alloyId16880);
    $.__views.__alloyId16881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16881"
    });
    $.__views.__alloyId16880.add($.__views.__alloyId16881);
    $.__views.__alloyId16882 = Ti.UI.createView({
        id: "__alloyId16882"
    });
    $.__views.__alloyId16882 && $.addTopLevelView($.__views.__alloyId16882);
    $.__views.__alloyId16883 = Ti.UI.createView({
        id: "__alloyId16883"
    });
    $.__views.__alloyId16882.add($.__views.__alloyId16883);
    $.__views.__alloyId16884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16884"
    });
    $.__views.__alloyId16883.add($.__views.__alloyId16884);
    $.__views.__alloyId16885 = Ti.UI.createView({
        id: "__alloyId16885"
    });
    $.__views.__alloyId16885 && $.addTopLevelView($.__views.__alloyId16885);
    $.__views.__alloyId16886 = Ti.UI.createView({
        id: "__alloyId16886"
    });
    $.__views.__alloyId16885.add($.__views.__alloyId16886);
    $.__views.__alloyId16887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16887"
    });
    $.__views.__alloyId16886.add($.__views.__alloyId16887);
    $.__views.__alloyId16888 = Ti.UI.createView({
        id: "__alloyId16888"
    });
    $.__views.__alloyId16888 && $.addTopLevelView($.__views.__alloyId16888);
    $.__views.__alloyId16889 = Ti.UI.createView({
        id: "__alloyId16889"
    });
    $.__views.__alloyId16888.add($.__views.__alloyId16889);
    $.__views.__alloyId16890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16890"
    });
    $.__views.__alloyId16889.add($.__views.__alloyId16890);
    $.__views.__alloyId16891 = Ti.UI.createView({
        id: "__alloyId16891"
    });
    $.__views.__alloyId16891 && $.addTopLevelView($.__views.__alloyId16891);
    $.__views.__alloyId16892 = Ti.UI.createView({
        id: "__alloyId16892"
    });
    $.__views.__alloyId16891.add($.__views.__alloyId16892);
    $.__views.__alloyId16893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16893"
    });
    $.__views.__alloyId16892.add($.__views.__alloyId16893);
    $.__views.__alloyId16894 = Ti.UI.createView({
        id: "__alloyId16894"
    });
    $.__views.__alloyId16894 && $.addTopLevelView($.__views.__alloyId16894);
    $.__views.__alloyId16895 = Ti.UI.createView({
        id: "__alloyId16895"
    });
    $.__views.__alloyId16894.add($.__views.__alloyId16895);
    $.__views.__alloyId16896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16896"
    });
    $.__views.__alloyId16895.add($.__views.__alloyId16896);
    $.__views.__alloyId16897 = Ti.UI.createView({
        id: "__alloyId16897"
    });
    $.__views.__alloyId16897 && $.addTopLevelView($.__views.__alloyId16897);
    $.__views.__alloyId16898 = Ti.UI.createView({
        id: "__alloyId16898"
    });
    $.__views.__alloyId16897.add($.__views.__alloyId16898);
    $.__views.__alloyId16899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16899"
    });
    $.__views.__alloyId16898.add($.__views.__alloyId16899);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;