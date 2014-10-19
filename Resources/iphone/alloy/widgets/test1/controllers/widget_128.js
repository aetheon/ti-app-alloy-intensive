function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_128";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_128 = Ti.UI.createView({
        id: "widget_128"
    });
    $.__views.widget_128 && $.addTopLevelView($.__views.widget_128);
    $.__views.__alloyId884 = Ti.UI.createView({
        id: "__alloyId884"
    });
    $.__views.widget_128.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        id: "__alloyId886"
    });
    $.__views.__alloyId886 && $.addTopLevelView($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId888"
    });
    $.__views.__alloyId887.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        id: "__alloyId889"
    });
    $.__views.__alloyId889 && $.addTopLevelView($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createView({
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId891"
    });
    $.__views.__alloyId890.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        id: "__alloyId892"
    });
    $.__views.__alloyId892 && $.addTopLevelView($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createView({
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId894"
    });
    $.__views.__alloyId893.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        id: "__alloyId895"
    });
    $.__views.__alloyId895 && $.addTopLevelView($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        id: "__alloyId896"
    });
    $.__views.__alloyId895.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId897"
    });
    $.__views.__alloyId896.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        id: "__alloyId898"
    });
    $.__views.__alloyId898 && $.addTopLevelView($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createView({
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId900"
    });
    $.__views.__alloyId899.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createView({
        id: "__alloyId901"
    });
    $.__views.__alloyId901 && $.addTopLevelView($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createView({
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId903"
    });
    $.__views.__alloyId902.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createView({
        id: "__alloyId904"
    });
    $.__views.__alloyId904 && $.addTopLevelView($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        id: "__alloyId907"
    });
    $.__views.__alloyId907 && $.addTopLevelView($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;